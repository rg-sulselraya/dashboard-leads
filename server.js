const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { URL } = require("url");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const passwordIterations = 120_000;
const sessionTtlMs = Number(process.env.SESSION_TTL_MS || 8 * 60 * 60 * 1000);
const allowedOrigins = String(process.env.DASHBOARD_ORIGIN || "*")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const sessions = new Map();

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg"
};

function normalizePassword(value) {
  return String(value ?? "").normalize("NFKC").replace(/\s+/g, "").toLowerCase();
}

function loadCredentialConfig() {
  const rawConfig = process.env.DASHBOARD_CREDENTIALS_JSON;
  if (rawConfig) {
    try {
      return JSON.parse(rawConfig);
    } catch {
      throw new Error("DASHBOARD_CREDENTIALS_JSON harus berisi JSON yang valid.");
    }
  }

  const localPath = path.join(root, "credentials.local.js");
  if (fs.existsSync(localPath)) {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(localPath, "utf8"), sandbox, { filename: localPath });
    return sandbox.window.dashboardCredentials;
  }

  throw new Error("Credential server belum dikonfigurasi.");
}

const credentialConfig = loadCredentialConfig();
const passwordSalt = crypto.randomBytes(16);
const adminPassword = normalizePassword(credentialConfig?.adminPassword);
const branchPasswords = Object.entries(credentialConfig?.branchPasswords || {})
  .map(([password, branch]) => [normalizePassword(password), String(branch).trim()])
  .filter(([password, branch]) => password && branch);

if (!adminPassword || !branchPasswords.length) {
  throw new Error("Credential server harus memiliki adminPassword dan branchPasswords.");
}

function hashPassword(password) {
  return crypto.pbkdf2Sync(
    normalizePassword(password),
    passwordSalt,
    passwordIterations,
    32,
    "sha256"
  );
}

const adminPasswordHash = hashPassword(adminPassword);
const branchPasswordHashes = branchPasswords.map(([password, branch]) => ({
  hash: hashPassword(password),
  branch
}));

function buffersEqual(left, right) {
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function authenticate(password) {
  const candidate = hashPassword(password);
  if (buffersEqual(candidate, adminPasswordHash)) {
    return { accessMode: "admin", branch: "" };
  }
  const matchedBranch = branchPasswordHashes.find(({ hash }) => buffersEqual(candidate, hash));
  return matchedBranch ? { accessMode: "branch", branch: matchedBranch.branch } : null;
}

function createSession(access) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, {
    ...access,
    expiresAt: Date.now() + sessionTtlMs
  });
  return token;
}

function sessionFromRequest(request) {
  const header = String(request.headers.authorization || "");
  const token = header.match(/^Bearer\s+([A-Fa-f0-9]{32,})$/)?.[1];
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (session.expiresAt <= Date.now()) {
    sessions.delete(token);
    return null;
  }
  return { token, ...session };
}

function corsHeaders(request) {
  const origin = String(request.headers.origin || "");
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "600",
    Vary: "Origin"
  };
  if (!origin || allowedOrigins.includes("*")) {
    headers["Access-Control-Allow-Origin"] = "*";
  } else if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function send(response, status, body, contentType = "text/plain; charset=utf-8", request = null) {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    ...(request ? corsHeaders(request) : {})
  });
  response.end(body);
}

function sendJson(response, status, payload, request) {
  send(response, status, JSON.stringify(payload), "application/json; charset=utf-8", request);
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body, "utf8") > 16 * 1024) {
        reject(new Error("Request terlalu besar."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Request JSON tidak valid."));
      }
    });
    request.on("error", reject);
  });
}

function requireSession(request, response) {
  const session = sessionFromRequest(request);
  if (!session) {
    sendJson(response, 401, { ok: false, message: "Sesi login tidak valid atau sudah berakhir." }, request);
    return null;
  }
  return session;
}

function cleanExpiredSessions() {
  const now = Date.now();
  for (const [token, session] of sessions) {
    if (session.expiresAt <= now) sessions.delete(token);
  }
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = requestUrl.pathname;

  if (pathname.startsWith("/api/") && request.method === "OPTIONS") {
    if (!allowedOrigins.includes("*") && request.headers.origin && !allowedOrigins.includes(request.headers.origin)) {
      send(response, 403, "Origin tidak diizinkan.", "text/plain; charset=utf-8", request);
      return;
    }
    send(response, 204, "", "text/plain; charset=utf-8", request);
    return;
  }

  if (pathname === "/health") {
    sendJson(response, 200, { ok: true, service: "dashboard-fu" }, request);
    return;
  }

  if (pathname === "/api/login" && request.method === "POST") {
    try {
      const payload = await readJson(request);
      const access = authenticate(payload.password);
      if (!access) {
        sendJson(response, 401, { ok: false, message: "Password cabang tidak sesuai." }, request);
        return;
      }
      cleanExpiredSessions();
      const token = createSession(access);
      sendJson(response, 200, {
        ok: true,
        token,
        accessMode: access.accessMode,
        branch: access.branch,
        expiresAt: Date.now() + sessionTtlMs
      }, request);
    } catch (error) {
      sendJson(response, 400, { ok: false, message: error.message }, request);
    }
    return;
  }

  if (pathname === "/api/session" && request.method === "GET") {
    const session = requireSession(request, response);
    if (!session) return;
    sendJson(response, 200, {
      ok: true,
      accessMode: session.accessMode,
      branch: session.branch,
      expiresAt: session.expiresAt
    }, request);
    return;
  }

  if (pathname === "/api/logout" && request.method === "POST") {
    const session = sessionFromRequest(request);
    if (session) sessions.delete(session.token);
    sendJson(response, 200, { ok: true }, request);
    return;
  }

  if (pathname === "/api/fetch") {
    const session = requireSession(request, response);
    if (!session) return;
    const target = requestUrl.searchParams.get("url");
    let targetUrl;
    try {
      targetUrl = new URL(target);
    } catch {
      send(response, 400, "Invalid target URL", "text/plain; charset=utf-8", request);
      return;
    }
    if (targetUrl.protocol !== "https:" || targetUrl.hostname !== "docs.google.com") {
      send(response, 403, "Only docs.google.com is allowed", "text/plain; charset=utf-8", request);
      return;
    }
    try {
      const upstream = await fetch(targetUrl, { signal: AbortSignal.timeout(15_000) });
      const body = await upstream.text();
      send(response, upstream.status, body, upstream.headers.get("content-type") || "text/plain; charset=utf-8", request);
    } catch {
      send(response, 502, "Unable to fetch Google Sheet", "text/plain; charset=utf-8", request);
    }
    return;
  }

  if (pathname === "/credentials.js" || pathname === "/credentials.local.js") {
    send(response, 404, "Not found");
    return;
  }

  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(root, `.${requestedPath}`);
  if (!filePath.startsWith(root + path.sep)) {
    send(response, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      send(response, error.code === "ENOENT" ? 404 : 500, error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    send(response, 200, content, mimeTypes[path.extname(filePath)] || "application/octet-stream", request);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Dashboard FU berjalan di http://127.0.0.1:${port}`);
});

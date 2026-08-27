import { randomBytes, pbkdf2Sync } from "node:crypto";
import { writeFile } from "node:fs/promises";

const rawConfig = process.env.DASHBOARD_CREDENTIALS_JSON;
if (!rawConfig) {
  throw new Error("DASHBOARD_CREDENTIALS_JSON is not configured.");
}

let input;
try {
  input = JSON.parse(rawConfig);
} catch {
  throw new Error("DASHBOARD_CREDENTIALS_JSON must contain valid JSON.");
}

const adminPassword = String(input.adminPassword || "").trim().toLowerCase();
const branchPasswords = input.branchPasswords;
if (!adminPassword || !branchPasswords || typeof branchPasswords !== "object" || Array.isArray(branchPasswords)) {
  throw new Error("Credentials JSON must contain adminPassword and a branchPasswords object.");
}

const branches = Object.entries(branchPasswords)
  .map(([password, branch]) => [String(password).trim().toLowerCase(), String(branch).trim()])
  .filter(([password, branch]) => password && branch);
const uniquePasswords = new Set(branches.map(([password]) => password));
if (!branches.length || uniquePasswords.size !== branches.length) {
  throw new Error("branchPasswords must contain unique, non-empty passwords and branch names.");
}

const salt = randomBytes(16).toString("hex");
const iterations = 120_000;
const hashPassword = (password) => pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex");
const publicCredentials = {
  salt,
  iterations,
  adminPasswordHash: hashPassword(adminPassword),
  branchPasswordHashes: Object.fromEntries(
    branches.map(([password, branch]) => [hashPassword(password), branch])
  )
};

await writeFile(
  "credentials.js",
  `window.dashboardCredentials = ${JSON.stringify(publicCredentials, null, 2)};\n`,
  "utf8"
);

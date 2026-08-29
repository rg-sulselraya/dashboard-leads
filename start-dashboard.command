#!/bin/zsh
cd "$(dirname "$0")"
NODE_BIN="/Users/fa-13744/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
"$NODE_BIN" server.js &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null' EXIT INT TERM
sleep 1
open "http://127.0.0.1:${PORT:-4173}/"
wait "$SERVER_PID"

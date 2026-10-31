// Entry point (kept for existing start commands: `node server.js`).
// The server now lives in ./server; it needs Node.js 24 or newer for the built-in SQLite module with full-text search (FTS5).
const [major] = process.versions.node.split('.').map(Number);
if (major < 24) {
  console.error(`Node.js ${process.versions.node} is too old. Install Node.js 24 LTS or newer.`);
  process.exit(1);
}
import('./server/index.mjs').catch(err => { console.error(err); process.exit(1); });

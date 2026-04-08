const fs = require("fs");
const path = require("path");

function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, entry);
    if (fs.lstatSync(fullPath).isDirectory()) {
      removeDir(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(dirPath);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    const stat = fs.lstatSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const projectRoot = process.cwd();
const nextConfig = {
  output: 'export'
}

module.exports = nextConfig
const outDir = path.join(projectRoot, "out");

removeDir(outDir);
fs.mkdirSync(outDir, { recursive: true });

// Export static app HTML pages and metadata
copyDir(path.join(projectRoot, ".next/server/app"), outDir);

// Copy next static assets
copyDir(path.join(projectRoot, ".next/static"), path.join(outDir, "_next", "static"));

// Copy public assets
copyDir(path.join(projectRoot, "public"), outDir);

console.log("Static export ready in out/ (from .next/server/app + .next/static + public)");

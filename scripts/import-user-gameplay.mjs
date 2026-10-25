/** Copy user cheat screenshots → public/images. Run after freeing disk space. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(repoRoot, '..', '.cursor', 'projects', 'c-Users-DELL-7280-Documents-fifa-27', 'assets');
const importDir = path.join(repoRoot, '_import');
const gameplayDir = path.join(repoRoot, 'public/images/gameplay');
const blogDir = path.join(repoRoot, 'public/images/blog');

const SOURCE_ORDER = ['image-b7ed20bd', 'image-0b56f1a3', 'image-aaa62d4b', 'image-b708713d', 'image-96970eef', 'image-082be160'];

const altsSeed = JSON.parse(fs.readFileSync(path.join(repoRoot, 'scripts', 'gameplay-image-alts.json'), 'utf8'));
const GAMEPLAY_PRIMARY = altsSeed.gameplay.filter((e, i, a) => a.findIndex((x) => x.file === e.file) === i).slice(0, 6);
const GAMEPLAY_ALIASES = altsSeed.gameplay.filter((e) => !GAMEPLAY_PRIMARY.some((p) => p.file === e.file));
const BLOG_ONLY = ['how-to-use-fifa-27-hack-codes.png', 'fifa-27-pitch-overlay-setup.png', 'fifa-27-radar-hack-guide.png', 'fifa-27-rivals-hacks-guide.png', 'fifa-27-auto-green-guide.png', 'ea-anticheat-patch-day-checklist.png', 'ea-anticheat-fifa-27-guide.png', 'fifa-27-stream-proof-setup.png'];

function longPath(p) {
  const r = path.resolve(p);
  return r.startsWith('\\\\?\\') ? r : `\\\\?\\${r}`;
}
function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }

function resolveOrderedSources(allFiles) {
  const shortFiles = [];
  for (const needle of SOURCE_ORDER) {
    const match = allFiles.find((f) => f.includes(needle));
    if (!match) { console.warn('Missing', needle); continue; }
    const short = `shot-${String(shortFiles.length + 1).padStart(2, '0')}.png`;
    fs.copyFileSync(longPath(path.join(assetsDir, match)), path.join(importDir, short));
    shortFiles.push(path.join(importDir, short));
  }
  return shortFiles;
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src).rotate().resize({ width: 1600, withoutEnlargement: true }).png({ compressionLevel: 8 }).toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(repoRoot, dest));
}

ensureDir(importDir); ensureDir(gameplayDir); ensureDir(blogDir);
const allAssets = fs.readdirSync(longPath(assetsDir)).filter((f) => /\.(png|jpe?g)$/i.test(f));
const shortFiles = resolveOrderedSources(allAssets);
if (shortFiles.length < 6) process.exit(1);

const alts = [];
for (let i = 0; i < GAMEPLAY_PRIMARY.length; i++) {
  const { file, alt } = GAMEPLAY_PRIMARY[i];
  await writeResizedPng(shortFiles[i], path.join(gameplayDir, file));
  alts.push({ file, alt, srcIndex: i });
}
for (const entry of GAMEPLAY_ALIASES) {
  const srcIndex = entry.srcIndex ?? 0;
  await writeResizedPng(shortFiles[srcIndex], path.join(gameplayDir, entry.file));
  alts.push({ file: entry.file, alt: entry.alt, srcIndex });
}
for (let i = 0; i < BLOG_ONLY.length; i++) {
  await writeResizedPng(shortFiles[i % 6], path.join(blogDir, BLOG_ONLY[i]));
}
fs.writeFileSync(path.join(repoRoot, 'scripts', 'gameplay-image-alts.json'), JSON.stringify({ gameplay: alts, sourceCount: 6 }, null, 2));
console.log('Done. npm run optimize:images');

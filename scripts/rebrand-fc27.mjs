/**
 * Fortnite Cheats → EA FC 27 Hacks & Cheats (fifa27hacks.com)
 * Run from project root: node scripts/rebrand-fc27.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);

/** Ordered longest-first replacements. */
const REPLACEMENTS = [
  ['https://fortnite-cheats.com', 'https://fifa27hacks.com'],
  ['https://fortnitecheats.com', 'https://fifa27hacks.com'],
  ['fortnite-cheats.com', 'fifa27hacks.com'],
  ['fortnitecheats.com', 'fifa27hacks.com'],

  ['Fortnite Cheats & Hacks', 'EA FC 27 Hacks & Cheats'],
  ['Fortnite cheats & hacks', 'EA FC 27 hacks & cheats'],
  ['Fortnite Cheats', 'EA FC 27 Hacks & Cheats'],
  ['Fortnite cheats', 'EA FC 27 hacks'],
  ['fortnite cheats', 'EA FC 27 hacks'],
  ['Fortnite cheat', 'EA FC 27 hack'],
  ['fortnite cheat', 'EA FC 27 hack'],

  ['/products/fortnite-cheats', '/products/fifa-27-hacks'],
  ['products/fortnite-cheats', 'products/fifa-27-hacks'],
  ['%2Fproducts%2Ffortnite', '%2Fproducts%2Ffifa-27'],
  ['/products/fortnite', '/products/fifa-27'],

  ["checkoutPath('fortnite')", "checkoutPath('fifa27')"],
  ['checkoutPath("fortnite")', 'checkoutPath("fifa27")'],
  ["product: 'fortnite'", "product: 'fifa27'"],
  ['  fortnite:', '  fifa27:'],
  ['/go/fortnite/', '/go/fifa-27/'],
  ['/go/fortnite', '/go/fifa-27'],

  ['how-to-buy-fortnite-cheats-2026', 'how-to-buy-fifa-27-hacks-2026'],
  ['how-to-use-fortnite-cheat-codes', 'how-to-use-fifa-27-hack-codes'],
  ['fortnite-aimbot-combat-guide', 'fifa-27-auto-green-guide'],
  ['fortnite-console-commands-cheats', 'fifa-27-career-mode-hacks'],
  ['fortnite-cheat-codes-guide', 'fifa-27-hack-codes-guide'],
  ['fortnite-console-cheats-tips', 'fifa-27-hack-tips'],
  ['fortnite-cheats-features-guide', 'fifa-27-hacks-features-guide'],
  ['fortnite-hwid-spoofer-after-ban', 'fifa-27-hwid-spoofer-after-ban'],
  ['fortnite-external-cheat-guide', 'fifa-27-external-hack-guide'],
  ['fortnite-stream-proof-setup', 'fifa-27-stream-proof-setup'],
  ['fortnite-aimbot-ranked-guide', 'fifa-27-rivals-hacks-guide'],
  ['fortnite-skin-changer-guide', 'fifa-27-icon-unlocker-guide'],
  ['fortnite-elite-tier-guide', 'fifa-27-elite-tier-guide'],
  ['fortnite-esp-wallhack-setup', 'fifa-27-pitch-overlay-setup'],
  ['fortnite-radar-hack-guide', 'fifa-27-radar-hack-guide'],
  ['fortnite-lite-vs-pro', 'fifa-27-lite-vs-pro'],
  ['eac-bypass-fortnite-guide', 'ea-anticheat-fifa-27-guide'],
  ['eac-patch-day-checklist', 'ea-anticheat-patch-day-checklist'],
  ['fortnite-auto-aim', 'fifa-27-auto-green'],
  ['fortnite-aimbot-combat', 'fifa-27-perfect-shot'],
  ['fortnite-skin-changer', 'fifa-27-icon-unlocker'],
  ['fortnite-player-esp', 'fifa-27-player-overlay'],
  ['fortnite-esp-wallhack', 'fifa-27-pitch-overlay'],
  ['fortnite-radar-hack', 'fifa-27-mini-pitch-radar'],
  ['fortnite-loot-radar', 'fifa-27-fut-snipe-assist'],
  ['fortnite-cheats', 'fifa-27-hacks'],
  ['fortnite-', 'fifa-27-'],

  ['Easy Anti-Cheat', 'EA AntiCheat'],
  ['easy anti-cheat', 'EA AntiCheat'],
  ['Easy Anti Cheat', 'EA AntiCheat'],

  ['Battle Royale', 'Ultimate Team'],
  ['Zero Build', 'Career Mode'],
  ['Epic Games Launcher', 'EA App'],
  ['Epic Games', 'EA App'],
  ['Epic account', 'EA account'],

  ['Fortnite', 'EA FC 27'],
  ['fortnite', 'fifa-27'],

  ['fortnite-cheats-com', 'fifa27hacks'],
  ['TITLE_PREFIX = \'Fortnite Cheats\'', "TITLE_PREFIX = 'EA FC 27 Hacks & Cheats'"],

  // Fix double replacements / paths
  ['fifa-27-27-', 'fifa-27-'],
  ['EA FC 27 FC 27', 'EA FC 27'],
  ['/products/fifa-27-hacks-cheats', '/products/fifa-27-hacks'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function renameByPrefix(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (!name.includes('fortnite')) continue;
    const fromPath = path.join(dir, name);
    const dest = name.replace(/fortnite/g, 'fifa-27');
    const toPath = path.join(dir, dest);
    if (fromPath !== toPath && !fs.existsSync(toPath)) {
      fs.renameSync(fromPath, toPath);
      console.log('rename', path.relative(root, fromPath), '→', dest);
    }
  }
}

function renameProductDir() {
  const from = path.join(root, 'src', 'pages', 'products', 'fortnite-cheats');
  const to = path.join(root, 'src', 'pages', 'products', 'fifa-27-hacks');
  if (fs.existsSync(from) && !fs.existsSync(to)) {
    fs.renameSync(from, to);
    console.log('renamed product pages → fifa-27-hacks');
  }
}

renameProductDir();
renameByPrefix(path.join(root, 'public', 'images', 'gameplay'));
renameByPrefix(path.join(root, 'public', 'images', 'blog'));

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.endsWith(`${path.sep}rebrand-fc27.mjs`)) continue;
  if (file.endsWith(`${path.sep}rebrand-fortnite.mjs`)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);

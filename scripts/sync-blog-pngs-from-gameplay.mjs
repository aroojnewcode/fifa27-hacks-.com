/**
 * Copy EA FC 27 gameplay PNGs into public/images/blog/*.png for legacy URLs & optimize:images.
 * Run after: node scripts/install-fc27-gameplay-from-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
const blogDir = path.join(root, 'public', 'images', 'blog');

/** slug → gameplay filename (same as src/data/blog/blogImageAlt.ts) */
const SLUG_TO_GAMEPLAY = {
  'fifa-27-hack-codes-guide': 'fifa-27-pitch-overlay.png',
  'fifa-27-hack-tips': 'fifa-27-perfect-shot.png',
  'fifa-27-hacks-features-guide': 'fifa-27-player-overlay.png',
  'fifa-27-career-mode-hacks': 'fifa-27-mini-pitch-radar.png',
  'fifa-27-lite-vs-pro': 'fifa-27-auto-green.png',
  'fifa-27-elite-tier-guide': 'fifa-27-fut-snipe-assist.png',
  'fifa-27-icon-unlocker-guide': 'fifa-27-thermal-esp.png',
  'fifa-27-hwid-spoofer-after-ban': 'fifa-27-chams-esp.png',
  'how-to-buy-fifa-27-hacks-2026': 'fifa-27-build-fight-esp.png',
  'fifa-27-external-hack-guide': 'fifa-27-squad-esp.png',
  'how-to-use-fifa-27-hack-codes': 'fifa-27-pitch-overlay.png',
  'fifa-27-rivals-hacks-guide': 'fifa-27-perfect-shot.png',
  'fifa-27-pitch-overlay-setup': 'fifa-27-player-overlay.png',
  'fifa-27-radar-hack-guide': 'fifa-27-mini-pitch-radar.png',
  'ea-anticheat-patch-day-checklist': 'fifa-27-auto-green.png',
  'fifa-27-auto-green-guide': 'fifa-27-fut-snipe-assist.png',
  'ea-anticheat-fifa-27-guide': 'fifa-27-thermal-esp.png',
  'fifa-27-stream-proof-setup': 'fifa-27-chams-esp.png',
};

/** Legacy blog PNG basename per slug (historical filenames). */
const SLUG_TO_BLOG_FILE = {
  'fifa-27-hack-codes-guide': 'fifa-27-hack-codes-guide.png',
  'fifa-27-hack-tips': 'fifa-27-hack-tips.png',
  'how-to-use-fifa-27-hack-codes': 'how-to-use-fifa-27-hack-codes.png',
  'fifa-27-hacks-features-guide': 'fifa-27-hacks-features-guide.png',
  'fifa-27-career-mode-hacks': 'fifa-27-career-mode-hacks.png',
  'fifa-27-lite-vs-pro': 'fifa-27-lite-vs-pro.png',
  'fifa-27-elite-tier-guide': 'fifa-27-elite-tier-guide.png',
  'fifa-27-rivals-hacks-guide': 'fifa-27-rivals-hacks-guide.png',
  'fifa-27-pitch-overlay-setup': 'fifa-27-pitch-overlay-setup.png',
  'fifa-27-radar-hack-guide': 'fifa-27-radar-hack-guide.png',
  'fifa-27-icon-unlocker-guide': 'fifa-27-icon-unlocker-guide.png',
  'ea-anticheat-patch-day-checklist': 'ea-anticheat-patch-day-checklist.png',
  'fifa-27-hwid-spoofer-after-ban': 'fifa-27-hwid-spoofer-after-ban.png',
  'how-to-buy-fifa-27-hacks-2026': 'how-to-buy-fifa-27-hacks-2026.png',
  'fifa-27-auto-green-guide': 'fifa-27-auto-green-guide.png',
  'ea-anticheat-fifa-27-guide': 'ea-anticheat-fifa-27-guide.png',
  'fifa-27-external-hack-guide': 'fifa-27-external-hack-guide.png',
  'fifa-27-stream-proof-setup': 'fifa-27-stream-proof-setup.png',
};

fs.mkdirSync(blogDir, { recursive: true });

for (const [slug, gameplayFile] of Object.entries(SLUG_TO_GAMEPLAY)) {
  const blogFile = SLUG_TO_BLOG_FILE[slug] ?? `${slug}.png`;
  const from = path.join(gameplayDir, gameplayFile);
  const to = path.join(blogDir, blogFile);
  if (!fs.existsSync(from)) {
    console.error('Missing gameplay file:', from);
    process.exit(1);
  }
  fs.copyFileSync(from, to);
  console.log('blog', blogFile, '<-', gameplayFile);
}

console.log('Done. Run: npm run optimize:images');

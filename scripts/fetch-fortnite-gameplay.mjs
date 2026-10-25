/**
 * Replace Dota-era gameplay/blog PNGs with EA FC 27 screenshots.
 * Run after npm ci: node scripts/fetch-fifa-27-gameplay.mjs
 */
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const CDN_A = 'https://sm.ign.com/t/ign_za/photo/default';
const CDN_B = 'https://sm.ign.com/t/ign_latam/photo/default';
const CDN_GALLERY = 'https://sm.ign.com/t/ign_pk/gallery/f/fifa-27-g';

const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');
const publicDir = path.resolve('public');

const GAMEPLAY = [
  { file: 'fifa-27-pitch-overlay.png', url: `${CDN_B}/fifa-27-battle-royale-chapter-5-season-1-train-1920x1080-a1_1nkx.1400.jpg` },
  { file: 'fifa-27-player-overlay.png', url: `${CDN_A}/screenshot-6815-1725916496014_zkpv.1400.jpg` },
  { file: 'fifa-27-perfect-shot.png', url: `${CDN_B}/fifa-27-battle-royale-chapter-5-season-1-screenshot-c-1920x_vu5r.1400.jpg` },
  { file: 'fifa-27-mini-pitch-radar.png', url: `${CDN_A}/screenshot-6670-1725916496013_zv3w.1400.jpg` },
  { file: 'fifa-27-icon-unlocker.png', url: `${CDN_B}/fifa-27-battle-royale-chapter-5-season-1-screenshot-b-1920x_8z8k.1400.jpg` },
  { file: 'fifa-27-auto-green.png', url: `${CDN_A}/screenshot-7105-1725916496016_j9dr.1400.jpg` },
  { file: 'fifa-27-fut-snipe-assist.png', url: `${CDN_A}/screenshot-6960-1725916496015_vbtg.1400.jpg` },
];

const BLOG_POOL = [
  `${CDN_GALLERY}/fifa-27-gameplay-screenshots-2024_s2qs.1400.jpg`,
  `${CDN_B}/fifa-27-battle-royale-chapter-5-season-1-screenshot-a-1920x_xkzh.1400.jpg`,
  `${CDN_B}/fifa-27-battle-royale-chapter-5-season-1-screenshot-d-1920x_mzsk.1400.jpg`,
  `${CDN_A}/screenshot-6380-1725916496012_gj96.1400.jpg`,
  'https://sm.ign.com/t/ign_in/screenshot/default/fifa-27-unreal-engine-5-1-scree-3_bcxh.1400.jpg',
  'https://sm.ign.com/t/ign_latam/gallery/f/fifa-27-c/fifa-27-chapter-5-underground-images_5h3j.1400.jpg',
];

const BLOG_BASES = [
  'fifa-27-hack-codes-guide',
  'fifa-27-hack-tips',
  'how-to-use-fifa-27-hack-codes',
  'fifa-27-hacks-features-guide',
  'fifa-27-career-mode-hacks',
  'fifa-27-lite-vs-pro',
  'fifa-27-elite-tier-guide',
  'fifa-27-rivals-hacks-guide',
  'fifa-27-pitch-overlay-setup',
  'fifa-27-radar-hack-guide',
  'fifa-27-icon-unlocker-guide',
  'ea-anticheat-patch-day-checklist',
  'fifa-27-hwid-spoofer-after-ban',
  'how-to-buy-fifa-27-hacks-2026',
  'fifa-27-auto-green-guide',
  'ea-anticheat-fifa-27-guide',
  'fifa-27-external-hack-guide',
  'fifa-27-stream-proof-setup',
];

async function fetchPng(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; EA FC 27CheatsSite/1.0)' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const input = Buffer.from(await res.arrayBuffer());
  return sharp(input).resize({ width: 1280, withoutEnlargement: true }).png().toBuffer();
}

async function save(dir, file, url) {
  const buf = await fetchPng(url);
  await writeFile(path.join(dir, file), buf);
  console.log('saved', file, buf.length);
  return buf;
}

await mkdir(gameplayDir, { recursive: true });
await mkdir(blogDir, { recursive: true });

let hero = null;
for (const asset of GAMEPLAY) {
  try {
    const buf = await save(gameplayDir, asset.file, asset.url);
    if (asset.file === 'fifa-27-pitch-overlay.png') hero = buf;
  } catch (err) {
    console.warn('skip', asset.file, err.message);
  }
}

for (let i = 0; i < BLOG_BASES.length; i++) {
  const base = BLOG_BASES[i];
  const url = BLOG_POOL[i % BLOG_POOL.length];
  try {
    await save(blogDir, `${base}.png`, url);
  } catch (err) {
    console.warn('skip blog', base, err.message);
  }
}

if (hero) {
  const logo = await sharp(hero).resize(512, 512, { fit: 'cover' }).png().toBuffer();
  for (const { name, size } of [
    { name: 'favicon-16.png', size: 16 },
    { name: 'favicon-32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
  ]) {
    await writeFile(path.join(publicDir, name), await sharp(logo).resize(size, size).png().toBuffer());
  }
  await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logo).resize(32, 32).png().toBuffer());
  console.log('updated favicons from EA FC 27 art');
}

console.log('Done fetching EA FC 27 gameplay/blog images.');

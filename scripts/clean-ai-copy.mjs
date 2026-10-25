import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['EA FC 27Cheats Editorial', 'EA FC 27 Hacks & Cheats'],
  ['EA FC 27Cheats Community Forum', 'EA FC 27 Hacks & Cheats Forum'],
  ['EA FC 27Cheats Blog', 'EA FC 27 Hacks & Cheats Blog'],
  ['EA FC 27Cheats Support', 'EA FC 27 Hacks & Cheats Support'],
  ['Join EA FC 27Cheats on Discord', 'Join EA FC 27 Hacks & Cheats on Discord'],
  ['EA FC 27Cheats home', 'EA FC 27 Hacks & Cheats home'],
  ['EA FC 27Cheats', 'EA FC 27 Hacks & Cheats'],
  ["TITLE_PREFIX = 'EA FC 27 Hacks & Cheats'", "TITLE_PREFIX = 'EA FC 27 Hacks & Cheats'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with fifa-27 aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked EA FC 27 aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private EA FC 27 hacks for Windows PC Ultimate Team and Career Mode—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells EA FC 27 hacks for Windows PC Ultimate Team and Career Mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private EA FC 27 hacks for Windows PC Ultimate Team and Career Mode. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells EA FC 27 hacks for Windows PC Ultimate Team and Career Mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private EA FC 27 hacks for Windows PC Ultimate Team and Career Mode. Check live status before every patch-day queue.',
    'sells EA FC 27 hacks for Windows PC Ultimate Team and Career Mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private EA FC 27 hacks for Windows PC Ultimate Team and Career Mode.',
    'sells EA FC 27 hacks for Windows PC Ultimate Team and Career Mode.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Aimbot tracks targets, loot assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external EA FC 27 hacks for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}

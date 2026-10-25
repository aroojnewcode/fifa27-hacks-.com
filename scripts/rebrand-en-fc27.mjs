import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const enPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/i18n/en.ts');
let text = fs.readFileSync(enPath, 'utf8');

const slugMap = {
  'fortnite-cheat-codes-guide': 'fifa-27-hack-codes-guide',
  'fortnite-console-cheats-tips': 'fifa-27-hack-tips',
  'how-to-use-fortnite-cheat-codes': 'how-to-use-fifa-27-hack-codes',
  'fortnite-cheats-features-guide': 'fifa-27-hacks-features-guide',
  'fortnite-console-commands-cheats': 'fifa-27-career-mode-hacks',
  'fortnite-lite-vs-pro': 'fifa-27-lite-vs-pro',
  'fortnite-elite-tier-guide': 'fifa-27-elite-tier-guide',
  'fortnite-aimbot-ranked-guide': 'fifa-27-rivals-hacks-guide',
  'fortnite-esp-wallhack-setup': 'fifa-27-pitch-overlay-setup',
  'fortnite-radar-hack-guide': 'fifa-27-radar-hack-guide',
  'fortnite-skin-changer-guide': 'fifa-27-icon-unlocker-guide',
  'eac-patch-day-checklist': 'ea-anticheat-patch-day-checklist',
  'fortnite-hwid-spoofer-after-ban': 'fifa-27-hwid-spoofer-after-ban',
  'how-to-buy-fortnite-cheats-2026': 'how-to-buy-fifa-27-hacks-2026',
  'fortnite-aimbot-combat-guide': 'fifa-27-auto-green-guide',
  'eac-bypass-fortnite-guide': 'ea-anticheat-fifa-27-guide',
  'fortnite-external-cheat-guide': 'fifa-27-external-hack-guide',
  'fortnite-stream-proof-setup': 'fifa-27-stream-proof-setup',
};

for (const [from, to] of Object.entries(slugMap)) {
  text = text.replaceAll(from, to);
}

text = text.replaceAll('fortnite-cheats.com', 'fifa27hacks.com');
text = text.replaceAll('/images/blog/fortnite-', '/images/gameplay/fifa-27-');
text = text.replaceAll('/images/blog/eac-', '/images/gameplay/fifa-27-auto-green.png');
text = text.replaceAll('/images/blog/how-to-use-fortnite-cheat-codes.png', '/images/gameplay/fifa-27-pitch-overlay.png');

const replacements = [
  [/Fortnite Cheats/g, 'EA FC 27 Hacks & Cheats'],
  [/fortnite cheats/gi, 'EA FC 27 hacks'],
  [/Fortnite cheats/gi, 'EA FC 27 hacks'],
  [/Fortnite cheat/gi, 'EA FC 27 hack'],
  [/Fortnite/g, 'EA FC 27'],
  [/Battle Royale/g, 'Ultimate Team'],
  [/Zero Build/g, 'Career Mode'],
  [/Creative/g, 'Skill Games'],
  [/Ranked/g, 'Division Rivals'],
  [/Aimbot/g, 'Auto green'],
  [/aimbot/g, 'auto green'],
  [/ESP wallhack/gi, 'pitch overlay'],
  [/ESP Wallhack/gi, 'pitch overlay'],
  [/wallhack/gi, 'pitch overlay'],
  [/Loot Assist/g, 'FUT snipe assist'],
  [/loot ESP/gi, 'pack radar'],
  [/Skin Changer/g, 'Icon Unlocker'],
  [/Easy Anti-Cheat/g, 'EA AntiCheat'],
];

for (const [from, to] of replacements) {
  text = text.replace(from, to);
}

// Site meta from pageSeo intent
text = text.replace(
  /title: 'Buy Undetected EA FC 27 hacks \| Auto green, pitch overlay & pitch overlay'/,
  "title: 'EA FC 27 Hacks for PC | Auto Green & FUT'",
);
text = text.replace(
  /description:\s*\n\s*'Buy undetected EA FC 27 hacks for PC: auto green, pitch overlay, pitch overlay, radar, pack radar and Icon Unlocker\. Updated after EA AntiCheat patches\.'/,
  "description:\n      'Buy undetected EA FC 27 hacks for PC: auto green, pitch overlay, FUT snipe assist and Icon Unlocker. Updated after every EA AntiCheat patch.'",
);

if (!text.includes('forum:')) {
  text = text.replace(
    '  ui: {',
    `  forum: {
    eyebrow: 'Community',
    title: 'EA FC 27 Hacks Forum',
    subtitle: 'Loader setup, tier picks, patch-day status and FUT/Career Mode questions.',
    categoriesLabel: 'Categories',
    latestLabel: 'Latest discussions',
    fromBlogLabel: 'From the blog',
    readThread: 'Read thread',
    backToForum: 'Back to forum',
  },
  ui: {`,
  );
}

if (!text.includes('breadcrumbHome')) {
  text = text.replace(
    "themeDark: 'Switch to dark mode',",
    `themeDark: 'Switch to dark mode',
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbProducts: 'Products',
    backToHome: 'Back to home',`,
  );
}

fs.writeFileSync(enPath, text, 'utf8');
console.log('Rebranded src/i18n/en.ts to EA FC 27');

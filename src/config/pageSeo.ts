export interface PageSeoEntry {
  title: string;
  description: string;
}

/** Path without locale prefix, trailing slash (e.g. `/faq/`). English overrides only. */
export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'EA FC 27 Hacks for PC | Auto Green & FUT',
    description:
      'Buy undetected EA FC 27 hacks for PC: auto green, pitch overlay, FUT snipe assist and Icon Unlocker. Updated after every EA AntiCheat patch.',
  },
  '/products/fifa-27-hacks/': {
    title: 'Buy EA FC 27 Hacks | Lite, Pro, Elite & Utilities',
    description:
      'Compare Lite, Pro and Elite EA FC 27 hack tiers plus HWID Spoofer, UGC and Icon Unlocker. Secure checkout and Windows loader.',
  },
  '/products/fifa-27-hacks/lite/': {
    title: 'EA FC 27 Lite Hacks | Pitch Overlay & Radar PC',
    description:
      'EA FC 27 Lite hacks: pitch overlay, mini-pitch radar and stream-proof ESP for Division Rivals and Career Mode. From $15/week.',
  },
  '/products/fifa-27-hacks/pro/': {
    title: 'EA FC 27 Pro Hacks | Auto Green & FUT Tools',
    description:
      'EA FC 27 Pro hacks add auto green, perfect timed shots and FUT snipe assist on top of Lite overlay and radar. From $35/month.',
  },
  '/products/fifa-27-hacks/elite/': {
    title: 'EA FC 27 Elite Hacks | Full Module Stack PC',
    description:
      'EA FC 27 Elite hacks — every module, priority patches and limited slots. Lifetime $150 or $35/month via secure checkout.',
  },
  '/products/fifa-27-hacks/hwid-spoofer/': {
    title: 'EA FC 27 HWID Spoofer | After EAC Hardware Ban',
    description:
      'HWID Spoofer for EA FC 27 on PC — disk, MAC and GPU cleanup when EA AntiCheat flags your machine. Portal verification included.',
  },
  '/products/fifa-27-hacks/ugc/': {
    title: 'EA FC 27 UGC Unban Tools | Appeals & Recovery',
    description:
      'UGC appeal workflows for EA FC 27 account restrictions and EAC holds. Documentation and status tracking — one-time $50 access.',
  },
  '/products/fifa-27-hacks/unlock-all/': {
    title: 'EA FC 27 Icon Unlocker | Kits & Cosmetics Local',
    description:
      'Icon Unlocker / Skin Changer for EA FC 27 — preview kits, badges and cosmetics locally on your PC display. Cosmetic-only module.',
  },
  '/products/fifa-27-hacks/utilities/': {
    title: 'EA FC 27 Utilities | HWID, UGC & Icon Unlocker',
    description:
      'HWID Spoofer, UGC recovery and Icon Unlocker utilities for EA FC 27 PC players. Compare features and checkout securely.',
  },
  '/blog/': {
    title: 'EA FC 27 Hacks Blog | Guides, Patches & Setup',
    description:
      'EA FC 27 hack guides: auto green, pitch overlay, HWID after ban, stream-proof overlays and EA AntiCheat patch-day checklists.',
  },
  '/forum/': {
    title: 'EA FC 27 Hacks Forum | Setup, Patches & Tier Help',
    description:
      'Community forum for EA FC 27 hacks — loader setup, tier picks, patch-day status and FUT/Career Mode questions.',
  },
  '/faq/': {
    title: 'EA FC 27 Hacks FAQ | Undetected, Bans & Loader',
    description:
      'Answers on undetected EA FC 27 hacks, EA AntiCheat risk, supported platforms, HWID resets and what happens after checkout.',
  },
  '/support/': {
    title: 'EA FC 27 Hacks & Cheats Support | Loader, HWID & Checkout',
    description:
      'EA FC 27 hacks support for loader setup, HWID spoofing and checkout help at fifa27hacks.com.',
  },
  '/about/': {
    title: 'About EA FC 27 Hacks Shop | fifa27hacks.com',
    description:
      'About fifa27hacks.com — PC EA FC 27 hacks, FUT tools, patch guides and secure checkout for Lite, Pro and Elite.',
  },
  '/privacy/': {
    title: 'Privacy Policy | EA FC 27 Hacks Shop',
    description:
      'Privacy policy for fifa27hacks.com: analytics, cookies, checkout partners and how we handle support emails.',
  },
  '/terms/': {
    title: 'Terms & Conditions | EA FC 27 Hacks',
    description:
      'Terms for EA FC 27 hack purchases at fifa27hacks.com — refunds, EAC risk, acceptable use and loader license.',
  },
};

export function getPageSeoEntry(path: string): PageSeoEntry | undefined {
  let normalized = path || '/';
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  if (normalized !== '/' && !normalized.endsWith('/')) normalized = `${normalized}/`;
  return PAGE_SEO[normalized];
}

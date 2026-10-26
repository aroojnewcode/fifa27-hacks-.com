import { getActiveLocale, setActiveLocale, t } from '../i18n';
import { DEFAULT_LOCALE } from '../i18n/locales';
import { getLocaleContent } from '../i18n/fullLocales';
import type { LocalizedProductCopy } from '../i18n/fullLocales/types';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { productCatalogCoverPath } from './products/covers';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['fifa-27-pitch-overlay-setup', 'fifa-27-lite-vs-pro', 'fifa-27-radar-hack-guide', 'ea-anticheat-patch-day-checklist'],
  pro: [
    'fifa-27-rivals-hacks-guide',
    'fifa-27-auto-green-guide',
    'fifa-27-lite-vs-pro',
    'fifa-27-stream-proof-setup',
  ],
  elite: [
    'fifa-27-elite-tier-guide',
    'fifa-27-hacks-features-guide',
    'fifa-27-pitch-overlay-setup',
    'ea-anticheat-patch-day-checklist',
    'how-to-buy-fifa-27-hacks-2026',
  ],
  'hwid-spoofer': [
    'fifa-27-hwid-spoofer-after-ban',
    'ea-anticheat-fifa-27-guide',
    'ea-anticheat-patch-day-checklist',
    'fifa-27-external-hack-guide',
  ],
  ugc: [
    'ea-anticheat-fifa-27-guide',
    'fifa-27-hwid-spoofer-after-ban',
    'how-to-buy-fifa-27-hacks-2026',
  ],
  'unlock-all': [
    'fifa-27-icon-unlocker-guide',
    'fifa-27-hacks-features-guide',
    'fifa-27-stream-proof-setup',
  ],
};

const productBase = '/products/fifa-27-hacks/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on fifa27hacks.com and Discord #status before purchase—especially after a EA FC 27 or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite EA FC 27 hacks or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, EA App platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Career Mode.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'EA FC 27 and EAC receive frequent updates. Confirm module availability on the live status panel at fifa27hacks.com before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in EA FC 27 can violate Epic Terms of Service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const fc27SystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqEpic', text: 'Current EA FC 27 client via EA App with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets EA FC 27 published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/fifa-27-pitch-overlay.png`,
    alt: 'EA FC 27 pitch ESP overlay in Manchester City vs Liverpool with Haaland, Foden, Salah and van Dijk name tags and distance meters',
    caption: 'Pitch ESP',
    captionDesc: 'Squad-wide player boxes and distance tags on the pitch.',
  },
  gpScripts: {
    src: `${gameplay}/fifa-27-perfect-shot.png`,
    alt: 'EA FC 27 perfect shot assist overlay during Barcelona vs Real Madrid with Lewandowski, Pedri and Bellingham marked on the pitch',
    caption: 'Perfect shot',
    captionDesc: 'Timed shot assist with player ESP in El Clásico.',
  },
  gpZoomHack: {
    src: `${gameplay}/fifa-27-mini-pitch-radar.png`,
    alt: 'EA FC 27 mini pitch radar and ESP during Manchester City vs Liverpool showing tactical dots and opponent distance labels',
    caption: 'Mini pitch radar',
    captionDesc: 'Tactical radar plus opponent ESP in Ultimate Team rivals.',
  },
  gpSkinChanger: {
    src: `${gameplay}/fifa-27-skin-changer.png`,
    alt: 'EA FC 27 Skin Changer menu previewing alternate home kits, badges and stadium themes on the local client',
    caption: 'Skin Changer',
    captionDesc: 'Swap kits, badges and stadium themes locally before you queue.',
  },
  gpIconUnlocker: {
    src: `${gameplay}/fifa-27-icon-unlocker.png`,
    alt: 'EA FC 27 Icon Unlocker grid showing Prime Icon cards, chemistry styles and squad slot previews',
    caption: 'Icon Unlocker',
    captionDesc: 'Browse Prime Icons, chemistry and squad cosmetics on your display.',
  },
  gpKitPreview: {
    src: `${gameplay}/fifa-27-player-overlay.png`,
    alt: 'EA FC 27 kit and player name overlay during Barcelona vs Real Madrid showing squad kits and cosmetic previews on the pitch',
    caption: 'Kit preview',
    captionDesc: 'See kits, badges and squad style in live match view before you apply locally.',
  },
  gpAutoKill: {
    src: `${gameplay}/fifa-27-auto-green.png`,
    alt: 'EA FC 27 auto green timing overlay from behind Vini Jr. targeting Rúben Dias with a 15m distance tag and assist line',
    caption: 'Auto green',
    captionDesc: 'Timed finish assist with defender ESP and range tag.',
  },
  gpFarmBot: {
    src: `${gameplay}/fifa-27-fut-snipe-assist.png`,
    alt: 'EA FC 27 FUT snipe assist view in Real Madrid vs Barcelona with Ronaldo, Mbappé and passing lane lines on the pitch',
    caption: 'FUT snipe assist',
    captionDesc: 'Passing lanes and star player ESP in a Clásico match.',
  },
  gpHeroEsp: {
    src: `${gameplay}/fifa-27-player-overlay.png`,
    alt: 'EA FC 27 player ESP during Barcelona vs Real Madrid with Lewandowski, Pedri, Bellingham and Valverde distance markers',
    caption: 'Player ESP',
    captionDesc: 'Full-squad name tags and ranges in club play.',
  },
  gpThermal: {
    src: `${gameplay}/fifa-27-thermal-esp.png`,
    alt: 'EA FC 27 thermal-style player ESP in Barcelona vs Real Madrid highlighting attackers and midfielders with colored boxes',
    caption: 'Thermal ESP',
    captionDesc: 'High-contrast player outlines for crowded midfield play.',
  },
  gpBuildFight: {
    src: `${gameplay}/fifa-27-build-fight-esp.png`,
    alt: 'EA FC 27 defensive ESP locking onto Rúben Dias from Vini Jr. with FPS and ping overlay during Real Madrid vs Manchester City',
    caption: 'Defensive ESP',
    captionDesc: 'Mark the last defender before a through ball or shot.',
  },
  gpArena: {
    src: `${gameplay}/fifa-27-arena-wallhack.png`,
    alt: 'EA FC 27 arena mode ESP in Real Madrid vs Barcelona showing Ronaldo, Mbappé, Bellingham and opponent Rüdiger with lane lines',
    caption: 'Arena ESP',
    captionDesc: 'Passing lane visualization in stadium night matches.',
  },
  gpSpawn: {
    src: `${gameplay}/fifa-27-spawn-island-esp.png`,
    alt: 'EA FC 27 kickoff ESP overlay for Manchester City vs Liverpool with multi-player boxes across the center circle',
    caption: 'Kickoff ESP',
    captionDesc: 'See every opponent position before the first touch.',
  },
  gpLongRange: {
    src: `${gameplay}/fifa-27-long-range-esp.png`,
    alt: 'EA FC 27 long-range pitch ESP in Barcelona vs Real Madrid with distant player names and meter readouts',
    caption: 'Long range ESP',
    captionDesc: 'Track runners and wingers before they receive the ball.',
  },
  gpAimLock: {
    src: `${gameplay}/fifa-27-aimbot-lock.png`,
    alt: 'EA FC 27 shot lock assist targeting Rúben Dias with red ESP box and green connection line from Vini Jr. in rivals play',
    caption: 'Shot lock',
    captionDesc: 'Aim assist line and defender highlight before shooting.',
  },
  gpChams: {
    src: `${gameplay}/fifa-27-chams-esp.png`,
    alt: 'EA FC 27 chams-style player ESP on Vini Jr. and Rüdiger with cyan tracking lines and distance tags at night',
    caption: 'Chams ESP',
    captionDesc: 'Bright player outlines visible through crowd and lighting.',
  },
  gpSquad: {
    src: `${gameplay}/fifa-27-squad-esp.png`,
    alt: 'EA FC 27 squad ESP wallhack in Manchester City vs Liverpool marking Haaland, De Bruyne, Foden, Salah and van Dijk',
    caption: 'Squad ESP',
    captionDesc: 'Full XI awareness with team-colored boxes.',
  },
  gpCombat: {
    src: `${gameplay}/fifa-27-combat-esp.png`,
    alt: 'EA FC 27 1v1 duel ESP behind Vini Jr. highlighting Rüdiger at 14 meters with red box and cyan player outline',
    caption: 'Duel ESP',
    captionDesc: 'Close-quarters defender tracking before skill moves.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'fifa-27-hacks';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'EA FC 27 Lite is built for players who want map awareness first. In ranked, knowing enemy positions, chest locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'EA FC 27 Pro is the sweet spot for ranked grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aimbot, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with aimbot that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'EA FC 27 Elite is the private build for players who want everything—Loot Assist, Auto Finish, Auto Shield Break, Skin Changer, full ESP wallhack and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and reboot-van locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Ultimate Team and Career Mode ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Aimbot, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so aimbot stay natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at fifa27hacks.com—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Loot Assist, Rotation Assist AI, Auto Finish, Auto Shield Break, Skin Changer and full ESP wallhack with smoke alerts. Use lobby testing before ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh EA accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/fifa-27-hacks/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for EA account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for Epic review. Pair with [HWID Spoofer](/products/fifa-27-hacks/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpLongRange', 'gpSquad'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fc27SystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Chest & loot locator',
      'POI awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'Career Mode preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'EA FC 27 Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, chest markers, loot timers and radar. No aimbot. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in Ultimate Team and Career Mode without combat automation. Overlays are updated after EA FC 27 patches.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpCombat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fc27SystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon aimbot profiles',
      'Third-party alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'EA FC 27 Pro: aimbot plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for Ultimate Team and Career Mode. Bone priority and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fc27SystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot Assist',
      'Rotation Assist AI',
      'Chest respawn timer',
      'Auto loadout manager',
      'Auto Finish',
      'Auto Shield Break',
      'Full ESP wallhack suite',
      'Third-party alert system',
      'Visibility detector',
      'Skin Changer (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'EA FC 27 Elite: full cheat + extras',
      paragraphs: [
        'The backbone of every EA FC 27 module — one lifetime purchase, unlimited access to Elite auto green, pitch overlay, radar, FUT tools and Icon Unlocker in our catalog.',
        'Kernel-level loader with zero extra footprint on your host PC. Compatible with every cheat tier we ship. Slots are limited; check the status banner before you buy.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching EA FC 27.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching EA FC 27 after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for EA FC 27 PC bans',
      paragraphs: [
        'EA FC 27 HWID Spoofer is a hardware ID spoofing toolkit to bypass PC hardware bans while your EA account stays valid. Disk serial, MAC and GPU profile tools with cleaner workflows included.',
        'Works with EA AntiCheat and other major anti-cheats on Windows. Run the compatibility scan and restore-point checklist in the portal before you launch EA FC 27 again.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on fifa27hacks.com or at checkout on fifa27hacks.com.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for Epic restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpIconUnlocker', 'gpKitPreview'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Epic locker or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: fc27SystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Pickaxe & wrap customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, wraps and pickaxes on your EA FC 27 client. It does not change your Epic locker or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'EA FC 27 Lite' : cheat.name === 'Pro' ? 'EA FC 27 Pro' : 'EA FC 27 Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

function applyProductCopy(page: ProductPage, copy?: LocalizedProductCopy): ProductPage {
  if (!copy) return page;
  return {
    ...page,
    overview: copy.overview
      ? {
          title: copy.overview.title ?? page.overview.title,
          paragraphs: copy.overview.paragraphs ?? page.overview.paragraphs,
        }
      : page.overview,
    goodToKnow: copy.goodToKnow ?? page.goodToKnow,
    limitations: copy.limitations ?? page.limitations,
    fullFeatures: copy.fullFeatures ?? page.fullFeatures,
    acquisition: copy.acquisition
      ? {
          title: copy.acquisition.title ?? page.acquisition.title,
          steps: page.acquisition.steps.map((step, i) => {
            const patch = copy.acquisition?.steps?.[i];
            return patch ? { ...step, ...patch } : step;
          }),
        }
      : page.acquisition,
    body: copy.body?.length
      ? copy.body.map((b) => ({ type: b.type as 'h2' | 'p', text: b.text }))
      : page.body,
    about: copy.about?.length
      ? copy.about.map((b) => ({ type: b.type as 'h2' | 'p', text: b.text }))
      : page.about,
    images: page.images.map((img, i) => {
      const patch = copy.images?.[i];
      if (!patch) return img;
      return {
        ...img,
        alt: patch.alt ?? img.alt,
        caption: patch.caption ?? img.caption,
        captionDesc: patch.captionDesc ?? img.captionDesc,
      };
    }),
  };
}

export function getProductPages(locale: string): ProductPage[] {
  const prev = getActiveLocale();
  setActiveLocale(locale);
  const pages = [...buildTierPages(), ...buildUtilityPages()];
  setActiveLocale(prev);

  const productCopy = getLocaleContent(locale)?.products;
  if (!productCopy) return pages;
  return pages.map((p) => applyProductCopy(p, productCopy[p.slug]));
}

/** @deprecated Use getProductPages(locale) after initLocalePage */
export const productPages: ProductPage[] = getProductPages(DEFAULT_LOCALE);

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

/** Card image on /products/ and home carousel — dedicated PNG per slug when available. */
export function getProductCatalogPreview(product: ProductPage): { src: string; alt: string } | undefined {
  if (product.kind === 'utility') {
    const first = product.images[0];
    return {
      src: productCatalogCoverPath(product.slug),
      alt: first?.alt ?? product.title,
    };
  }
  const first = product.images[0];
  if (!first) return undefined;
  return { src: first.src, alt: first.alt };
}

export function getProductPage(slug: string, locale = DEFAULT_LOCALE) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimLock', 'gpThermal', 'gpArena');

export const heroSlides = slide(
  'gpMapHack',
  'gpScripts',
  'gpHeroEsp',
  'gpZoomHack',
  'gpAutoKill',
  'gpFarmBot',
  'gpBuildFight',
  'gpSpawn',
  'gpSquad',
  'gpCombat',
  'gpAimLock',
  'gpThermal',
  'gpArena',
  'gpLongRange',
  'gpChams',
  'gpSkinChanger',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'EA FC 27 Elite cheats with aimbot and ESP, plus HWID spoofer, UGC recovery and Skin Changer for PC.',
  buyUrl: checkoutPath('fifa27'),
};

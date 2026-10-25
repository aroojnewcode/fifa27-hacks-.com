/** SERP `<title>` values (≤60 chars). On-page H1 stays `post.title`. */
export const BLOG_SEO_TITLES: Record<string, string> = {
  'fifa-27-hack-codes-guide': 'EA FC 27 Skill Games Practice | Auto Green Drills',
  'fifa-27-hack-tips': 'EA FC 27 Skill Games Tips | Auto Green & Overlay',
  'how-to-use-fifa-27-hack-codes': 'Practice EA FC 27 Hacks Safely | Skill Games',
  'fifa-27-hacks-features-guide': 'EA FC 27 Hack Features | Auto Green & FUT',
  'fifa-27-career-mode-hacks': 'Skill Games vs Live EA FC 27 Hacks | Guide',
  'fifa-27-lite-vs-pro': 'EA FC 27 Lite vs Pro | Tier Comparison',
  'fifa-27-elite-tier-guide': 'EA FC 27 Elite Tier Guide | FUT & Auto Green',
  'fifa-27-rivals-hacks-guide': 'Division Rivals Auto Green | Pro Setup',
  'fifa-27-pitch-overlay-setup': 'EA FC 27 Pitch Overlay Setup | Player ESP',
  'fifa-27-radar-hack-guide': 'EA FC 27 Mini-Pitch Radar Guide | FUT Rivals',
  'fifa-27-icon-unlocker-guide': 'EA FC 27 Icon Unlocker | Kits & Cosmetics',
  'ea-anticheat-patch-day-checklist': 'EA AntiCheat Patch Day Checklist | FC 27',
  'fifa-27-hwid-spoofer-after-ban': 'EA FC 27 HWID Spoofer After EAC Ban',
  'how-to-buy-fifa-27-hacks-2026': 'How to Buy EA FC 27 Hacks in 2026',
  'fifa-27-auto-green-guide': 'EA FC 27 Auto Green Guide | Timed Finishing',
  'ea-anticheat-fifa-27-guide': 'EAC Verify Error EA FC 27 | Fix Guide',
  'fifa-27-external-hack-guide': 'EA FC 27 External Hack Guide | Loader',
  'fifa-27-stream-proof-setup': 'Stream-Proof EA FC 27 Overlay Setup',
};

export function blogSeoTitleForSlug(slug: string, fallbackTitle: string): string {
  return BLOG_SEO_TITLES[slug] ?? fallbackTitle;
}

import type { BlogPost } from '../../i18n/types';

export const gameplayImageAlts: Record<string, string> = {
  'fifa-27-pitch-overlay.png':
    'EA FC 27 pitch ESP overlay in Manchester City vs Liverpool with Haaland, Foden, Salah and van Dijk name tags and distance meters',
  'fifa-27-perfect-shot.png':
    'EA FC 27 perfect shot assist overlay during Barcelona vs Real Madrid with Lewandowski, Pedri and Bellingham marked on the pitch',
  'fifa-27-player-overlay.png':
    'EA FC 27 player ESP during Barcelona vs Real Madrid with Lewandowski, Pedri, Bellingham and Valverde distance markers',
  'fifa-27-mini-pitch-radar.png':
    'EA FC 27 mini pitch radar and ESP during Manchester City vs Liverpool showing tactical dots and opponent distance labels',
  'fifa-27-auto-green.png':
    'EA FC 27 auto green timing overlay from behind Vini Jr. targeting Rúben Dias with a 15m distance tag and assist line',
  'fifa-27-fut-snipe-assist.png':
    'EA FC 27 FUT snipe assist view in Real Madrid vs Barcelona with Ronaldo, Mbappé and passing lane lines on the pitch',
  'fifa-27-thermal-esp.png':
    'EA FC 27 thermal-style player ESP in Barcelona vs Real Madrid highlighting attackers and midfielders with colored boxes',
  'fifa-27-build-fight-esp.png':
    'EA FC 27 defensive ESP locking onto Rúben Dias from Vini Jr. with FPS and ping overlay during Real Madrid vs Manchester City',
  'fifa-27-chams-esp.png':
    'EA FC 27 chams-style player ESP on Vini Jr. and Rüdiger with cyan tracking lines and distance tags at night',
  'fifa-27-squad-esp.png':
    'EA FC 27 squad ESP wallhack in Manchester City vs Liverpool marking Haaland, De Bruyne, Foden, Salah and van Dijk',
};

/**
 * Every blog post hero uses EA FC 27 gameplay screenshots.
 * Each source file appears at most twice across Guides + Features + Setup posts.
 */
export const BLOG_POST_GAMEPLAY_FILE: Record<string, string> = {
  'fifa-27-hack-codes-guide': 'fifa-27-pitch-overlay.png',
  'fifa-27-hack-tips': 'fifa-27-perfect-shot.png',
  'fifa-27-hacks-features-guide': 'fifa-27-build-fight-esp.png',
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

/** @deprecated Use resolveBlogPostImagePath */
export function gameplayPathForGuide(slug: string): string | undefined {
  const file = BLOG_POST_GAMEPLAY_FILE[slug];
  if (!file) return undefined;
  return `/images/gameplay/${file}`;
}

export function resolveBlogPostImagePath(slug: string): string {
  const file = BLOG_POST_GAMEPLAY_FILE[slug];
  if (file) return `/images/gameplay/${file}`;
  return `/images/blog/${slug}.png`;
}

export function blogImageAlt(post: BlogPost): string {
  const file = BLOG_POST_GAMEPLAY_FILE[post.slug];
  if (file && gameplayImageAlts[file]) {
    return gameplayImageAlts[file];
  }
  return `${post.title} — EA FC 27 hack guide screenshot`;
}

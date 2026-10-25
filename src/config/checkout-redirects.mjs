/** Levo Cheats FC 27 affiliate checkout (all product CTAs). */
export const LEVO_FC27_CHECKOUT =
  'https://levocheats.com/go/UROOJ?to=%2Ffc-27-cheats';

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  fifa27: LEVO_FC27_CHECKOUT,
  skinChanger: LEVO_FC27_CHECKOUT,
  hwidSpoofer: LEVO_FC27_CHECKOUT,
  ugc: LEVO_FC27_CHECKOUT,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/fifa-27', CHECKOUT_URLS.fifa27],
  ['/go/fifa-27/', CHECKOUT_URLS.fifa27],
  ['/go/fortnite', CHECKOUT_URLS.fifa27],
  ['/go/fortnite/', CHECKOUT_URLS.fifa27],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

const LOCALE_PREFIXES = new Set([
  'en',
  'pt-br',
  'de',
  'es',
  'fr',
  'it',
  'ar',
]);

function stripLocalePrefix(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (!first || !LOCALE_PREFIXES.has(first)) return pathname;

  const rest = segments.slice(1);
  if (!rest.length) return '/';
  const path = `/${rest.join('/')}`;
  if (path !== '/' && !path.endsWith('/')) return `${path}/`;
  return path;
}

export function resolveCheckoutPathRedirect(pathname) {
  const candidates = [pathname, stripLocalePrefix(pathname)];

  for (const path of candidates) {
    const direct = CHECKOUT_PATH_REDIRECTS.get(path);
    if (direct) return direct;

    if (path !== '/' && !path.endsWith('/')) {
      const withSlash = CHECKOUT_PATH_REDIRECTS.get(`${path}/`);
      if (withSlash) return withSlash;
    }
  }

  return null;
}

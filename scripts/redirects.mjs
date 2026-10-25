const EN = '/en';

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', `${EN}/blog/`],
  ['/blog/', `${EN}/blog/`],
  ['/forum', `${EN}/forum/`],
  ['/forum/', `${EN}/forum/`],
  ['/about', `${EN}/about/`],
  ['/about/', `${EN}/about/`],
  ['/contact', `${EN}/support/`],
  ['/contact/', `${EN}/support/`],
  ['/support', `${EN}/support/`],
  ['/support/', `${EN}/support/`],
  ['/privacy', `${EN}/privacy/`],
  ['/privacy/', `${EN}/privacy/`],
  ['/terms', `${EN}/terms/`],
  ['/terms/', `${EN}/terms/`],
  ['/faq', `${EN}/faq/`],
  ['/faq/', `${EN}/faq/`],
  ['/cheats', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/lite', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/lite/', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/pro', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/pro/', `${EN}/products/fifa-27-hacks/`],
  ['/cheats/elite', `${EN}/products/fifa-27-hacks/elite/`],
  ['/cheats/elite/', `${EN}/products/fifa-27-hacks/elite/`],
  ['/cheats/compare', `${EN}/blog/fifa-27-lite-vs-pro/`],
  ['/cheats/compare/', `${EN}/blog/fifa-27-lite-vs-pro/`],
  ['/products/fifa-27-hacks/utilities', `${EN}/products/fifa-27-hacks/utilities/`],
  ['/products/fifa-27-hacks/utilities/', `${EN}/products/fifa-27-hacks/utilities/`],
  ['/products/fifa-27-hacks', `${EN}/products/fifa-27-hacks/`],
  ['/products/fifa-27-hacks/', `${EN}/products/fifa-27-hacks/`],
  ['/products/fifa-27-hacks/account-recovery', `${EN}/products/fifa-27-hacks/ugc/`],
  ['/products/fifa-27-hacks/account-recovery/', `${EN}/products/fifa-27-hacks/ugc/`],
  ['/products/dota-2-cheats', `${EN}/products/fifa-27-hacks/`],
  ['/products/dota-2-cheats/', `${EN}/products/fifa-27-hacks/`],
  ['/products/dota-2-cheats/elite', `${EN}/products/fifa-27-hacks/elite/`],
  ['/products/dota-2-cheats/elite/', `${EN}/products/fifa-27-hacks/elite/`],
  ['/products/dota-2-cheats/utilities', `${EN}/products/fifa-27-hacks/utilities/`],
  ['/products/dota-2-cheats/utilities/', `${EN}/products/fifa-27-hacks/utilities/`],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (
    (pathname.startsWith('/forum/') && pathname.length > '/forum/'.length) ||
    (pathname.startsWith('/blog/') && pathname.length > '/blog/'.length) ||
    (pathname.startsWith('/products/') && pathname.length > '/products/'.length)
  ) {
    const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return localePath(normalized, 'en');
  }

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    const first = pathname.split('/').filter(Boolean)[0];
    const localeCodes = new Set([
      'en',
      'pt-br',
      'de',
      'es',
      'fr',
      'it',
      'ar',
      'nl',
      'tr',
      'pl',
      'pt',
      'id',
    ]);
    if (first && !localeCodes.has(first)) {
      return localePath(`${pathname}/`, 'en');
    }
    return `${pathname}/`;
  }

  return null;
}

function localePath(path, locale) {
  let normalized = path || '/';
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  if (normalized !== '/' && !normalized.endsWith('/')) normalized = `${normalized}/`;
  if (normalized === '/') return `/${locale}/`;
  return `/${locale}${normalized}`;
}

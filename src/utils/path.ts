import { localePath, parseLocalizedPath } from '../i18n/paths';
import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* URLs → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': `${PRODUCT_BASE}elite/`,
  '/cheats/elite/': `${PRODUCT_BASE}elite/`,
  '/cheats/compare': '/blog/fifa-27-lite-vs-pro/',
  '/cheats/compare/': '/blog/fifa-27-lite-vs-pro/',
  '/contact': '/support/',
  '/contact/': '/support/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsElite: `${PRODUCT_BASE}elite/`,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}

/** Internal path with `/{locale}/` prefix; leaves http(s), mailto, and # alone. */
export function localizedHref(href: string, locale: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
    return href;
  }
  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
  const normalized = normalizeInternalPath(rawPath);
  const { path } = parseLocalizedPath(normalized);
  return localePath(path, locale) + hash;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

/** Affiliate checkout: same-tab navigation straight to Levo (no site /go/ hop, no extra tab). */
export function checkoutLinkAttrs(href: string): Record<string, string> {
  if (!isExternalHref(href)) return {};
  return { rel: 'noopener noreferrer' };
}

/** Other off-site links (e.g. Discord) — open in a new tab. */
export function externalLinkAttrs(href: string): Record<string, string> {
  if (!isExternalHref(href)) return {};
  return { target: '_blank', rel: 'noopener noreferrer' };
}

export function localizedProductPath(slug: string, locale: string): string {
  return localizedHref(productPath(slug), locale);
}

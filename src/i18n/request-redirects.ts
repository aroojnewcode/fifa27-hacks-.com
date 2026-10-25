import { resolvePathRedirect, TRAILING_SLASH_SKIP } from '../../scripts/redirects.mjs';
import { DEFAULT_LOCALE, RETIRED_LOCALE_CODES, isValidLocale } from './locales';
import { localePath } from './paths';

const LOCALE_ROOT_PATHS = new Set(['/en', '/pt-br', '/de', '/es', '/fr', '/it', '/ar']);

const RETIRED_LOCALES = new Set<string>(RETIRED_LOCALE_CODES);

const SKIP_LOCALE_PREFIX = ['/_astro/', '/go/', '/images/', '/favicon', '/logo', '/rss.xml', '/sitemap'];

function hasStaticExtension(pathname: string): boolean {
  return TRAILING_SLASH_SKIP.test(pathname);
}

function shouldSkipLocalePrefix(pathname: string): boolean {
  if (pathname === '/') return true;
  if (hasStaticExtension(pathname)) return true;
  return SKIP_LOCALE_PREFIX.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

function firstSegment(pathname: string): string | undefined {
  return pathname.split('/').filter(Boolean)[0];
}

function redirectRetiredLocale(pathname: string): string | null {
  const first = firstSegment(pathname);
  if (!first || !RETIRED_LOCALES.has(first)) return null;
  const rest = pathname.slice(`/${first}`.length) || '/';
  const sitePath = rest === '' || rest === '/' ? '/' : rest.startsWith('/') ? rest : `/${rest}`;
  const normalized = sitePath.endsWith('/') || sitePath === '/' ? sitePath : `${sitePath}/`;
  return localePath(normalized, DEFAULT_LOCALE);
}

/** Redirect target for Astro middleware, or null to continue. */
export function resolveSitePathRedirect(pathname: string): string | null {
  const retired = redirectRetiredLocale(pathname);
  if (retired) return retired;

  if (LOCALE_ROOT_PATHS.has(pathname)) {
    return `${pathname}/`;
  }

  const first = firstSegment(pathname);

  if (first && isValidLocale(first)) {
    if (pathname !== '/' && !pathname.endsWith('/') && !hasStaticExtension(pathname)) {
      return `${pathname}/`;
    }
    return null;
  }

  if (shouldSkipLocalePrefix(pathname)) {
    return null;
  }

  const legacy = resolvePathRedirect(pathname);
  if (legacy) {
    return legacy === pathname ? null : legacy;
  }

  const localized = localePath(pathname, DEFAULT_LOCALE);
  return localized === pathname ? null : localized;
}

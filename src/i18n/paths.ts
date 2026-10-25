import { DEFAULT_LOCALE, LOCALE_CODES, LOCALES, isValidLocale } from './locales';

export function localeStaticPaths() {
  return LOCALE_CODES.map((locale) => ({ params: { locale } }));
}

/** Strip leading /{locale}/ from pathname; returns locale + path without locale prefix. */
export function parseLocalizedPath(pathname: string): { locale: string; path: string } {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isValidLocale(first)) {
    const rest = segments.slice(1);
    const path = rest.length ? `/${rest.join('/')}/` : '/';
    return { locale: first, path };
  }
  return { locale: DEFAULT_LOCALE, path: pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/` };
}

export function localePath(path: string, locale: string): string {
  let normalized = path || '/';
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;

  const hashIndex = normalized.indexOf('#');
  const rawPath = hashIndex >= 0 ? normalized.slice(0, hashIndex) : normalized;
  const hash = hashIndex >= 0 ? normalized.slice(hashIndex) : '';

  let pathname = rawPath === '/' || rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
  const { path: sitePath } = parseLocalizedPath(pathname);
  if (sitePath === '/') return `/${locale}/${hash}`;
  return `/${locale}${sitePath}${hash}`;
}

export function switchLocalePath(pathname: string, targetLocale: string): string {
  const { path } = parseLocalizedPath(pathname);
  return localePath(path, targetLocale);
}

export function canonicalPathForLocale(path: string, locale: string): string {
  return localePath(path, locale);
}

export function hreflangAlternates(pathname: string, origin: string): { hreflang: string; href: string }[] {
  const { path } = parseLocalizedPath(pathname);
  return LOCALE_CODES.map((code) => ({
    hreflang: LOCALES[code].hreflang,
    href: `${origin}${localePath(path, code)}`,
  }));
}

import { setActiveLocale } from './active';
import { DEFAULT_LOCALE, LOCALE_CODES, isValidLocale } from './locales';
import { localeStaticPaths } from './paths';

export { localeStaticPaths };

export function initLocalePage(Astro: { params: { locale?: string } }): string {
  const raw = Astro.params.locale;
  const locale = isValidLocale(raw) ? raw! : DEFAULT_LOCALE;
  setActiveLocale(locale);
  return locale;
}

export function pathsWithLocale<T extends Record<string, string>>(
  build: () => T[],
): { params: T & { locale: string } }[] {
  return LOCALE_CODES.flatMap((locale) =>
    build().map((params) => ({ params: { locale, ...params } })),
  );
}

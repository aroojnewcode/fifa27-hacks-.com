import type { Translations } from './types';
import { en } from './en';
import { mergeTranslations } from './merge';
import { LOCALE_OVERRIDES } from './overrides/all';
import { getLocaleContent } from './fullLocales';
import { DEFAULT_LOCALE, isValidLocale } from './locales';

const cache = new Map<string, Translations>();

export function getTranslations(locale: string): Translations {
  const code = isValidLocale(locale) ? locale : DEFAULT_LOCALE;
  const cached = cache.get(code);
  if (cached) return cached;

  const overrides = LOCALE_OVERRIDES[code];
  const generated = getLocaleContent(code);
  let bundle = en;
  if (overrides) bundle = mergeTranslations(bundle, overrides);
  if (generated?.ui) bundle = mergeTranslations(bundle, generated.ui);
  cache.set(code, bundle);
  return bundle;
}

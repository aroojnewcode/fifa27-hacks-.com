import type { Translations } from './types';
import { DEFAULT_LOCALE } from './locales';
import { getTranslations } from './registry';

let activeLocale = DEFAULT_LOCALE;
let activeBundle: Translations = getTranslations(DEFAULT_LOCALE);

export function setActiveLocale(locale: string): void {
  activeLocale = locale;
  activeBundle = getTranslations(locale);
}

export function getActiveLocale(): string {
  return activeLocale;
}

export function getActiveTranslations(): Translations {
  return activeBundle;
}

/** Locale-aware `t` — read after setActiveLocale() in page/layout frontmatter. */
export const t: Translations = new Proxy({} as Translations, {
  get(_target, prop: string | symbol) {
    if (typeof prop !== 'string') return undefined;
    return (activeBundle as Record<string, unknown>)[prop];
  },
});

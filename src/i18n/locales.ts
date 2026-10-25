export type LocaleTier = 'default' | 'premium' | 'standard';

export interface LocaleDefinition {
  code: string;
  /** BCP 47 for hreflang / og:locale */
  hreflang: string;
  label: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  tier: LocaleTier;
  /** Open Graph locale */
  ogLocale: string;
}

export const DEFAULT_LOCALE = 'en';

export const LOCALES: Record<string, LocaleDefinition> = {
  en: {
    code: 'en',
    hreflang: 'en',
    label: 'English',
    nativeName: 'English',
    dir: 'ltr',
    tier: 'default',
    ogLocale: 'en_US',
  },
  'pt-br': {
    code: 'pt-br',
    hreflang: 'pt-BR',
    label: 'Brazil',
    nativeName: 'Português (Brasil)',
    dir: 'ltr',
    tier: 'premium',
    ogLocale: 'pt_BR',
  },
  de: {
    code: 'de',
    hreflang: 'de',
    label: 'Germany',
    nativeName: 'Deutsch',
    dir: 'ltr',
    tier: 'premium',
    ogLocale: 'de_DE',
  },
  es: {
    code: 'es',
    hreflang: 'es',
    label: 'Spain',
    nativeName: 'Español',
    dir: 'ltr',
    tier: 'premium',
    ogLocale: 'es_ES',
  },
  fr: {
    code: 'fr',
    hreflang: 'fr',
    label: 'France',
    nativeName: 'Français',
    dir: 'ltr',
    tier: 'premium',
    ogLocale: 'fr_FR',
  },
  it: {
    code: 'it',
    hreflang: 'it',
    label: 'Italy',
    nativeName: 'Italiano',
    dir: 'ltr',
    tier: 'premium',
    ogLocale: 'it_IT',
  },
  ar: {
    code: 'ar',
    hreflang: 'ar',
    label: 'UAE / KSA',
    nativeName: 'العربية',
    dir: 'rtl',
    tier: 'premium',
    ogLocale: 'ar_SA',
  },
};

/** Retired locale codes — 301 to English equivalent (see request-redirects). */
export const RETIRED_LOCALE_CODES = ['nl', 'tr', 'pl', 'pt', 'id'] as const;

export const LOCALE_CODES = Object.keys(LOCALES);

export function isValidLocale(code: string | undefined): code is string {
  return Boolean(code && LOCALES[code]);
}

export function getLocaleDefinition(code: string): LocaleDefinition {
  return LOCALES[code] ?? LOCALES.en;
}

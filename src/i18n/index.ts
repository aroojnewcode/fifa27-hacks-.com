export type { Translations } from './types';
export { en } from './en';
export { getTranslations } from './registry';
export { setActiveLocale, getActiveLocale, getActiveTranslations, t } from './active';
export { DEFAULT_LOCALE, LOCALES, LOCALE_CODES, getLocaleDefinition } from './locales';
export {
  localePath,
  parseLocalizedPath,
  switchLocalePath,
  localeStaticPaths,
  hreflangAlternates,
} from './paths';

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=111215,2d6ee2,1b1c24,e9a82f,0c0c12`;
}

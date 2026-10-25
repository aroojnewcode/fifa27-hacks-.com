import type { DeepPartial } from '../merge';
import type { Translations } from '../types';
import { LOCALE_CODES } from '../locales';
import { buildLocaleOverrides } from './builder';

const built: Record<string, DeepPartial<Translations>> = {};

for (const code of LOCALE_CODES) {
  if (code === 'en') continue;
  built[code] = buildLocaleOverrides(code);
}

export const LOCALE_OVERRIDES: Record<string, DeepPartial<Translations>> = built;

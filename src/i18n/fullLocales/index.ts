import type { LocaleContentBundle } from './types';

import ar from '../generated/ar.json';
import de from '../generated/de.json';
import es from '../generated/es.json';
import fr from '../generated/fr.json';
import id from '../generated/id.json';
import it from '../generated/it.json';
import nl from '../generated/nl.json';
import pl from '../generated/pl.json';
import pt from '../generated/pt.json';
import ptBr from '../generated/pt-br.json';
import tr from '../generated/tr.json';

export type { LocaleContentBundle, LocalizedProductCopy } from './types';

export const LOCALE_CONTENT: Record<string, LocaleContentBundle> = {
  de,
  es,
  fr,
  it,
  'pt-br': ptBr,
  ar,
  nl,
  tr,
  pl,
  pt,
  id,
};

function isEmptyBundle(bundle: LocaleContentBundle): boolean {
  return !bundle || Object.keys(bundle).length === 0;
}

export function getLocaleContent(locale: string): LocaleContentBundle | undefined {
  const bundle = LOCALE_CONTENT[locale];
  if (isEmptyBundle(bundle)) return undefined;
  return bundle;
}

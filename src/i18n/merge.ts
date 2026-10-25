import type { Translations } from './types';

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly (infer U)[]
    ? readonly U[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function mergeTranslations(base: Translations, overrides: DeepPartial<Translations>): Translations {
  const result = { ...base } as Record<string, unknown>;

  for (const key of Object.keys(overrides) as (keyof Translations)[]) {
    const patch = overrides[key];
    if (patch === undefined) continue;
    const current = base[key];

    if (Array.isArray(patch)) {
      result[key as string] = patch;
      continue;
    }

    if (isPlainObject(patch) && isPlainObject(current)) {
      result[key as string] = deepMergeObjects(current as Record<string, unknown>, patch as Record<string, unknown>);
      continue;
    }

    result[key as string] = patch;
  }

  return result as Translations;
}

function deepMergeObjects(
  base: Record<string, unknown>,
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...base };
  for (const key of Object.keys(overrides)) {
    const patch = overrides[key];
    const current = base[key];
    if (patch === undefined) continue;
    if (Array.isArray(patch)) {
      result[key] = patch;
      continue;
    }
    if (isPlainObject(patch) && isPlainObject(current)) {
      result[key] = deepMergeObjects(current, patch);
      continue;
    }
    result[key] = patch;
  }
  return result;
}

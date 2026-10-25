/** Preserve ?plan= etc. when sending users to external checkout. */
export function checkoutRedirectUrl(externalBase: string, requestUrl: URL): string {
  const dest = new URL(externalBase);
  requestUrl.searchParams.forEach((value, key) => {
    dest.searchParams.set(key, value);
  });
  return dest.toString();
}

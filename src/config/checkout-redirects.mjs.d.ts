export declare const LEVO_FC27_CHECKOUT: string;

export declare const CHECKOUT_URLS: {
  readonly fifa27: string;
  readonly skinChanger: string;
  readonly hwidSpoofer: string;
  readonly ugc: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;

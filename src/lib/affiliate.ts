export const AMAZON_TAG = "recomendou01-20";
export const MERCADO_LIVRE_AFFILIATE_ID = "recomendou";

export function buildAmazonUrl(opts: { asin?: string; url?: string }): string | null {
  if (opts.url) {
    const u = new URL(opts.url);
    u.searchParams.set("tag", AMAZON_TAG);
    return u.toString();
  }
  if (opts.asin) {
    return `https://www.amazon.com.br/dp/${opts.asin}?tag=${AMAZON_TAG}`;
  }
  return null;
}

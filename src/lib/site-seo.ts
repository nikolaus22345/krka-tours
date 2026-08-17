export const SITE_ORIGIN = "https://krka-tours.com";

/** Build an absolute canonical URL for a site path (no query strings). */
export function canonicalUrl(path: string): string {
  const normalized = path.replace(/\/+$/, "") || "/";
  return normalized === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalized}`;
}

export function pageCanonicalHead(path: string) {
  const href = canonicalUrl(path);
  return {
    links: [{ rel: "canonical" as const, href }],
    meta: [{ property: "og:url" as const, content: href }],
  };
}

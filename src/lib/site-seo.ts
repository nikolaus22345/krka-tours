export const SITE_ORIGIN = "https://www.krka-tours.com";
export const SITE_LOCALE = "en";

/** Build an absolute canonical URL for a site path (no query strings). */
export function canonicalUrl(path: string): string {
  const normalized = path.replace(/\/+$/, "") || "/";
  return normalized === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalized}`;
}

export function pageSeoHead(path: string) {
  const href = canonicalUrl(path);

  return {
    links: [
      { rel: "canonical" as const, href },
      { rel: "alternate" as const, hreflang: SITE_LOCALE, href },
      { rel: "alternate" as const, hreflang: "x-default", href },
      {
        rel: "describedby" as const,
        href: `${SITE_ORIGIN}/llms.txt`,
        type: "text/markdown",
      },
    ],
    meta: [
      { property: "og:url" as const, content: href },
      { property: "og:locale" as const, content: "en_US" },
      { name: "robots" as const, content: "index, follow, max-image-preview:large" },
    ],
  };
}

/** @deprecated Use pageSeoHead instead */
export function pageCanonicalHead(path: string) {
  return pageSeoHead(path);
}

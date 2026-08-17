import { tours } from "@/lib/tours";
import { canonicalUrl, SITE_ORIGIN } from "@/lib/site-seo";

export function buildLlmsTxt(): string {
  const dayTours = tours.filter((t) => t.category === "day");
  const multidayTours = tours.filter((t) => t.category === "multiday");
  const transferTour = tours.find((t) => t.slug === "private-transfers");

  const dayLinks = dayTours
    .map((t) => `- [${t.title}](${canonicalUrl(`/tours/${t.slug}`)}): ${t.intro}`)
    .join("\n");

  const multidayLinks = multidayTours
    .map((t) => `- [${t.title}](${canonicalUrl(`/tours/${t.slug}`)}): ${t.intro}`)
    .join("\n");

  const transferLine = transferTour
    ? `- [Private transfers](${canonicalUrl(`/tours/${transferTour.slug}`)}): ${transferTour.intro}`
    : `- [Private transfers](${canonicalUrl("/transfers")}): Premium Mercedes door-to-door transfers to Krka National Park.`;

  return `# Krka Tours

> Locally owned Krka National Park day tours and private transfers from Split, Dubrovnik, Zadar, Trogir and Šibenik.

Krka Tours offers guided small-group day trips to Krka National Park with hotel pick-up, park entrance and scenic boat rides. Custom private tours and Mercedes transfers are also available across Dalmatia and neighbouring countries.

## Main pages

- [Home](${canonicalUrl("/")}): Krka National Park tours and transfers across Dalmatia.
- [Day tours](${canonicalUrl("/tours")}): All Krka day trips from Croatian cities.
- [Multi-day tours](${canonicalUrl("/tours/multiday")}): Longer itineraries that include Krka National Park.
- [Private transfers](${canonicalUrl("/transfers")}): Fixed-price Mercedes transfers to Krka and beyond.
- [About](${canonicalUrl("/about")}): Meet the local team behind Krka Tours.
- [Contact](${canonicalUrl("/contact")}): Request availability or a custom quote.

## Day tours to Krka National Park

${dayLinks}

## Multi-day tours

${multidayLinks || "- See the multi-day tours listing for current itineraries."}

## Transfers

${transferLine}

## Optional

- [Sitemap](${SITE_ORIGIN}/sitemap.xml): Machine-readable list of indexable URLs.
- [Robots](${SITE_ORIGIN}/robots.txt): Crawler access rules.
`;
}

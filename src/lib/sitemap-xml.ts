import { tours } from "@/lib/tours";
import { canonicalUrl } from "@/lib/site-seo";

type SitemapEntry = {
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
};

const STATIC_PAGES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/tours", changefreq: "weekly", priority: "0.9" },
  { path: "/tours/multiday", changefreq: "weekly", priority: "0.9" },
  { path: "/transfers", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];

export function buildSitemapXml(): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const tourPages: SitemapEntry[] = tours.map((tour) => ({
    path: `/tours/${tour.slug}`,
    changefreq: "monthly",
    priority: tour.category === "day" ? "0.85" : "0.75",
  }));

  const entries = [...STATIC_PAGES, ...tourPages];

  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${canonicalUrl(entry.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

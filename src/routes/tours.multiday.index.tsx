import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/tours";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageCanonicalHead } from "@/lib/site-seo";

const multidayToursList = tours.filter((t) => t.category === "multiday");

export const Route = createFileRoute("/tours/multiday/")({
  head: () => {
    const canonical = pageCanonicalHead("/tours/multiday");
    return {
      meta: [
        { title: "Multi-Day Tours — Krka Tours" },
        {
          name: "description",
          content:
            "Private multi-day tours with Krka National Park at the heart: UNESCO Croatia, national parks, Dubrovnik and more.",
        },
        { property: "og:title", content: "Multi-Day Tours — Krka Tours" },
        { property: "og:description", content: "Private multi-day journeys across Croatia with Krka National Park." },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: MultidayToursIndex,
});

function MultidayToursIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Multi-Day Tours</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Private journeys across Croatia & the Balkans
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            From three-day city breaks to two-week grand tours — all private, with the same
            driver-guide, boutique hotels and transparent per-person pricing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link to="/tours" className="text-primary font-medium hover:underline">
              ← Day tours around Krka
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {multidayToursList.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-primary text-primary-foreground p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground">
            Need a custom itinerary?
          </h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
            Every multi-day tour can be tailored — extra nights, different routes, special
            occasions. Tell us your dates and we'll design it within 12 hours.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-7">
            <Link to="/contact" search={{ from: "Multi-day tours listing" }}>Plan my trip <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

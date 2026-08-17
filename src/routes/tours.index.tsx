import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/tours";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageCanonicalHead } from "@/lib/site-seo";

const dayToursList = tours.filter((t) => t.category === "day");

export const Route = createFileRoute("/tours/")({
  head: () => {
    const canonical = pageCanonicalHead("/tours");
    return {
      meta: [
        { title: "Day Trips — Krka Tours" },
        { name: "description", content: "Krka National Park Tour plus day trips from Split, Dubrovnik, Zadar, Trogir and Šibenik. Prices from €35." },
        { property: "og:title", content: "Day Trips — Krka Tours" },
        { property: "og:description", content: "Krka National Park tours from €35 — guided, private and city departures across Dalmatia." },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: ToursIndex,
});

function ToursIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">All Tours</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Krka National Park tours — prices & overview
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Flagship departures from Split, Dubrovnik, Trogir and Zadar — plus Šibenik and private park tours.
          </p>
          <Link
            to="/tours/multiday"
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
          >
            Looking for multi-day tours? View all →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {dayToursList.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-primary text-primary-foreground p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground">Not sure which to pick?</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
            Tell us how long you have and what you'd like to see. We'll suggest the right combination —
            free of charge.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-7">
            <Link to="/contact" search={{ from: "Day tours listing" }}>Plan my trip <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

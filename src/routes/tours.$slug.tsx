import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { tourBySlug, tours, type Tour } from "@/lib/tours";
import { TourPricingTable } from "@/components/tour-pricing-table";
import { TourPricingTiersTable } from "@/components/tour-pricing-tiers-table";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { Button } from "@/components/ui/button";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";
import {
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";
import { pageCanonicalHead } from "@/lib/site-seo";
import { WhatsThePlanSection } from "@/components/whats-the-plan-section";
import { dayPlanByTourSlug } from "@/lib/day-plan";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = tourBySlug(params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  head: ({ loaderData, params }) => {
    const canonical = pageCanonicalHead(`/tours/${params.slug}`);
    return {
      meta: loaderData
        ? [
            { title: `${loaderData.title} — Krka Tours` },
            { name: "description", content: loaderData.intro },
            { property: "og:title", content: `${loaderData.title} — Krka Tours` },
            { property: "og:description", content: loaderData.intro },
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
            ...canonical.meta,
          ]
        : [{ title: "Tour — Krka Tours" }, ...canonical.meta],
      links: canonical.links,
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-3xl">Tour not found</h1>
        <Button asChild variant="hero" className="mt-6">
          <Link to="/tours">Back to tours</Link>
        </Button>
      </div>
    </div>
  ),
  component: TourPage,
});

function ratingDots(value: number) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className={`h-1.5 w-1.5 rounded-full ${i < value ? "bg-primary" : "bg-border"}`} />
  ));
}

function TourPage() {
  const tour = Route.useLoaderData() as Tour;
  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);
  const dayPlan = dayPlanByTourSlug(tour.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-white">
          <Link to="/tours" className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All tours
          </Link>
          {tour.badge && (
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-gold-foreground px-3 py-1.5 text-xs font-semibold">
              ⚡ {tour.badge}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl text-white">
            {tour.title}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl font-light">{tour.intro}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {tour.duration}</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> {tour.group}</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Hotel pickup</span>
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-gold text-gold" /> 4.9 / 5</span>
          </div>
        </div>
      </section>

      {dayPlan && <WhatsThePlanSection city={dayPlan.id} />}

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold">Overview</h2>
          {tour.overview ? (
            <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
              {tour.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{tour.description}</p>
          )}

          {tour.pricing && (
            <TourPricingTable pricing={tour.pricing} currency={tour.currency} />
          )}

          <h3 className="mt-14 font-display text-xl sm:text-2xl font-semibold">Tour highlights</h3>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {tour.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display text-xl sm:text-2xl font-semibold">Itinerary</h3>
          {tour.itineraryNote && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{tour.itineraryNote}</p>
          )}
          <ol className="mt-6 relative border-l-2 border-border pl-6 sm:pl-8 space-y-7">
            {tour.itinerary.map((step) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[34px] sm:-left-[42px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">{step.time}</div>
                <div className="mt-1 font-display text-lg font-semibold">{step.title}</div>
                <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold">The price includes</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {tour.included.map((i) => (
                  <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Not included</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {tour.notIncluded.map((i) => (
                  <li key={i} className="flex gap-3"><XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" /><span>{i}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOOKING SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-28 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-elevated)]">
            {tour.pricing ? (
              <>
                <p className="text-xs uppercase tracking-wider text-muted-foreground text-center">
                  {tour.pricing.label}
                </p>
                <div className="mt-4">
                  <TourPricingTiersTable
                    tiers={tour.pricing.tiers}
                    currency={tour.currency}
                    compact
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground text-center">
                  Per person · total for group
                </p>
              </>
            ) : (
              <>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">From</span>
                  <span className="font-display text-3xl font-semibold">
                    {tour.currency}{tour.priceFrom}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground text-right -mt-1">per person</div>
              </>
            )}

            <div className="mt-6 space-y-3 text-sm">
              {tour.tourType && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tour type</span>
                  <span className="font-medium">{tour.tourType}</span>
                </div>
              )}
              <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{tour.duration}</span></div>
              {tour.departure && (
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground shrink-0">Departure</span>
                  <span className="font-medium text-right">{tour.departure}</span>
                </div>
              )}
              <div className="flex justify-between"><span className="text-muted-foreground">Group</span><span className="font-medium">{tour.group}</span></div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Fitness</span>
                <span className="inline-flex items-center gap-2 font-medium">{tour.fitness}/5 <span className="inline-flex gap-1">{ratingDots(tour.fitness)}</span></span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Technical</span>
                <span className="inline-flex items-center gap-2 font-medium">{tour.technical}/5 <span className="inline-flex gap-1">{ratingDots(tour.technical)}</span></span>
              </div>
            </div>

            {tour.destinations && tour.destinations.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Destinations</div>
                <ul className="mt-2 space-y-1.5 text-sm font-medium">
                  {tour.destinations.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button asChild variant="hero" size="lg" className="mt-7 w-full">
              <Link to="/contact" search={{ tour: tour.title, from: `Tour page — ${tour.shortTitle}` }}>Request availability</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="mt-3 w-full">
              <a href={`tel:${SITE_PHONE_TEL}`}>Call {SITE_PHONE_DISPLAY}</a>
            </Button>

            <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 15% deposit, balance later</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free cancellation up to 7 days</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Reply within 12 hours</div>
            </div>
          </div>
        </aside>
      </section>

      {/* INQUIRY */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Book this tour</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Request availability
            </h2>
            <p className="mt-3 text-muted-foreground">
              We reply within 12 hours — usually much faster.
            </p>
          </div>
          <ContactInquiryForm
            defaultTour={tour.title}
            source={`Tour page — ${tour.shortTitle}`}
          />
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">You might also like</h2>
            <Link to="/tours" className="text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              All tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((t) => (
              <Link
                key={t.slug}
                to="/tours/$slug"
                params={{ slug: t.slug }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden block"
              >
                <img src={t.image} alt={t.title} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/15" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-white/80">From {t.currency}{t.priceFrom}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">{t.shortTitle}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

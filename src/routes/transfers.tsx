import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";
import { ArrowRight, CheckCircle2, Plane, Car, Clock } from "lucide-react";
import transferImg from "@/assets/tour-transfer.jpg";
import { pageCanonicalHead } from "@/lib/site-seo";

export const Route = createFileRoute("/transfers")({
  head: () => {
    const canonical = pageCanonicalHead("/transfers");
    return {
      meta: [
        { title: "Private Transfers — Krka Tours" },
        { name: "description", content: "Premium Mercedes private transfers to Krka National Park and between any cities in Croatia, Slovenia, Italy and Bosnia." },
        { property: "og:title", content: "Private Transfers — Krka Tours" },
        { property: "og:description", content: "Premium Mercedes transfers to Krka and across the region." },
        { property: "og:image", content: transferImg },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: TransfersPage,
});

const routes = [
  { from: "Split Airport", to: "Krka National Park", price: 120, time: "1 h 00" },
  { from: "Split", to: "Krka National Park", price: 110, time: "1 h 00" },
  { from: "Šibenik", to: "Krka National Park", price: 55, time: "0 h 30" },
  { from: "Zadar", to: "Krka National Park", price: 130, time: "1 h 00" },
  { from: "Trogir", to: "Krka National Park", price: 110, time: "1 h 00" },
  { from: "Dubrovnik", to: "Krka National Park", price: 380, time: "3 h 30" },
  { from: "Split Airport", to: "Šibenik", price: 90, time: "0 h 50" },
  { from: "Zadar Airport", to: "Krka National Park", price: 140, time: "1 h 15" },
];

function TransfersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={transferImg} alt="Premium Mercedes transfer toward Krka National Park" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-white">
          <p className="text-xs uppercase tracking-[0.22em] text-white/80 font-semibold">Private Transfers</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl text-white">
            Door-to-door to Krka National Park & beyond.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl font-light">
            Premium Mercedes vehicles, English-speaking drivers, flight tracking and fixed prices —
            between Krka hotels, airports and any destination in Croatia, Slovenia, Italy or Bosnia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact" search={{ tour: "Private transfer", from: "Transfers page" }}>Request a quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={`tel:${SITE_PHONE_TEL}`}>Call {SITE_PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Plane, t: "Flight tracking", d: "We monitor your flight in real time — no waiting fees if you're delayed." },
            { icon: Car, t: "Premium fleet", d: "Mercedes V-Class (1–8 guests) and E-Class (1–3 guests), under three years old." },
            { icon: Clock, t: "Fixed prices", d: "Flat-rate quote in EUR, no surge, no surprises. Pay on arrival in cash or card." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-7">
              <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center"><f.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Sample routes</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-3xl">
            Transparent prices for popular Krka routes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Prices are per vehicle (up to 8 guests), one way, including driver, fuel, tolls and
            parking. Reach out for a custom route — we drive almost everywhere.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="rounded-2xl bg-card border border-border p-5 hover:border-primary transition-colors">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.from} →</div>
                <div className="font-display text-lg font-semibold mt-0.5">{r.to}</div>
                <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{r.time}</div>
                  <div className="font-display text-lg font-semibold">€{r.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2.5rem] bg-primary-dark text-primary-foreground p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-primary-foreground">Need a custom route?</h2>
            <p className="mt-3 text-primary-foreground/85 max-w-md">
              Tell us pickup, destination and date — fixed quote in 12 hours, usually faster.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {["Driver waits at arrivals with a sign", "Child seats free of charge", "Up to 8 passengers per vehicle", "Stops on the way at no extra cost"].map((x) => (
              <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />{x}</li>
            ))}
          </ul>
          <div className="lg:col-span-2">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact" search={{ tour: "Private transfer", from: "Transfers page" }}>Request transfer <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

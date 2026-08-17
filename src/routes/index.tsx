import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TourCard } from "@/components/tour-card";
import { HomeTopPlacesSection } from "@/components/home-top-places-section";
import { HomeToursVideoSection } from "@/components/home-tours-video-section";
import { WhatsThePlanSection } from "@/components/whats-the-plan-section";
import { tours } from "@/lib/tours";
import {
  Star,
  Shield,
  Award,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Quote,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/tour-national-parks.jpg";
import aboutVillage from "@/assets/about-village.jpg";
import istriaImg from "@/assets/tour-istria-v2.jpg";
import dubrovnikImg from "@/assets/tour-dubrovnik.jpg";
import coastImg from "@/assets/hero-coast.jpg";
import { pageCanonicalHead } from "@/lib/site-seo";

export const Route = createFileRoute("/")({
  head: () => {
    const canonical = pageCanonicalHead("/");
    return {
      meta: [
        { title: "Krka National Park Tour — Krka Tours" },
        {
          name: "description",
          content:
            "Krka National Park tours in Croatia. Day trips from Split, Dubrovnik, Zadar, Trogir and Šibenik with locally owned guides and premium vehicles.",
        },
        { property: "og:title", content: "Krka National Park Tour — Krka Tours" },
        {
          property: "og:description",
          content:
            "Krka National Park tours from Split, Dubrovnik, Zadar, Trogir and Šibenik. Guided day trips and private transfers.",
        },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: HomePage,
});

const dayTours = tours.filter((t) => t.category === "day");

const features = [
  {
    icon: Shield,
    title: "Hassle-free",
    text: "We handle the itinerary, hotel pickup, parking and park tickets. You just enjoy the waterfalls.",
  },
  {
    icon: HeartHandshake,
    title: "Book with confidence",
    text: "EU-registered tour operator, fully insured. 15% deposit, free cancellation up to 7 days.",
  },
  {
    icon: Award,
    title: "Tried & tested",
    text: "Proven Krka routes with sensible timings, pick-up points and park tickets included where stated.",
  },
  {
    icon: Sparkles,
    title: "Unbeatable support",
    text: "A real person on WhatsApp from the moment you book until you're back at the hotel.",
  },
];

const destinations = [
  {
    label: "From Split",
    sub: "From €55",
    image: dubrovnikImg,
    href: "/tours/$slug",
    slug: "krka-from-split",
  },
  {
    label: "From Dubrovnik",
    sub: "From €680",
    image: coastImg,
    href: "/tours/$slug",
    slug: "krka-from-dubrovnik",
  },
  {
    label: "From Trogir",
    sub: "From €55",
    image: aboutVillage,
    href: "/tours/$slug",
    slug: "krka-from-trogir",
  },
  {
    label: "From Zadar",
    sub: "From €49",
    image: istriaImg,
    href: "/tours/$slug",
    slug: "krka-from-zadar",
  },
] as const;

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    text: "Krka with Marko was the highlight of our two weeks in Croatia. He timed Skradinski buk perfectly so we beat every coach. The boat ride was worth the trip on its own.",
    rating: 5,
  },
  {
    name: "James & Eliza Carter",
    country: "Australia",
    text: "Booked the Krka day tour from Split. Premium van, zero stress, and the waterfalls looked unreal. We're already planning the return.",
    rating: 5,
  },
  {
    name: "David Klein",
    country: "United States",
    text: "The transfer from Split Airport to our hotel near Šibenik set the tone — on time, immaculate Mercedes, water waiting. Felt like a private concierge, not a taxi.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Which Krka tours are most popular?",
    a: "Our flagship is the Krka National Park Tour from Split. Guests also book heavily from Dubrovnik, Trogir and Zadar.",
  },
  {
    q: "Do you offer airport and hotel transfers?",
    a: "Yes — private transfers between Split Airport, Šibenik, Zadar, Trogir, Dubrovnik and destinations across Croatia, Slovenia, Italy or Bosnia & Herzegovina, in premium Mercedes vehicles with English-speaking drivers.",
  },
  {
    q: "Can tours be customised?",
    a: "Every private tour can be tailored to your pace, fitness level and pickup location. Share what you'd like to see and we'll design the itinerary within 12 hours.",
  },
  {
    q: "What's the booking and cancellation policy?",
    a: "Reserve with a 15% deposit, pay the balance on the day of the tour. Free cancellation up to 7 days before departure — travel credits valid for two years.",
  },
  {
    q: "What's included in the price?",
    a: "Private vehicle or small-group transfer, professional driver-guide, fuel, tolls, parking and bottled water. National park entrance fees and meals are listed transparently on each tour page.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Cascading waterfalls at Krka National Park, Croatia"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[640px] sm:min-h-[760px] lg:min-h-[820px] flex flex-col items-center justify-center text-center text-white py-24">
          <h1 className="font-display text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold tracking-tight max-w-5xl leading-[1.02] text-white">
            Krka National Park Tour
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl font-light">
            Day trips to Krka from Split, Dubrovnik, Trogir and Zadar — cascading waterfalls,
            emerald rivers and scenic boat rides with local guides.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/tours">
                Explore tours <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/contact" search={{ from: "Homepage" }}>Get a private quote</Link>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70 tracking-widest uppercase hidden sm:block">
            Scroll
          </div>
        </div>
      </section>

      {/* TOURS GRID */}
      <section id="tours" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Top departures</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight">
              Krka from Split, Dubrovnik, Trogir &amp; Zadar
            </h2>
          </div>
          <Button asChild variant="outline" size="lg" className="rounded-full self-start sm:self-auto">
            <Link to="/tours">View all tours <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {dayTours.slice(0, 6).map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>

      <WhatsThePlanSection />

      {/* ABOUT BAND */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <img
              src={heroImg}
              alt="Waterfalls and trails at Krka National Park, Croatia"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-[2rem] shadow-[var(--shadow-elevated)] w-full h-auto"
            />
            <div className="hidden sm:flex absolute -bottom-8 -right-4 lg:-right-8 bg-card border border-border rounded-2xl px-6 py-5 shadow-[var(--shadow-card)] items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold text-sm">2016</div>
              <div>
                <div className="text-sm font-semibold">Founded</div>
                <div className="text-xs text-muted-foreground">Krka day tours</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">About Krka Tours</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight">
              Krka National Park tours, booked simply.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              A locally owned Croatian team running day tours and private transfers to Krka
              National Park from Split, Dubrovnik, Zadar, Trogir and Šibenik — with hotel pick-up,
              clear pricing and personal support from first enquiry to drop-off.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Choose a small-group departure or a private tour tailored to your dates and pace.
              Every booking is handled directly by our team — no third-party reselling.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/about">More about us <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Top Destinations</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Split first — then Dubrovnik, Trogir &amp; Zadar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our most booked departures to Krka National Park — same local guides and premium
            vehicles from every city.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d) => (
            <Link
              key={d.label}
              to={d.href}
              params={{ slug: d.slug }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              <img
                src={d.image}
                alt={d.label}
                loading="lazy"
                width={800}
                height={1067}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/15" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="inline-flex items-center gap-1.5 text-xs text-white/80 uppercase tracking-wider">
                  <MapPin className="h-3 w-3" /> {d.sub}
                </div>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-white">{d.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <HomeTopPlacesSection />
      <HomeToursVideoSection />

      {/* WHY */}
      <section className="bg-primary text-primary-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70 font-semibold">Why Krka Tours</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight text-primary-foreground">
              The premium way to see Krka National Park
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-7">
                <div className="h-11 w-11 rounded-full bg-white/15 grid place-items-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Travellers say</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Loved across 40+ countries
          </h2>
          <div className="mt-6 inline-flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 average · 480+ verified reviews</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((r) => (
            <article key={r.name} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] relative">
              <Quote className="absolute top-6 right-6 h-7 w-7 text-primary-soft" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-7 pt-5 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.country}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">FAQ</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight">Good to know</h2>
          </div>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg font-medium hover:text-primary py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark text-primary-foreground p-10 sm:p-16 lg:p-20">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <img src={heroImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-primary-foreground">
              Ready to plan your Krka trip?
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg max-w-xl">
              Share a few details — pickup hotel, dates, what you&apos;d like to see — and we&apos;ll come back
              with a tailored itinerary within 12 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ from: "Homepage FAQ" }}>Get in touch</Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/tours">Browse tours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

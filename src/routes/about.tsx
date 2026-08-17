import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, MapPin, Leaf } from "lucide-react";
import aboutVillage from "@/assets/about-village.jpg";
import heroImg from "@/assets/tour-national-parks.jpg";
import { pageCanonicalHead } from "@/lib/site-seo";

export const Route = createFileRoute("/about")({
  head: () => {
    const canonical = pageCanonicalHead("/about");
    return {
      meta: [
        { title: "About — Krka Tours" },
        { name: "description", content: "Locally owned Krka National Park tours and private transfers across Dalmatia. A Croatian team running day trips since 2016." },
        { property: "og:title", content: "About Krka Tours" },
        { property: "og:description", content: "Krka National Park day tours and transfers — locally owned since 2016." },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">About us</p>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold leading-tight">
              A Croatian team for Krka National Park tours, founded in 2016.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              We organise day tours and private transfers to Krka from Split, Dubrovnik, Zadar,
              Trogir and Šibenik. Small groups, premium vehicles and clear pricing — every booking
              handled by our team from enquiry to drop-off.
            </p>
          </div>
          <img
            src={heroImg}
            alt="Waterfalls and trails at Krka National Park, Croatia"
            loading="lazy"
            width={1280}
            height={1280}
            className="rounded-[2rem] shadow-[var(--shadow-elevated)] w-full h-auto"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={heroImg}
          alt="Waterfalls and trails at Krka National Park"
          loading="lazy"
          width={1920}
          height={1280}
          className="rounded-[2rem] shadow-[var(--shadow-elevated)] w-full h-auto"
        />
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            What we offer
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            Certified local guides, comfortable Mercedes vehicles and flexible itineraries for
            Krka National Park. We keep groups small, include park entrance where stated, and
            adjust the pace to your interests.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Day tours, private trips and one-way transfers are all booked directly with us — no
            third-party reselling. Hotel pick-up, clear quotes and support by phone, email or
            WhatsApp throughout your trip.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-2xl text-primary-foreground">
            Why travellers book with us
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, n: "2016", l: "Founded" },
              { icon: Users, n: "Small", l: "Group sizes" },
              { icon: MapPin, n: "5", l: "Departure cities" },
              { icon: Leaf, n: "100%", l: "Direct booking" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-7">
                <s.icon className="h-6 w-6" />
                <div className="mt-5 font-display text-4xl font-semibold text-primary-foreground">{s.n}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2.5rem] bg-cream p-10 sm:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">Let&apos;s plan something together.</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            One email is enough to start. We&apos;ll suggest the right Krka route, dates and pace — free of
            charge.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-7">
            <Link to="/contact" search={{ from: "About page" }}>Get in touch <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

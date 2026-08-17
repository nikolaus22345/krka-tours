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
        { name: "description", content: "Locally owned Krka specialists since 2009. A small team of Croatian guides running Krka National Park tours and transfers across Dalmatia." },
        { property: "og:title", content: "About Krka Tours" },
        { property: "og:description", content: "Locally owned Krka specialists since 2009." },
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
              A small team of Croatian guides, specialists for Krka since 2009.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Three friends, a battered estate car, and the conviction that Krka National Park tours
              didn&apos;t have to feel rushed or generic. Fifteen years later we&apos;re still locally owned,
              still running every booking ourselves.
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
            What &quot;locally owned&quot; actually means
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            Every guide on our roster is Croatian and has personally walked the Krka trails
            in every season. We don&apos;t resell to third parties, we don&apos;t pad the group, and
            we don&apos;t rush you past Skradinski buk for a coach schedule.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our fleet is a small set of Mercedes V-Class and E-Class vehicles, maintained carefully
            and replaced on a strict schedule. Hotels we partner with near the park and on multi-day
            routes are family run wherever possible.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-2xl text-primary-foreground">
            Numbers we&apos;re quietly proud of
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, n: "15+", l: "Years guiding Krka" },
              { icon: Users, n: "12,000+", l: "Happy travellers" },
              { icon: MapPin, n: "4", l: "Countries covered" },
              { icon: Leaf, n: "100%", l: "Locally owned" },
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

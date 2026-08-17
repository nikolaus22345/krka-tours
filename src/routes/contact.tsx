import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import {
  SITE_EMAIL,
  SITE_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
} from "@/lib/site-contact";
import { pageCanonicalHead } from "@/lib/site-seo";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    tour: typeof search.tour === "string" ? search.tour : undefined,
    from: typeof search.from === "string" ? search.from : undefined,
  }),
  head: () => {
    const canonical = pageCanonicalHead("/contact");
    return {
      meta: [
        { title: "Contact — Krka Tours" },
        { name: "description", content: "Get in touch with Krka Tours. Tailored Krka National Park itineraries and quotes within 12 hours." },
        { property: "og:title", content: "Contact — Krka Tours" },
        { property: "og:description", content: "Tailored Krka National Park itineraries and quotes within 12 hours." },
        ...canonical.meta,
      ],
      links: canonical.links,
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { tour, from } = Route.useSearch();
  const source = from ?? (tour ? `Tour inquiry — ${tour}` : "Contact page");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Contact</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Tell us how you&apos;d like to see Krka
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Share a few details and we&apos;ll come back with a tailored itinerary and quote within 12
            hours — usually faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Phone, title: "Call us", line: SITE_PHONE_DISPLAY, href: `tel:${SITE_PHONE_TEL}` },
            { icon: MessageCircle, title: "WhatsApp", line: SITE_PHONE_DISPLAY, href: SITE_WHATSAPP_URL },
            { icon: Mail, title: "Email", line: SITE_EMAIL, href: SITE_MAILTO },
            { icon: MapPin, title: "Office", line: "Šibenik, Croatia" },
            { icon: Clock, title: "Office hours", line: "Mon–Sat · 08:00–20:00 CET" },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href ?? "#"}
              className="flex gap-4 items-start rounded-2xl border border-border p-5 hover:border-primary hover:bg-cream transition-colors"
            >
              <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <div className="font-medium mt-0.5">{c.line}</div>
              </div>
            </a>
          ))}
          <div className="rounded-2xl bg-primary text-primary-foreground p-6">
            <div className="font-display text-lg font-semibold">Already booked with us?</div>
            <p className="text-sm text-primary-foreground/85 mt-1">
              Reach the on-trip support line via WhatsApp 24/7 once your tour is confirmed.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactInquiryForm defaultTour={tour} source={source} />
          <p className="text-sm text-muted-foreground text-center mt-5">
            Prefer to browse first? <Link to="/tours" className="text-primary font-medium hover:underline">See all tours</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

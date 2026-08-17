import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { BrandLogo, BrandWordmark } from "@/components/brand-logo";
import { SITE_EMAIL, SITE_MAILTO, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <BrandLogo size={36} />
            <BrandWordmark className="text-lg text-white" />
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
            Krka National Park tours and transfers across Dalmatia. Locally owned since 2016.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Multi-day</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/tours/$slug" params={{ slug: "best-of-croatia-tour" }} className="hover:text-white">Best of Croatia</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "croatia-national-parks-tour" }} className="hover:text-white">National Parks</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "unesco-croatia-tour" }} className="hover:text-white">UNESCO Croatia</Link></li>
            <li><Link to="/tours/multiday" className="hover:text-white">All multi-day tours →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Day tours</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/tours/$slug" params={{ slug: "krka-from-split" }} className="hover:text-white">From Split</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "krka-from-dubrovnik" }} className="hover:text-white">From Dubrovnik</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "krka-from-trogir" }} className="hover:text-white">From Trogir</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "krka-from-zadar" }} className="hover:text-white">From Zadar</Link></li>
            <li><Link to="/tours/$slug" params={{ slug: "krka-from-sibenik" }} className="hover:text-white">From Šibenik</Link></li>
            <li><Link to="/tours" className="hover:text-white">All day tours →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/tours" className="hover:text-white">All tours</Link></li>
            <li><Link to="/transfers" className="hover:text-white">Private transfers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-white">{SITE_PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={SITE_MAILTO} className="hover:text-white">{SITE_EMAIL}</a>
            </li>
            <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0" />Šibenik, Croatia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Krka Tours</p>
        </div>
      </div>
    </footer>
  );
}

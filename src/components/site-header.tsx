import { Link } from "@tanstack/react-router";
import { Star, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo, BrandWordmark } from "@/components/brand-logo";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Day trips" },
  { to: "/tours/multiday", label: "Multi-day" },
  { to: "/transfers", label: "Transfers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top promo band */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center font-medium">
          ✓ Free cancellation up to 7 days before · ✓ Book with just 15% deposit · ✓ Locally owned
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 min-w-0 group">
            <BrandLogo size={44} className="shrink-0 transition-transform group-hover:scale-105" />
            <BrandWordmark className="text-[19px] sm:text-[21px] truncate" />
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-foreground">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 bg-background">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span>4.9 · 480+ reviews</span>
            </div>
            <Button asChild variant="hero" size="lg" className="hidden sm:inline-flex">
              <Link to="/contact" search={{ from: "Header" }}>Get in touch</Link>
            </Button>
            <button
              type="button"
              className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-2 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-3 w-full">
                <Link to="/contact" search={{ from: "Header" }} onClick={() => setOpen(false)}>Get in touch</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

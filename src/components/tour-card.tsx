import { Link } from "@tanstack/react-router";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import type { Tour } from "@/lib/tours";

function ratingDots(value: number) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className={`h-1.5 w-1.5 rounded-full ${i < value ? "bg-primary" : "bg-border"}`}
    />
  ));
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to="/tours/$slug"
      params={{ slug: tour.slug }}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />

          {/* Duration pill top-left */}
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground shadow">
            <Clock className="h-3.5 w-3.5" />
            {tour.durationDays}
          </span>

          {/* Badge top-right */}
          {tour.badge && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold px-3 py-1.5 shadow">
              ⚡ {tour.badge}
            </span>
          )}

          {/* Title overlay on image */}
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <h3 className="font-display text-2xl sm:text-[1.65rem] leading-tight font-semibold text-white">
              {tour.shortTitle}
            </h3>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-1.5">
              <span className="font-medium text-foreground">{tour.fitness}/5</span> Fitness
              <span className="ml-1.5 inline-flex gap-1">{ratingDots(tour.fitness)}</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <span className="font-medium text-foreground">{tour.technical}/5</span> Technical
              <span className="ml-1.5 inline-flex gap-1">{ratingDots(tour.technical)}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {tour.group}
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">from</div>
              <div className="font-display text-lg font-semibold leading-tight">
                {tour.currency}{tour.priceFrom}
                <span className="text-xs font-normal text-muted-foreground">
                  {" "}
                  / {tour.priceUnit === "group" ? "group" : "person"}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
            View tour
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}

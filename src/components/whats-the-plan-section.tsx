"use client";

import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { dayPlans, type DayPlan, type DayPlanCity, type DayPlanStep } from "@/lib/day-plan";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shapeClass: Record<DayPlanStep["shape"], string> = {
  notch:
    "[clip-path:polygon(0_0,100%_0,100%_36%,86%_50%,100%_64%,100%_100%,0_100%)]",
  arch: "rounded-t-[999px] rounded-b-2xl",
  tab: "[clip-path:polygon(0_0,100%_0,100%_100%,58%_100%,50%_90%,42%_100%,0_100%)]",
  soft: "rounded-[2rem_0.85rem_2rem_0.85rem]",
  slant: "rounded-[0.85rem_2.4rem_0.85rem_2.4rem]",
};

function PlanStepCard({ step }: { step: DayPlanStep }) {
  const caption = (
    <div className={cn(step.captionTop ? "mb-4" : "mt-4")}>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-primary leading-snug">
        {step.title}
      </h3>
      <p className="mt-1 text-sm text-foreground/80 font-medium">{step.detail}</p>
    </div>
  );

  return (
    <article className="relative w-[220px] sm:w-[240px] shrink-0 snap-start">
      {step.captionTop && caption}

      <div className="relative">
        <span
          className="pointer-events-none absolute -right-1 -top-3 z-10 font-display text-5xl sm:text-6xl font-semibold leading-none text-[#c4a574]/80 select-none"
          aria-hidden
        >
          {step.n}
        </span>
        <div
          className={cn(
            "relative aspect-[3/4] overflow-hidden bg-muted shadow-[var(--shadow-card)]",
            shapeClass[step.shape],
          )}
        >
          <img
            src={step.image}
            alt={step.imageAlt}
            loading="lazy"
            width={480}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {!step.captionTop && caption}
    </article>
  );
}

type Props = {
  /** Lock to one city (e.g. on a tour detail page). */
  city?: DayPlanCity;
  className?: string;
};

export function WhatsThePlanSection({ city, className }: Props) {
  const [activeId, setActiveId] = useState<DayPlanCity>(city ?? "split");
  const plan: DayPlan = dayPlans.find((p) => p.id === (city ?? activeId)) ?? dayPlans[0];
  const showTabs = !city;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(max > 8 && el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    // Images can change scrollWidth after load
    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("load", updateScrollState));

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", updateScrollState));
    };
  }, [plan.id, updateScrollState]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(280, el.clientWidth * 0.7) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={cn("bg-cream py-20 sm:py-28 overflow-hidden", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 lg:gap-10 items-start">
          <p
            className="hidden md:block shrink-0 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-primary/80"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Couldn&apos;t ask for more
          </p>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold text-primary leading-tight">
                  What&apos;s the plan?
                </h2>
                <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl">
                  A typical Krka day — times shift a little by departure city. Pick yours to see the flow.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Scroll plan left"
                  className={cn(
                    "h-11 w-11 rounded-full border grid place-items-center transition-colors",
                    canScrollLeft
                      ? "border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground"
                      : "border-border text-muted-foreground/40 bg-background cursor-not-allowed",
                  )}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  disabled={!canScrollRight}
                  aria-label="Scroll plan right"
                  className={cn(
                    "inline-flex h-11 items-center gap-2 rounded-full border px-4 transition-colors",
                    canScrollRight
                      ? "border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground"
                      : "border-border text-muted-foreground/40 bg-background cursor-not-allowed",
                  )}
                >
                  <span className="text-sm font-semibold tracking-wide">Swipe</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {showTabs && (
              <div className="mt-8 flex flex-wrap gap-2">
                {dayPlans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors border",
                      plan.id === p.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary hover:text-primary",
                    )}
                  >
                    From {p.label}
                  </button>
                ))}
              </div>
            )}

            {!showTabs && (
              <p className="mt-4 text-sm font-semibold text-primary tracking-wide uppercase">
                From {plan.label}
              </p>
            )}

            <div className="relative mt-10">
              {/* Edge fades — hint more content */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-12 bg-gradient-to-r from-cream to-transparent transition-opacity",
                  canScrollLeft ? "opacity-100" : "opacity-0",
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-cream to-transparent transition-opacity",
                  canScrollRight ? "opacity-100" : "opacity-0",
                )}
                aria-hidden
              />

              <div
                ref={scrollerRef}
                key={plan.id}
                className="plan-scroller flex gap-8 sm:gap-10 overflow-x-auto pb-5 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-1"
              >
                {plan.steps.map((step) => (
                  <PlanStepCard key={`${plan.id}-${step.n}`} step={step} />
                ))}
              </div>
            </div>

            {showTabs && (
              <div className="mt-8">
                <Link
                  to="/tours/$slug"
                  params={{ slug: plan.tourSlug }}
                  className="inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  View {plan.label} tour details →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

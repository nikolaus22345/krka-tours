const YOUTUBE_EMBED_ID = "lrvoreqJvV0";

export function HomeToursVideoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <div className="rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elevated)] overflow-hidden grid lg:grid-cols-2">
        <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Private day &amp; multi-day Krka National Park tours
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
            <strong className="text-foreground font-semibold">Krka Tours</strong> runs private
            day trips and longer journeys centred on Krka National Park — always with the same
            English-speaking driver-guide, premium Mercedes vehicles and hotel pick-up included.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
            Whether you want a single day at <strong className="text-foreground font-semibold">Krka</strong>, a
            day trip from <strong className="text-foreground font-semibold">Split, Zadar or Šibenik</strong>, or a week-long route to{" "}
            <strong className="text-foreground font-semibold">Dubrovnik</strong>, we design the itinerary around your
            pace. Reserve with a 15% deposit — free cancellation up to 7 days before departure.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
            Watch a glimpse of the landscapes our guests explore on private Krka tours —
            then tell us your dates and we&apos;ll send a tailored quote within 12 hours.
          </p>
        </div>

        <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px] bg-muted">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
            title="Krka Tours — private Krka National Park tours in Croatia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

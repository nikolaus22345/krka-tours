"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import krkaImg from "@/assets/tour-national-parks.jpg";
import istriaImg from "@/assets/tour-istria-v2.jpg";
import dubrovnikImg from "@/assets/tour-dubrovnik.jpg";
import nationalParksImg from "@/assets/tour-national-parks.jpg";
import heroCoast from "@/assets/hero-coast.jpg";
import aboutVillage from "@/assets/about-village.jpg";
import tourWine from "@/assets/tour-wine.jpg";

type PlaceTab = {
  id: string;
  label: string;
  cardImage: string;
  cardAlt: string;
  sideImage: string;
  sideAlt: string;
  paragraphs: ReactNode[];
};

const placeTabs: PlaceTab[] = [
  {
    id: "top-places",
    label: "Top Places",
    cardImage: krkaImg,
    cardAlt: "Cascading waterfalls at Krka National Park",
    sideImage: nationalParksImg,
    sideAlt: "Skradinski buk waterfalls at Krka National Park",
    paragraphs: [
      <>
        <strong>Krka National Park</strong> is one of Croatia&apos;s most spectacular natural wonders —
        cascading waterfalls, emerald rivers and riverside boardwalks centred on Skradinski buk.
        Our private tours time your visit to avoid the busiest coach arrivals.
      </>,
      <>
        With a private driver-guide you set the pace: linger at the waterfalls, take a scenic boat
        ride, or add Visovac viewpoints.{" "}
        <strong>No crowded coaches, no fixed timetable</strong> — just your group, a premium vehicle
        and routes refined over 15 years on the trails.
      </>,
    ],
  },
  {
    id: "national-parks",
    label: "National Parks",
    cardImage: nationalParksImg,
    cardAlt: "Cascading waterfalls and forest trails in a Croatian national park",
    sideImage: aboutVillage,
    sideAlt: "Traditional Dalmatian village near Krka at golden hour",
    paragraphs: [
      <>
        <strong>Krka</strong> is the headline — but Croatia&apos;s park network goes further.
        We plan Paklenica, Plitvice and Mljet for guests who want hiking, boat rides and quieter trails.
      </>,
      <>
        Every park stop is planned around your fitness level and the season — spring waterfalls,
        summer swimming (where allowed), autumn colour. Multi-day routes link the best parks without rushing.
      </>,
    ],
  },
  {
    id: "istria",
    label: "Istria & Kvarner",
    cardImage: istriaImg,
    cardAlt: "Hill town and vineyards in Istria",
    sideImage: tourWine,
    sideAlt: "Wine tasting in the Croatian countryside",
    paragraphs: [
      <>
        <strong>Istria</strong> feels closer to Tuscany than typical Croatia — truffle country,
        hilltop villages like Motovun and Hum, and the elegant waterfront at Opatija. Pair a Krka
        day with a private Istria tour on another date.
      </>,
      <>
        The <strong>Kvarner Gulf</strong> adds Rijeka, Lovran and the islands of Krk and Cres within
        easy reach. Combine a coastal walk and a long lunch overlooking the sea — all in one tailored
        itinerary.
      </>,
    ],
  },
  {
    id: "dalmatia",
    label: "Dalmatia",
    cardImage: dubrovnikImg,
    cardAlt: "Historic stone city and Adriatic coastline in Dalmatia",
    sideImage: heroCoast,
    sideAlt: "Dalmatian coast — gateway to Krka National Park",
    paragraphs: [
      <>
        <strong>Split, Šibenik, Zadar, Trogir and Dubrovnik</strong> anchor the Dalmatian coast.
        Our day tours depart from each city to Krka — so the park visit is easy from wherever you stay.
      </>,
      <>
        For guests with more time, our <strong>multi-day private tours</strong> stitch Krka and
        the coast together — boutique hotels, island hops and sunset walks, all with the same
        driver-guide throughout.
      </>,
    ],
  },
  {
    id: "multi-day",
    label: "Multi-Day Tours",
    cardImage: dubrovnikImg,
    cardAlt: "Dubrovnik old town walls above the Adriatic",
    sideImage: krkaImg,
    sideAlt: "Krka National Park — highlight of multi-day tours",
    paragraphs: [
      <>
        Beyond single-day trips, we run <strong>private multi-day tours</strong> with Krka at the
        heart — UNESCO Croatia, national parks, Best of Croatia and grand journeys to Dubrovnik.
      </>,
      <>
        Every multi-day tour uses the <strong>same vehicle and guide</strong>, hand-picked hotels and
        transparent per-person pricing. Tell us your dates and interests — we reply with a full
        itinerary within 12 hours, no payment required to inquire.
      </>,
    ],
  },
];

function PlacePanel({ tab }: { tab: PlaceTab }) {
  return (
    <div className="mt-10 lg:mt-12 grid lg:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[minmax(0,1fr)_260px] gap-5 lg:gap-7 items-stretch">
      <div className="rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elevated)] overflow-hidden grid md:grid-cols-2 min-h-[320px]">
        <div className="relative min-h-[220px] md:min-h-full">
          <img
            src={tab.cardImage}
            alt={tab.cardAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-center space-y-5 text-muted-foreground leading-relaxed">
          {tab.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[15px] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-card)] min-h-[360px]">
        <img
          src={tab.sideImage}
          alt={tab.sideAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export function HomeTopPlacesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight max-w-4xl mx-auto">
        Top places for private Krka & Croatia tours
      </h2>

      <Tabs defaultValue="top-places" className="mt-10 sm:mt-12">
        <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          <TabsList className="flex h-auto w-max min-w-full sm:min-w-0 sm:w-full justify-start sm:justify-center gap-1 sm:gap-2 bg-transparent p-0 rounded-none">
            {placeTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 sm:px-5 py-3",
                  "text-sm sm:text-[15px] font-medium text-muted-foreground shadow-none",
                  "data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "hover:text-foreground transition-colors",
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mt-2 border-b border-border" />

        {placeTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0 focus-visible:ring-0">
            <PlacePanel tab={tab} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

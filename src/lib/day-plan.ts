import aboutVillage from "@/assets/about-village.jpg";
import tourNationalParks from "@/assets/tour-national-parks.jpg";
import tourDubrovnik from "@/assets/tour-dubrovnik.jpg";
import heroCoast from "@/assets/hero-coast.jpg";
import tourTransfer from "@/assets/tour-transfer.jpg";
import tourKvarner from "@/assets/tour-kvarner.jpg";
import tourIstria from "@/assets/tour-istria-v2.jpg";
import tourWine from "@/assets/tour-wine.jpg";

export type DayPlanCity = "split" | "dubrovnik" | "trogir" | "zadar" | "sibenik";

export type DayPlanStep = {
  n: string;
  title: string;
  detail: string;
  image: string;
  imageAlt: string;
  /** Place caption above the image (odd visual rhythm). */
  captionTop?: boolean;
  /** Decorative image mask variant. */
  shape: "notch" | "arch" | "tab" | "soft" | "slant";
};

export type DayPlan = {
  id: DayPlanCity;
  label: string;
  tourSlug: string;
  steps: DayPlanStep[];
};

const parkImages = {
  meet: aboutVillage,
  depart: tourTransfer,
  arrive: tourNationalParks,
  guide: tourKvarner,
  free: tourNationalParks,
  lunch: tourWine,
  boat: heroCoast,
  returnCity: {
    split: tourDubrovnik,
    dubrovnik: heroCoast,
    trogir: aboutVillage,
    zadar: tourIstria,
    sibenik: tourNationalParks,
  },
} as const;

function buildPlan(
  id: DayPlanCity,
  label: string,
  tourSlug: string,
  times: {
    meet: string;
    depart: string;
    arrive: string;
    back: string;
  },
): DayPlan {
  return {
    id,
    label,
    tourSlug,
    steps: [
      {
        n: "01",
        title: "Meeting point",
        detail: times.meet,
        image: parkImages.meet,
        imageAlt: `Meeting point in ${label}`,
        shape: "notch",
      },
      {
        n: "02",
        title: `Departure from ${label}`,
        detail: times.depart,
        image: parkImages.depart,
        imageAlt: `Tour departure from ${label}`,
        captionTop: true,
        shape: "soft",
      },
      {
        n: "03",
        title: "Arrival to NP Krka",
        detail: times.arrive,
        image: parkImages.arrive,
        imageAlt: "Arrival at Krka National Park",
        shape: "arch",
      },
      {
        n: "04",
        title: "Sightseeing with a tour guide",
        detail: "Skradinski buk trails & viewpoints",
        image: parkImages.guide,
        imageAlt: "Guided sightseeing at Krka waterfalls",
        captionTop: true,
        shape: "tab",
      },
      {
        n: "05",
        title: "Free time at Krka Waterfalls",
        detail: "Photos, short walks, seasonal swimming where allowed",
        image: parkImages.free,
        imageAlt: "Free time at Krka waterfalls",
        shape: "slant",
      },
      {
        n: "06",
        title: "Lunch break",
        detail: "Time for a local meal near the park",
        image: parkImages.lunch,
        imageAlt: "Lunch break near Krka National Park",
        captionTop: true,
        shape: "notch",
      },
      {
        n: "07",
        title: "Boat ride on the Krka River",
        detail: "Scenic cruise when available",
        image: parkImages.boat,
        imageAlt: "Boat ride on the Krka River",
        shape: "arch",
      },
      {
        n: "08",
        title: `Arrival back to ${label}`,
        detail: times.back,
        image: parkImages.returnCity[id],
        imageAlt: `Return to ${label}`,
        captionTop: true,
        shape: "soft",
      },
    ],
  };
}

export const dayPlans: DayPlan[] = [
  buildPlan("split", "Split", "krka-from-split", {
    meet: "9:30 – 9:45 AM",
    depart: "at 10:00 AM",
    arrive: "around 11:30 AM",
    back: "around 5:30 PM",
  }),
  buildPlan("dubrovnik", "Dubrovnik", "krka-from-dubrovnik", {
    meet: "5:45 – 6:00 AM",
    depart: "at 6:15 AM",
    arrive: "around 10:00 AM",
    back: "around 8:00 PM",
  }),
  buildPlan("trogir", "Trogir", "krka-from-trogir", {
    meet: "9:15 – 9:30 AM",
    depart: "at 9:45 AM",
    arrive: "around 11:15 AM",
    back: "around 5:45 PM",
  }),
  buildPlan("zadar", "Zadar", "krka-from-zadar", {
    meet: "8:30 – 8:45 AM",
    depart: "at 9:00 AM",
    arrive: "around 10:30 AM",
    back: "around 4:30 PM",
  }),
  buildPlan("sibenik", "Šibenik", "krka-from-sibenik", {
    meet: "9:00 – 9:15 AM",
    depart: "at 9:30 AM",
    arrive: "around 10:00 AM",
    back: "around 3:30 PM",
  }),
];

export const dayPlanByCity = (id: DayPlanCity) => dayPlans.find((p) => p.id === id);

export const dayPlanByTourSlug = (slug: string) => dayPlans.find((p) => p.tourSlug === slug);

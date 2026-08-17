import type { TourPricing } from "./tour-pricing";

export type Tour = {
  slug: string;
  title: string;
  shortTitle: string;
  badge?: string;
  tourType?: string;
  duration: string;
  durationDays: string;
  departure?: string;
  group: string;
  fitness: number;
  technical: number;
  priceFrom: number;
  currency: string;
  /** Shown next to the price on cards; defaults to "/ person". */
  priceUnit?: "person" | "group";
  image: string;
  intro: string;
  description: string;
  overview?: string[];
  highlights: string[];
  destinations?: string[];
  itinerary: { time: string; title: string; text: string }[];
  itineraryNote?: string;
  included: string[];
  notIncluded: string[];
  pricing?: TourPricing;
  category: "day" | "multiday" | "transfer";
};

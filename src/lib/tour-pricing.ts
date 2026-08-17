import { SITE_EMAIL } from "@/lib/site-contact";

export type PriceTier = {
  persons: string;
  price: number;
};

export type TourPricing = {
  label: string;
  tiers: PriceTier[];
  contactEmail?: string;
};

const CONTACT_EMAIL = SITE_EMAIL;

export function privatePricing(two: number, mid: number, six: number): TourPricing {
  return {
    label: "Private tour",
    tiers: [
      { persons: "2", price: two },
      { persons: "3–4", price: mid },
      { persons: "5–6", price: six },
    ],
    contactEmail: CONTACT_EMAIL,
  };
}

export const STANDARD_INCLUDED = [
  "Comfortable A/C sedan or minivan transportation",
  "Friendly guidance of a professional, licensed English-speaking Krka Tours guide & driver",
  "Hotel pick-up and drop-off",
  "All tolls, fuel and parking",
];

export const STANDARD_NOT_INCLUDED = [
  "Entrance tickets unless stated otherwise",
  "Lunch and drinks",
  "Gratuities",
];

export const ITINERARY_NOTE =
  "Standard departure time is 8:00 AM from your accommodation and can be customized according to your preferences.";

function parsePersonCounts(persons: string): number[] {
  const normalized = persons.replace(/–/g, "-");
  if (normalized.includes("-")) {
    const [min, max] = normalized.split("-").map((n) => Number(n.trim()));
    return [min, max];
  }
  return [Number(normalized)];
}

export function formatPricingTotal(
  persons: string,
  pricePerPerson: number,
  currency = "€",
): string {
  const counts = parsePersonCounts(persons);
  if (counts.length === 1) {
    return `${counts[0]! * pricePerPerson} ${currency}`;
  }
  const [min, max] = counts;
  return `${min! * pricePerPerson}–${max! * pricePerPerson} ${currency}`;
}

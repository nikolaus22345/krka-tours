import tourNationalParks from "@/assets/tour-national-parks.jpg";
import tourDubrovnik from "@/assets/tour-dubrovnik.jpg";
import tourTransfer from "@/assets/tour-transfer.jpg";
import tourKvarner from "@/assets/tour-kvarner.jpg";
import heroCoast from "@/assets/hero-coast.jpg";
import aboutVillage from "@/assets/about-village.jpg";
import tourIstria from "@/assets/tour-istria-v2.jpg";
import { multidayTours } from "./multiday-tours";
import {
  type PriceTier,
  type TourPricing,
  privatePricing,
  STANDARD_INCLUDED,
  STANDARD_NOT_INCLUDED,
  ITINERARY_NOTE,
  formatPricingTotal,
} from "./tour-pricing";
import type { Tour } from "./tour-types";

export type { Tour, PriceTier, TourPricing };
export { privatePricing, STANDARD_INCLUDED, STANDARD_NOT_INCLUDED, ITINERARY_NOTE, formatPricingTotal };

const PARK_INCLUDED = [
  "National park entrance ticket",
  "Certified local English-speaking guide",
  "Scenic boat ride on the Krka River (when available)",
];

const PARK_NOT_INCLUDED = ["Lunch and drinks", "Gratuities", "Personal expenses"];

export const dayTours: Tour[] = [
{
    slug: "krka-from-split",
    category: "day",
    title: "Krka National Park Tour from Split",
    shortTitle: "From Split",
    badge: "Bestseller",
    tourType: "Small group",
    duration: "8–10 hours",
    durationDays: "8–10 hours",
    departure: "On request · morning pick-up",
    group: "Small group · pick-up included",
    fitness: 2,
    technical: 1,
    priceFrom: 55,
    currency: "€",
    image: tourDubrovnik,
    intro:
      "Full-day adventure from Split to Krka National Park — return transportation, small group, park entrance and a scenic boat ride.",
    description:
      "Join a comfortable air-conditioned transfer from Split and explore Krka’s waterfalls with an expert local guide.",
    overview: [
      "Travel from Split in a comfortable vehicle — about 1 hour each way.",
      "Follow your guide along scenic trails to Skradinski buk and riverside viewpoints.",
      "Enjoy a boat ride on the Krka River when available.",
    ],
    destinations: ["Split", "Krka National Park"],
    highlights: [
      "Return transportation",
      "Small group",
      "Park entrance",
      "Boat ride",
      "Hotel pick-up options",
    ],
    itineraryNote: "Morning start recommended. Drive from Split is about 1 hour each way.",
    itinerary: [
      { time: "Morning", title: "Pick-up in Split", text: "Depart Split toward Krka National Park." },
      { time: "Park", title: "Krka guided visit", text: "Skradinski buk, trails and boat ride." },
      { time: "Afternoon", title: "Return to Split", text: "Drop-off in Split." },
    ],
    included: [
      "Return transportation from Split",
      "Park entrance ticket",
      "Local guide",
      "Boat ride (when available)",
    ],
    notIncluded: ["Lunch and drinks", "Gratuities"],
  },
  {
    slug: "krka-from-dubrovnik",
    category: "day",
    title: "Dubrovnik to Krka National Park Tour",
    shortTitle: "From Dubrovnik",
    badge: "Private · up to 3",
    tourType: "Private",
    duration: "11–13 hours",
    durationDays: "11–13 hours",
    departure: "On request · early morning",
    group: "Private · up to 3 guests",
    fitness: 2,
    technical: 1,
    priceFrom: 680,
    currency: "€",
    priceUnit: "group",
    image: heroCoast,
    intro:
      "Private Dubrovnik to Krka National Park tour — return transportation, hotel pick-up & drop-off, for up to 3 persons.",
    description:
      "A long but unforgettable private day from Dubrovnik to Krka’s cascading waterfalls.",
    overview: [
      "Private vehicle and guide from your Dubrovnik hotel to Krka and back.",
      "Flexible park visit timed around your group — Skradinski buk and boat ride.",
      "Ideal for travellers who want Krka without changing base from Dubrovnik.",
    ],
    destinations: ["Dubrovnik", "Krka National Park"],
    highlights: [
      "Private tour",
      "Return transportation",
      "Pick-up & drop-off",
      "Up to 3 persons",
      "Flexible park itinerary",
    ],
    itineraryNote: "Very early start required — long drive each way from Dubrovnik.",
    itinerary: [
      { time: "Early", title: "Pick-up in Dubrovnik", text: "Private departure toward Krka." },
      { time: "Park", title: "Krka National Park visit", text: "Guided walk of waterfalls and trails." },
      { time: "Evening", title: "Return to Dubrovnik", text: "Drop-off at your accommodation." },
    ],
    included: [
      "Private return transportation",
      "Hotel pick-up & drop-off",
      "Private driver-guide",
      "Park entrance ticket",
    ],
    notIncluded: ["Lunch and drinks", "Gratuities"],
    pricing: {
      label: "Private tour (up to 3 persons)",
      tiers: [{ persons: "1–3", price: 680 }],
    },
  },
  {
    slug: "krka-from-trogir",
    category: "day",
    title: "Krka Tour from Trogir",
    shortTitle: "From Trogir",
    badge: "Popular",
    tourType: "Small group",
    duration: "8–10 hours",
    durationDays: "8–10 hours",
    departure: "On request · morning pick-up",
    group: "Small group · pick-up included",
    fitness: 2,
    technical: 1,
    priceFrom: 55,
    currency: "€",
    image: aboutVillage,
    intro:
      "From Trogir to Krka National Park — park entrance, return transportation, Wi-Fi and a scenic river boat ride.",
    description:
      "Modern air-conditioned transfer from Trogir with a guided visit of Krka’s waterfalls.",
    overview: [
      "We’ll take you to and from Krka in a modern, air-conditioned vehicle with Wi-Fi.",
      "See Skradinski buk and the most beautiful parts of the park on a guided tour.",
      "River boat ride included where available.",
    ],
    destinations: ["Trogir", "Krka National Park"],
    highlights: [
      "Park entrance",
      "Return transportation",
      "Wi-Fi on board",
      "River boat ride",
      "Skradinski buk",
    ],
    itineraryNote: "Morning start recommended. Drive from Trogir is about 1 hour each way.",
    itinerary: [
      { time: "Morning", title: "Pick-up in Trogir", text: "Depart for Krka National Park." },
      { time: "Park", title: "Guided park visit", text: "Waterfalls, boardwalks and boat ride." },
      { time: "Afternoon", title: "Return to Trogir", text: "Drop-off in Trogir." },
    ],
    included: [
      "Return transportation from Trogir",
      "Park entrance ticket",
      "Local guide",
      "Boat ride (when available)",
      "Wi-Fi on board",
    ],
    notIncluded: ["Lunch and drinks", "Gratuities"],
  },
  {
    slug: "krka-from-zadar",
    category: "day",
    title: "Krka Tours from Zadar",
    shortTitle: "From Zadar",
    badge: "Popular",
    tourType: "Small group",
    duration: "8–10 hours",
    durationDays: "8–10 hours",
    departure: "On request · morning pick-up",
    group: "Small group · pick-up included",
    fitness: 2,
    technical: 1,
    priceFrom: 49,
    currency: "€",
    image: tourIstria,
    intro:
      "Day tour from Zadar to Krka National Park — about 1 hour drive. Park entrance, return transport, boat ride and guided trails.",
    description:
      "Comfortable day trip from Zadar to Krka with transfer and a guided visit of Skradinski buk.",
    overview: [
      "Air-conditioned transfer from Zadar takes about one hour.",
      "Explore waterfalls, canyons and riverside boardwalks with a local guide.",
      "Boat ride included when available; optional free time for photos and swimming in season.",
    ],
    destinations: ["Zadar", "Krka National Park"],
    highlights: [
      "Park entrance",
      "Return transportation",
      "Boat ride",
      "Skradinski buk",
      "Convenient coastal departure",
    ],
    itineraryNote: ITINERARY_NOTE,
    itinerary: [
      { time: "Morning", title: "Pick-up in Zadar", text: "Drive to Krka National Park (~1 hour)." },
      { time: "Park", title: "Guided Krka visit", text: "Waterfalls, boardwalks and boat ride." },
      { time: "Afternoon", title: "Return to Zadar", text: "Drop-off in Zadar." },
    ],
    included: [
      "Return transportation from Zadar",
      "Park entrance ticket",
      "Local guide",
      "Boat ride (when available)",
    ],
    notIncluded: ["Lunch and drinks", "Gratuities"],
  },
  {
    slug: "krka-from-sibenik",
    category: "day",
    title: "Krka Tour from Šibenik",
    shortTitle: "From Šibenik",
    badge: "Nearest city",
    tourType: "Small group",
    duration: "5–7 hours",
    durationDays: "5–7 hours",
    departure: "On request · morning pick-up",
    group: "Small group · hotel pick-up",
    fitness: 2,
    technical: 1,
    priceFrom: 39,
    currency: "€",
    image: tourNationalParks,
    intro:
      "The closest major city to Krka — about 30 minutes from Šibenik. Park entrance, return transport, boat ride and guided trails.",
    description:
      "Short, comfortable day tour from Šibenik to Krka National Park with guided walking trails and boat ride.",
    overview: [
      "Hotel pick-up and drop-off in Šibenik with return transportation included.",
      "Park entrance and a guided visit of Skradinski buk waterfalls.",
      "Boat ride on the Krka River included when available.",
    ],
    destinations: ["Šibenik", "Krka National Park"],
    highlights: [
      "Shortest transfer",
      "Return transportation",
      "Hotel pick-up & drop-off",
      "Boat ride",
      "Park entrance",
    ],
    itineraryNote: "Ideal half-day or short full-day option — Šibenik is the gateway city to Krka.",
    itinerary: [
      { time: "Morning", title: "Hotel pick-up in Šibenik", text: "Short drive to Krka National Park (~30 min)." },
      { time: "Park", title: "Guided Krka visit", text: "Boardwalks, waterfalls and boat ride." },
      { time: "Afternoon", title: "Drop-off in Šibenik", text: "Return to your hotel." },
    ],
    included: [
      "Return transportation from Šibenik",
      "Hotel pick-up & drop-off",
      "Park entrance ticket",
      "Local guide",
      "Boat ride (when available)",
    ],
    notIncluded: ["Lunch and drinks", "Gratuities"],
  },
  {
    slug: "krka-national-park-tour",
    category: "day",
    title: "Krka National Park Tour",
    shortTitle: "Krka National Park Tour",
    badge: "Park tour",
    tourType: "Small group",
    duration: "4–8 hours",
    durationDays: "4–8 hours",
    departure: "On request · multiple departure times",
    group: "Small group · guided",
    fitness: 2,
    technical: 1,
    priceFrom: 35,
    currency: "€",
    image: tourNationalParks,
    intro:
      "Explore Krka National Park with a certified local guide. Walk the trails to Skradinski buk, enjoy a scenic boat ride and discover cascading waterfalls along the Krka River.",
    description:
      "Experience one of Croatia’s most beautiful national parks — waterfalls, emerald lakes and riverside boardwalks — on a guided small-group tour with park entrance included.",
    overview: [
      "Choose a half-day or full-day Krka experience depending on your schedule.",
      "Visit Skradinski buk, the park’s most spectacular waterfall cascade, and follow scenic riverside paths.",
      "Enjoy a boat ride on the Krka River when available, with optional stops at Visovac viewpoints.",
    ],
    destinations: ["Krka National Park"],
    highlights: [
      "Park entrance ticket",
      "Skradinski buk waterfalls",
      "Boat ride on the Krka River",
      "Certified local guide",
      "Scenic boardwalk trails",
    ],
    itineraryNote:
      "Tour duration options: half-day or full day. Exact meeting point and start time confirmed after booking.",
    itinerary: [
      { time: "Start", title: "Meet your guide", text: "Entrance to Krka National Park with your certified guide." },
      { time: "Walk", title: "Skradinski buk", text: "Boardwalk trails around the park’s famous waterfall cascade." },
      { time: "Boat", title: "Krka River cruise", text: "Scenic boat ride along the river when available." },
      { time: "Optional", title: "Visovac & viewpoints", text: "Extend to more viewpoints on longer tour options." },
      { time: "End", title: "Free time & photos", text: "Photo stops and return to the meeting point." },
    ],
    included: [...PARK_INCLUDED],
    notIncluded: PARK_NOT_INCLUDED,
  },
  {
    slug: "krka-national-park-private-tour",
    category: "day",
    title: "Krka National Park Private Tour",
    shortTitle: "Krka Private Tour",
    badge: "Per group up to 10",
    tourType: "Private",
    duration: "4–8 hours",
    durationDays: "4–8 hours",
    departure: "On request · flexible",
    group: "Private · up to 10 guests",
    fitness: 2,
    technical: 1,
    priceFrom: 180,
    currency: "€",
    priceUnit: "group",
    image: tourKvarner,
    intro:
      "Enjoy Krka without the crowds — your own guide, customizable itinerary, park entrance and a scenic boat ride.",
    description:
      "A private Krka National Park tour tailored to your pace, with the best waterfall viewpoints and photo stops.",
    overview: [
      "Explore Krka with your own guide and avoid the busiest coach groups.",
      "Visit Skradinski buk and quieter viewpoints for a more exclusive experience.",
      "Customizable duration and route — half-day highlights or a full park day.",
    ],
    destinations: ["Krka National Park"],
    highlights: [
      "Park entrance ticket",
      "Customizable itinerary",
      "Skradinski buk waterfalls",
      "Boat ride included",
      "Private guide for your group",
    ],
    itineraryNote: "Fully flexible — we adapt walking time and stops to your group.",
    itinerary: [
      { time: "Start", title: "Private meet-up", text: "Park entrance with your private guide." },
      { time: "Walk", title: "Waterfalls & trails", text: "Skradinski buk and riverside boardwalks." },
      { time: "Boat", title: "Krka River", text: "Scenic boat ride when available." },
      { time: "Optional", title: "Extended route", text: "Add Visovac viewpoints or a longer circuit." },
      { time: "End", title: "Photo stops", text: "Quieter viewpoints before departure." },
    ],
    included: [
      ...PARK_INCLUDED,
      "Private certified guide",
      "Customizable itinerary",
    ],
    notIncluded: PARK_NOT_INCLUDED,
    pricing: {
      label: "Private tour (per group)",
      tiers: [{ persons: "1–10", price: 180 }],
    },
  },
  {
    slug: "private-transfers",
    category: "transfer",
    title: "Private Transfers Across Croatia & the Region",
    shortTitle: "Private Transfers",
    badge: "Door-to-Door",
    duration: "On request",
    durationDays: "Anytime",
    group: "Private · 1–8 guests",
    fitness: 1,
    technical: 1,
    priceFrom: 35,
    currency: "€",
    image: tourTransfer,
    intro:
      "Premium vehicles between Krka National Park hotels, Split Airport, Šibenik, Zadar and any destination in Croatia, Slovenia, Italy or Bosnia & Herzegovina. Fixed prices, flight tracking, water on board.",
    description:
      "The most relaxed way to reach Krka — and most guests turn long transfers into mini-tours with photo stops on the way.",
    highlights: [
      "Premium sedan or minivan",
      "English-speaking professional driver",
      "Flight tracking, no waiting fees",
      "Free photo stops on long routes",
      "Child seats on request, no extra cost",
    ],
    itinerary: [
      { time: "Step 1", title: "Tell us the route", text: "Pickup, destination, date, time, passengers and luggage." },
      { time: "Step 2", title: "Fixed quote in 12 hours", text: "Flat-rate quote in EUR — no surge, no surprises." },
      { time: "Step 3", title: "Door-to-door pickup", text: "Driver waits with a sign at arrivals or your hotel lobby." },
      { time: "Step 4", title: "Pay on arrival", text: "Cash or card at the end of the ride." },
    ],
    included: [
      "Vehicle, fuel, tolls and parking",
      "Professional driver",
      "Flight tracking",
      "Water on board",
    ],
    notIncluded: ["Meals on the road", "Gratuities"],
  },
];

export const tours: Tour[] = [...dayTours, ...multidayTours];

export const tourBySlug = (slug: string) => tours.find((t) => t.slug === slug);

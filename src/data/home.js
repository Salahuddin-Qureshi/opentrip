import { destinations } from "./destinations";
export const allDestinations = [
  ...destinations,
  {
    name: "Hunza",
    caption: "Pakistan’s hidden gem",
    image: "/images/hunza.jpg",
  },
];
export const experiences = [
  {
    name: "Adventure Escapes",
    category: "Adventure",
    image: "/images/hunza.jpg",
  },
  { name: "Beach Holidays", category: "Beach", image: destinations[3].image },
  {
    name: "Cultural Journeys",
    category: "Cultural",
    image: destinations[0].image,
  },
  {
    name: "Romantic Getaways",
    category: "Luxury",
    image: destinations[3].image,
  },
  {
    name: "Family Vacations",
    category: "Family",
    image: destinations[1].image,
  },
  {
    name: "Custom Experiences",
    category: "All",
    image: "/images/cappadocia.jpg",
  },
];
export const packages = [
  {
    id: "bali",
    name: "Bali Getaway",
    destination: "Bali",
    image: destinations[0].image,
    days: 5,
    nights: 4,
    price: 799,
    categories: ["Cultural", "Beach"],
    description: "Beaches, culture and scenic beauty in one perfect trip.",
    highlights: [
      "Discover the temples of Ubud",
      "Unwind beside the ocean",
      "Make time for the rice terraces",
    ],
  },
  {
    id: "swiss",
    name: "Swiss Explorer",
    destination: "Switzerland",
    image: destinations[1].image,
    days: 7,
    nights: 6,
    price: 1299,
    categories: ["Adventure", "Family"],
    description: "Majestic mountains, charming towns and crystal-clear lakes.",
    highlights: [
      "Explore lakeside villages",
      "Follow a scenic alpine trail",
      "Enjoy a panoramic rail journey",
    ],
  },
  {
    id: "maldives",
    name: "Maldives Escape",
    destination: "Maldives",
    image: destinations[3].image,
    days: 4,
    nights: 3,
    price: 1199,
    categories: ["Beach", "Luxury"],
    description: "Ivory sands, clear waters and unforgettable sunsets.",
    highlights: [
      "Slow mornings by the lagoon",
      "Discover life beneath the waves",
      "Watch the sun slip into the ocean",
    ],
  },
  {
    id: "dubai",
    name: "Dubai City Break",
    destination: "Dubai",
    image: destinations[2].image,
    days: 5,
    nights: 4,
    price: 949,
    categories: ["Family", "Luxury"],
    description: "Modern architecture, desert adventures and luxury.",
    highlights: [
      "Discover the old city and souks",
      "Explore the desert at sunset",
      "Take in the spectacular skyline",
    ],
  },
];
export const benefits = [
  {
    icon: "compass",
    title: "Thoughtfully Curated Journeys",
    description: "Handpicked experiences around the world.",
    tone: "blue",
  },
  {
    icon: "calendar",
    title: "Flexible Travel Planning",
    description: "Trips designed around your needs.",
    tone: "green",
  },
  {
    icon: "users",
    title: "Personalised Experiences",
    description: "Unique journeys, tailored for you.",
    tone: "peach",
  },
  {
    icon: "heart",
    title: "Dedicated Travel Support",
    description: "A thoughtful approach to every step of your trip.",
    tone: "peach",
  },
];
export const articles = [
  {
    id: "island",
    title: "10 Things to Know Before Your Island Escape",
    category: "Travel tips",
    image: destinations[3].image,
    time: "5 min read",
    paragraphs: [
      "The best island days leave room to slow down. Before you go, decide whether you want a quiet retreat, a lively beach town, or a little of both.",
      "Pack light layers, sun protection, and a reusable bottle. Leave space in your itinerary for a walk along the shore and an unhurried meal.",
      "Check seasonal weather, transfer arrangements, and what your accommodation includes before finalising your plans. A little preparation makes more room for discovery.",
    ],
  },
  {
    id: "swiss",
    title: "A Curious Traveller’s Guide to Switzerland",
    category: "Destination guides",
    image: destinations[1].image,
    time: "6 min read",
    paragraphs: [
      "Switzerland invites you to look a little closer: a village beside a glassy lake, a trail through a meadow, a mountain appearing through the clouds.",
      "Build your route around a few places rather than rushing between them. Use each as a base for scenic walks, local food, and time outside.",
      "Mountain conditions can change quickly. Check local forecasts and trail information, pack layers, and keep a flexible day in your itinerary.",
    ],
  },
  {
    id: "bali",
    title: "The Rich Culture and Traditions of Bali",
    category: "Culture",
    image: destinations[0].image,
    time: "4 min read",
    paragraphs: [
      "Beyond the coastline, Bali rewards a slower kind of curiosity. Architecture, food, and everyday rituals offer ways to connect with the places you visit.",
      "Choose locally guided experiences, ask before photographing people, and follow the guidance given at temples and other sacred places.",
      "Leave time between activities. Some of the moments you remember best may be a conversation, a shared meal, or an unexpected turn along a village path.",
    ],
  },
];
// Illustrative copy adapted from the supplied design, not verified customer reviews.
export const testimonials = [
  {
    name: "Sarah K.",
    type: "Travel enthusiast",
    quote:
      "Our Bali trip was absolutely magical! Everything was perfectly planned and the team was so helpful throughout.",
    initials: "SK",
  },
  {
    name: "Ahmed R.",
    type: "Frequent traveller",
    quote:
      "OpenTrip made our family vacation stress-free and unforgettable. Highly recommended!",
    initials: "AR",
  },
  {
    name: "Ayesha M.",
    type: "Adventure seeker",
    quote:
      "Amazing service, beautiful destinations and great support. Can’t wait for our next trip!",
    initials: "AM",
  },
  {
    name: "Daniel L.",
    type: "Curious explorer",
    quote:
      "A beautiful balance of adventure and time to slow down. Just the kind of escape we had imagined.",
    initials: "DL",
  },
];

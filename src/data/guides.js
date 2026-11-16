// Travel Guides & Updates — article content
// Editorial rule: date every article, link official sources, review regularly,
// and never present general information as legal or immigration advice.

export const GUIDE_CATEGORIES = [
  { id: "All", label: "All Guides", icon: "book" },
  { id: "Checklists", label: "Travel Checklists", icon: "check" },
  { id: "Umrah", label: "Umrah", icon: "star" },
  { id: "Hotels", label: "Hotels", icon: "calendar" },
  { id: "Flights", label: "Flights", icon: "plane" },
  { id: "Destinations", label: "Destination Guides", icon: "compass" },
  { id: "Visa", label: "Visa Information", icon: "shield" },
];

export const EDITORIAL_TEAM = "OPEN TRIP Editorial Team";

export const GUIDES = [
  {
    id: "international-travel-checklist",
    category: "Checklists",
    title: "A Practical Checklist Before International Travel",
    excerpt:
      "From passport validity to travel insurance, a simple pre-departure checklist to help you prepare with confidence.",
    image: "/images/hero-airplane-right.jpg",
    readTime: "6 min read",
    published: "02 Nov 2026",
    updated: "14 Nov 2026",
    intro:
      "A little preparation before an international trip can save a lot of stress at the airport. Use this checklist as a starting point and adjust it to your destination, travel purpose, and the people travelling with you.",
    sections: [
      {
        heading: "1. Passport and Travel Documents",
        paragraphs: [
          "Check your passport's expiry date well before you book. Many countries expect a passport to remain valid for a period beyond your travel dates, so confirm the rule for your destination.",
        ],
        bullets: [
          "Passport validity and enough blank pages",
          "Visa or entry authorization, if required",
          "Printed and digital copies of key documents",
          "Confirmed return or onward ticket, where requested",
        ],
      },
      {
        heading: "2. Bookings and Itinerary",
        paragraphs: [
          "Keep your flight, hotel, and transfer confirmations in one place. Share your itinerary with a family member so someone knows where you will be.",
        ],
        bullets: [
          "Flight e-tickets and booking references",
          "Hotel confirmations with addresses",
          "Airport transfer details and contact numbers",
        ],
      },
      {
        heading: "3. Money, Health, and Insurance",
        paragraphs: [
          "Inform your bank about international travel, carry a mix of payment options, and consider travel insurance that suits your trip. Pack any regular medicines with a copy of the prescription.",
        ],
      },
      {
        heading: "4. Final Checks Before Departure",
        bullets: [
          "Check baggage allowance on your ticket",
          "Arrive at the airport with enough time for check-in",
          "Review the latest entry requirements for your destination",
        ],
      },
    ],
    references: [
      { label: "IATA Travel Centre — passport, visa & health information", url: "https://www.iatatravelcentre.com" },
      { label: "Directorate General of Immigration & Passports, Pakistan", url: "https://dgip.gov.pk" },
    ],
    cta: { label: "Plan Your Trip with Us", page: "services" },
  },
  {
    id: "planning-umrah-journey",
    category: "Umrah",
    title: "Planning Your Umrah Journey: What to Consider",
    excerpt:
      "Travel dates, hotel location, transport, and documents — key points to think about while planning your Umrah.",
    image: "/images/cities/makkah-kaaba-wide.jpg",
    readTime: "7 min read",
    published: "28 Oct 2026",
    updated: "12 Nov 2026",
    intro:
      "Umrah is a deeply personal journey, and thoughtful planning lets you focus on worship rather than logistics. Here are the main areas to consider before you confirm your arrangements.",
    sections: [
      {
        heading: "Choosing Your Travel Dates",
        paragraphs: [
          "Travel periods such as Ramadan and school holidays are usually busier, which can affect hotel availability and pricing. If your dates are flexible, discuss alternative options with your travel consultant.",
        ],
      },
      {
        heading: "Hotel Location in Makkah and Madinah",
        paragraphs: [
          "Hotel distance from the Haram makes a real difference, especially for elderly travellers and families. Compare walking distance, shuttle availability, and room occupancy before deciding.",
        ],
        bullets: [
          "Walking distance or shuttle service",
          "Room sharing arrangements (double, triple, quad)",
          "Meal plan, if included",
        ],
      },
      {
        heading: "Transport and Ziyarat",
        paragraphs: [
          "Ask how airport and intercity transfers are arranged — shared coach, private vehicle, or train — and whether Ziyarat tours are included in your package.",
        ],
      },
      {
        heading: "Documents and Requirements",
        paragraphs: [
          "Umrah visa rules, vaccination requirements, and permit processes are set by the Saudi authorities and can change. Always confirm the current requirements through official sources before travel.",
        ],
      },
    ],
    references: [
      { label: "Nusuk — official Umrah & visit platform", url: "https://www.nusuk.sa" },
      { label: "Saudi Ministry of Hajj and Umrah", url: "https://www.haj.gov.sa" },
    ],
    cta: { label: "Explore Umrah Packages", page: "umrah" },
  },
  {
    id: "choose-family-hotel",
    category: "Hotels",
    title: "How to Choose a Hotel for Your Family Trip",
    excerpt:
      "Room types, location, meal plans, and facilities — what to compare when booking accommodation for the whole family.",
    image: "/images/destinations/maldives.jpeg",
    readTime: "5 min read",
    published: "20 Oct 2026",
    updated: "10 Nov 2026",
    intro:
      "The right hotel can shape the whole family holiday. Rather than choosing on star rating alone, compare the details that matter for children, older family members, and your daily plans.",
    sections: [
      {
        heading: "Room Size and Occupancy",
        paragraphs: [
          "Check the maximum occupancy of each room type and whether children are counted by age. Family rooms, connecting rooms, or suites can be more comfortable than squeezing into a standard room.",
        ],
      },
      {
        heading: "Location and Access",
        paragraphs: [
          "A central location can reduce travel time between attractions. Consider distance from the airport, public transport, and the places you plan to visit most.",
        ],
      },
      {
        heading: "Meal Plans and Facilities",
        bullets: [
          "Breakfast, half-board, or room only",
          "Swimming pool or kids' area",
          "Lift access and accessibility needs",
          "Laundry and in-room facilities",
        ],
      },
      {
        heading: "Special Requests",
        paragraphs: [
          "Requests such as early check-in, adjoining rooms, or extra beds should be shared at the time of booking. They remain subject to hotel confirmation and are not guaranteed until confirmed.",
        ],
      },
    ],
    references: [],
    cta: { label: "Request Hotel Options", page: "hotels" },
  },
  {
    id: "before-booking-flight",
    category: "Flights",
    title: "Things to Consider Before Booking an International Flight",
    excerpt:
      "Routes, baggage allowance, fare conditions, and layovers — what to check before you confirm your ticket.",
    image: "/images/packages-hero-wide.jpg",
    readTime: "5 min read",
    published: "15 Oct 2026",
    updated: "08 Nov 2026",
    intro:
      "The cheapest fare is not always the best value. Before booking an international flight, look closely at the conditions attached to the ticket and how the journey fits your plans.",
    sections: [
      {
        heading: "Direct Flights vs. Connections",
        paragraphs: [
          "Connecting flights can be more affordable, but check layover duration, airport changes, and whether a transit visa may be required for your nationality.",
        ],
      },
      {
        heading: "Baggage Allowance",
        paragraphs: [
          "Baggage rules differ between airlines and fare types. Confirm checked and cabin allowance, especially for long trips, Umrah travel, or family bookings.",
        ],
      },
      {
        heading: "Fare Conditions",
        bullets: [
          "Change and cancellation rules",
          "Refund eligibility",
          "Name correction policy",
          "Seat selection and meal options",
        ],
      },
      {
        heading: "Passenger Details",
        paragraphs: [
          "Make sure passenger names match the passport exactly. Share correct ages for children and infants so the right fare type is applied.",
        ],
      },
    ],
    references: [
      { label: "IATA Travel Centre — transit & entry information", url: "https://www.iatatravelcentre.com" },
    ],
    cta: { label: "Request Flight Options", page: "flights" },
  },
  {
    id: "dubai-first-time-guide",
    category: "Destinations",
    title: "Exploring Dubai: A First-Time Visitor's Guide",
    excerpt:
      "Popular areas, family experiences, getting around, and planning tips for your first trip to Dubai.",
    image: "/images/cities/dubai.jpg",
    readTime: "6 min read",
    published: "10 Oct 2026",
    updated: "06 Nov 2026",
    intro:
      "Dubai combines modern attractions, shopping, beaches, and desert experiences. If it is your first visit, a little planning helps you make the most of your time.",
    sections: [
      {
        heading: "Areas to Know",
        bullets: [
          "Downtown Dubai — landmark towers and large malls",
          "Dubai Marina & JBR — waterfront walks and beaches",
          "Old Dubai — creek, souks, and heritage areas",
        ],
      },
      {
        heading: "Experiences for Families",
        paragraphs: [
          "Theme parks, aquariums, desert safaris, and beach days are popular with families. Book major attractions in advance during busy seasons.",
        ],
      },
      {
        heading: "Getting Around",
        paragraphs: [
          "Dubai has a metro network, taxis, and ride-hailing apps. For families or groups, private transfers can be more convenient between hotel and attractions.",
        ],
      },
      {
        heading: "Best Time to Visit",
        paragraphs: [
          "The cooler months are generally the most comfortable for outdoor sightseeing. Summer months can be very hot, so plan indoor activities during the day.",
        ],
      },
    ],
    references: [
      { label: "Visit Dubai — official tourism website", url: "https://www.visitdubai.com" },
      { label: "UAE Federal Authority for Identity, Citizenship, Customs & Port Security", url: "https://icp.gov.ae" },
    ],
    cta: { label: "Ask About Dubai", page: "destinations" },
  },
  {
    id: "visa-documents-preparation",
    category: "Visa",
    title: "Preparing Your Documents for a Visa Application",
    excerpt:
      "General tips for organizing your documents so your visa application is clear, complete, and consistent.",
    image: "/images/guides-hero-wide.jpg",
    readTime: "6 min read",
    published: "05 Oct 2026",
    updated: "13 Nov 2026",
    intro:
      "Each country sets its own visa requirements, but well-organized documents make any application easier to prepare. These general tips can help you get started before you speak with our team.",
    sections: [
      {
        heading: "Start with the Official Checklist",
        paragraphs: [
          "Always begin with the requirement list published by the relevant embassy, consulate, or visa application centre. Requirements vary by destination, nationality, and travel purpose.",
        ],
      },
      {
        heading: "Commonly Requested Documents",
        bullets: [
          "Valid passport and previous passports, if requested",
          "Recent photographs in the required format",
          "Travel itinerary and accommodation details",
          "Financial documents such as bank statements",
          "Employment, business, or study proof",
        ],
      },
      {
        heading: "Keep Information Consistent",
        paragraphs: [
          "Names, dates, and details should match across your passport, application form, and supporting documents. Inconsistencies can cause delays.",
        ],
      },
      {
        heading: "Allow Enough Time",
        paragraphs: [
          "Appointment availability and processing times can vary. Apply well ahead of your travel date and avoid making non-refundable bookings until you know the requirements.",
        ],
      },
    ],
    references: [
      { label: "Ministry of Foreign Affairs, Pakistan", url: "https://mofa.gov.pk" },
      { label: "IATA Travel Centre — visa requirement lookup", url: "https://www.iatatravelcentre.com" },
    ],
    cta: { label: "Submit Visa Inquiry", page: "visa" },
  },
];


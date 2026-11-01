import { useEffect, useMemo, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import { downloadDestinationPdf } from "../../utils/itineraryPdf";
import "./Destinations.css";

const DESTINATIONS_CATALOG = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    vibe: "Islands & Beach",
    secondaryVibe: "Culture & Heritage",
    caption: "Island of the gods",
    tagline:
      "Emerald rice terraces, cliffside sea temples & warm island sunsets.",
    description:
      "Follow the island’s unhurried rhythm from mist-draped jungle ravines in Ubud to cliffside sea temples and warm coastal sunsets.",
    longDescription:
      "Bali rewards travellers who look beyond the shoreline. In the central highlands of Ubud, morning mist rises over centuries-old subak rice terraces and carved stone shrines. Along the southern peninsula, limestone cliffs stand above turquoise swells and candlelit seafood tables on the sand.",
    bestTime: "Apr – Oct",
    seasons: ["Spring", "Summer", "Autumn"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 220000,
    priceFrom: 799,
    rating: 4.9,
    reviews: 128,
    featuredRank: 1,
    bentoSpan: "wide-left",
    coordsLabel: "8.4095° S, 115.1889° E",
    airportHub: "Denpasar (DPS)",
    timezone: "GMT+8 (WITA)",
    mapBbox: "114.40,-8.90,115.75,-8.05",
    mapMarker: "-8.4095,115.1889",
    image: "/images/destinations/bali.jpeg",
    fallbackImage: "/images/bali.jpg",
    galleryImage: "/images/bali.jpg",
    includes: ["4N Hotel", "Daily Breakfast", "Ubud & Temple Tour", "Transfers", "E-Visa"],
    pricingTiers: [
      {
        label: "4-Star Kuta & Ubud Escape",
        duration: "5 Days / 4 Nights",
        pricePkr: 220000,
        priceUsd: 799,
        notes: "Twin sharing · Daily breakfast · Airport transfers & Ubud tour",
      },
      {
        label: "5-Star Seminyak & Private Pool Villa",
        duration: "6 Days / 5 Nights",
        pricePkr: 285000,
        priceUsd: 1025,
        notes: "Luxury resort & private pool villa · Nusa Penida & Uluwatu sunset",
      },
    ],
    tags: ["Ubud Terraces", "Sea Temples", "Island Living"],
    highlights: [
      "4 Nights hotel accommodation with daily breakfast",
      "Sacred water temples, Kintamani volcano view & Ubud rice terraces",
      "Uluwatu cliffside sunset tour & private return airport transfers",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Denpasar (DPS) & private transfer to hotel",
      "Day 2: Full-day Ubud artisan villages, Tegallalang terraces & Kintamani view",
      "Day 3: Water sports at Tanjung Benoa & evening Uluwatu cliff temple sunset",
      "Day 4: Bali island leisure day or optional Nusa Penida speedboat excursion",
      "Day 5: Breakfast at hotel & private airport transfer for departure",
    ],
  },
  {
    id: "malaysia",
    name: "Kuala Lumpur & Genting",
    country: "Malaysia",
    region: "Asia",
    vibe: "Luxury & City",
    secondaryVibe: "Culture & Heritage",
    caption: "Open Trip bestseller",
    tagline:
      "Petronas skyline, Genting Highlands cable car, Batu Caves & Sunway Lagoon.",
    description:
      "Experience Malaysia’s vibrant capital, cool mountain resorts at Genting Highlands, and iconic cultural landmarks in one seamless package.",
    longDescription:
      "One of Open Trip Pvt. Ltd.’s most popular Asian getaways. Spend 4 nights in the heart of Kuala Lumpur with guided excursions to the Petronas Twin Towers, Batu Caves, King’s Palace, and a scenic 2-way Awana SkyWay cable car ride up to Genting Highlands.",
    bestTime: "Year-Round",
    seasons: ["Spring", "Summer", "Autumn", "Winter"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 155000,
    priceFrom: 559,
    rating: 4.91,
    reviews: 142,
    featuredRank: 2,
    bentoSpan: "narrow-right",
    coordsLabel: "3.1390° N, 101.6869° E",
    airportHub: "Kuala Lumpur (KUL)",
    timezone: "GMT+8 (MYT)",
    mapBbox: "101.35,2.85,101.95,3.45",
    mapMarker: "3.1390,101.6869",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/dubai.jpeg",
    galleryImage:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    includes: ["4N Hotel", "Breakfast", "Genting Cable Car", "Sunway Lagoon", "E-Visa"],
    pricingTiers: [
      {
        label: "3-Star Bukit Bintang Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 155000,
        priceUsd: 559,
        notes: "4N hotel + breakfast · Genting + Cable Car · KL City Tour · E-Visa",
      },
      {
        label: "4-Star City Center Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 170000,
        priceUsd: 615,
        notes: "4-Star hotel stay · Sunway Lagoon theme park ticket · Private transfers",
      },
      {
        label: "5-Star Luxury KL Suite",
        duration: "5 Days / 4 Nights",
        pricePkr: 195000,
        priceUsd: 699,
        notes: "5-Star luxury hotel · Full sightseeing & private chauffeur transfers",
      },
    ],
    tags: ["Petronas Towers", "Genting Highlands", "Sunway Lagoon"],
    highlights: [
      "4 Nights hotel accommodation in Kuala Lumpur with daily breakfast",
      "Genting Highlands excursion with 2-way Awana SkyWay cable car & Batu Caves",
      "Kuala Lumpur Half-Day City Tour, Sunway Lagoon & Malaysia E-Visa included",
    ],
    sampleItinerary: [
      "Day 1: Arrival at Kuala Lumpur International Airport (KUL) & hotel check-in",
      "Day 2: Half-day Kuala Lumpur City Tour: Petronas photo stop, King’s Palace & Independence Square",
      "Day 3: Full-day Genting Highlands tour with en-route Batu Caves & 2-way cable car",
      "Day 4: Full-day Sunway Lagoon theme park adventure & Bukit Bintang evening",
      "Day 5: Breakfast at hotel & private transfer to KUL airport for return flight",
    ],
  },
  {
    id: "baku",
    name: "Baku & Gabala",
    country: "Azerbaijan",
    region: "Asia",
    vibe: "Culture & Heritage",
    secondaryVibe: "Luxury & City",
    caption: "Land of fire & Caspian breeze",
    tagline:
      "Flame Towers skyline, UNESCO Old City walls & Alpine Gabala mountains.",
    description:
      "Walk through medieval walled alleys in Icherisheher, admire futuristic Zaha Hadid architecture, and ride cable cars in Gabala.",
    longDescription:
      "Where East meets West along the Caspian Sea. Open Trip Pvt. Ltd.’s Baku & Gabala package combines futuristic landmarks like the Heydar Aliyev Center and Flame Towers with the ancient fire temple of Ateshgah and the mountain lakes of Gabala.",
    bestTime: "Apr – Nov",
    seasons: ["Spring", "Summer", "Autumn"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 165000,
    priceFrom: 595,
    rating: 4.88,
    reviews: 109,
    featuredRank: 3,
    bentoSpan: "third",
    coordsLabel: "40.4093° N, 49.8671° E",
    airportHub: "Heydar Aliyev Baku (GYD)",
    timezone: "GMT+4 (AZT)",
    mapBbox: "49.65,40.25,50.15,40.55",
    mapMarker: "40.4093,49.8671",
    image:
      "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    galleryImage:
      "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=1200&q=80",
    includes: ["4N Hotel", "Breakfast", "Baku & Absheron Tour", "Azerbaijan E-Visa", "Transfers"],
    pricingTiers: [
      {
        label: "4-Star Baku City Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 165000,
        priceUsd: 595,
        notes: "4N hotel + breakfast · Baku Old City & Absheron Tour · E-Visa & transfers",
      },
      {
        label: "Baku + Gabala Mountain Upgrade",
        duration: "6 Days / 5 Nights",
        pricePkr: 195000,
        priceUsd: 699,
        notes: "Includes full-day Gabala Nohur Lake & Tufandag cable car excursion",
      },
    ],
    tags: ["Flame Towers", "Old City Baku", "Gabala Mountains"],
    highlights: [
      "4 Nights stay with daily breakfast & Azerbaijan Sticker/E-Visa assistance",
      "Guided tour of Highland Park, Flame Towers, Baku Boulevard & Old City",
      "Absheron Peninsula tour (Ateshgah Fire Temple & Yanar Dag Burning Mountain)",
    ],
    sampleItinerary: [
      "Day 1: Arrival at Heydar Aliyev Airport (GYD) & private transfer to Baku hotel",
      "Day 2: Baku panoramic city tour: Highland Park, Flame Towers, Old City & Nizami Street",
      "Day 3: Absheron tour: Ateshgah Fire Temple, Yanar Dag & Heydar Aliyev Center photo stop",
      "Day 4: Day excursion to Gabala (Nohur Lake & Tufandag Cable Car) or Caspian shopping",
      "Day 5: Breakfast & private airport transfer for return flight",
    ],
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "Middle East",
    vibe: "Luxury & City",
    secondaryVibe: "Culture & Heritage",
    caption: "Beyond the expected",
    tagline: "Visionary skylines, golden desert dunes & Marina dhow cruises.",
    description:
      "Pair soaring modern skylines and Marina dinner cruises with thrilling desert dune bashing and traditional wooden abra crossings.",
    longDescription:
      "Dubai is a study in contrasts. Begin your morning wandering the wind-tower lanes of Old Dubai and crossing the creek by wooden abra to the spice and gold souks. By evening, enjoy a 4x4 desert safari with BBQ dinner or sail past the illuminated Dubai Marina skyline.",
    bestTime: "Nov – Apr",
    seasons: ["Autumn", "Winter", "Spring"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 265000,
    priceFrom: 949,
    rating: 4.89,
    reviews: 134,
    featuredRank: 4,
    bentoSpan: "third",
    coordsLabel: "25.2048° N, 55.2708° E",
    airportHub: "Dubai International (DXB)",
    timezone: "GMT+4 (GST)",
    mapBbox: "54.95,24.95,55.55,25.38",
    mapMarker: "25.2048,55.2708",
    image: "/images/destinations/dubai.jpeg",
    fallbackImage: "/images/destinations/dubai.jpeg",
    galleryImage: "/images/destinations/dubai.jpeg",
    includes: ["4N Hotel", "Breakfast", "Desert Safari + BBQ", "Marina Cruise", "UAE Visa"],
    pricingTiers: [
      {
        label: "Deira / Bur Dubai 3-Star Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 245000,
        priceUsd: 879,
        notes: "4N hotel + breakfast · Desert Safari · Dhow Cruise · UAE Tourist Visa",
      },
      {
        label: "Downtown / Sheikh Zayed 4-Star Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 265000,
        priceUsd: 949,
        notes: "4-Star hotel · Burj Khalifa 124th floor ticket · Marina Cruise & Safari",
      },
    ],
    tags: ["Desert Safari", "Marina Dhow Cruise", "Burj Khalifa"],
    highlights: [
      "4 Nights hotel stay with daily breakfast & return DXB airport transfers",
      "Evening Desert Safari with 4x4 dune bashing, camel ride & live BBQ dinner",
      "Dubai Marina Dhow Cruise dinner, Half-Day City Tour & UAE Visa assistance",
    ],
    sampleItinerary: [
      "Day 1: Arrival at Dubai International (DXB) & evening Marina Dhow Cruise with dinner",
      "Day 2: Half-day Dubai City Tour, Jumeirah Mosque, Palm Atlantis vista & Dubai Mall",
      "Day 3: Afternoon 4x4 Desert Safari, sunset dune bashing & Bedouin camp BBQ dinner",
      "Day 4: Burj Khalifa observation deck visit & Old Dubai Gold/Spice Souk exploration",
      "Day 5: Breakfast, last-minute shopping & airport transfer for departure",
    ],
  },
  {
    id: "thailand",
    name: "Bangkok & Pattaya",
    country: "Thailand",
    region: "Asia",
    vibe: "Islands & Beach",
    secondaryVibe: "Luxury & City",
    caption: "Coral islands & golden temples",
    tagline:
      "Coral Island speedboat tour, Chao Phraya dinner cruise & Bangkok shopping.",
    description:
      "Combine tropical beach days in Pattaya and Coral Island with glittering river cruises, floating markets, and vibrant street life in Bangkok.",
    longDescription:
      "Open Trip Pvt. Ltd.’s classic Thailand combo splits your stay between coastal Pattaya and lively Bangkok. Ride a speedboat out to Koh Larn (Coral Island) for crystal-clear waters and lunch on the beach, then head to Bangkok for temple tours and a luxury dinner cruise.",
    bestTime: "Nov – Apr",
    seasons: ["Autumn", "Winter", "Spring"],
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    shortDaysNights: "6D / 5N",
    duration: "6 Days / 5 Nights",
    pricePkr: 175000,
    priceFrom: 629,
    rating: 4.87,
    reviews: 118,
    featuredRank: 5,
    bentoSpan: "third",
    coordsLabel: "13.7563° N, 100.5018° E",
    airportHub: "Bangkok Suvarnabhumi (BKK)",
    timezone: "GMT+7 (ICT)",
    mapBbox: "100.30,12.85,101.05,13.95",
    mapMarker: "13.7563,100.5018",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/bali.jpeg",
    galleryImage:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    includes: ["3N Pattaya + 2N Bangkok", "Breakfast", "Coral Island Tour", "Thailand Visa"],
    pricingTiers: [
      {
        label: "3-Star Pattaya & Bangkok Combo",
        duration: "6 Days / 5 Nights",
        pricePkr: 175000,
        priceUsd: 629,
        notes: "3N Pattaya + 2N Bangkok · Coral Island tour with lunch · All transfers",
      },
      {
        label: "4-Star Bangkok, Pattaya & Phuket",
        duration: "8 Days / 7 Nights",
        pricePkr: 245000,
        priceUsd: 879,
        notes: "Adds 2 Nights Phuket beach resort & Phi Phi Island tour",
      },
    ],
    tags: ["Coral Island", "Pattaya Beach", "Chao Phraya Cruise"],
    highlights: [
      "3 Nights in Pattaya + 2 Nights in Bangkok with daily buffet breakfast",
      "Coral Island (Koh Larn) speedboat tour with Indian/Halal buffet lunch",
      "Bangkok Golden & Marble Temple city tour + intercity private transfers",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Bangkok (BKK) & private highway transfer to Pattaya hotel",
      "Day 2: Speedboat excursion to Coral Island with beach activities & lunch",
      "Day 3: Pattaya viewpoint, Gems Gallery & leisure evening along Pattaya Beach",
      "Day 4: Transfer to Bangkok en-route city & temple tour + evening river cruise",
      "Day 5: Safari World & Marine Park or Bangkok shopping (Pratunam / Siam Paragon)",
      "Day 6: Breakfast at hotel & airport transfer to BKK for departure",
    ],
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Türkiye",
    region: "Europe",
    vibe: "Culture & Heritage",
    secondaryVibe: "Luxury & City",
    caption: "Where worlds meet",
    tagline: "Imperial domes, spice-scented bazaars & Bosporus twilight ferries.",
    description:
      "Cross between Europe and Asia on sunlit ferries, explore centuries-old mosques and palaces, and linger over rooftop meze.",
    longDescription:
      "Straddling the Bosporus strait between two continents, Istanbul layers millennia of Byzantine and Ottoman artistry into vibrant everyday life. Follow the aroma of roasted chestnuts and Turkish coffee from Sultanahmet’s grand courtyards to the lively neighborhoods of Karaköy and Princes’ Islands.",
    bestTime: "Apr – Jun · Sep – Nov",
    seasons: ["Spring", "Autumn"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 225000,
    priceFrom: 849,
    rating: 4.89,
    reviews: 102,
    featuredRank: 6,
    bentoSpan: "narrow-left",
    coordsLabel: "41.0082° N, 28.9784° E",
    airportHub: "Istanbul Airport (IST)",
    timezone: "GMT+3 (TRT)",
    mapBbox: "28.75,40.90,29.25,41.18",
    mapMarker: "41.0082,28.9784",
    image: "/images/destinations/instanbul.jpeg",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    galleryImage: "/images/destinations/instanbul.jpeg",
    includes: ["4N Hotel", "Breakfast", "Bosphorus Dinner Cruise", "Princes' Island", "Transfers"],
    pricingTiers: [
      {
        label: "4-Star Sultanahmet / Taksim Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 225000,
        priceUsd: 849,
        notes: "4N hotel + breakfast · Ottoman Heritage Tour · Bosphorus Cruise · Transfers",
      },
      {
        label: "Istanbul + Bursa Cable Car Combo",
        duration: "6 Days / 5 Nights",
        pricePkr: 268000,
        priceUsd: 965,
        notes: "Adds full-day Green Bursa & Uludağ Mountain Cable Car with lunch",
      },
    ],
    tags: ["Bosporus Strait", "Grand Bazaar", "Sultanahmet"],
    highlights: [
      "Hagia Sophia, Blue Mosque, Hippodrome & Topkapi Palace guided tour",
      "Evening Bosphorus Cruise with Turkish cultural show & dinner",
      "Full-day Princes’ Islands (Büyükada) ferry tour with lunch",
    ],
    sampleItinerary: [
      "Day 1: Arrival at Istanbul Airport (IST) & private transfer to hotel",
      "Day 2: Full-day Old City tour: Hagia Sophia, Blue Mosque, Topkapi & Grand Bazaar",
      "Day 3: Scenic ferry to Princes’ Islands (Büyükada) with electric buggy tour & lunch",
      "Day 4: Spice Bazaar stroll & evening Bosphorus Dinner Cruise between two continents",
      "Day 5: Turkish breakfast at hotel & airport transfer for onward flight",
    ],
  },
  {
    id: "cappadocia",
    name: "Cappadocia",
    country: "Türkiye",
    region: "Europe",
    vibe: "Culture & Heritage",
    secondaryVibe: "Mountains & Alpine",
    caption: "Valleys of stone and sky",
    tagline:
      "Dawn hot-air balloons, fairy-chimney canyons & heritage cave suites.",
    description:
      "Wake before dawn as hundreds of lanterns drift above sculpted volcanic valleys, then hike ancient rock-cut trails.",
    longDescription:
      "Carved by wind and ancient volcanic ash, Cappadocia feels like another planet. Stay in candlelit cave suites hewn into soft tuff stone, explore subterranean cities and frescoed valley chapels, and watch the morning sky fill with colourful balloons from a private terrace.",
    bestTime: "Apr – Jun · Sep – Nov",
    seasons: ["Spring", "Autumn"],
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    shortDaysNights: "5D / 4N",
    duration: "5 Days / 4 Nights",
    pricePkr: 249000,
    priceFrom: 899,
    rating: 4.93,
    reviews: 89,
    featuredRank: 7,
    bentoSpan: "wide-right",
    coordsLabel: "38.6431° N, 34.8289° E",
    airportHub: "Nevşehir (NAV) · Kayseri (ASR)",
    timezone: "GMT+3 (TRT)",
    mapBbox: "34.55,38.45,35.10,38.82",
    mapMarker: "38.6431,34.8289",
    image: "/images/cappadocia.jpg",
    fallbackImage: "/images/cappadocia.jpg",
    galleryImage: "/images/cappadocia.jpg",
    includes: ["Cave Hotel Stay", "Breakfast", "Red & Green Valley Tours", "Domestic Transfers"],
    pricingTiers: [
      {
        label: "Boutique Cave Hotel Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 249000,
        priceUsd: 899,
        notes: "Cave suite stay · Göreme Open-Air Museum & Underground City tours",
      },
      {
        label: "Istanbul + Cappadocia Grand Turkey",
        duration: "8 Days / 7 Nights",
        pricePkr: 345000,
        priceUsd: 1240,
        notes: "4N Istanbul + 3N Cappadocia including domestic flights & tours",
      },
    ],
    tags: ["Sunrise Balloons", "Cave Suites", "Rose Valley"],
    highlights: [
      "Sunrise hot-air balloon viewpoint & optional flight over Göreme valleys",
      "Authentic boutique cave hotel stay with panoramic terrace breakfast",
      "Guided North (Red) & South (Green) Cappadocia tours with Underground City",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Kayseri/Nevşehir & transfer to cave suite in Göreme/Uchisar",
      "Day 2: Dawn balloon sunrise, Göreme Open-Air Museum, Pasabag & Avanos pottery",
      "Day 3: Kaymakli Underground City, Ihlara Valley walk & Pigeon Valley panorama",
      "Day 4: Sunset ATV quad safari through Rose & Love Valleys",
      "Day 5: Breakfast on the cave terrace & airport transfer",
    ],
  },
  {
    id: "hunza",
    name: "Hunza & Skardu",
    country: "Pakistan",
    region: "Asia",
    vibe: "Mountains & Alpine",
    secondaryVibe: "Culture & Heritage",
    caption: "Pakistan’s northern crown",
    tagline: "Cathedral Karakoram peaks, Attabad Lake, Shangrila & ancient forts.",
    description:
      "Experience the grandeur of the Karakoram where 7,000-metre peaks tower above terraced valleys, turquoise lakes, and 800-year-old forts.",
    longDescription:
      "Tucked high in Gilgit-Baltistan, Hunza and Skardu offer some of the most dramatic mountain scenery on earth. Cruise across turquoise Attabad Lake, walk through 800-year-old Baltit and Altit Forts, and witness sunset over Rakaposhi, Passu Cones, and Skardu’s Cold Desert.",
    bestTime: "Apr – Oct",
    seasons: ["Spring", "Summer", "Autumn"],
    days: 8,
    nights: 7,
    daysNights: "8 Days / 7 Nights",
    shortDaysNights: "8D / 7N",
    duration: "8 Days / 7 Nights",
    pricePkr: 85000,
    priceFrom: 305,
    rating: 4.94,
    reviews: 156,
    featuredRank: 8,
    bentoSpan: "third",
    coordsLabel: "36.3167° N, 74.6500° E",
    airportHub: "Gilgit (GIL) · Skardu (KDU)",
    timezone: "GMT+5 (PKT)",
    mapBbox: "74.15,36.05,75.15,36.65",
    mapMarker: "36.3167,74.6500",
    image: "/images/hunza.jpg",
    fallbackImage: "/images/hunza.jpg",
    galleryImage: "/images/hunza.jpg",
    includes: ["7N Deluxe Hotels", "Breakfast", "Prado / Grand Cabin", "Forts & Lake Tours"],
    pricingTiers: [
      {
        label: "Group Tour Package (Per Person)",
        duration: "8 Days / 7 Nights",
        pricePkr: 45000,
        priceUsd: 165,
        notes: "Quad/Twin sharing · AC Coaster/Grand Cabin · Breakfast & Bonfire",
      },
      {
        label: "Private Couple / Family Deluxe Tour",
        duration: "8 Days / 7 Nights",
        pricePkr: 85000,
        priceUsd: 305,
        notes: "Private vehicle · Deluxe resort rooms in Hunza & Skardu · Breakfast",
      },
      {
        label: "By-Air Luxury Karakoram Escape",
        duration: "6 Days / 5 Nights",
        pricePkr: 165000,
        priceUsd: 595,
        notes: "Includes return flights + 4x4 Prado TZ & luxury resorts",
      },
    ],
    tags: ["Baltit Fort", "Attabad Lake", "Passu Cones"],
    highlights: [
      "Baltit & Altit historic forts overlooking Karimabad & Rakaposhi viewpoint",
      "Turquoise Attabad Lake jet-ski/boat ride, Passu Cones & Khunjerab Pass",
      "Skardu Shangrila Lower Kachura Lake, Upper Kachura & Sarfaranga Cold Desert",
    ],
    sampleItinerary: [
      "Day 1: Departure from Islamabad / Arrival in Chilas or Gilgit via Hazara Motorway",
      "Day 2: Rakaposhi Viewpoint stop, arrival in Karimabad Hunza & Eagle’s Nest sunset",
      "Day 3: Heritage walk through Baltit Fort, Altit Fort & Royal Garden",
      "Day 4: Attabad Lake boat ride, Hussaini Bridge, Passu Cones & Khunjerab Top",
      "Day 5: Scenic drive along Indus River to Skardu Valley & Shangrila Resort",
      "Day 6: Shigar Fort, Sarfaranga Cold Desert & Upper Kachura Lake excursion",
      "Day 7: Deosai Plains / Basho Valley excursion & local bazaar evening",
      "Day 8: Return flight from Skardu (KDU) or scenic drive back to Islamabad",
    ],
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "Indian Ocean",
    vibe: "Islands & Beach",
    secondaryVibe: "Luxury & City",
    caption: "Your island escape",
    tagline: "Private overwater lagoons, coral gardens & luminous sunsets.",
    description:
      "Step directly from your private deck into warm turquoise lagoons, snorkel vibrant house reefs, and dine beneath a canopy of stars.",
    longDescription:
      "Scattered across the Indian Ocean like coral necklaces, the atolls of the Maldives offer pure coastal serenity. Days unfold at the pace of the tide: morning swims over coral gardens, barefoot sandbank picnics, and golden-hour sails aboard traditional wooden dhonis.",
    bestTime: "Nov – Apr",
    seasons: ["Winter", "Spring"],
    days: 4,
    nights: 3,
    daysNights: "4 Days / 3 Nights",
    shortDaysNights: "4D / 3N",
    duration: "4 Days / 3 Nights",
    pricePkr: 330000,
    priceFrom: 1199,
    rating: 4.92,
    reviews: 112,
    featuredRank: 9,
    bentoSpan: "third",
    coordsLabel: "4.1755° N, 73.5093° E",
    airportHub: "Velana Malé (MLE)",
    timezone: "GMT+5 (MVT)",
    mapBbox: "72.80,3.60,73.95,4.65",
    mapMarker: "4.1755,73.5093",
    image: "/images/destinations/maldives.jpeg",
    fallbackImage: "/images/hero-coast.jpeg",
    galleryImage: "/images/hero-coast.jpeg",
    includes: ["3N Island Resort", "Half-Board Meals", "Speedboat Transfer", "Snorkeling"],
    pricingTiers: [
      {
        label: "4-Star Beach Villa Resort",
        duration: "4 Days / 3 Nights",
        pricePkr: 330000,
        priceUsd: 1199,
        notes: "Beachfront villa · Breakfast & Dinner · Return speedboat from Malé",
      },
      {
        label: "5-Star Overwater Lagoon Villa",
        duration: "5 Days / 4 Nights",
        pricePkr: 495000,
        priceUsd: 1780,
        notes: "Overwater villa with direct lagoon steps · All-inclusive dining & cruise",
      },
    ],
    tags: ["Overwater Villas", "Coral Reefs", "Sunset Dhoni"],
    highlights: [
      "3 Nights beachfront or overwater villa stay with breakfast & dinner",
      "Return speedboat transfer directly from Velana International Airport (MLE)",
      "Guided coral reef snorkeling, sandbank picnic & sunset dolphin cruise",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Malé (MLE) & scenic speedboat transfer to island resort",
      "Day 2: House-reef snorkeling, turtle safari & oceanfront candlelit dinner",
      "Day 3: Private sandbank lunch & traditional Maldivian dhoni sunset sail",
      "Day 4: Unhurried lagoon morning & speedboat transfer back to Malé airport",
    ],
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "Asia",
    vibe: "Islands & Beach",
    secondaryVibe: "Culture & Heritage",
    caption: "Emerald isle & tea hills",
    tagline:
      "Kandy misty tea plantations, Nuwara Eliya highland trains & Bentota beaches.",
    description:
      "Journey from misty emerald tea estates and cascading waterfalls in Kandy to golden palm-fringed beaches along the Bentota coast.",
    longDescription:
      "Open Trip Pvt. Ltd.’s Sri Lanka circuit brings together Kandy’s cultural heritage, Pinnawala’s gentle elephants, Nuwara Eliya’s cool highland tea gardens, and the golden Indian Ocean shoreline of Bentota and Colombo.",
    bestTime: "Dec – Apr · Jul – Sep",
    seasons: ["Winter", "Spring", "Summer"],
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    shortDaysNights: "6D / 5N",
    duration: "6 Days / 5 Nights",
    pricePkr: 185000,
    priceFrom: 665,
    rating: 4.86,
    reviews: 91,
    featuredRank: 10,
    bentoSpan: "third",
    coordsLabel: "6.9271° N, 79.8612° E",
    airportHub: "Colombo Bandaranaike (CMB)",
    timezone: "GMT+5:30 (SLST)",
    mapBbox: "79.70,6.40,80.90,7.45",
    mapMarker: "6.9271,79.8612",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/forest.jpg",
    galleryImage:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    includes: ["5N 4★ Hotels", "Breakfast", "Private Chauffeur Car", "Kandy + Bentota + Colombo"],
    pricingTiers: [
      {
        label: "Kandy, Bentota & Colombo Classic",
        duration: "6 Days / 5 Nights",
        pricePkr: 185000,
        priceUsd: 665,
        notes: "2N Kandy + 2N Bentota + 1N Colombo · Private AC car ·Sri Lanka ETA Visa",
      },
      {
        label: "Grand Highland & Ella Scenic Train",
        duration: "7 Days / 6 Nights",
        pricePkr: 218000,
        priceUsd: 785,
        notes: "Adds Nuwara Eliya & iconic Nine Arch Bridge train journey",
      },
    ],
    tags: ["Ceylon Tea Hills", "Bentota Beach", "Kandy Cultural Show"],
    highlights: [
      "2N Kandy, 2N Bentota Beach & 1N Colombo in 4-Star hotels with breakfast",
      "Pinnawala Elephant sanctuary, Peradeniya Botanical Gardens & Ceylon tea factory",
      "Madu River boat safari, Turtle Hatchery & Colombo city/shopping tour",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Colombo (CMB), stop at Pinnawala & scenic drive to Kandy",
      "Day 2: Kandy Lake, Royal Botanical Gardens, Tea Factory & evening cultural dance",
      "Day 3: Scenic descent via waterfalls to Bentota golden beach resort",
      "Day 4: Madu River mangrove boat safari & Kosgoda Sea Turtle Hatchery",
      "Day 5: Transfer to Colombo for Galle Face Green, Lotus Tower view & shopping",
      "Day 6: Breakfast & private transfer to Bandaranaike Airport (CMB)",
    ],
  },
  {
    id: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    region: "Europe",
    vibe: "Mountains & Alpine",
    secondaryVibe: "Luxury & City",
    caption: "A little alpine wonder",
    tagline: "Glacial lakes, panoramic mountain railways & storybook peaks.",
    description:
      "Glide past mirror-still alpine lakes and snow-crowned peaks aboard panoramic trains, pausing in timbered mountain villages.",
    longDescription:
      "Few places balance dramatic natural scale with effortless comfort like the Swiss Alps. Connect lakeside towns by historic steamboat and glass-domed rail carriages, hike wildflower meadows beneath the Eiger and Matterhorn, and unwind in warm alpine chalets.",
    bestTime: "Jun – Sep · Dec – Mar",
    seasons: ["Summer", "Winter"],
    days: 7,
    nights: 6,
    daysNights: "7 Days / 6 Nights",
    shortDaysNights: "7D / 6N",
    duration: "7 Days / 6 Nights",
    pricePkr: 360000,
    priceFrom: 1299,
    rating: 4.95,
    reviews: 94,
    featuredRank: 11,
    bentoSpan: "wide-left",
    coordsLabel: "46.6863° N, 7.8632° E",
    airportHub: "Zurich (ZRH) · Geneva (GVA)",
    timezone: "GMT+1 (CET)",
    mapBbox: "6.80,45.90,9.20,47.30",
    mapMarker: "46.6863,7.8632",
    image: "/images/destinations/switzerland.jpeg",
    fallbackImage: "/images/mountains.jpg",
    galleryImage: "/images/mountains.jpg",
    includes: ["6N Alpine Hotels", "Breakfast", "Swiss Travel Pass", "Schengen Visa File"],
    pricingTiers: [
      {
        label: "Lucerne, Interlaken & Zurich Rail Tour",
        duration: "7 Days / 6 Nights",
        pricePkr: 360000,
        priceUsd: 1299,
        notes: "6N hotels + breakfast · Swiss Rail Pass · Mount Titlis excursion",
      },
      {
        label: "Grand Glacier Express & Zermatt Matterhorn",
        duration: "8 Days / 7 Nights",
        pricePkr: 445000,
        priceUsd: 1599,
        notes: "Includes Jungfraujoch Top of Europe & Glacier Express panoramic train",
      },
    ],
    tags: ["Glacier Express", "Lake Lucerne", "Matterhorn"],
    highlights: [
      "Panoramic GoldenPass & Glacier Express rail journeys across the Swiss Alps",
      "Lake Lucerne boat cruise, Mount Titlis Rotair cable car & Rhine Falls",
      "Complete Schengen visa file preparation & travel insurance assistance",
    ],
    sampleItinerary: [
      "Day 1: Arrival in Zurich (ZRH) & scenic rail journey to lakeside Lucerne",
      "Day 2: Lake Lucerne steamer cruise & Mount Titlis / Pilatus cableway",
      "Day 3: Panoramic GoldenPass train to Interlaken & Lauterbrunnen Valley",
      "Day 4: Jungfraujoch ‘Top of Europe’ or Grindelwald First cliff walk",
      "Day 5: Rail transfer to Zermatt beneath the iconic Matterhorn peak",
      "Day 6: Return to Zurich for Old Town walk, Bahnhofstrasse & Rhine Falls",
      "Day 7: Breakfast & train transfer to Zurich Airport for departure",
    ],
  },
  {
    id: "umrah",
    name: "Makkah & Madinah Umrah",
    country: "Saudi Arabia",
    region: "Middle East",
    vibe: "Culture & Heritage",
    secondaryVibe: "Luxury & City",
    caption: "Spiritual journey · Open Trip",
    tagline:
      "20 Days / 19 Nights complete Umrah package with Visa, Flights, Hotels & Ziyarat.",
    description:
      "Perform Umrah with complete peace of mind: direct return flights, Makkah & Madinah hotels, 24/7 shuttle or walking-distance stays, and guided Ziyarat.",
    longDescription:
      "Open Trip (Pvt.) Ltd. specializes in well-organized 15-Day and 20-Day Umrah packages from Karachi and across Pakistan. Packages include return airline tickets, Umrah visa with insurance, comfortable hotels in Makkah and Madinah, complete AC ground transport, and guided Ziyarat of Makkah, Madinah, Taif, and Badr.",
    bestTime: "Oct – May",
    seasons: ["Autumn", "Winter", "Spring"],
    days: 20,
    nights: 19,
    daysNights: "20 Days / 19 Nights",
    shortDaysNights: "20D / 19N",
    duration: "20 Days / 19 Nights",
    pricePkr: 230999,
    priceFrom: 829,
    rating: 4.97,
    reviews: 215,
    featuredRank: 12,
    bentoSpan: "narrow-right",
    coordsLabel: "21.4225° N, 39.8262° E",
    airportHub: "Jeddah (JED) · Madinah (MED)",
    timezone: "GMT+3 (AST)",
    mapBbox: "39.70,21.32,39.98,21.52",
    mapMarker: "21.4225,39.8262",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    galleryImage:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Return Air Ticket",
      "Umrah Visa",
      "Makkah & Madinah Hotels",
      "4 Ziyarat Included",
      "Full Transport",
    ],
    pricingTiers: [
      {
        label: "Economy Package (Sharing Room)",
        duration: "20 Days / 19 Nights",
        pricePkr: 230999,
        priceUsd: 829,
        notes: "Direct Return Ticket + Visa + Shuttle Hotels + Transport + Ziyarat",
      },
      {
        label: "Economy 4-Bed (Quad) / 3-Bed (Triple) / 2-Bed (Double)",
        duration: "20 Days / 19 Nights",
        pricePkr: 241000,
        priceUsd: 865,
        notes: "4-Bed: PKR 241,000 · 3-Bed: PKR 252,000 · 2-Bed: PKR 277,000",
      },
      {
        label: "Near-Haram Star Package (700m Makkah / 200m Madinah)",
        duration: "20 Days / 19 Nights",
        pricePkr: 274999,
        priceUsd: 985,
        notes: "Sharing: PKR 274,999 · 4-Bed: PKR 297,000 · 3-Bed: PKR 320,000 · 2-Bed: PKR 375,000",
      },
    ],
    tags: ["Return Flights Included", "Makkah & Madinah Ziyarat", "Umrah Visa"],
    highlights: [
      "Direct return airline ticket, Umrah Visa & full Saudi ground transport",
      "Makkah & Madinah hotel accommodation (Economy Shuttle or Walking Distance)",
      "Guided Ziyarat in Makkah, Madinah, Masjid-e-uhad, Taif & Badr with religious guide",
    ],
    sampleItinerary: [
      "Days 1–5: Arrival in Jeddah, transfer to Makkah hotel & performance of Umrah",
      "Days 6–10: Prayers at Masjid al-Haram & guided Makkah / Taif historical Ziyarat",
      "Days 11–15: Travel to Madinah Munawarah (via Badr Ziyarat) & check-in near Masjid an-Nabawi",
      "Days 16–19: Prayers at Masjid an-Nabawi, Rawdah visit & Madinah Ziyarat",
      "Day 20: Transfer to Jeddah/Madinah airport for return flight to Pakistan",
    ],
  },
];

const SEASON_GUIDES = [
  {
    id: "Spring",
    months: "April – May",
    title: "Blossoms, Mild Breezes & Cultural Festivals",
    summary:
      "Ideal for apricot blossoms in Hunza, tulip season in Istanbul, Baku’s Caspian breeze, and warm island days in Bali and Malaysia.",
    recommended: [
      "Hunza & Skardu",
      "Istanbul",
      "Baku & Gabala",
      "Bali",
      "Kuala Lumpur & Genting",
      "Cappadocia",
    ],
  },
  {
    id: "Summer",
    months: "June – August",
    title: "High-Alpine Passes & Sunlit Island Coasts",
    summary:
      "The prime window for high-altitude trails and glacial lakes in Switzerland, Karakoram valleys in Hunza & Skardu, and Bali’s coastal breeze.",
    recommended: [
      "Switzerland",
      "Hunza & Skardu",
      "Bali",
      "Kuala Lumpur & Genting",
      "Baku & Gabala",
      "Sri Lanka",
    ],
  },
  {
    id: "Autumn",
    months: "September – November",
    title: "Golden Foliage, Spiritual Journeys & Desert Twilight",
    summary:
      "Crisp golden foliage in Hunza and Cappadocia, pleasant Umrah weather in Makkah & Madinah, and the start of Dubai’s outdoor desert season.",
    recommended: [
      "Cappadocia",
      "Istanbul",
      "Hunza & Skardu",
      "Dubai",
      "Makkah & Madinah Umrah",
      "Bangkok & Pattaya",
    ],
  },
  {
    id: "Winter",
    months: "December – March",
    title: "Tropical Atolls, Winter Sun & Snow-Dusted Chalets",
    summary:
      "Escape to private lagoons in the Maldives, enjoy winter sunshine in Dubai, Thailand & Sri Lanka, or perform a peaceful winter Umrah.",
    recommended: [
      "Maldives",
      "Dubai",
      "Bangkok & Pattaya",
      "Sri Lanka",
      "Makkah & Madinah Umrah",
      "Switzerland",
    ],
  },
];

const WISHLIST_STORAGE_KEY = "opentrip_wishlist_v1";
const RECENT_STORAGE_KEY = "opentrip_recent_v1";

function loadStoredArray(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function DestinationsPage() {
  const nav = useNavigation();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [vibe, setVibe] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [currency, setCurrency] = useState("PKR");
  const [onlySaved, setOnlySaved] = useState(false);
  const [activeSeason, setActiveSeason] = useState("Spring");
  const [mapSelectedId, setMapSelectedId] = useState("malaysia");
  const [tariffTab, setTariffTab] = useState("all");
  const [expandedTariffId, setExpandedTariffId] = useState("malaysia");
  const [dialog, setDialog] = useState(null);

  const [wishlist, setWishlist] = useState(() =>
    loadStoredArray(WISHLIST_STORAGE_KEY),
  );
  const [recentlyViewed, setRecentlyViewed] = useState(() =>
    loadStoredArray(RECENT_STORAGE_KEY),
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(wishlist),
      );
    } catch {
      // Ignore storage errors
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        RECENT_STORAGE_KEY,
        JSON.stringify(recentlyViewed),
      );
    } catch {
      // Ignore storage errors
    }
  }, [recentlyViewed]);

  const formatMoney = (dest) => {
    if (currency === "PKR") {
      return `PKR ${dest.pricePkr.toLocaleString("en-US")}`;
    }
    return `$${dest.priceFrom.toLocaleString("en-US")}`;
  };

  const formatSecondaryMoney = (dest) => {
    if (currency === "PKR") {
      return `~$${dest.priceFrom.toLocaleString("en-US")}`;
    }
    return `PKR ${Math.round(dest.pricePkr / 1000)}k`;
  };

  const toggleWishlist = (name) => {
    setWishlist((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [name, ...prev],
    );
  };

  const addRecent = (name) => {
    if (!name) return;
    setRecentlyViewed((prev) =>
      [name, ...prev.filter((item) => item !== name)].slice(0, 6),
    );
  };

  const openGuide = (dest) => {
    addRecent(dest.name);
    setDialog({ type: "guide", destination: dest });
  };

  const openPlanner = (dest = null) => {
    if (dest?.name) addRecent(dest.name);
    setDialog({
      type: "trip",
      trip: dest ? { ...dest, destination: dest.name } : null,
    });
  };

  const isDefaultEditorialView =
    !query.trim() &&
    region === "All" &&
    vibe === "All" &&
    sortBy === "featured" &&
    !onlySaved;

  const filteredDestinations = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = DESTINATIONS_CATALOG.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.daysNights.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesRegion = region === "All" || item.region === region;
      const matchesVibe =
        vibe === "All" || item.vibe === vibe || item.secondaryVibe === vibe;
      const matchesSaved = !onlySaved || wishlist.includes(item.name);
      return matchesQuery && matchesRegion && matchesVibe && matchesSaved;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.pricePkr - b.pricePkr;
      if (sortBy === "price-desc") return b.pricePkr - a.pricePkr;
      if (sortBy === "days-asc") return a.days - b.days;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.featuredRank - b.featuredRank;
    });
  }, [query, region, vibe, sortBy, onlySaved, wishlist]);

  const activeMapDestination =
    DESTINATIONS_CATALOG.find((d) => d.id === mapSelectedId) ||
    DESTINATIONS_CATALOG[0];

  const activeSeasonObj =
    SEASON_GUIDES.find((s) => s.id === activeSeason) || SEASON_GUIDES[0];

  const resetFilters = () => {
    setQuery("");
    setRegion("All");
    setVibe("All");
    setSortBy("featured");
    setOnlySaved(false);
  };

  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(activeMapDestination.mapBbox)}&layer=mapnik&marker=${encodeURIComponent(activeMapDestination.mapMarker)}`;

  return (
    <div className="destinations-page" id="home">
      {/* 1. DESTINATIONS HERO BANNER */}
      <section className="dest-hero" aria-labelledby="destinations-page-title">
        <img
          className="dest-hero-bg"
          src="/images/destinations/switzerland.jpeg"
          alt="Panoramic mountain and lake landscape"
          fetchPriority="high"
        />
        <div className="dest-hero-overlay" />
        <Header
          onPlan={() => openPlanner()}
          onExplore={() => {
            document
              .getElementById("destinations-catalog")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <div className="container dest-hero-body">
          <p className="dest-eyebrow">
            Open Trip (Pvt.) Ltd. <span>·</span> Visa · Flight · Hotel · Tour{" "}
            <span>·</span> 12 Curated Packages
          </p>
          <h1 id="destinations-page-title">
            Extraordinary Places,
            <br />
            With Clear Days, Nights & Rates.
          </h1>
          <p className="dest-hero-subtitle">
            Explore Open Trip’s signature international and domestic getaways—from
            5D/4N Malaysia, Baku, Bali & Dubai escapes to Northern Pakistan and
            20-Day Umrah journeys.
          </p>
        </div>
      </section>

      {/* 2. FLOATING FILTER, CURRENCY & SEARCH CONTROL BAR */}
      <div className="container dest-controls-wrap" id="destinations-catalog">
        <div className="dest-controls-card">
          <div className="dest-search-row">
            <label className="dest-search-box">
              <Icon name="search" size={18} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search destination, country, or days (e.g. Malaysia, Baku, Thailand, Umrah, 5 Days)..."
                aria-label="Search destinations"
              />
              {query && (
                <button
                  type="button"
                  className="dest-clear-input"
                  onClick={() => setQuery("")}
                  aria-label="Clear search query"
                >
                  <Icon name="close" size={15} />
                </button>
              )}
            </label>

            {/* Currency Switcher (PKR / USD) */}
            <div
              className="dest-currency-switch"
              role="group"
              aria-label="Select currency"
            >
              <button
                type="button"
                className={currency === "PKR" ? "is-active" : ""}
                onClick={() => setCurrency("PKR")}
              >
                PKR (Rs)
              </button>
              <button
                type="button"
                className={currency === "USD" ? "is-active" : ""}
                onClick={() => setCurrency("USD")}
              >
                USD ($)
              </button>
            </div>

            <div className="dest-select-group">
              <label>
                <span>Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Open Trip Picks</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="days-asc">Duration: Days / Nights</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </label>
            </div>

            <button
              type="button"
              className={`dest-saved-toggle ${onlySaved ? "is-active" : ""}`}
              aria-pressed={onlySaved}
              onClick={() => setOnlySaved((v) => !v)}
            >
              <Icon name="heart" size={16} />
              Wishlist ({wishlist.length})
            </button>
          </div>

          <div className="dest-filters-row">
            <div
              className="dest-pill-group"
              role="group"
              aria-label="Filter by region"
            >
              <span className="dest-filter-label">Region</span>
              {["All", "Asia", "Middle East", "Europe", "Indian Ocean"].map(
                (r) => (
                  <button
                    key={r}
                    type="button"
                    aria-pressed={region === r}
                    className={`dest-filter-pill ${region === r ? "is-selected" : ""}`}
                    onClick={() => setRegion(r)}
                  >
                    {r === "All" ? "All" : r}
                  </button>
                ),
              )}
            </div>

            <div
              className="dest-pill-group"
              role="group"
              aria-label="Filter by travel style"
            >
              <span className="dest-filter-label">Style</span>
              {[
                "All",
                "Islands & Beach",
                "Mountains & Alpine",
                "Culture & Heritage",
                "Luxury & City",
              ].map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={vibe === v}
                  className={`dest-filter-pill ${vibe === v ? "is-selected" : ""}`}
                  onClick={() => setVibe(v)}
                >
                  {v === "All" ? "All Styles" : v}
                </button>
              ))}
            </div>
          </div>

          {(wishlist.length > 0 || recentlyViewed.length > 0) && (
            <div className="dest-activity-bar">
              {wishlist.length > 0 && (
                <div className="dest-activity-group">
                  <span className="dest-activity-title">
                    <Icon name="heart" size={13} /> Saved:
                  </span>
                  {wishlist.map((name) => {
                    const found = DESTINATIONS_CATALOG.find(
                      (d) => d.name === name,
                    );
                    return (
                      <button
                        key={`saved-${name}`}
                        type="button"
                        className="dest-activity-chip dest-activity-chip--saved"
                        onClick={() => found && openGuide(found)}
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>
              )}

              {recentlyViewed.length > 0 && (
                <div className="dest-activity-group">
                  <span className="dest-activity-title">Recent:</span>
                  {recentlyViewed.map((name) => {
                    const found = DESTINATIONS_CATALOG.find(
                      (d) => d.name === name,
                    );
                    return (
                      <button
                        key={`rec-${name}`}
                        type="button"
                        className="dest-activity-chip"
                        onClick={() => found && openGuide(found)}
                      >
                        {name}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className="dest-activity-clear"
                    onClick={() => setRecentlyViewed([])}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 3. BRIGHT, UNOBSTRUCTED EDITORIAL GALLERY WITH DAYS, NIGHTS & MONEY */}
      <section className="container dest-collection-section">
        <div className="dest-results-bar">
          <p>
            Showing <strong>{filteredDestinations.length}</strong> Open Trip
            destinations with <strong>Days / Nights & {currency} Rates</strong>
            {region !== "All" ? ` in ${region}` : ""}
            {vibe !== "All" ? ` · ${vibe}` : ""}
            {onlySaved ? " · Saved in Wishlist" : ""}
          </p>
          {!isDefaultEditorialView && (
            <button
              type="button"
              className="dest-reset-link"
              onClick={resetFilters}
            >
              Reset view
            </button>
          )}
        </div>

        {filteredDestinations.length > 0 ? (
          <div
            className={`dest-bento-grid ${isDefaultEditorialView ? "dest-bento-grid--editorial" : ""}`}
          >
            {filteredDestinations.map((dest) => {
              const isSaved = wishlist.includes(dest.name);
              const spanClass = isDefaultEditorialView
                ? `dest-bento-card--${dest.bentoSpan}`
                : "";

              return (
                <article
                  key={dest.id}
                  className={`dest-bento-card ${spanClass}`}
                >
                  {/* Full-bleed bright image button (75%+ unobstructed) */}
                  <button
                    type="button"
                    className="dest-bento-click-area"
                    onClick={() => openGuide(dest)}
                    aria-label={`Explore ${dest.name}, ${dest.country} - ${dest.daysNights} from ${formatMoney(dest)}`}
                  >
                    <img
                      className="dest-bento-photo"
                      src={dest.image}
                      alt={`${dest.name}, ${dest.country}`}
                      loading="lazy"
                      onError={(e) => {
                        if (
                          dest.fallbackImage &&
                          e.currentTarget.src !==
                            window.location.origin + dest.fallbackImage
                        ) {
                          e.currentTarget.src = dest.fallbackImage;
                        }
                      }}
                    />
                    <span className="dest-bento-bottom-fade" />

                    {/* Clean bottom-edge typography with Days/Nights & Money (no dark box covering the middle!) */}
                    <span className="dest-bento-caption-row">
                      <span className="dest-bento-title-block">
                        <small className="dest-bento-eyebrow">
                          {dest.caption} · Best: {dest.bestTime}
                        </small>
                        <strong>{dest.name}</strong>
                        <span className="dest-bento-includes-line">
                          {dest.includes.slice(0, 3).join(" · ")}
                        </span>
                        <span className="dest-bento-hover-line">
                          {dest.tagline}
                        </span>
                      </span>

                      <span className="dest-bento-right-col">
                        <span className="dest-bento-price-pill">
                          <small>
                            {dest.shortDaysNights} · {formatSecondaryMoney(dest)}
                          </small>
                          <b>{formatMoney(dest)}</b>
                        </span>
                        <span className="card-arrow">
                          <Icon size={17} />
                        </span>
                      </span>
                    </span>
                  </button>

                  {/* Bright ivory top-left Country + Days/Nights + Rating pills */}
                  <div className="dest-bento-top-left">
                    <span className="dest-light-pill">
                      <Icon name="pin" size={12} />
                      {dest.country}
                    </span>
                    <span className="dest-light-pill dest-light-pill--duration">
                      <Icon name="calendar" size={12} />
                      {dest.days}D / {dest.nights}N
                    </span>
                    <span className="dest-light-pill dest-light-pill--rating">
                      ★ {dest.rating}
                    </span>
                  </div>

                  {/* Bright ivory top-right Heart button */}
                  <button
                    type="button"
                    className={`dest-light-heart ${isSaved ? "is-saved" : ""}`}
                    aria-label={
                      isSaved
                        ? `Remove ${dest.name} from wishlist`
                        : `Save ${dest.name} to wishlist`
                    }
                    aria-pressed={isSaved}
                    onClick={() => toggleWishlist(dest.name)}
                  >
                    <Icon name="heart" size={15} />
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="dest-empty-state">
            <h3>No destinations match your current filters.</h3>
            <p>
              Try clearing a filter or let us craft a bespoke itinerary for the
              exact place you have in mind.
            </p>
            <div className="dest-empty-actions">
              <Button onClick={resetFilters}>Show All Destinations</Button>
              <button
                type="button"
                className="dest-btn-secondary"
                onClick={() =>
                  openPlanner(query ? { name: query, destination: query } : null)
                }
              >
                Plan a Custom Destination
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 3B. OPEN TRIP (PVT.) LTD. — LUXURY TARIFF & DEPARTURE BOARD */}
      <section className="container dest-tariff-section">
        <div className="dest-tariff-card">
          {/* Dark Teal Sleek Editorial Header */}
          <div className="dest-tariff-banner">
            <div className="dest-tariff-banner-main">
              <div className="dest-tariff-banner-left">
                <span className="dest-tariff-kicker">
                  <Icon name="compass" size={11} /> Open Trip (Pvt.) Ltd. · Schedule
                </span>
                <h2>All Trips at a Glance: Days, Nights & Package Rates</h2>
              </div>

              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noreferrer"
                className="dest-tariff-concierge"
              >
                <span className="dest-tariff-concierge-dot" />
                <span>
                  WhatsApp: <strong>+92 310 1816191</strong>
                </span>
              </a>
            </div>

            {/* Quick Board Filter Tabs */}
            <div className="dest-tariff-Quickbar">
              <div
                className="dest-tariff-tabs"
                role="tablist"
                aria-label="Filter package schedule"
              >
                {[
                  { id: "all", label: "All Packages (12)" },
                  { id: "under200k", label: "Under PKR 200k" },
                  { id: "short", label: "4–5 Days" },
                  { id: "week", label: "6–8 Days" },
                  { id: "umrah", label: "Umrah (20D)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tariffTab === tab.id}
                    className={`dest-tariff-filter-tab ${tariffTab === tab.id ? "is-active" : ""}`}
                    onClick={() => setTariffTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="dest-tariff-legend">
                <span>
                  <i className="dest-dot dest-dot--teal" /> Days & Nights
                </span>
                <span>
                  <i className="dest-dot dest-dot--coral" /> Rates
                </span>
              </div>
            </div>
          </div>

          {/* Column Headers */}
          <div className="dest-tariff-col-headers" aria-hidden="true">
            <span>Destination & Arrival Hub</span>
            <span>Duration (Days / Nights)</span>
            <span>Package Inclusions & Tiers</span>
            <span>Starting Tariff</span>
            <span>Actions</span>
          </div>

          {/* Floating Ticket-Style Row Cards */}
          <div className="dest-tariff-list">
            {DESTINATIONS_CATALOG.filter((item) => {
              if (tariffTab === "under200k") return item.pricePkr < 200000;
              if (tariffTab === "short") return item.days <= 5;
              if (tariffTab === "week") return item.days >= 6 && item.days <= 8;
              if (tariffTab === "umrah") return item.id === "umrah";
              return true;
            }).map((item, idx) => {
              const isExpanded = expandedTariffId === item.id;
              return (
                <div
                  key={`row-${item.id}`}
                  className={`dest-tariff-ticket ${isExpanded ? "is-expanded" : ""}`}
                >
                  <div
                    className="dest-tariff-ticket-main"
                    onClick={() =>
                      setExpandedTariffId(isExpanded ? null : item.id)
                    }
                  >
                    {/* Col 1: Index + Photo + Destination Title */}
                    <div className="dest-tariff-place">
                      <span className="dest-tariff-index">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="dest-tariff-thumb">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          onError={(e) => {
                            if (item.fallbackImage) {
                              e.currentTarget.src = item.fallbackImage;
                            }
                          }}
                        />
                      </div>
                      <div className="dest-tariff-place-text">
                        <div className="dest-tariff-country-row">
                          <span className="dest-tariff-country">
                            {item.country}
                          </span>
                          <span className="dest-tariff-rating">
                            ★ {item.rating}
                          </span>
                        </div>
                        <strong>{item.name}</strong>
                        <small>{item.airportHub}</small>
                      </div>
                    </div>

                    {/* Col 2: Split Days / Nights Luxury Capsule */}
                    <div className="dest-tariff-duration-col">
                      <div className="dest-duration-capsule">
                        <span className="dest-duration-days">
                          ☀️ {item.days}D
                        </span>
                        <span className="dest-duration-nights">
                          🌙 {item.nights}N
                        </span>
                      </div>
                      <small className="dest-duration-season">
                        {item.bestTime}
                      </small>
                    </div>

                    {/* Col 3: Check-marked Inclusions */}
                    <div className="dest-tariff-inclusions-col">
                      <div className="dest-tariff-chips">
                        {item.includes.slice(0, 3).map((inc) => (
                          <span key={inc} className="dest-inclusion-badge">
                            <i>✓</i> {inc}
                          </span>
                        ))}
                        {item.includes.length > 3 && (
                          <span className="dest-inclusion-more">
                            +{item.includes.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Col 4: Boarding-Pass Fare Stub (PKR + USD) */}
                    <div className="dest-tariff-fare-stub">
                      <span className="dest-fare-label">STARTING RATE</span>
                      <strong className="dest-fare-pkr">
                        PKR {item.pricePkr.toLocaleString("en-US")}
                      </strong>
                      <div className="dest-fare-sub">
                        <span className="dest-fare-usd">
                          ${item.priceFrom.toLocaleString("en-US")}
                        </span>
                        <span>/ person</span>
                      </div>
                    </div>

                    {/* Col 5: Actions (Side-by-side compact) */}
                    <div
                      className="dest-tariff-actions-col"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        className="dest-tariff-btn dest-tariff-btn--primary"
                        onClick={() => openGuide(item)}
                      >
                        Guide →
                      </button>
                      {item.pricingTiers?.length > 0 && (
                        <button
                          type="button"
                          className="dest-tariff-btn dest-tariff-btn--ghost"
                          onClick={() =>
                            setExpandedTariffId(isExpanded ? null : item.id)
                          }
                          title="View hotel & room tier rates"
                        >
                          {isExpanded ? "Hide ▴" : "Tiers ▾"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expandable Inline Drawer for Hotel & Room Tiers */}
                  {isExpanded && item.pricingTiers?.length > 0 && (
                    <div className="dest-tariff-drawer">
                      <div className="dest-tariff-drawer-head">
                        <span>
                          Available Package Tiers for{" "}
                          <strong>
                            {item.name} ({item.country})
                          </strong>
                        </span>
                        <small>
                          All packages include Open Trip visa & itinerary
                          support
                        </small>
                      </div>
                      <div className="dest-tariff-drawer-grid">
                        {item.pricingTiers.map((tier) => (
                          <div
                            key={tier.label}
                            className="dest-tariff-tier-card"
                          >
                            <div className="dest-tariff-tier-top">
                              <span className="dest-tariff-tier-duration">
                                {tier.duration}
                              </span>
                              <strong>{tier.label}</strong>
                              <p>{tier.notes}</p>
                            </div>
                            <div className="dest-tariff-tier-bottom">
                              <div>
                                <b>
                                  PKR {tier.pricePkr.toLocaleString("en-US")}
                                </b>
                                <small>
                                  ${tier.priceUsd.toLocaleString("en-US")} USD /
                                  person
                                </small>
                              </div>
                              <button
                                type="button"
                                className="dest-tier-book-btn"
                                onClick={() => openPlanner(item)}
                              >
                                Select Tier →
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. REAL INTERACTIVE DESTINATION MAP & COMPASS */}
      <section className="dest-atlas-section">
        <div className="container">
          <SectionHeading
            eyebrow="Interactive destination map"
            title="Explore Terrain, Coastlines & Coordinates."
          >
            <p>
              Choose a destination below to zoom into its real geographic terrain
              on the interactive map, inspect travel hubs, and download its route
              brief.
            </p>
          </SectionHeading>

          <div
            className="dest-atlas-pills"
            role="tablist"
            aria-label="Choose destination on map"
          >
            {DESTINATIONS_CATALOG.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === activeMapDestination.id}
                className={`dest-atlas-tab ${item.id === activeMapDestination.id ? "is-active" : ""}`}
                onClick={() => setMapSelectedId(item.id)}
              >
                <img
                  src={item.image}
                  alt=""
                  onError={(e) => {
                    if (item.fallbackImage) {
                      e.currentTarget.src = item.fallbackImage;
                    }
                  }}
                />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div className="dest-atlas-grid">
            <div className="dest-atlas-map-box">
              <iframe
                key={activeMapDestination.id}
                title={`Interactive map of ${activeMapDestination.name}, ${activeMapDestination.country}`}
                src={mapEmbedUrl}
                className="dest-real-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="dest-map-hud-top">
                <span className="dest-map-hud-pill">
                  <Icon name="compass" size={14} />
                  {activeMapDestination.coordsLabel}
                </span>
                <span className="dest-map-hud-pill">
                  <Icon name="pin" size={13} />
                  {activeMapDestination.airportHub}
                </span>
              </div>
            </div>

            <div className="dest-atlas-detail-card" aria-live="polite">
              <div className="dest-atlas-detail-hero">
                <img
                  src={activeMapDestination.image}
                  alt={activeMapDestination.name}
                  onError={(e) => {
                    if (activeMapDestination.fallbackImage) {
                      e.currentTarget.src = activeMapDestination.fallbackImage;
                    }
                  }}
                />
                <div className="dest-atlas-detail-shade" />
                <div className="dest-atlas-detail-title">
                  <span>
                    {activeMapDestination.country} ·{" "}
                    {activeMapDestination.daysNights}
                  </span>
                  <h3>{activeMapDestination.name}</h3>
                </div>
              </div>

              <div className="dest-atlas-detail-body">
                <p>{activeMapDestination.longDescription}</p>

                <div className="dest-atlas-facts">
                  <div>
                    <span>Duration</span>
                    <strong>{activeMapDestination.daysNights}</strong>
                  </div>
                  <div>
                    <span>Starting Rate</span>
                    <strong>
                      PKR {activeMapDestination.pricePkr.toLocaleString("en-US")}{" "}
                      (${activeMapDestination.priceFrom})
                    </strong>
                  </div>
                  <div>
                    <span>Arrival Hub</span>
                    <strong>{activeMapDestination.airportHub}</strong>
                  </div>
                  <div>
                    <span>Best Window</span>
                    <strong>{activeMapDestination.bestTime}</strong>
                  </div>
                </div>

                <div className="dest-atlas-actions">
                  <Button onClick={() => openPlanner(activeMapDestination)}>
                    Plan {activeMapDestination.name} <Icon size={15} />
                  </Button>
                  <button
                    type="button"
                    className="dest-btn-secondary"
                    onClick={() =>
                      downloadDestinationPdf(activeMapDestination)
                    }
                  >
                    Download PDF Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEASONAL TRAVEL CALENDAR ("WHEN TO GO WHERE") */}
      <section className="page-section container dest-season-section">
        <SectionHeading
          eyebrow="Seasonal travel planner"
          title="When to Go Where: Travel by the Seasons."
        >
          <div className="dest-season-tabs" role="tablist">
            {SEASON_GUIDES.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={activeSeason === s.id}
                className={`dest-season-tab ${activeSeason === s.id ? "is-active" : ""}`}
                onClick={() => setActiveSeason(s.id)}
              >
                <strong>{s.id}</strong>
                <span>{s.months}</span>
              </button>
            ))}
          </div>
        </SectionHeading>

        <div className="dest-season-panel" aria-live="polite">
          <div className="dest-season-intro">
            <p className="section-eyebrow">{activeSeasonObj.months}</p>
            <h3>{activeSeasonObj.title}</h3>
            <p>{activeSeasonObj.summary}</p>
          </div>
          <div className="dest-season-cards">
            {activeSeasonObj.recommended.map((name) => {
              const dest = DESTINATIONS_CATALOG.find((d) => d.name === name);
              if (!dest) return null;
              return (
                <button
                  key={dest.id}
                  type="button"
                  className="dest-season-mini-card"
                  onClick={() => openGuide(dest)}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    onError={(e) => {
                      if (dest.fallbackImage) {
                        e.currentTarget.src = dest.fallbackImage;
                      }
                    }}
                  />
                  <div>
                    <strong>{dest.name}</strong>
                    <span>
                      {dest.shortDaysNights} · {formatMoney(dest)}
                    </span>
                  </div>
                  <Icon size={15} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM PLANNING CALLOUT */}
      <section className="planning-section">
        <img src="/images/hero-coast.jpeg" alt="" loading="lazy" />
        <div className="container">
          <p className="section-eyebrow">Can’t decide on just one place?</p>
          <h2>Let’s craft a journey tailored around you.</h2>
          <p>
            Combine destinations, adjust your travel pace, or request a custom
            itinerary brief from Open Trip (Pvt.) Ltd.
          </p>
          <div>
            <Button onClick={() => openPlanner()}>
              Start Custom Trip Planner <Icon size={17} />
            </Button>
            <Button variant="outline" onClick={() => nav?.navigate("home")}>
              Back to Home Screen
            </Button>
          </div>
        </div>
      </section>

      <Footer
        onPlan={() => openPlanner()}
        onDestination={(item) => {
          const found = DESTINATIONS_CATALOG.find((d) => d.name === item.name);
          openGuide(found || item);
        }}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {/* MODALS */}
      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={() => setDialog(null)} />
      )}

      {dialog?.type === "guide" && dialog.destination && (
        <Dialog
          title={`${dialog.destination.name}, ${dialog.destination.country}`}
          onClose={() => setDialog(null)}
        >
          <img
            className="dialog-image"
            src={dialog.destination.galleryImage || dialog.destination.image}
            alt={dialog.destination.name}
            onError={(e) => {
              if (dialog.destination.fallbackImage) {
                e.currentTarget.src = dialog.destination.fallbackImage;
              }
            }}
          />

          {/* Summary Strip with Days, Nights & PKR/USD Money */}
          <div className="dest-dialog-summary-strip">
            <div>
              <span>Duration</span>
              <strong>{dialog.destination.daysNights}</strong>
            </div>
            <div>
              <span>Starting Package (PKR)</span>
              <strong>
                PKR {dialog.destination.pricePkr.toLocaleString("en-US")}
              </strong>
            </div>
            <div>
              <span>USD Equivalent</span>
              <strong>
                ${dialog.destination.priceFrom.toLocaleString("en-US")} / person
              </strong>
            </div>
          </div>

          <p>{dialog.destination.longDescription}</p>

          {dialog.destination.pricingTiers?.length > 0 && (
            <>
              <h3 className="dest-dialog-heading">
                Package Options, Days/Nights & Rates
              </h3>
              <div className="dest-dialog-tiers">
                {dialog.destination.pricingTiers.map((tier) => (
                  <div key={tier.label} className="dest-dialog-tier-row">
                    <div>
                      <strong>{tier.label}</strong>
                      <span>
                        {tier.duration} · {tier.notes}
                      </span>
                    </div>
                    <div className="dest-dialog-tier-price">
                      <b>PKR {tier.pricePkr.toLocaleString("en-US")}</b>
                      <small>${tier.priceUsd.toLocaleString("en-US")}</small>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <h3 className="dest-dialog-heading">What’s Included</h3>
          <ul className="trip-highlights">
            {dialog.destination.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={16} />
                {h}
              </li>
            ))}
          </ul>

          <h3 className="dest-dialog-heading">Suggested Day-by-Day Route</h3>
          <ul className="dest-itinerary-timeline">
            {dialog.destination.sampleItinerary.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <div className="dest-dialog-actions">
            <Button
              onClick={() => {
                const target = dialog.destination;
                setDialog({
                  type: "trip",
                  trip: { ...target, destination: target.name },
                });
              }}
            >
              Book / Plan {dialog.destination.name} <Icon size={16} />
            </Button>
            <a
              className="dest-whatsapp-btn"
              href={`https://wa.me/923101816191?text=${encodeURIComponent(
                `Assalam o Alaikum Open Trip! I want details for ${dialog.destination.name} (${dialog.destination.daysNights} - PKR ${dialog.destination.pricePkr.toLocaleString("en-US")}).`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +92 310 1816191
            </a>
            <button
              type="button"
              className="dest-btn-secondary"
              onClick={() => downloadDestinationPdf(dialog.destination)}
            >
              Download PDF Guide
            </button>
          </div>
        </Dialog>
      )}

      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={() => setDialog(null)}>
          <p>
            {dialog.title === "Privacy"
              ? "This demonstration processes trip preferences, saved wishlist items, and newsletter form entries only in the current browser session. Forms do not transmit or save your entries externally."
              : "Packages and prices shown are illustrative based on Open Trip (Pvt.) Ltd. seasonal tariffs. Availability, airline seat rates, and visa fees are confirmed at the time of booking."}
          </p>
        </Dialog>
      )}
    </div>
  );
}

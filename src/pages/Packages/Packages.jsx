import { useState, useMemo } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import { downloadDestinationPdf } from "../../utils/itineraryPdf";
import "./Packages.css";

const PACKAGES_CATALOG = [
  {
    id: "malaysia-genting",
    name: "Malaysia Escape: Kuala Lumpur & Genting",
    destination: "Kuala Lumpur & Genting",
    country: "Malaysia",
    category: "Popular",
    secondaryCategory: "Family",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/dubai.jpeg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 155000,
    priceUsd: 559,
    rating: 4.91,
    reviews: 142,
    badge: "Open Trip Bestseller",
    description:
      "4 Nights in Kuala Lumpur with Batu Caves, 2-way cable car to Genting Highlands, Sunway Lagoon, and city tour.",
    longDescription:
      "Open Trip Pvt. Ltd.’s most popular holiday package for families and couples. Stay 4 nights in central Kuala Lumpur with daily breakfast, return airport transfers, a full-day Genting Highlands tour with scenic Awana SkyWay cable car, Batu Caves visit, and Malaysia E-Visa assistance.",
    routeStops: [
      "Petronas Twin Towers",
      "Genting 2-Way Cable Car",
      "Sunway Lagoon Theme Park",
    ],
    inclusions: [
      "4 Nights Hotel Stay",
      "Daily Buffet Breakfast",
      "Genting 2-Way Cable Car",
      "Sunway Lagoon Tickets",
      "Malaysia E-Visa",
      "Return Airport Transfers",
    ],
    highlights: [
      "Petronas Twin Towers & King’s Palace half-day city tour",
      "Full-day Genting Highlands with Batu Caves & scenic cable car",
      "Sunway Lagoon 6-in-1 theme park adventure with transfers",
    ],
    pricingTiers: [
      {
        label: "3-Star Bukit Bintang Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 155000,
        priceUsd: 559,
        notes: "Twin sharing · 3★ Hotel · Genting Cable Car · KL City Tour · E-Visa",
      },
      {
        label: "4-Star City Center Deluxe",
        duration: "5 Days / 4 Nights",
        pricePkr: 170000,
        priceUsd: 615,
        notes: "4★ Hotel · Sunway Lagoon Theme Park ticket · Private Transfers",
      },
      {
        label: "5-Star Luxury Suite & Chauffeur",
        duration: "5 Days / 4 Nights",
        pricePkr: 195000,
        priceUsd: 699,
        notes: "5★ Hotel · Full private sightseeing · VIP airport transfer",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at KLIA Airport & private transfer to hotel. Evening at leisure in Bukit Bintang.",
      "Day 2: Half-Day KL City Tour: Petronas Towers photo stop, King’s Palace & Independence Square.",
      "Day 3: Genting Highlands day excursion with en-route Batu Caves & 2-way Awana SkyWay.",
      "Day 4: Full-day Sunway Lagoon Theme Park pass & shopping at Pavilion Mall.",
      "Day 5: Breakfast at hotel & private airport transfer for departure flight.",
    ],
  },
  {
    id: "baku-gabala",
    name: "Baku & Gabala Mountain Discovery",
    destination: "Baku & Gabala",
    country: "Azerbaijan",
    category: "Popular",
    secondaryCategory: "Cultural",
    image:
      "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 165000,
    priceUsd: 595,
    rating: 4.88,
    reviews: 109,
    badge: "Trending Choice",
    description:
      "Walk the medieval streets of Old Baku, marvel at Flame Towers, and take cable car rides amidst Gabala's snow peaks.",
    longDescription:
      "A bridge between European sophistication and ancient Caspian heritage. Includes 4 nights in Baku with guided Old City tours, Ateshgah Fire Temple, Yanar Dag burning mountain, and an unforgettable day trip to Gabala's alpine Nohur Lake.",
    routeStops: [
      "Old City & Flame Towers",
      "Ateshgah Fire Temple",
      "Gabala Alpine Cable Car",
    ],
    inclusions: [
      "4 Nights 4★ Hotel",
      "Daily Breakfast",
      "Baku City & Old Town Tour",
      "Ateshgah & Yanar Dag Tour",
      "Azerbaijan E-Visa",
      "All Private Transfers",
    ],
    highlights: [
      "Highland Park panorama, Flame Towers & Nizami Street walking tour",
      "UNESCO Old City (Icherisheher) & Heydar Aliyev Cultural Center",
      "Gabala mountain day excursion with Tufandag cable car & Nohur Lake",
    ],
    pricingTiers: [
      {
        label: "4-Star City Center Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 165000,
        priceUsd: 595,
        notes: "Twin sharing · Baku Old City & Absheron tour · E-Visa included",
      },
      {
        label: "Baku + Gabala Mountain Overnight",
        duration: "6 Days / 5 Nights",
        pricePkr: 195000,
        priceUsd: 699,
        notes: "Includes 1 night stay in Gabala Alpine Resort & cable car passes",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Heydar Aliyev Airport (GYD) & private transfer to Baku hotel.",
      "Day 2: Full-day Baku panoramic tour: Highland Park, Flame Towers & Old City alleys.",
      "Day 3: Absheron peninsula tour: Ateshgah Fire Temple & Yanar Dag flaming mountain.",
      "Day 4: Day excursion to Gabala: Nohur Lake, 7 Gozel waterfall & Tufandag cable car.",
      "Day 5: Morning breakfast & airport transfer for return flight to Pakistan.",
    ],
  },
  {
    id: "bangkok-pattaya",
    name: "Thailand Holiday: Bangkok & Pattaya",
    destination: "Bangkok & Pattaya",
    country: "Thailand",
    category: "Beach & Island",
    secondaryCategory: "Popular",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/bali.jpeg",
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    pricePkr: 175000,
    priceUsd: 629,
    rating: 4.87,
    reviews: 118,
    badge: "Value Combo",
    description:
      "3 Nights in coastal Pattaya with Coral Island speedboat tour, followed by 2 Nights in Bangkok with temple tours and shopping.",
    longDescription:
      "The classic Thailand combo packed with fun and island vibes. Ride a speedboat to Coral Island with a beachside buffet lunch, enjoy water sports, and then transfer to Bangkok for city landmark tours, Chao Phraya river cruising, and world-class shopping.",
    routeStops: [
      "Coral Island Speedboat Tour",
      "Bangkok Golden Buddha",
      "Chao Phraya River Cruise",
    ],
    inclusions: [
      "3N Pattaya + 2N Bangkok",
      "Daily Buffet Breakfast",
      "Coral Island Speedboat Tour",
      "Bangkok Temple City Tour",
      "Thailand Tourist Visa",
      "Intercity & Airport Transfers",
    ],
    highlights: [
      "Speedboat cruise to Koh Larn (Coral Island) with lunch & water sports",
      "Bangkok Golden Buddha & Marble Temple guided excursion",
      "Chao Phraya evening dinner cruise & Pratunam market shopping",
    ],
    pricingTiers: [
      {
        label: "3-Star Pattaya & Bangkok Combo",
        duration: "6 Days / 5 Nights",
        pricePkr: 175000,
        priceUsd: 629,
        notes: "3N Pattaya + 2N Bangkok · Coral Island tour with lunch · Visa & transfers",
      },
      {
        label: "4-Star Deluxe + Chao Phraya Cruise",
        duration: "6 Days / 5 Nights",
        pricePkr: 198000,
        priceUsd: 710,
        notes: "4★ hotels · Luxury Chao Phraya dinner cruise · Private transfers",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Bangkok (BKK) & scenic highway transfer to Pattaya hotel.",
      "Day 2: Coral Island speedboat excursion with beach activities & buffet lunch.",
      "Day 3: Pattaya viewpoint, Gems Gallery visit & evening along Pattaya beach road.",
      "Day 4: Transfer to Bangkok en-route city temple tour & hotel check-in.",
      "Day 5: Full-day leisure or Safari World Marine Park excursion & Pratunam shopping.",
      "Day 6: Breakfast at hotel & airport transfer for onward flight.",
    ],
  },
  {
    id: "srilanka-classic",
    name: "Sri Lanka: Kandy, Bentota & Colombo",
    destination: "Kandy, Bentota & Colombo",
    country: "Sri Lanka",
    category: "Beach & Island",
    secondaryCategory: "Cultural",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/forest.jpg",
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    pricePkr: 185000,
    priceUsd: 665,
    rating: 4.86,
    reviews: 91,
    badge: "Nature & Beach",
    description:
      "Experience Pinnawala elephants, Kandy tea gardens, Madu River mangrove safari in Bentota, and vibrant Colombo.",
    longDescription:
      "From emerald highlands to golden Indian Ocean beaches. Explore 2 nights in cultural Kandy, 2 nights in coastal Bentota, and 1 night in Colombo with your own dedicated private chauffeur and air-conditioned vehicle throughout the journey.",
    routeStops: [
      "Pinnawala Elephant Sanctuary",
      "Kandy Highland Tea Hills",
      "Bentota Mangrove River Safari",
    ],
    inclusions: [
      "5 Nights 4★ Hotel Stay",
      "Daily Breakfast",
      "Private AC Car & Chauffeur",
      "Madu River Safari",
      "Turtle Hatchery Visit",
      "Sri Lanka ETA Visa",
    ],
    highlights: [
      "Pinnawala Elephant Sanctuary & Peradeniya Royal Botanical Gardens",
      "Ceylon tea factory visit, gem museum & Kandy cultural dance show",
      "Madu River boat safari, Kosgoda Turtle Hatchery & Bentota beach resort",
    ],
    pricingTiers: [
      {
        label: "4-Star Classic Circuit",
        duration: "6 Days / 5 Nights",
        pricePkr: 185000,
        priceUsd: 665,
        notes: "2N Kandy + 2N Bentota + 1N Colombo · Dedicated private car & driver",
      },
      {
        label: "Highland Ella & Scenic Train Upgrade",
        duration: "7 Days / 6 Nights",
        pricePkr: 218000,
        priceUsd: 785,
        notes: "Adds Nuwara Eliya misty hills & iconic Nine Arch Bridge train ride",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival in Colombo (CMB), visit Pinnawala Elephant Orphanage, drive to Kandy.",
      "Day 2: Kandy Lake, Royal Botanical Gardens, Tea Factory & cultural dance show.",
      "Day 3: Scenic drive through cascading waterfalls to Bentota beach resort.",
      "Day 4: Madu River mangrove boat safari, water sports & Kosgoda turtle hatchery.",
      "Day 5: Transfer to Colombo, Galle Face Green sunset & shopping at Colombo City Centre.",
      "Day 6: Breakfast at hotel & airport transfer for departure.",
    ],
  },
  {
    id: "bali-getaway",
    name: "Bali Island & Ubud Rainforest Escape",
    destination: "Bali",
    country: "Indonesia",
    category: "Beach & Island",
    secondaryCategory: "Luxury & Honeymoon",
    image: "/images/destinations/bali.jpeg",
    fallbackImage: "/images/bali.jpg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 220000,
    priceUsd: 799,
    rating: 4.9,
    reviews: 128,
    badge: "Honeymoon Special",
    description:
      "Tegallalang rice terraces, sacred water temples, Kintamani volcano panorama, and coastal Uluwatu sunsets.",
    longDescription:
      "Unwind in tropical luxury. Follow Bali’s timeless rhythm from the artisan villages and jungle ravines of Ubud to cliffside temples standing above the Indian Ocean swells, with private transfers and visa support included.",
    routeStops: [
      "Tegallalang Rice Terraces",
      "Kintamani Volcano Panorama",
      "Uluwatu Sunset Sea Temple",
    ],
    inclusions: [
      "4 Nights 4★ Resort Stay",
      "Daily Breakfast",
      "Full-Day Ubud & Kintamani Tour",
      "Uluwatu Sunset Temple Tour",
      "Indonesia E-Visa",
      "Private Return Transfers",
    ],
    highlights: [
      "Tegallalang emerald rice terraces & coffee plantation tasting",
      "Kintamani Mount Batur volcano viewpoint & Tirta Empul water temple",
      "Dramatic Uluwatu cliff sunset & Tanjung Benoa water sports",
    ],
    pricingTiers: [
      {
        label: "4-Star Kuta & Ubud Escape",
        duration: "5 Days / 4 Nights",
        pricePkr: 220000,
        priceUsd: 799,
        notes: "4★ Resort · Daily breakfast · Ubud & Kintamani tour · Transfers",
      },
      {
        label: "5-Star Private Pool Villa Honeymoon",
        duration: "6 Days / 5 Nights",
        pricePkr: 285000,
        priceUsd: 1025,
        notes: "Private pool villa in Seminyak · Nusa Penida speedboat tour & candlelight dinner",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Denpasar (DPS) & private transfer to resort.",
      "Day 2: Full-day Ubud artisan craft villages, Tegallalang terraces & Kintamani viewpoint.",
      "Day 3: Water sports at Tanjung Benoa & evening Uluwatu cliff temple sunset.",
      "Day 4: Island leisure day or optional Nusa Penida speedboat day trip.",
      "Day 5: Morning breakfast & private airport transfer for departure.",
    ],
  },
  {
    id: "istanbul-heritage",
    name: "Istanbul: Two Continents & Bosphorus Cruise",
    destination: "Istanbul",
    country: "Türkiye",
    category: "Cultural",
    secondaryCategory: "Popular",
    image: "/images/destinations/instanbul.jpeg",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 225000,
    priceUsd: 849,
    rating: 4.89,
    reviews: 102,
    badge: "Heritage Gem",
    description:
      "Hagia Sophia, Blue Mosque, Grand Bazaar, Princes’ Islands ferry, and a luxury dinner cruise along the Bosphorus Strait.",
    longDescription:
      "Where Europe and Asia meet. Immerse yourself in centuries of Ottoman and Byzantine splendour with guided tours of Sultanahmet, a scenic ferry to the car-free Princes' Islands, and an evening dinner cruise with traditional Turkish folklore performances.",
    routeStops: [
      "Hagia Sophia & Grand Bazaar",
      "Bosphorus Dinner Cruise",
      "Princes' Islands (Büyükada)",
    ],
    inclusions: [
      "4 Nights 4★ Central Hotel",
      "Daily Turkish Breakfast",
      "Old City Heritage Tour",
      "Bosphorus Dinner Cruise",
      "Princes' Islands Excursion",
      "Turkey Visa Guidance",
    ],
    highlights: [
      "Hagia Sophia, Blue Mosque & Topkapi Palace guided walking tour",
      "Evening Bosphorus dinner cruise between two continents with live shows",
      "Full-day Princes’ Islands (Büyükada) ferry excursion with lunch",
    ],
    pricingTiers: [
      {
        label: "4-Star Sultanahmet / Taksim Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 225000,
        priceUsd: 849,
        notes: "4★ Hotel · Heritage tour · Bosphorus dinner cruise · All transfers",
      },
      {
        label: "Istanbul + Bursa Cable Car Combo",
        duration: "6 Days / 5 Nights",
        pricePkr: 268000,
        priceUsd: 965,
        notes: "Adds full-day Green Bursa & Uludağ mountain cable car with lunch",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Istanbul Airport (IST) & private transfer to central hotel.",
      "Day 2: Sultanahmet landmarks: Hagia Sophia, Blue Mosque, Hippodrome & Grand Bazaar.",
      "Day 3: Scenic ferry to Princes’ Islands (Büyükada) with electric car tour & lunch.",
      "Day 4: Spice Bazaar, Galata Tower stroll & evening Bosphorus Dinner Cruise.",
      "Day 5: Morning Turkish breakfast & airport transfer for onward flight.",
    ],
  },
  {
    id: "umrah-special",
    name: "20-Day Complete Umrah Package with Flights & Ziyarat",
    destination: "Makkah & Madinah",
    country: "Saudi Arabia",
    category: "Umrah",
    secondaryCategory: "Cultural",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/destinations/instanbul.jpeg",
    days: 20,
    nights: 19,
    daysNights: "20 Days / 19 Nights",
    pricePkr: 230999,
    priceUsd: 829,
    rating: 4.97,
    reviews: 215,
    badge: "Special Umrah",
    description:
      "Direct return flights, Umrah Visa, Makkah & Madinah hotels with 24/7 shuttle or walking distance, full ground transport, and 4 Ziyarat.",
    longDescription:
      "Perform your spiritual journey with complete peace of mind. Open Trip (Pvt.) Ltd. provides carefully managed 20-Day Umrah packages including direct return air tickets from Pakistan, Umrah e-visa with insurance, vetted hotels in Makkah and Madinah, comfortable air-conditioned ground transfers, and religious guide support for historical Ziyarat of Makkah, Madinah, Taif, and Badr.",
    routeStops: [
      "Makkah al-Mukarramah",
      "Madinah al-Munawwarah",
      "Taif, Badr & Uhud Ziyarat",
    ],
    inclusions: [
      "Direct Return Air Ticket",
      "Umrah Visa with Insurance",
      "Makkah & Madinah Hotels",
      "Complete AC Ground Transport",
      "4 Ziyarat Tours Included",
      "Religious Guide Support",
    ],
    highlights: [
      "Direct return flights from Karachi / Lahore / Islamabad",
      "Hotels in Makkah & Madinah (Economy shuttle or 200m walking distance)",
      "Guided Ziyarat: Jabal al-Noor, Mina, Arafat, Masjid Quba, Uhud, Taif & Badr",
    ],
    pricingTiers: [
      {
        label: "Economy Package (Sharing Room)",
        duration: "20 Days / 19 Nights",
        pricePkr: 230999,
        priceUsd: 829,
        notes: "Direct Return Ticket + Visa + Shuttle Hotels + Transport + 4 Ziyarat",
      },
      {
        label: "Economy 4-Bed (Quad) Room",
        duration: "20 Days / 19 Nights",
        pricePkr: 241000,
        priceUsd: 865,
        notes: "Family Quad Room · Direct Flights · Full Transport & Ziyarat",
      },
      {
        label: "Economy 3-Bed (Triple) Room",
        duration: "20 Days / 19 Nights",
        pricePkr: 252000,
        priceUsd: 905,
        notes: "Triple Room · Direct Flights · Full Transport & Ziyarat",
      },
      {
        label: "Economy 2-Bed (Double) Room",
        duration: "20 Days / 19 Nights",
        pricePkr: 277000,
        priceUsd: 995,
        notes: "Private Double Room for couples · Direct Flights & Full Transport",
      },
      {
        label: "Near-Haram Star (700m Makkah / 200m Madinah)",
        duration: "20 Days / 19 Nights",
        pricePkr: 274999,
        priceUsd: 985,
        notes: "Sharing: PKR 274,999 · 4-Bed: PKR 297,000 · 3-Bed: PKR 320,000 · 2-Bed: PKR 375,000",
      },
    ],
    sampleItinerary: [
      "Days 1–5: Arrival in Jeddah, transfer to Makkah hotel, perform Umrah with guide.",
      "Days 6–10: Prayers at Masjid al-Haram & guided Makkah / Taif historical Ziyarat.",
      "Days 11–15: Travel to Madinah Munawarah (via Badr) & check-in near Masjid an-Nabawi.",
      "Days 16–19: Prayers at Masjid an-Nabawi, Rawdah visit & guided Madinah Ziyarat.",
      "Day 20: Departure transfer to Jeddah/Madinah airport for return flight to Pakistan.",
    ],
  },
  {
    id: "cappadocia-cave",
    name: "Cappadocia: Fairy Chimneys & Cave Suite",
    destination: "Cappadocia",
    country: "Türkiye",
    category: "Cultural",
    secondaryCategory: "Luxury & Honeymoon",
    image: "/images/cappadocia.jpg",
    fallbackImage: "/images/cappadocia.jpg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 249000,
    priceUsd: 899,
    rating: 4.93,
    reviews: 89,
    badge: "Unique Cave Stay",
    description:
      "Boutique stone cave hotel stay, dawn hot-air balloon viewpoint, Göreme Open-Air Museum, and underground city tours.",
    longDescription:
      "An ethereal lunar landscape sculpted by volcanic ash and millennia of wind. Wake to hundreds of colourful hot-air balloons floating above the valleys, explore hidden underground subterranean cities, and relax in luxury cave suites carved into the living rock.",
    routeStops: [
      "Dawn Balloon Viewpoint",
      "Göreme Open-Air Museum",
      "Kaymakli Cave City",
    ],
    inclusions: [
      "4 Nights Cave Suite Stay",
      "Daily Terrace Breakfast",
      "Red & Green Valley Guided Tours",
      "Underground City Entry",
      "Sunset Quad ATV Safari",
      "Domestic Airport Transfers",
    ],
    highlights: [
      "Dawn hot-air balloon sunrise viewpoint over Göreme valley",
      "Boutique cave hotel suite with panoramic sunset terrace",
      "Guided hike through Rose Valley, Pasabag & Kaymakli Underground City",
    ],
    pricingTiers: [
      {
        label: "Boutique Cave Suite Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 249000,
        priceUsd: 899,
        notes: "Cave suite stay · Daily breakfast · North & South tours · Transfers",
      },
      {
        label: "Istanbul + Cappadocia Grand Combo",
        duration: "8 Days / 7 Nights",
        pricePkr: 345000,
        priceUsd: 1240,
        notes: "4N Istanbul + 3N Cappadocia including domestic flights & tours",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival in Kayseri/Nevşehir & scenic transfer to cave hotel in Göreme.",
      "Day 2: Sunrise balloon viewpoint, Göreme Open-Air Museum & Avanos pottery craft.",
      "Day 3: Kaymakli Underground City, Ihlara Valley trek & Pigeon Valley view.",
      "Day 4: Sunset ATV quad safari through Rose Valley & Turkish culinary dinner.",
      "Day 5: Terrace breakfast & transfer to airport for onward connection.",
    ],
  },
  {
    id: "dubai-safari",
    name: "Dubai City Break, Desert Safari & Marina Cruise",
    destination: "Dubai",
    country: "UAE",
    category: "Popular",
    secondaryCategory: "Family",
    image: "/images/destinations/dubai.jpeg",
    fallbackImage: "/images/destinations/dubai.jpeg",
    days: 5,
    nights: 4,
    daysNights: "5 Days / 4 Nights",
    pricePkr: 265000,
    priceUsd: 949,
    rating: 4.89,
    reviews: 134,
    badge: "All-Time Favorite",
    description:
      "4 Nights in Dubai with 4x4 evening desert safari, live BBQ dinner, Marina dhow dinner cruise, and city landmarks.",
    longDescription:
      "Experience visionary skyscrapers, golden desert dunes, and traditional creek souks. This complete package includes 4 nights hotel accommodation, Dubai Marina dinner cruise, 4x4 dune bashing with Bedouin camp entertainment, and UAE tourist visa assistance.",
    routeStops: [
      "4x4 Desert Safari & BBQ Camp",
      "Dubai Marina Dhow Cruise",
      "Burj Khalifa 124th Sky Deck",
    ],
    inclusions: [
      "4 Nights 4★ Hotel Stay",
      "Daily Buffet Breakfast",
      "4x4 Desert Safari & BBQ Dinner",
      "Dubai Marina Dhow Cruise",
      "Half-Day City Sightseeing",
      "UAE Tourist Visa",
    ],
    highlights: [
      "Thrilling 4x4 sand dune bashing, camel ride, belly dance & BBQ dinner",
      "Marina Dhow Cruise dinner gliding beneath illuminated skyscrapers",
      "Burj Khalifa 124th floor sky deck & Dubai Mall fountain show",
    ],
    pricingTiers: [
      {
        label: "Deira / Bur Dubai 3-Star Package",
        duration: "5 Days / 4 Nights",
        pricePkr: 245000,
        priceUsd: 879,
        notes: "4N hotel + breakfast · Desert Safari · Dhow Cruise · UAE Visa",
      },
      {
        label: "Downtown / Sheikh Zayed 4-Star",
        duration: "5 Days / 4 Nights",
        pricePkr: 265000,
        priceUsd: 949,
        notes: "4★ hotel · Burj Khalifa observation deck ticket · Marina Cruise & Safari",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Dubai (DXB) & evening Marina Dhow Cruise dinner.",
      "Day 2: Dubai City Tour: Jumeirah Mosque, Burj Al Arab view & Dubai Mall.",
      "Day 3: Afternoon 4x4 Desert Safari with dune bashing & sunset BBQ dinner.",
      "Day 4: Burj Khalifa 124th floor visit & Gold / Spice Souk shopping.",
      "Day 5: Morning leisure at Jumeirah Beach & airport transfer for departure.",
    ],
  },
  {
    id: "maldives-lagoon",
    name: "Maldives Private Lagoon & Resort Villa",
    destination: "Maldives",
    country: "Maldives",
    category: "Luxury & Honeymoon",
    secondaryCategory: "Beach & Island",
    image: "/images/destinations/maldives.jpeg",
    fallbackImage: "/images/hero-coast.jpeg",
    days: 4,
    nights: 3,
    daysNights: "4 Days / 3 Nights",
    pricePkr: 330000,
    priceUsd: 1199,
    rating: 4.92,
    reviews: 112,
    badge: "Ultra Luxury Atoll",
    description:
      "Step directly into crystal turquoise waters with private island resort stay, half-board dining, and speedboat transfer.",
    longDescription:
      "Pure unhurried coastal serenity in the Indian Ocean. Stay in an idyllic beachfront or overwater villa, snorkel vibrant coral house reefs, enjoy romantic sandbank picnics, and sail into the sunset aboard a traditional wooden dhoni.",
    routeStops: [
      "Private Overwater Villa",
      "Guided Coral House-Reef",
      "Sunset Dolphin Dhoni Cruise",
    ],
    inclusions: [
      "3 Nights Luxury Resort Stay",
      "Half-Board (Breakfast & Dinner)",
      "Return Airport Speedboat",
      "Coral Reef Snorkeling Trip",
      "Sunset Dolphin Cruise",
      "All Resort Taxes & Green Fees",
    ],
    highlights: [
      "Beachfront or overwater villa with direct crystal lagoon access",
      "Guided coral reef snorkeling encounter with turtles & rays",
      "Sunset dhoni cruise & oceanfront candlelit dining",
    ],
    pricingTiers: [
      {
        label: "4-Star Beach Villa Resort",
        duration: "4 Days / 3 Nights",
        pricePkr: 330000,
        priceUsd: 1199,
        notes: "Beach villa · Breakfast & Dinner · Return speedboat transfer",
      },
      {
        label: "5-Star Overwater Lagoon Villa",
        duration: "5 Days / 4 Nights",
        pricePkr: 495000,
        priceUsd: 1780,
        notes: "Overwater villa with direct lagoon steps · All-inclusive dining & sunset cruise",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Malé (MLE) & scenic speedboat transfer to private island.",
      "Day 2: Guided house-reef snorkeling, water sports & beachfront spa ritual.",
      "Day 3: Private sandbank picnic & traditional sunset dolphin cruise.",
      "Day 4: Morning lagoon swim, breakfast & speedboat transfer to Malé airport.",
    ],
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps & Glacial Lakes Rail Explorer",
    destination: "Switzerland",
    country: "Switzerland",
    category: "Adventure",
    secondaryCategory: "Luxury & Honeymoon",
    image: "/images/destinations/switzerland.jpeg",
    fallbackImage: "/images/mountains.jpg",
    days: 7,
    nights: 6,
    daysNights: "7 Days / 6 Nights",
    pricePkr: 360000,
    priceUsd: 1299,
    rating: 4.95,
    reviews: 94,
    badge: "Alpine Rail Journey",
    description:
      "Lucerne steamer cruise, Mount Titlis revolving cable car, GoldenPass panoramic train, and Zermatt Matterhorn views.",
    longDescription:
      "The pinnacle of mountain landscapes and scenic comfort. Glide past mirror-still alpine lakes and towering peaks aboard glass-domed trains, hike wildflower trails, and experience the car-free mountain haven of Zermatt under the Matterhorn.",
    routeStops: [
      "Lake Lucerne Steamer Cruise",
      "Mount Titlis Rotair Cableway",
      "Zermatt Matterhorn Village",
    ],
    inclusions: [
      "6 Nights Alpine Hotel Stays",
      "Daily Swiss Breakfast",
      "Swiss Travel Rail Pass",
      "Mount Titlis Cable Car",
      "Lake Lucerne Steamer Cruise",
      "Schengen Visa File Prep",
    ],
    highlights: [
      "GoldenPass & Glacier Express panoramic mountain rail journeys",
      "Mount Titlis revolving Rotair cable car & Cliff Walk bridge",
      "Zermatt village & iconic Matterhorn viewpoint excursion",
    ],
    pricingTiers: [
      {
        label: "Lucerne, Interlaken & Zurich Rail Tour",
        duration: "7 Days / 6 Nights",
        pricePkr: 360000,
        priceUsd: 1299,
        notes: "6N hotels + breakfast · Swiss Travel Pass · Mount Titlis excursion",
      },
      {
        label: "Grand Matterhorn & Glacier Express",
        duration: "8 Days / 7 Nights",
        pricePkr: 445000,
        priceUsd: 1599,
        notes: "Includes Jungfraujoch Top of Europe & panoramic Glacier Express",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival in Zurich (ZRH) & scenic train journey to lakeside Lucerne.",
      "Day 2: Lake Lucerne steamer cruise & Mount Titlis revolving cableway.",
      "Day 3: GoldenPass panoramic rail to Interlaken & Lauterbrunnen valley.",
      "Day 4: Grindelwald First cliff walk & high-alpine meadow trails.",
      "Day 5: Rail transfer to Zermatt beneath the iconic Matterhorn peak.",
      "Day 6: Gornergrat railway viewpoint & return rail to Zurich.",
      "Day 7: Breakfast & train transfer to Zurich Airport for departure.",
    ],
  },
  {
    id: "hunza-skardu",
    name: "Northern Pakistan: Hunza & Skardu Valleys",
    destination: "Hunza & Skardu",
    country: "Pakistan",
    category: "Adventure",
    secondaryCategory: "Family",
    image: "/images/hunza.jpg",
    fallbackImage: "/images/hunza.jpg",
    days: 8,
    nights: 7,
    daysNights: "8 Days / 7 Nights",
    pricePkr: 85000,
    priceUsd: 305,
    rating: 4.94,
    reviews: 156,
    badge: "Domestic Northern Crown",
    description:
      "Cathedral Karakoram peaks, Attabad Lake boat ride, Baltit & Altit Forts, Shangrila Resort, and Sarfaranga Cold Desert.",
    longDescription:
      "Experience the crown of Pakistan’s mountains. From turquoise Attabad Lake and 800-year-old forts in Hunza to the alpine lakes and sand dunes of Skardu, travel in comfort with vetted hotels and private 4x4 transport.",
    routeStops: [
      "Baltit & Altit Ancient Forts",
      "Turquoise Attabad Lake Cruise",
      "Skardu Shangrila & Cold Desert",
    ],
    inclusions: [
      "7 Nights Deluxe Hotel Stays",
      "Daily Breakfast",
      "Dedicated Transport / Prado",
      "Attabad Lake Boat Excursion",
      "Forts & Shangrila Entry",
      "Experienced Tour Driver/Guide",
    ],
    highlights: [
      "Baltit & Altit Forts overlooking Karimabad & Rakaposhi viewpoint",
      "Turquoise Attabad Lake jet-ski ride, Passu Cones & Hussaini Bridge",
      "Skardu Shangrila Lower Kachura Lake & Sarfaranga Cold Desert safari",
    ],
    pricingTiers: [
      {
        label: "Group Tour Package (Per Person)",
        duration: "8 Days / 7 Nights",
        pricePkr: 45000,
        priceUsd: 165,
        notes: "Quad/Twin sharing · AC Coaster/Grand Cabin · Daily breakfast & bonfire",
      },
      {
        label: "Private Couple / Family Deluxe Tour",
        duration: "8 Days / 7 Nights",
        pricePkr: 85000,
        priceUsd: 305,
        notes: "Private vehicle · Deluxe hotel rooms in Hunza & Skardu · Breakfast",
      },
      {
        label: "By-Air Luxury Karakoram Escape",
        duration: "6 Days / 5 Nights",
        pricePkr: 165000,
        priceUsd: 595,
        notes: "Includes return flights to Skardu (KDU) + 4x4 Prado TZ & luxury resorts",
      },
    ],
    sampleItinerary: [
      "Day 1: Departure from Islamabad / Arrival in Chilas via Hazara Motorway.",
      "Day 2: Rakaposhi viewpoint stop & arrival in Karimabad Hunza for Eagle’s Nest sunset.",
      "Day 3: Heritage walk through Baltit Fort, Altit Fort & local Hunza café.",
      "Day 4: Attabad Lake boating, Hussaini suspension bridge & Passu Cones.",
      "Day 5: Scenic drive along Indus River to Skardu & Shangrila Resort.",
      "Day 6: Shigar Fort, Sarfaranga Cold Desert sunset & Upper Kachura Lake.",
      "Day 7: Deosai Plains or Basho Valley excursion & local trout dinner.",
      "Day 8: Departure from Skardu airport (KDU) or scenic return to Islamabad.",
    ],
  },
  {
    id: "vietnam-classic",
    name: "Vietnam Discovery: Hanoi, Halong Bay & Da Nang",
    destination: "Hanoi & Halong Bay",
    country: "Vietnam",
    category: "Beach & Island",
    secondaryCategory: "Cultural",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/hero-coast.jpeg",
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    pricePkr: 195000,
    priceUsd: 699,
    rating: 4.89,
    reviews: 104,
    badge: "Trending Asian Tour",
    description:
      "Overnight Halong Bay emerald karst cruise, Hanoi French Quarter street food, and Golden Bridge hands in Ba Na Hills Da Nang.",
    longDescription:
      "An enchanting journey through Southeast Asia’s most scenic landscape. Sail aboard a traditional wooden junk amidst thousands of limestone islands in Halong Bay, explore Hanoi's atmospheric Old Quarter, and walk across the world-famous Golden Giant Hands Bridge high above Da Nang.",
    routeStops: [
      "Hanoi Old Quarter & Hoan Kiem",
      "Halong Bay Emerald Cruise",
      "Da Nang Golden Bridge Hands",
    ],
    inclusions: [
      "5 Nights 4★ Hotels & Cruise",
      "Daily Breakfast + Cruise Meals",
      "Halong Bay Luxury Day Cruise",
      "Ba Na Hills Cable Car Pass",
      "Vietnam E-Visa Assistance",
      "All Private Transfers",
    ],
    highlights: [
      "Overnight Halong Bay cruise with kayaking & Sung Sot cave exploration",
      "Golden Giant Hands Bridge & French village at Ba Na Hills Da Nang",
      "Hanoi Old Quarter cyclo tour, Temple of Literature & train street coffee",
    ],
    pricingTiers: [
      {
        label: "4-Star Hanoi & Halong Bay Cruise",
        duration: "6 Days / 5 Nights",
        pricePkr: 195000,
        priceUsd: 699,
        notes: "Twin sharing · Halong cruise with meals · Ba Na Hills pass · Visa",
      },
      {
        label: "Grand Vietnam (Hanoi + Da Nang + Saigon)",
        duration: "8 Days / 7 Nights",
        pricePkr: 265000,
        priceUsd: 949,
        notes: "Adds Ho Chi Minh City, Mekong Delta cruise & domestic flights",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Hanoi (HAN) & private transfer to hotel. Evening Old Quarter walk.",
      "Day 2: Hanoi city landmarks: Ho Chi Minh Mausoleum & Temple of Literature.",
      "Day 3: Scenic highway transfer to Halong Bay & board luxury bay cruise.",
      "Day 4: Morning Tai Chi on sundeck, flight/transfer to Da Nang beach resort.",
      "Day 5: Ba Na Hills excursion, Golden Giant Hands Bridge & Dragon Bridge evening.",
      "Day 6: Breakfast at hotel & airport transfer for onward flight.",
    ],
  },
  {
    id: "egypt-pyramids",
    name: "Egypt Ancient Wonders: Cairo, Giza & Nile",
    destination: "Cairo & Giza",
    country: "Egypt",
    category: "Cultural",
    secondaryCategory: "Adventure",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/images/cappadocia.jpg",
    days: 6,
    nights: 5,
    daysNights: "6 Days / 5 Nights",
    pricePkr: 285000,
    priceUsd: 1025,
    rating: 4.93,
    reviews: 87,
    badge: "Bucket-List Odyssey",
    description:
      "Great Pyramids of Giza, Great Sphinx, Grand Egyptian Museum, Khan el-Khalili bazaar, and evening Nile dinner cruise.",
    longDescription:
      "Stand before the last surviving wonder of the ancient world. Open Trip takes you into the heart of 5,000 years of civilization: stand before Khufu’s Great Pyramid, explore King Tutankhamun's gold treasures in Cairo, sail aboard a felucca on the Nile, and stroll through candlelit medieval spice alleys.",
    routeStops: [
      "Great Pyramids & Sphinx of Giza",
      "Grand Egyptian Museum Treasures",
      "Nile River Sunset Felucca Sail",
    ],
    inclusions: [
      "5 Nights 5★ Cairo Nile-View Hotel",
      "Daily Egyptian Buffet Breakfast",
      "Private Egyptologist Tour Guide",
      "Giza Pyramids & Sphinx Entry",
      "Nile Dinner Cruise with Show",
      "Egypt Tourist Visa & Transfers",
    ],
    highlights: [
      "Private guided excursion to Giza Pyramids, Sphinx & solar boat museum",
      "Grand Egyptian Museum & King Tutankhamun golden burial mask",
      "Sunset Nile felucca cruise & Khan el-Khalili bazaar sensory shopping",
    ],
    pricingTiers: [
      {
        label: "5-Star Cairo & Pyramids Classic",
        duration: "6 Days / 5 Nights",
        pricePkr: 285000,
        priceUsd: 1025,
        notes: "5★ Nile hotel · Pyramids tour with private Egyptologist · Visa included",
      },
      {
        label: "Grand Cairo + Luxor Valley of Kings Nile Cruise",
        duration: "8 Days / 7 Nights",
        pricePkr: 395000,
        priceUsd: 1420,
        notes: "Adds 3 nights luxury 5★ Nile riverboat cruise between Luxor & Aswan",
      },
    ],
    sampleItinerary: [
      "Day 1: Arrival at Cairo International (CAI) & private transfer to hotel.",
      "Day 2: Full-day Giza Plateau: Great Pyramids, Sphinx & Camel ride panorama.",
      "Day 3: Grand Egyptian Museum & National Museum of Egyptian Civilization.",
      "Day 4: Historic Cairo: Citadel of Saladin, Alabaster Mosque & Khan el-Khalili.",
      "Day 5: Sunset Nile felucca sailboat ride & gala farewell dinner cruise.",
      "Day 6: Breakfast overlooking the Nile & private airport transfer for departure.",
    ],
  },
];

const CATEGORIES = [
  "All",
  "Popular",
  "Beach & Island",
  "Cultural",
  "Luxury & Honeymoon",
  "Adventure",
  "Family",
  "Umrah",
];

const DURATIONS = [
  { id: "all", label: "All Durations" },
  { id: "short", label: "4–5 Days" },
  { id: "medium", label: "6–8 Days" },
  { id: "extended", label: "20 Days (Umrah)" },
];

const HERO_FEATURED = [
  PACKAGES_CATALOG[0], // Malaysia (5D/4N - PKR 155,000)
  PACKAGES_CATALOG[1], // Baku & Gabala (5D/4N - PKR 165,000)
  PACKAGES_CATALOG[4], // Bali (5D/4N - PKR 220,000)
  PACKAGES_CATALOG[6], // Dubai (5D/4N - PKR 265,000)
];

export default function PackagesPage() {
  const nav = useNavigation();
  const [heroIndex, setHeroIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [currency, setCurrency] = useState("PKR");
  const [viewMode, setViewMode] = useState("magazine"); // 'magazine' or 'compact'
  const [dialog, setDialog] = useState(null);

  const activeHeroPackage = HERO_FEATURED[heroIndex];

  const formatMoney = (pkg) => {
    if (currency === "PKR") {
      return `PKR ${pkg.pricePkr.toLocaleString("en-US")}`;
    }
    return `$${pkg.priceUsd.toLocaleString("en-US")}`;
  };

  const formatSecondaryMoney = (pkg) => {
    if (currency === "PKR") {
      return `~$${pkg.priceUsd.toLocaleString("en-US")}`;
    }
    return `PKR ${pkg.pricePkr.toLocaleString("en-US")}`;
  };

  const openDetails = (pkg) => {
    setDialog({ type: "package", package: pkg });
  };

  const openPlanner = (pkg = null) => {
    setDialog({
      type: "trip",
      trip: pkg
        ? {
            ...pkg,
            name: pkg.name,
            destination: pkg.destination,
            priceFrom: pkg.priceUsd,
          }
        : null,
    });
  };

  const filteredPackages = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PACKAGES_CATALOG.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.destination.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.inclusions.some((inc) => inc.toLowerCase().includes(q));

      const matchesCategory =
        category === "All" ||
        item.category === category ||
        item.secondaryCategory === category ||
        (category === "Umrah" &&
          (item.category === "Umrah" || item.id === "umrah-special"));

      let matchesDuration = true;
      if (duration === "short") matchesDuration = item.days <= 5;
      else if (duration === "medium")
        matchesDuration = item.days >= 6 && item.days <= 8;
      else if (duration === "extended") matchesDuration = item.days >= 15;

      return matchesQuery && matchesCategory && matchesDuration;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.pricePkr - b.pricePkr;
      if (sortBy === "price-desc") return b.pricePkr - a.pricePkr;
      if (sortBy === "duration") return a.days - b.days;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [query, category, duration, sortBy]);

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setDuration("all");
    setSortBy("featured");
  };

  const umrahPackage = useMemo(
    () => PACKAGES_CATALOG.find((p) => p.id === "umrah-special"),
    [],
  );

  const showcasePackage = filteredPackages[0] || PACKAGES_CATALOG[0];
  // Filter out the top showcase package AND the Umrah package (when viewing all, since Umrah has its own grand section)
  // This guarantees 12 items in the magazine flow that divide perfectly into 3 + 9 (zero empty holes!)
  const remainingPackages = filteredPackages.filter(
    (p) =>
      p.id !== showcasePackage?.id &&
      (category === "Umrah" ? true : p.id !== "umrah-special"),
  );
  const batchOne = remainingPackages.slice(0, 3);
  const batchTwo = remainingPackages.slice(3);

  return (
    <div className="packages-page" id="home">
      {/* 1. HERO SECTION (INSPIRED DIRECTLY BY HOME SCREEN'S HERO) */}
      <section className="pkg-hero" id="home" aria-labelledby="packages-page-title">
        <img
          className="pkg-hero-bg"
          src={activeHeroPackage.image}
          alt={activeHeroPackage.name}
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.src = "/images/hero-coast.jpeg";
          }}
        />
        <div className="pkg-hero-overlay" />
        <Header
          onPlan={() => openPlanner()}
          onExplore={() => {
            if (nav) nav.navigate("destinations");
          }}
        />

        <div className="container pkg-hero-body">
          <div className="pkg-hero-copy">
            <p className="eyebrow">
              Explore <span>·</span> Discover <span>·</span> Belong
            </p>
            <h1 id="packages-page-title">
              Curated Packages,
              <br />
              Beyond the Ordinary.
            </h1>
            <p className="pkg-hero-description">
              Discover verified multi-day departures with handpicked hotel tiers,
              <br className="desktop-break" /> visa processing, and transparent PKR &amp; USD pricing.
            </p>

            <div className="pkg-hero-actions">
              <Button
                onClick={() =>
                  document
                    .getElementById("packages-explore")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Packages <Icon size={17} />
              </Button>
              <Button variant="outline" onClick={() => openPlanner()}>
                Plan Custom Trip{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Home-Inspired Interactive Package Fast-Selector */}
          <div className="pkg-hero-selector" id="hero-packages">
            <div
              className="pkg-hero-list"
              role="group"
              aria-label="Featured packages"
            >
              {HERO_FEATURED.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`pkg-hero-option ${heroIndex === idx ? "is-active" : ""}`}
                  aria-pressed={heroIndex === idx}
                  onClick={() => setHeroIndex(idx)}
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
                  <div className="pkg-hero-option-info">
                    <strong>{item.destination}</strong>
                    <small>
                      {item.daysNights} · {formatMoney(item)}
                    </small>
                  </div>
                </button>
              ))}
            </div>

            <div className="pkg-hero-controls">
              <span>
                {String(heroIndex + 1).padStart(2, "0")}{" "}
                <span className="muted">
                  / {String(HERO_FEATURED.length).padStart(2, "0")}
                </span>
              </span>
              <button
                type="button"
                className="round-button"
                aria-label="Previous featured package"
                onClick={() =>
                  setHeroIndex(
                    (heroIndex - 1 + HERO_FEATURED.length) %
                      HERO_FEATURED.length,
                  )
                }
              >
                <Icon name="chevronLeft" size={15} />
              </button>
              <button
                type="button"
                className="round-button next"
                aria-label="Next featured package"
                onClick={() =>
                  setHeroIndex((heroIndex + 1) % HERO_FEATURED.length)
                }
              >
                <Icon name="chevronRight" size={15} />
              </button>
            </div>
          </div>

          <a className="scroll-cue" href="#packages-explore">
            <span className="mouse-icon">
              <span />
            </span>
            Scroll to explore packages
          </a>

          <div className="destination-caption" aria-live="polite">
            <span>{activeHeroPackage.name}</span>
            <p>
              {activeHeroPackage.daysNights} · Starting from{" "}
              {formatMoney(activeHeroPackage)} ({formatSecondaryMoney(activeHeroPackage)})
            </p>
          </div>
        </div>
      </section>

      {/* 2. FLOATING CONTROLS & FILTER BAR */}
      <div className="container pkg-controls-wrap" id="packages-explore">
        <div className="pkg-controls-card">
          <div className="pkg-search-row">
            <label className="pkg-search-box">
              <Icon name="search" size={18} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search packages by destination, country, visa or hotel (e.g. Malaysia, Baku, Umrah, 5 Days)..."
                aria-label="Search tour packages"
              />
              {query && (
                <button
                  type="button"
                  className="pkg-clear-input"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <Icon name="close" size={15} />
                </button>
              )}
            </label>

            {/* View Mode Switcher: Editorial Magazine vs Compact Tariff */}
            <div
              className="pkg-view-switch"
              role="group"
              aria-label="Toggle view mode"
            >
              <button
                type="button"
                className={viewMode === "magazine" ? "is-active" : ""}
                onClick={() => setViewMode("magazine")}
                title="Dynamic Magazine Editorial View"
              >
                <Icon name="grid" size={14} />
                <span>Magazine View</span>
              </button>
              <button
                type="button"
                className={viewMode === "compact" ? "is-active" : ""}
                onClick={() => setViewMode("compact")}
                title="Compact Tariff Table View"
              >
                <Icon name="calendar" size={14} />
                <span>Quick Tariff</span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div
              className="pkg-currency-switch"
              role="group"
              aria-label="Toggle currency"
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

            <div className="pkg-select-group">
              <label>
                <span>Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Open Trip Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Duration (Days / Nights)</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </label>
            </div>
          </div>

          <div className="pkg-filters-row">
            <div
              className="pkg-pill-group"
              role="group"
              aria-label="Filter by theme"
            >
              <span className="pkg-filter-label">Experience:</span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={category === cat}
                  className={`pkg-filter-pill ${category === cat ? "is-selected" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat === "All" ? "All Packages" : cat === "Umrah" ? "🕌 Umrah (20D)" : cat}
                </button>
              ))}
            </div>

            <div
              className="pkg-pill-group"
              role="group"
              aria-label="Filter by duration"
            >
              <span className="pkg-filter-label">Length:</span>
              {DURATIONS.map((dur) => (
                <button
                  key={dur.id}
                  type="button"
                  aria-pressed={duration === dur.id}
                  className={`pkg-filter-pill ${duration === dur.id ? "is-selected" : ""}`}
                  onClick={() => setDuration(dur.id)}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC MAIN PRESENTATION (ZERO MONOTONY) */}
      <section className="container pkg-main-section">
        <div className="pkg-results-bar">
          <p>
            Showing <strong>{filteredPackages.length}</strong> curated tour
            dossiers
            {category !== "All" ? ` in ${category}` : ""}
            {duration !== "all"
              ? ` · ${DURATIONS.find((d) => d.id === duration)?.label}`
              : ""}
          </p>
          {(category !== "All" || duration !== "all" || query) && (
            <button
              type="button"
              className="pkg-reset-link"
              onClick={resetFilters}
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredPackages.length === 0 ? (
          <div className="pkg-empty-state">
            <h3>No packages match your selected criteria.</h3>
            <p>
              Let our Karachi team customize a private itinerary for your
              preferred dates and destination.
            </p>
            <Button onClick={resetFilters}>Show All Packages</Button>
          </div>
        ) : viewMode === "compact" ? (
          /* COMPACT TARIFF LIST VIEW FOR QUICK COMPARISON */
          <div className="pkg-compact-list">
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="pkg-compact-row"
                onClick={() => openDetails(pkg)}
              >
                <div className="pkg-compact-index">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="pkg-compact-media">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    onError={(e) => {
                      if (pkg.fallbackImage) {
                        e.currentTarget.src = pkg.fallbackImage;
                      }
                    }}
                  />
                </div>
                <div className="pkg-compact-info">
                  <div className="pkg-compact-meta">
                    <span className="pkg-compact-country">
                      <Icon name="pin" size={11} />
                      {pkg.country}
                    </span>
                    <span className="pkg-compact-badge">{pkg.badge}</span>
                  </div>
                  <h4 className="pkg-compact-title">{pkg.name}</h4>
                  <p className="pkg-compact-desc">{pkg.description}</p>
                </div>
                <div className="pkg-compact-duration">
                  <span className="pkg-duration-capsule">
                    ☀️ {pkg.days}D · 🌙 {pkg.nights}N
                  </span>
                  <small>★ {pkg.rating} ({pkg.reviews})</small>
                </div>
                <div className="pkg-compact-price">
                  <small>STARTING RATE</small>
                  <strong>{formatMoney(pkg)}</strong>
                  <span>{formatSecondaryMoney(pkg)} / pers.</span>
                </div>
                <div
                  className="pkg-compact-action"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="pkg-btn-compact"
                    onClick={() => openDetails(pkg)}
                  >
                    View Tiers →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* DYNAMIC EDITORIAL MAGAZINE VIEW:
             - 1 Grand Panoramic Showcase Feature Card
             - 3-Column Magazine Visual Cards (Batch 1)
             - Open Trip 20-Day Umrah Spiritual Showcase Banner
             - 3-Column Magazine Visual Cards (Batch 2)
          */
          <div className="pkg-editorial-flow">
            {/* FEATURE TIER 1: GRAND PANORAMIC SHOWCASE CARD */}
            {showcasePackage && (
              <article className="pkg-panoramic-showcase">
                <div
                  className="pkg-panoramic-media"
                  onClick={() => openDetails(showcasePackage)}
                >
                  <img
                    src={showcasePackage.image}
                    alt={showcasePackage.name}
                    loading="lazy"
                    onError={(e) => {
                      if (showcasePackage.fallbackImage) {
                        e.currentTarget.src = showcasePackage.fallbackImage;
                      }
                    }}
                  />
                  <div className="pkg-panoramic-overlay" />
                  <span className="pkg-panoramic-badge">
                    ★ Open Trip Signature Feature
                  </span>
                  <div className="pkg-panoramic-duration">
                    <span>☀️ {showcasePackage.days} Days</span>
                    <span className="sep">·</span>
                    <span>🌙 {showcasePackage.nights} Nights</span>
                  </div>
                  <span className="pkg-panoramic-rating">
                    ★ {showcasePackage.rating} ({showcasePackage.reviews} Reviews)
                  </span>
                </div>

                <div className="pkg-panoramic-content">
                  <div className="pkg-panoramic-header">
                    <span className="pkg-panoramic-location">
                      <Icon name="pin" size={13} />
                      {showcasePackage.country} · {showcasePackage.destination}
                    </span>
                    <span className="pkg-panoramic-category">
                      {showcasePackage.category}
                    </span>
                  </div>

                  <h2
                    className="pkg-panoramic-title"
                    onClick={() => openDetails(showcasePackage)}
                  >
                    {showcasePackage.name}
                  </h2>

                  <p className="pkg-panoramic-desc">
                    {showcasePackage.description}
                  </p>

                  {/* Included Perks */}
                  <div className="pkg-panoramic-perks">
                    {showcasePackage.inclusions.slice(0, 4).map((inc) => (
                      <span key={inc} className="pkg-perk-tag">
                        <i>✓</i> {inc}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Rate & CTAs */}
                  <div className="pkg-panoramic-footer">
                    <div className="pkg-panoramic-price">
                      <small>STARTING RATE</small>
                      <strong>{formatMoney(showcasePackage)}</strong>
                      <span>
                        {formatSecondaryMoney(showcasePackage)} / person
                      </span>
                    </div>

                    <div className="pkg-panoramic-actions">
                      <Button onClick={() => openDetails(showcasePackage)}>
                        View Details <Icon size={16} />
                      </Button>
                      <a
                        className="pkg-whatsapp-action"
                        href={`https://wa.me/923101816191?text=${encodeURIComponent(
                          `Assalam o Alaikum Open Trip! I am inquiring about: ${showcasePackage.name} (${showcasePackage.daysNights} - ${formatMoney(showcasePackage)}).`,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp Desk
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* FEATURE TIER 2: MAGAZINE VISUAL CARDS (BATCH 1) */}
            {batchOne.length > 0 && (
              <div className="pkg-magazine-grid">
                {batchOne.map((pkg) => (
                  <article key={pkg.id} className="pkg-mag-card">
                    <div
                      className="pkg-mag-media"
                      onClick={() => openDetails(pkg)}
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        loading="lazy"
                        onError={(e) => {
                          if (pkg.fallbackImage) {
                            e.currentTarget.src = pkg.fallbackImage;
                          }
                        }}
                      />
                      <div className="pkg-mag-media-gradient" />
                      <span className="pkg-mag-badge">{pkg.badge}</span>
                      <div className="pkg-mag-price-badge">
                        <span>{formatMoney(pkg)}</span>
                      </div>
                      <div className="pkg-mag-duration-tag">
                        <span>☀️ {pkg.days}D</span>
                        <span className="dot">·</span>
                        <span>🌙 {pkg.nights}N</span>
                      </div>
                      <span className="pkg-mag-rating">★ {pkg.rating}</span>
                    </div>

                    <div className="pkg-mag-body">
                      <div className="pkg-mag-location">
                        <Icon name="pin" size={11} />
                        <span>{pkg.country}</span>
                        <span className="bullet">·</span>
                        <span className="vibe">{pkg.category}</span>
                      </div>

                      <h3
                        className="pkg-mag-title"
                        onClick={() => openDetails(pkg)}
                      >
                        {pkg.destination}
                      </h3>

                      <p className="pkg-mag-snippet">{pkg.description}</p>

                      {/* Inclusions Chips (2 concise chips) */}
                      <div className="pkg-mag-chips">
                        {pkg.inclusions.slice(0, 2).map((inc) => (
                          <span key={inc} className="pkg-mag-chip">
                            <i>✓</i> {inc}
                          </span>
                        ))}
                      </div>

                      <div className="pkg-mag-footer">
                        <div className="pkg-mag-rate-sub">
                          <span>{formatSecondaryMoney(pkg)} / person</span>
                        </div>
                        <div className="pkg-mag-actions">
                          <button
                            type="button"
                            className="pkg-mag-btn-outline"
                            onClick={() => openDetails(pkg)}
                          >
                            Details →
                          </button>
                          <button
                            type="button"
                            className="pkg-mag-btn-primary"
                            onClick={() => openPlanner(pkg)}
                          >
                            Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* FEATURE TIER 3: OPEN TRIP SIGNATURE 20-DAY UMRAH SHOWCASE BANNER */}
            {(category === "All" || category === "Umrah" || category === "Cultural") &&
              umrahPackage && (
                <section className="pkg-umrah-showcase">
                  <div className="pkg-umrah-content">
                    <div className="pkg-umrah-tag">
                      <span>🕌 OPEN TRIP SPIRITUAL EXCELLENCE · DHA PHASE 6 KARACHI</span>
                    </div>

                    <h2 className="pkg-umrah-title">
                      20 Days / 19 Nights Complete Makkah & Madinah Umrah
                    </h2>

                    <p className="pkg-umrah-subtitle">
                      Direct return flights from Karachi/Lahore/Islamabad, vetted
                      4-Star hotels within comfortable walking distance of Masjid
                      al-Haram, high-speed Haramain bullet train, 4 comprehensive
                      guided historical Ziyaraat, and dedicated Karachi Muallim
                      assistance throughout your pilgrimage.
                    </p>

                    {/* 4 Sharing Tiers Grid (Completely Filled & Balanced) */}
                    <div className="pkg-umrah-tiers-grid">
                      <div className="pkg-umrah-tier-card">
                        <span className="tier-name">Economy Sharing (5-Bed)</span>
                        <div className="tier-price">
                          <strong>PKR 230,999</strong>
                          <small>~$829 USD / person</small>
                        </div>
                        <p className="tier-desc">
                          Group sharing in verified shuttle hotels. Direct return flight +
                          visa + transport + 4 Ziyarat.
                        </p>
                      </div>

                      <div className="pkg-umrah-tier-card">
                        <span className="tier-name">Quad Sharing (4-Bed)</span>
                        <div className="tier-price">
                          <strong>PKR 241,000</strong>
                          <small>~$865 USD / person</small>
                        </div>
                        <p className="tier-desc">
                          4 beds in spacious family room. Direct return flight +
                          visa + transport + 4 Ziyarat.
                        </p>
                      </div>

                      <div className="pkg-umrah-tier-card is-popular">
                        <span className="tier-badge">Most Popular</span>
                        <span className="tier-name">Triple Sharing (3-Bed)</span>
                        <div className="tier-price">
                          <strong>PKR 252,000</strong>
                          <small>~$905 USD / person</small>
                        </div>
                        <p className="tier-desc">
                          3 single beds with extra privacy. Direct return flight +
                          hotel + full AC transport.
                        </p>
                      </div>

                      <div className="pkg-umrah-tier-card">
                        <span className="tier-name">Double Sharing (Twin)</span>
                        <div className="tier-price">
                          <strong>PKR 277,000</strong>
                          <small>~$995 USD / person</small>
                        </div>
                        <p className="tier-desc">
                          Private double/twin room for couples and elders. Direct
                          flights & complete ground care.
                        </p>
                      </div>
                    </div>

                    {/* Key Perks Bar */}
                    <div className="pkg-umrah-perks-bar">
                      <span>✓ Direct Return Air Tickets</span>
                      <span>✓ Umrah Visa with Insurance</span>
                      <span>✓ Makkah & Madinah Hotels</span>
                      <span>✓ Complete AC Ground Transport</span>
                      <span>✓ 4 Guided Historical Ziyaraat</span>
                      <span>✓ 24/7 Muallim Escort</span>
                    </div>

                    {/* CTA Actions */}
                    <div className="pkg-umrah-actions">
                      <Button onClick={() => openDetails(umrahPackage)}>
                        View Full 20-Day Umrah Dossier <Icon size={16} />
                      </Button>
                      <a
                        className="pkg-umrah-wa-btn"
                        href={`https://wa.me/923101816191?text=${encodeURIComponent(
                          "Assalam o Alaikum Open Trip! I am inquiring about the 20-Day Umrah Package (PKR 241,000 to PKR 277,000). Please share seat availability and departure dates.",
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Book Umrah with Karachi Muallim (+92 310 1816191)
                      </a>
                    </div>
                  </div>
                </section>
              )}

            {/* FEATURE TIER 4: MAGAZINE VISUAL CARDS (BATCH 2) */}
            {batchTwo.length > 0 && (
              <div className="pkg-magazine-grid">
                {batchTwo.map((pkg) => (
                  <article key={pkg.id} className="pkg-mag-card">
                    <div
                      className="pkg-mag-media"
                      onClick={() => openDetails(pkg)}
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        loading="lazy"
                        onError={(e) => {
                          if (pkg.fallbackImage) {
                            e.currentTarget.src = pkg.fallbackImage;
                          }
                        }}
                      />
                      <div className="pkg-mag-media-gradient" />
                      <span className="pkg-mag-badge">{pkg.badge}</span>
                      <div className="pkg-mag-price-badge">
                        <span>{formatMoney(pkg)}</span>
                      </div>
                      <div className="pkg-mag-duration-tag">
                        <span>☀️ {pkg.days}D</span>
                        <span className="dot">·</span>
                        <span>🌙 {pkg.nights}N</span>
                      </div>
                      <span className="pkg-mag-rating">★ {pkg.rating}</span>
                    </div>

                    <div className="pkg-mag-body">
                      <div className="pkg-mag-location">
                        <Icon name="pin" size={11} />
                        <span>{pkg.country}</span>
                        <span className="bullet">·</span>
                        <span className="vibe">{pkg.category}</span>
                      </div>

                      <h3
                        className="pkg-mag-title"
                        onClick={() => openDetails(pkg)}
                      >
                        {pkg.destination}
                      </h3>

                      <p className="pkg-mag-snippet">{pkg.description}</p>

                      {/* Inclusions Chips (2 concise chips) */}
                      <div className="pkg-mag-chips">
                        {pkg.inclusions.slice(0, 2).map((inc) => (
                          <span key={inc} className="pkg-mag-chip">
                            <i>✓</i> {inc}
                          </span>
                        ))}
                      </div>

                      <div className="pkg-mag-footer">
                        <div className="pkg-mag-rate-sub">
                          <span>{formatSecondaryMoney(pkg)} / person</span>
                        </div>
                        <div className="pkg-mag-actions">
                          <button
                            type="button"
                            className="pkg-mag-btn-outline"
                            onClick={() => openDetails(pkg)}
                          >
                            Details →
                          </button>
                          <button
                            type="button"
                            className="pkg-mag-btn-primary"
                            onClick={() => openPlanner(pkg)}
                          >
                            Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 5. OPEN TRIP GUARANTEE & SERVICE FEATURES */}
      <section className="container pkg-benefits-section">
        <SectionHeading
          eyebrow="Why travel with Open Trip"
          title="Designed for Effortless Journeys from Start to Finish."
        />
        <div className="pkg-benefits-grid">
          <div className="pkg-benefit-card">
            <span className="pkg-benefit-icon">
              <Icon name="compass" size={24} />
            </span>
            <h4>100% Visa File Guidance</h4>
            <p>
              Dedicated support for Malaysia, Azerbaijan, UAE, Thailand,
              Türkiye, and Saudi Umrah e-visas with verified document review.
            </p>
          </div>

          <div className="pkg-benefit-card">
            <span className="pkg-benefit-icon">
              <Icon name="check" size={24} />
            </span>
            <h4>Inspected 3★ / 4★ / 5★ Hotels</h4>
            <p>
              Clean, verified, family-friendly hotel rooms located near city
              centers, Harams, and transit hubs with daily breakfast included.
            </p>
          </div>

          <div className="pkg-benefit-card">
            <span className="pkg-benefit-icon">
              <Icon name="phone" size={24} />
            </span>
            <h4>Karachi Office & WhatsApp Concierge</h4>
            <p>
              Visit our DHA Phase 6 office in Karachi or get fast WhatsApp
              support throughout your booking and during your trip.
            </p>
          </div>

          <div className="pkg-benefit-card">
            <span className="pkg-benefit-icon">
              <Icon name="calendar" size={24} />
            </span>
            <h4>Transparent Tiers & Zero Hidden Costs</h4>
            <p>
              All package inclusions, room tiers, airport transfers, and
              sightseeing tickets are clearly stated upfront before booking.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALLOUT BANNER */}
      <section className="planning-section">
        <img src="/images/hero-coast.jpeg" alt="" loading="lazy" />
        <div className="container">
          <p className="section-eyebrow">Want a custom departure date or route?</p>
          <h2>Let’s tailor an Open Trip package just for you.</h2>
          <p>
            Customize number of days, hotel tiers, private transfers, or combine
            multiple destinations into one memorable journey.
          </p>
          <div>
            <Button onClick={() => openPlanner()}>
              Start Custom Trip Planner <Icon size={17} />
            </Button>
            <Button
              variant="outline"
              onClick={() => nav?.navigate("destinations")}
            >
              Explore Destinations Map
            </Button>
          </div>
        </div>
      </section>

      <Footer
        onPlan={() => openPlanner()}
        onDestination={(item) => {
          if (nav) nav.navigate("destinations");
        }}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {/* DIALOGS */}
      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={() => setDialog(null)} />
      )}

      {dialog?.type === "package" && dialog.package && (
        <Dialog
          title={dialog.package.name}
          onClose={() => setDialog(null)}
        >
          <img
            className="dialog-image"
            src={dialog.package.image}
            alt={dialog.package.name}
            onError={(e) => {
              if (dialog.package.fallbackImage) {
                e.currentTarget.src = dialog.package.fallbackImage;
              }
            }}
          />

          <div className="dest-dialog-summary-strip">
            <div>
              <span>Duration</span>
              <strong>{dialog.package.daysNights}</strong>
            </div>
            <div>
              <span>Starting Rate (PKR)</span>
              <strong>
                PKR {dialog.package.pricePkr.toLocaleString("en-US")}
              </strong>
            </div>
            <div>
              <span>USD Equivalent</span>
              <strong>
                ${dialog.package.priceUsd.toLocaleString("en-US")} / person
              </strong>
            </div>
          </div>

          <p>{dialog.package.longDescription}</p>

          {dialog.package.pricingTiers?.length > 0 && (
            <>
              <h3 className="dest-dialog-heading">
                Hotel Tiers, Sharing Options & Tariffs
              </h3>
              <div className="dest-dialog-tiers">
                {dialog.package.pricingTiers.map((tier) => (
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

          <h3 className="dest-dialog-heading">Package Inclusions</h3>
          <ul className="trip-highlights">
            {dialog.package.inclusions.map((inc) => (
              <li key={inc}>
                <Icon name="check" size={16} />
                {inc}
              </li>
            ))}
          </ul>

          <h3 className="dest-dialog-heading">Suggested Day-by-Day Route</h3>
          <ul className="dest-itinerary-timeline">
            {dialog.package.sampleItinerary.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <div className="dest-dialog-actions">
            <Button
              onClick={() => {
                const target = dialog.package;
                setDialog({
                  type: "trip",
                  trip: {
                    ...target,
                    destination: target.destination,
                    priceFrom: target.priceUsd,
                  },
                });
              }}
            >
              Plan / Book This Package <Icon size={16} />
            </Button>
            <a
              className="dest-whatsapp-btn"
              href={`https://wa.me/923101816191?text=${encodeURIComponent(
                `Assalam o Alaikum Open Trip! I am interested in booking: ${dialog.package.name} (${dialog.package.daysNights} - PKR ${dialog.package.pricePkr.toLocaleString("en-US")}). Please send details.`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +92 310 1816191
            </a>
            <button
              type="button"
              className="dest-btn-secondary"
              onClick={() =>
                downloadDestinationPdf({
                  id: dialog.package.id,
                  name: dialog.package.name,
                  country: dialog.package.country,
                  region: dialog.package.country,
                  vibe: dialog.package.category,
                  bestTime: "Flexible / Best Season",
                  duration: dialog.package.daysNights,
                  daysNights: dialog.package.daysNights,
                  pricePkr: dialog.package.pricePkr,
                  priceFrom: dialog.package.priceUsd,
                  rating: dialog.package.rating,
                  description: dialog.package.description,
                  longDescription: dialog.package.longDescription,
                  highlights: dialog.package.highlights,
                  pricingTiers: dialog.package.pricingTiers,
                  sampleItinerary: dialog.package.sampleItinerary,
                })
              }
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
              : "Packages and prices shown are illustrative based on Open Trip (Pvt.) Ltd. seasonal tariffs. Final airline ticket rates, hotel availability, and visa fees are confirmed at the time of reservation."}
          </p>
        </Dialog>
      )}
    </div>
  );
}

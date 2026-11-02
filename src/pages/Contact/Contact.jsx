import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Contact.css";

/* ==================== PROFESSIONAL SVG ICONS ==================== */
function IconWhatsApp(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPin(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconKaaba(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="9" width="16" height="12" rx="1" />
      <path d="M4 13h16" />
      <path d="M12 3v6" />
      <path d="M10 5h4" />
      <path d="M7 9l5-4 5 4" />
    </svg>
  );
}

function IconBeach(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 8c0-2.76-2.24-5-5-5-1.5 0-2.8.6-3.8 1.6" />
      <path d="M8 8a5 5 0 0 0-5 5" />
      <path d="M8 8v13" />
      <path d="M17 12c-2.76 0-5-2.24-5-5" />
      <path d="M12 7c1.5 0 2.8.6 3.8 1.6" />
      <path d="M2 20c3 1.5 6 1.5 9 0 3-1.5 6-1.5 9 0" />
    </svg>
  );
}

function IconSkyline(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M13 10h4v11" />
      <path d="M8 10h2" />
      <path d="M8 14h2" />
      <path d="M8 18h2" />
    </svg>
  );
}

function IconMountain(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="m4.14 15 .86-1 3.5 2 3-3 2.5 2" />
    </svg>
  );
}

function IconHeart(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function IconBriefcase(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconParking(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="4" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

function IconCoffee(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

function IconScreen(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function IconCard(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

const DESTINATIONS_META = {
  "Makkah & Madinah (Umrah)": {
    duration: "20 Days / 19 Nights",
    ratePkr: "PKR 230,999",
    rateUsd: "$829",
    image: "/images/makkah.jpg",
    badge: "Open Trip Flagship",
    inclusions: ["Direct Return Flights", "Umrah E-Visa & Insurance", "Haram Walking Hotels", "Haramain Bullet Train", "4 Guided Ziyaraat", "24/7 Karachi Muallim"],
  },
  Bali: {
    duration: "5 Days / 4 Nights",
    ratePkr: "PKR 220,000",
    rateUsd: "$799",
    image: "/images/destinations/bali.jpeg",
    badge: "Bestseller Island",
    inclusions: ["4N Deluxe Resort Stay", "Daily Buffet Breakfast", "Ubud & Kintamani Tour", "Private Airport Transfers", "Indonesia E-Visa", "24/7 Ground Support"],
  },
  "Dubai": {
    duration: "5 Days / 4 Nights",
    ratePkr: "PKR 265,000",
    rateUsd: "$949",
    image: "/images/destinations/dubai.jpeg",
    badge: "Luxury & Glamour",
    inclusions: ["4N Central 4★ Hotel", "Daily Buffet Breakfast", "Desert Safari + BBQ", "Marina Dhow Dinner Cruise", "UAE Tourist Visa", "Private Airport Transfers"],
  },
  "Baku & Gabala": {
    duration: "5 Days / 4 Nights",
    ratePkr: "PKR 165,000",
    rateUsd: "$595",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    badge: "Silk Road Gem",
    inclusions: ["4N Boutique 4★ Hotel", "Daily Breakfast", "Gabala Cable Car Tour", "Old City & Flame Towers", "Azerbaijan E-Visa", "Private AC Transfers"],
  },
  "Kuala Lumpur & Genting": {
    duration: "5 Days / 4 Nights",
    ratePkr: "PKR 155,000",
    rateUsd: "$559",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    badge: "Family Favorite",
    inclusions: ["4N Bukit Bintang Hotel", "Daily Breakfast", "Genting Highlands & Cable Car", "Batu Caves Excursion", "Malaysia E-Visa", "Private Airport Transfers"],
  },
  "Istanbul & Cappadocia": {
    duration: "7 Days / 6 Nights",
    ratePkr: "PKR 385,000",
    rateUsd: "$1,380",
    image: "/images/cappadocia.jpg",
    badge: "Two Continents",
    inclusions: ["4N Istanbul + 2N Cave Hotel", "Daily Breakfast", "Bosphorus Yacht Cruise", "Domestic Return Flights", "Turkey Visa File", "Private AC Transfers"],
  },
  "Hunza & Skardu": {
    duration: "8 Days / 7 Nights",
    ratePkr: "PKR 85,000",
    rateUsd: "$305",
    image: "/images/hunza.jpg",
    badge: "Northern Crown",
    inclusions: ["7N Deluxe Mountain Resorts", "Daily Breakfast", "Dedicated Prado 4x4", "Experienced Mountain Chauffeur", "Attabad Lake & Forts", "Shangrila Skardu"],
  },
  "Switzerland Alpine": {
    duration: "7 Days / 6 Nights",
    ratePkr: "PKR 650,000",
    rateUsd: "$2,330",
    image: "/images/destinations/switzerland.jpeg",
    badge: "Alpine Wonder",
    inclusions: ["6N Central 4★ Hotels", "Swiss Travel Pass", "Mt. Titlis Cable Car", "Lake Lucerne Boat Cruise", "Schengen Visa Filing", "Airport Transfers"],
  },
  "Custom Itinerary": {
    duration: "Custom Pacing",
    ratePkr: "Tailored Quote",
    rateUsd: "Flexible",
    image: "/images/story-resort.jpg",
    badge: "Bespoke VIP",
    inclusions: ["Handpicked 4★/5★ Stays", "Private Chauffeur Transport", "Flexible Sightseeing Pacing", "Full Visa Documentation", "Dedicated Karachi Curator", "24/7 On-Trip Concierge"],
  },
};

const TRIP_STYLES = [
  { id: "umrah", icon: IconKaaba, title: "20-Day Umrah" },
  { id: "beach", icon: IconBeach, title: "Beach & Islands" },
  { id: "city", icon: IconSkyline, title: "City Wonders" },
  { id: "north", icon: IconMountain, title: "North Pakistan" },
  { id: "honeymoon", icon: IconHeart, title: "Honeymoon" },
  { id: "corporate", icon: IconBriefcase, title: "Corporate VIP" },
];

const DESTINATIONS_LIST = [
  "Makkah & Madinah (Umrah)",
  "Bali",
  "Dubai",
  "Baku & Gabala",
  "Kuala Lumpur & Genting",
  "Istanbul & Cappadocia",
  "Hunza & Skardu",
  "Switzerland Alpine",
  "Custom Itinerary",
];

const DEPARTURE_HUBS = ["Karachi (KHI)", "Lahore (LHE)", "Islamabad (ISB)", "Overseas Hub"];
const TRAVEL_WINDOWS = ["Next Month", "Next 2 Weeks", "This Month", "Winter Vacations", "Ramadan 2027"];
const GROUP_SIZES = ["Couple (2 Guests)", "Solo Traveler (1)", "Family (3–4 Guests)", "Group (5+ Guests)"];
const HOTEL_TIERS = ["4-Star Deluxe", "5-Star Luxury VIP", "Economy Sharing"];

const FAQS = [
  {
    q: "Can I book Open Trip packages if I am flying from Lahore, Islamabad, or abroad?",
    a: "Yes. Over 40% of our travelers join from Lahore (LHE), Islamabad (ISB), Multan (MUX), and overseas. We coordinate direct domestic connecting flights or meet at international transit hubs with synchronized transfer logistics.",
  },
  {
    q: "How does Open Trip handle visa filing and what is the approval rate?",
    a: "We provide complete end-to-end visa assistance with a 98.4% verified approval rate. Our senior documentation desk manages bank statement audits, verified bookings, appointment slots, and Saudi Nusuk e-visas directly.",
  },
  {
    q: "What are your payment terms and modes of payment?",
    a: "We accept Debit/Credit Cards (Visa, MasterCard, PayPak), Online Bank Wire (IBFT) to our corporate account (Open Trip Pvt. Ltd.), and walk-in office payments with flexible split payment schedules.",
  },
  {
    q: "Are all hotel bookings and transfers confirmed before departure?",
    a: "Yes, 100%. You receive verified hotel vouchers with direct confirmation reference codes, airline PNRs, and local driver contacts before boarding your flight from Pakistan.",
  },
  {
    q: "Can an itinerary be customized for private couples or family groups?",
    a: "Yes. In addition to group departures, our curators design private itineraries with dedicated air-conditioned vehicles, private pool villas, and tailored sightseeing pacing suited for couples and families.",
  },
  {
    q: "What happens if there is a flight cancellation or emergency during the trip?",
    a: "Our Karachi emergency desk is active 24/7 on WhatsApp. If an airline reschedules or delays, our operations team coordinates real-time re-ticketing, hotel extensions, and ground transfer rescheduling on your behalf.",
  },
];

/* ==================== ULTRA-STYLISH ENGLISH RADAR & GOOGLE MAP COMPONENT ==================== */
function KarachiOfficeMap() {
  const [mapMode, setMapMode] = useState("radar"); // "radar" or "google"

  return (
    <div className="office-map-widget">
      {/* MAP TOP CONTROLS */}
      <div className="map-widget-controls">
        <div className="map-mode-buttons">
          <button
            type="button"
            className={`map-mode-pill ${mapMode === "radar" ? "active" : ""}`}
            onClick={() => setMapMode("radar")}
          >
            <span className="radar-live-blip" />
            <span>Architectural Radar (English)</span>
          </button>
          <button
            type="button"
            className={`map-mode-pill ${mapMode === "google" ? "active" : ""}`}
            onClick={() => setMapMode("google")}
          >
            <IconPin />
            <span>Google Live Map</span>
          </button>
        </div>

        <a
          className="map-open-native-btn"
          href="https://maps.google.com/?q=Bukhari+Commercial+Area+Phase+6+DHA+Karachi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Open in Google Maps ↗</span>
        </a>
      </div>

      {/* MAP VIEWPORT */}
      <div className="map-widget-viewport">
        {mapMode === "google" ? (
          <iframe
            title="Open Trip Karachi Headquarters Google Map"
            src="https://maps.google.com/maps?q=Building+34-C+Lane+5+Bukhari+Commercial+Phase+6+DHA+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="google-embedded-frame"
            loading="lazy"
          />
        ) : (
          <div className="architectural-svg-map">
            <svg
              viewBox="0 0 600 380"
              className="map-vector-canvas"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Open Trip Karachi HQ Architectural Map"
            >
              <defs>
                <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#022a30" />
                  <stop offset="100%" stopColor="#011b1f" />
                </linearGradient>
                <linearGradient id="plotGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#064249" />
                  <stop offset="100%" stopColor="#043238" />
                </linearGradient>
                <radialGradient id="radarPulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,128,95,0.4)" />
                  <stop offset="60%" stopColor="rgba(255,128,95,0.15)" />
                  <stop offset="100%" stopColor="rgba(255,128,95,0)" />
                </radialGradient>
              </defs>

              <rect width="600" height="380" fill="#03272d" />

              <g stroke="rgba(255,255,255,0.035)" strokeWidth="1">
                <line x1="0" y1="60" x2="600" y2="60" />
                <line x1="0" y1="120" x2="600" y2="120" />
                <line x1="0" y1="180" x2="600" y2="180" />
                <line x1="0" y1="240" x2="600" y2="240" />
                <line x1="0" y1="300" x2="600" y2="300" />
                <line x1="100" y1="0" x2="100" y2="380" />
                <line x1="200" y1="0" x2="200" y2="380" />
                <line x1="300" y1="0" x2="300" y2="380" />
                <line x1="400" y1="0" x2="400" y2="380" />
                <line x1="500" y1="0" x2="500" y2="380" />
              </g>

              <path d="M0,335 C150,330 350,342 600,330 L600,380 L0,380 Z" fill="url(#seaGrad)" />
              <text x="300" y="360" fill="#2d6f78" fontSize="10.5" fontWeight="700" letterSpacing="2.5" textAnchor="middle">
                ARABIAN SEA / SEAVIEW COASTLINE
              </text>

              <rect x="70" y="75" width="85" height="50" rx="4" fill="url(#plotGrad)" />
              <rect x="175" y="75" width="105" height="50" rx="4" fill="url(#plotGrad)" />
              <rect x="300" y="75" width="115" height="50" rx="4" fill="url(#plotGrad)" />
              <rect x="435" y="75" width="100" height="50" rx="4" fill="url(#plotGrad)" />

              <rect x="70" y="150" width="85" height="70" rx="4" fill="url(#plotGrad)" />
              <rect x="175" y="150" width="105" height="70" rx="4" fill="#08525b" stroke="#0a6974" strokeWidth="1" />
              <rect x="300" y="150" width="115" height="70" rx="4" fill="url(#plotGrad)" />
              <rect x="435" y="150" width="100" height="70" rx="4" fill="url(#plotGrad)" />

              <rect x="70" y="245" width="85" height="55" rx="4" fill="url(#plotGrad)" />
              <rect x="175" y="245" width="105" height="55" rx="4" fill="url(#plotGrad)" />
              <rect x="300" y="245" width="115" height="55" rx="4" fill="url(#plotGrad)" />
              <rect x="435" y="245" width="100" height="55" rx="4" fill="url(#plotGrad)" />

              <rect x="0" y="44" width="600" height="18" fill="#063a40" />
              <line x1="0" y1="53" x2="600" y2="53" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4" />
              <text x="28" y="56" fill="#88b5ba" fontSize="9" fontWeight="700" letterSpacing="1.2">
                KHAYABAN-E-SHUJAAT
              </text>

              <rect x="285" y="0" width="24" height="340" fill="#053338" />
              <line x1="297" y1="0" x2="297" y2="340" stroke="rgba(255,128,95,0.3)" strokeWidth="1.2" strokeDasharray="6 5" />
              <text x="292" y="30" fill="#ffb8a5" fontSize="8.5" fontWeight="700" letterSpacing="1.5" transform="rotate(-90 292,30)">
                KHAYABAN-E-BUKHARI (COMMERCIAL SPINE)
              </text>

              <rect x="0" y="226" width="600" height="14" fill="#063a40" />
              <line x1="0" y1="233" x2="600" y2="233" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 4" />
              <text x="470" y="236" fill="#88b5ba" fontSize="8.5" fontWeight="700" letterSpacing="1">
                KHAYABAN-E-MUSLIM
              </text>

              <rect x="0" y="132" width="600" height="14" fill="#09454c" />
              <line x1="0" y1="139" x2="600" y2="139" stroke="#ff805f" strokeWidth="1.2" strokeDasharray="4 3" />
              <text x="28" y="142" fill="#ffb8a5" fontSize="8.5" fontWeight="700" letterSpacing="1.2">
                LANE 5 — BUKHARI COMMERCIAL AREA
              </text>

              <text x="227" y="105" fill="#4fa3ad" fontSize="8" fontWeight="600" textAnchor="middle">
                BUKHARI PLAZAS
              </text>
              <text x="357" y="105" fill="#4fa3ad" fontSize="8" fontWeight="600" textAnchor="middle">
                PHASE 6 COMMERCIAL
              </text>
              <text x="227" y="275" fill="#4fa3ad" fontSize="8" fontWeight="600" textAnchor="middle">
                VALET PARKING BAY
              </text>
              <text x="357" y="275" fill="#4fa3ad" fontSize="8" fontWeight="600" textAnchor="middle">
                LANE 6 CONNECTOR
              </text>

              <circle cx="227" cy="185" r="44" fill="url(#radarPulse)" className="radar-ring-1" />
              <circle cx="227" cy="185" r="28" fill="none" stroke="#ff805f" strokeWidth="1.2" opacity="0.6" className="radar-ring-2" />
              <circle cx="227" cy="185" r="14" fill="none" stroke="#ff805f" strokeWidth="1.8" opacity="0.85" />

              <circle cx="227" cy="185" r="7" fill="#ff805f" />
              <circle cx="227" cy="185" r="3" fill="#ffffff" />

              <g transform="translate(142, 115)">
                <rect x="0" y="0" width="170" height="42" rx="6" fill="#043e45" stroke="#ff805f" strokeWidth="1.4" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
                <polygon points="85,42 91,48 79,48" fill="#043e45" />
                <text x="10" y="16" fill="#ffb8a5" fontSize="9.5" fontWeight="700" letterSpacing="0.5">
                  ★ OPEN TRIP (PVT.) LTD. HQ
                </text>
                <text x="10" y="28" fill="#ffffff" fontSize="8.5" fontWeight="600">
                  Building 34-C, Lane 5 · Phase 6 DHA
                </text>
                <text x="10" y="38" fill="#75c2cb" fontSize="7.5">
                  Client Lounge &amp; Free Valet Bays
                </text>
              </g>

              <g transform="translate(555, 35)">
                <circle cx="0" cy="0" r="14" fill="rgba(4,62,69,0.7)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <polygon points="0,-11 3,0 0,-2 -3,0" fill="#ff805f" />
                <polygon points="0,11 3,0 0,2 -3,0" fill="#ffffff" opacity="0.4" />
                <text x="0" y="-14" fill="#ffffff" fontSize="8" fontWeight="700" textAnchor="middle">N</text>
              </g>

              <g transform="translate(500, 310)">
                <line x1="0" y1="0" x2="60" y2="0" stroke="#88b5ba" strokeWidth="2" />
                <line x1="0" y1="-3" x2="0" y2="3" stroke="#88b5ba" strokeWidth="2" />
                <line x1="60" y1="-3" x2="60" y2="3" stroke="#88b5ba" strokeWidth="2" />
                <text x="30" y="-5" fill="#88b5ba" fontSize="7.5" fontWeight="600" textAnchor="middle">100m</text>
              </g>
            </svg>

            <div className="radar-telemetry-badge">
              <span className="telemetry-live-dot" />
              <span>LIVE GPS · 24.7958° N, 67.0682° E · Bukhari Commercial, DHA Phase 6, Karachi</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [dialog, setDialog] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const nav = useNavigation();

  // Interactive Studio State
  const [style, setStyle] = useState("beach");
  const [destination, setDestination] = useState("Bali");
  const [departure, setDeparture] = useState("Karachi (KHI)");
  const [windowTime, setWindowTime] = useState("Next Month");
  const [group, setGroup] = useState("Couple (2 Guests)");
  const [tier, setTier] = useState("4-Star Deluxe");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const selectedMeta = DESTINATIONS_META[destination] || DESTINATIONS_META["Bali"];

  const buildWhatsAppUrl = () => {
    const text = `*New Travel Dossier Inquiry - Open Trip (Pvt.) Ltd.*
👤 *Client Name:* ${name || "Traveler"}
📱 *WhatsApp:* ${phone || "Provided on Chat"}
📍 *Destination:* ${destination}
🎯 *Style:* ${style.toUpperCase()}
🛫 *Departure:* ${departure}
🗓️ *When:* ${windowTime}
👥 *Group:* ${group}
⭐ *Tier:* ${tier}
💰 *Starting Tariff:* ${selectedMeta.ratePkr} (${selectedMeta.rateUsd})
📝 *Notes:* ${notes || "None"}

Please share available flight schedules, hotel options, and full package breakdown.`;
    return `https://wa.me/923101816191?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 300);
  };

  return (
    <div className="contact-page">
      {/* ===================== SIGNATURE BRAND TEAL/BLUE HERO ===================== */}
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <img
          className="contact-hero-bg"
          src="/images/hero-coast.jpeg"
          alt="Luxury travel scenery"
          fetchPriority="high"
        />
        <div className="contact-hero-shade" />

        <Header onPlan={() => plan()} />

        <div className="contact-hero-body container">
          <div className="contact-hero-content">
            <p className="hero-kicker">
              EST. 2018 <span>·</span> DHA PHASE 6 BUKHARI COMMERCIAL <span>·</span> KARACHI
            </p>

            <h1 id="contact-hero-title">Connect Directly with Our Curators.</h1>

            <p className="contact-hero-subtitle">
              Flagship 20-Day Umrah pilgrimages, bespoke international escapes, and fast visa guidance.
              Direct WhatsApp response in under 4 minutes or visit our walk-in client lounge in Bukhari Commercial.
            </p>

            <div className="contact-hero-actions-bar">
              <a
                className="hero-btn-whatsapp"
                href="https://wa.me/923101816191?text=Hello%20OpenTrip%20Karachi%2C%20I%20would%20like%20to%20inquire%20about%20a%20travel%20package."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-pulse-dot" />
                <IconWhatsApp />
                <span>WhatsApp VIP Concierge (+92 310 1816191)</span>
              </a>

              <a className="hero-btn-phone" href="tel:+923101816191">
                <IconPhone />
                <span>Karachi Desk: +92 21 3524 8191</span>
              </a>
            </div>

            <div className="hero-inline-pills">
              <span className="hero-pill">⚡ Under 4-Min WhatsApp Reply</span>
              <span className="hero-pill">📍 Building 34-C, Lane 5, DHA Phase 6</span>
              <span className="hero-pill">🕒 Lounge Open Today till 8:30 PM</span>
            </div>
          </div>

          {/* FLOATING VIP DESK CARD (BALANCES HOME HERO HEIGHT & LAYOUT) */}
          <div className="contact-hero-floating-card">
            <div className="contact-card-badge">
              <span className="live-pulse-dot" />
              <span>VIP CONCIERGE DESK · DHA PHASE 6</span>
            </div>

            <h3>Karachi Private Client Desk</h3>
            <p>
              Direct Muallim supervision for Umrah pilgrims and bespoke travel curation for couples &amp; families.
            </p>

            <div className="contact-card-specs">
              <div className="contact-spec-row">
                <span className="spec-bullet">✦</span>
                <div>
                  <strong>Instant WhatsApp Quotation</strong>
                  <span>Full flight, hotel &amp; visa breakdown sent in &lt; 4 mins</span>
                </div>
              </div>

              <div className="contact-spec-row">
                <span className="spec-bullet">✦</span>
                <div>
                  <strong>20-Day Umrah Consultations</strong>
                  <span>Direct Saudia flights &amp; Haramain bullet train seats</span>
                </div>
              </div>

              <div className="contact-spec-row">
                <span className="spec-bullet">✦</span>
                <div>
                  <strong>Walk-In Consultation Lounge</strong>
                  <span>Building 34-C, Lane 5 Bukhari · Free valet parking</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923101816191?text=Hello%20OpenTrip%20Karachi%2C%20I%20would%20like%20to%20consult%20with%20a%20curator."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-wa-link"
            >
              <IconWhatsApp />
              <span>Priority WhatsApp Inquiry →</span>
            </a>
          </div>
        </div>
      </section>

      <main className="contact-main">
        {/* ===================== ULTRA-SLEEK UNCLUTTERED JOURNEY STUDIO ===================== */}
        <section className="journey-studio-section">
          <div className="container">
            <div className="studio-header text-center">
              <span className="section-eyebrow">BESPOKE CONCIERGE STUDIO</span>
              <h2>Tailor Your Journey in Real Time</h2>
              <p>Choose your travel style and preferences — your live dossier updates instantly on the right.</p>
            </div>

            <div className="studio-grid">
              {/* LEFT COLUMN: BREATHABLE, UNCLUTTERED LUXURY CONFIGURATOR */}
              <div className="studio-builder-card">
                {formSubmitted ? (
                  <div className="studio-success-state">
                    <div className="studio-success-icon">✓</div>
                    <h3>Your Custom Dossier Is Ready!</h3>
                    <p>
                      Thank you, <strong>{name || "Traveler"}</strong>. Your tailored itinerary for{" "}
                      <strong>{destination}</strong> departing from <strong>{departure}</strong> ({tier}) has
                      been compiled.
                    </p>

                    <div className="studio-success-action-box">
                      <p>Click below to send this dossier directly to our senior curator on WhatsApp:</p>
                      <a
                        className="studio-dispatch-btn"
                        href={buildWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWhatsApp />
                        <span>Send Dossier to WhatsApp (+92 310 1816191) →</span>
                      </a>
                    </div>

                    <button
                      className="studio-reset-btn"
                      onClick={() => {
                        setFormSubmitted(false);
                        setName("");
                        setPhone("");
                        setNotes("");
                      }}
                    >
                      ← Customize Another Journey
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="studio-form">
                    {/* GROUP 1: SLEEK SINGLE-LINE ICON TABS FOR TRAVEL STYLE */}
                    <div className="studio-clean-group">
                      <div className="clean-group-header">
                        <span className="clean-step-tag">01</span>
                        <label className="clean-group-title">Select Experience Type</label>
                      </div>
                      <div className="sleek-style-pills">
                        {TRIP_STYLES.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              className={`sleek-style-pill ${style === item.id ? "active" : ""}`}
                              onClick={() => {
                                setStyle(item.id);
                                if (item.id === "umrah") setDestination("Makkah & Madinah (Umrah)");
                                else if (item.id === "north") setDestination("Hunza & Skardu");
                                else if (item.id === "beach") setDestination("Bali");
                                else if (item.id === "city") setDestination("Dubai");
                                else if (item.id === "honeymoon") setDestination("Bali");
                                else if (item.id === "corporate") setDestination("Custom Itinerary");
                              }}
                            >
                              <IconComp />
                              <span>{item.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* GROUP 2: CURATED DESTINATION CHIPS */}
                    <div className="studio-clean-group">
                      <div className="clean-group-header">
                        <span className="clean-step-tag">02</span>
                        <label className="clean-group-title">Choose Destination</label>
                      </div>
                      <div className="sleek-dest-grid">
                        {DESTINATIONS_LIST.map((dest) => (
                          <button
                            key={dest}
                            type="button"
                            className={`sleek-dest-chip ${destination === dest ? "active" : ""}`}
                            onClick={() => setDestination(dest)}
                          >
                            {dest}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* GROUP 3: 4 CLEAN LUXURY DROPDOWN SELECTORS */}
                    <div className="studio-clean-group">
                      <div className="clean-group-header">
                        <span className="clean-step-tag">03</span>
                        <label className="clean-group-title">Trip Logistics &amp; Accommodation</label>
                      </div>
                      <div className="luxury-selects-grid">
                        <div className="luxury-select-box">
                          <span className="select-micro-label">Departure City</span>
                          <select value={departure} onChange={(e) => setDeparture(e.target.value)}>
                            {DEPARTURE_HUBS.map((hub) => (
                              <option key={hub} value={hub}>{hub}</option>
                            ))}
                          </select>
                        </div>

                        <div className="luxury-select-box">
                          <span className="select-micro-label">Travel Window</span>
                          <select value={windowTime} onChange={(e) => setWindowTime(e.target.value)}>
                            {TRAVEL_WINDOWS.map((win) => (
                              <option key={win} value={win}>{win}</option>
                            ))}
                          </select>
                        </div>

                        <div className="luxury-select-box">
                          <span className="select-micro-label">Travelers</span>
                          <select value={group} onChange={(e) => setGroup(e.target.value)}>
                            {GROUP_SIZES.map((sz) => (
                              <option key={sz} value={sz}>{sz}</option>
                            ))}
                          </select>
                        </div>

                        <div className="luxury-select-box">
                          <span className="select-micro-label">Hotel Standard</span>
                          <select value={tier} onChange={(e) => setTier(e.target.value)}>
                            {HOTEL_TIERS.map((ht) => (
                              <option key={ht} value={ht}>{ht}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* GROUP 4: STREAMLINED CONTACT INPUTS */}
                    <div className="studio-clean-group no-border">
                      <div className="clean-group-header">
                        <span className="clean-step-tag">04</span>
                        <label className="clean-group-title">Your Contact Details</label>
                      </div>
                      <div className="sleek-inputs-row">
                        <div className="sleek-field">
                          <input
                            id="studio-name"
                            type="text"
                            required
                            placeholder="Your Full Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="sleek-field">
                          <input
                            id="studio-phone"
                            type="tel"
                            required
                            placeholder="WhatsApp Mobile (e.g. 0300 1234567) *"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="sleek-field" style={{ marginTop: "10px" }}>
                        <input
                          id="studio-notes"
                          type="text"
                          placeholder="Optional notes: Direct flights, Haram view room, wheelchair assistance..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </div>

                    <button type="submit" className="studio-submit-btn" disabled={submitting}>
                      {submitting ? "Assembling Dossier..." : "Compile Customized Dossier →"}
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT COLUMN: RICH EDITORIAL LIVE DOSSIER */}
              <div className="studio-preview-col">
                <div className="live-dossier-card">
                  <div className="dossier-image-wrap">
                    <img src={selectedMeta.image} alt={destination} loading="lazy" />
                    <div className="dossier-img-overlay" />
                    <span className="dossier-badge">{selectedMeta.badge}</span>
                    <span className="dossier-duration">{selectedMeta.duration}</span>
                  </div>

                  <div className="dossier-body">
                    <div>
                      <div className="dossier-header-row">
                        <div>
                          <span className="dossier-tag">LIVE CURATED DOSSIER</span>
                          <h3>{destination}</h3>
                        </div>
                        <div className="dossier-price-tag">
                          <div className="dossier-pkr">{selectedMeta.ratePkr}</div>
                          <div className="dossier-usd">{selectedMeta.rateUsd} / pers.</div>
                        </div>
                      </div>

                      {/* 2x2 MINI TELEMETRY CARDS */}
                      <div className="dossier-specs-bento">
                        <div className="spec-mini-card">
                          <small>DEPARTURE HUB</small>
                          <strong>{departure}</strong>
                        </div>
                        <div className="spec-mini-card">
                          <small>TRAVEL WINDOW</small>
                          <strong>{windowTime}</strong>
                        </div>
                        <div className="spec-mini-card">
                          <small>GUESTS</small>
                          <strong>{group}</strong>
                        </div>
                        <div className="spec-mini-card">
                          <small>HOTEL TIER</small>
                          <strong>{tier}</strong>
                        </div>
                      </div>

                      {/* VERIFIED INCLUSIONS */}
                      <div className="dossier-inclusions">
                        <h4>Verified Package Inclusions:</h4>
                        <ul className="dossier-inclusions-grid">
                          {selectedMeta.inclusions.map((inc, i) => (
                            <li key={i}>
                              <span className="inc-tick">✓</span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* BOTTOM ASSURANCE & WHATSAPP CTA */}
                    <div className="dossier-bottom-zone">
                      <div className="dossier-concierge-guarantee">
                        <span className="guarantee-icon">🛡️</span>
                        <div>
                          <strong>100% Price Lock &amp; Direct Visa Desk</strong>
                          <span>All taxes included · Zero hidden border surcharges</span>
                        </div>
                      </div>

                      <a
                        className="dossier-whatsapp-cta"
                        href={buildWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWhatsApp />
                        <span>Chat with Curator on WhatsApp →</span>
                      </a>

                      <div className="dossier-footer-note">
                        ⚡ Instant response in under 4 minutes from our DHA Phase 6 desk.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 4 COMPACT CHANNEL STRIP (MATCHING ABOUT STATS STRIP) ===================== */}
        <section className="contact-channels-section">
          <div className="container">
            <div className="contact-channels-bento">
              {/* CARD 1: WHATSAPP */}
              <a
                className="channel-card"
                href="https://wa.me/923101816191?text=Hello%20OpenTrip%2C%20I%20would%20like%20to%20plan%20a%20trip."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="channel-stat-number">+92 310 1816191</div>
                <div className="channel-stat-label">WhatsApp VIP Concierge</div>
                <div className="channel-stat-caption">
                  Direct chat with senior curators, flight options &amp; instant quotes
                </div>
              </a>

              {/* CARD 2: TELEPHONE */}
              <a className="channel-card" href="tel:+923101816191">
                <div className="channel-stat-number">+92 21 3524 8191</div>
                <div className="channel-stat-label">Karachi Landline Desk</div>
                <div className="channel-stat-caption">
                  Direct agency desk for itinerary walk-throughs &amp; ticketing
                </div>
              </a>

              {/* CARD 3: EMAIL */}
              <a className="channel-card" href="mailto:bookings@opentrip.pk">
                <div className="channel-stat-number channel-stat-email">bookings@opentrip.pk</div>
                <div className="channel-stat-label">Official Proposals</div>
                <div className="channel-stat-caption">
                  Formal written quotations, corporate accounts &amp; visa dossiers
                </div>
              </a>

              {/* CARD 4: WALK-IN LOUNGE */}
              <a
                className="channel-card"
                href="https://maps.google.com/?q=Bukhari+Commercial+Area+Phase+6+DHA+Karachi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="channel-stat-number">Bukhari Commercial</div>
                <div className="channel-stat-label">Karachi HQ Client Lounge</div>
                <div className="channel-stat-caption">
                  Building 34-C, Lane 5, DHA Phase 6 · Private booths &amp; free valet
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== KARACHI HQ WALK-IN & STYLISH ENGLISH MAP ===================== */}
        <section className="office-experience-section">
          <div className="container">
            <div className="office-split-card">
              {/* LEFT: HQ DETAILS & TIMINGS (CLEAN SVGS) */}
              <div className="office-info-pane">
                <span className="section-eyebrow">HEADQUARTERS &amp; WALK-IN LOUNGE</span>
                <h2>Visit Our Karachi Client Lounge</h2>
                <p className="office-lead">
                  Building 34-C, Lane 5, Bukhari Commercial Area, Phase 6, Defence Housing Authority (DHA),
                  Karachi, Sindh 75500.
                </p>

                <div className="office-schedule-box">
                  <h4>🕒 Operating Hours:</h4>
                  <div className="sched-row">
                    <span>Monday – Friday:</span>
                    <strong>10:30 AM – 8:30 PM</strong>
                  </div>
                  <div className="sched-row">
                    <span>Saturday:</span>
                    <strong>11:00 AM – 7:30 PM</strong>
                  </div>
                  <div className="sched-row">
                    <span>Sunday:</span>
                    <strong className="text-coral">Closed (24/7 WhatsApp Ops Active)</strong>
                  </div>
                </div>

                <div className="office-hospitality-grid">
                  <div className="hosp-item">
                    <span className="hosp-icon">
                      <IconParking />
                    </span>
                    <div>
                      <strong>Free Valet Parking</strong>
                      <small>Dedicated bays on Lane 5</small>
                    </div>
                  </div>
                  <div className="hosp-item">
                    <span className="hosp-icon">
                      <IconCoffee />
                    </span>
                    <div>
                      <strong>Italian Espresso Bar</strong>
                      <small>Fresh coffee &amp; green tea</small>
                    </div>
                  </div>
                  <div className="hosp-item">
                    <span className="hosp-icon">
                      <IconScreen />
                    </span>
                    <div>
                      <strong>4K Route Previews</strong>
                      <small>Review maps on big displays</small>
                    </div>
                  </div>
                  <div className="hosp-item">
                    <span className="hosp-icon">
                      <IconCard />
                    </span>
                    <div>
                      <strong>Card &amp; Bank Wire</strong>
                      <small>PayPak, Visa &amp; IBFT accepted</small>
                    </div>
                  </div>
                </div>

                <div className="office-actions-row">
                  <a
                    className="office-dir-btn"
                    href="https://maps.google.com/?q=Bukhari+Commercial+Area+Phase+6+DHA+Karachi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconPin />
                    <span>Get Driving Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* RIGHT: ULTRA-STYLISH ENGLISH RADAR & GOOGLE MAP */}
              <div className="office-map-pane">
                <KarachiOfficeMap />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== EXPANDED & SPACIOUS FAQ SECTION ===================== */}
        <section className="contact-faq-section">
          <div className="container">
            <div className="faq-header text-center">
              <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Common Questions Before You Book</h2>
              <p>Everything you need to know about our booking process, visas, and payment terms.</p>
            </div>

            <div className="faq-compact-grid">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-card ${isOpen ? "open" : ""}`}>
                    <button
                      className="faq-question-trigger"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-chevron-badge">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-body-panel">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== COMPACT 24/7 EMERGENCY HOTLINE ===================== */}
        <section className="contact-hotline-bar">
          <div className="container hotline-bar-inner">
            <div className="hotline-bar-copy">
              <span className="hotline-pill">24/7 GROUND OPERATIONS</span>
              <h3>Already Travelling Abroad with Open Trip?</h3>
              <p>
                Our 24-hour ops desk coordinates flight updates, emergency transfers, and hotel logistics.
              </p>
            </div>
            <div className="hotline-bar-action">
              <a
                className="hotline-desk-btn"
                href="https://wa.me/923101816191?text=EMERGENCY%20ON-TOUR%20DESK%3A%20I%20am%20currently%20travelling%20with%20Open%20Trip."
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                <span>24/7 Global Ground Ops WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onPlan={() => plan()}
        onDestination={(item) => plan({ ...item, destination: item.name })}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {dialog?.type === "trip" && <TripDialog trip={dialog.trip} onClose={close} />}
      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            Open Trip (Pvt.) Ltd. operates strictly according to the Department of Tourist Services
            guidelines. All air tickets and hotel bookings are subject to carrier and hotel cancellation
            terms. Contact our Karachi office for full details.
          </p>
        </Dialog>
      )}
    </div>
  );
}

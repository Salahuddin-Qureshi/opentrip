import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./About.css";

/* ==================== PROFESSIONAL SVG ICONS FOR DIVISIONS ==================== */
function IconKaaba(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="9" width="16" height="12" rx="1" />
      <path d="M4 13h16" />
      <path d="M12 3v6" />
      <path d="M10 5h4" />
      <path d="M7 9l5-4 5 4" />
    </svg>
  );
}

function IconPlane(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
    </svg>
  );
}

function IconMountain(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="m4.14 15 .86-1 3.5 2 3-3 2.5 2" />
    </svg>
  );
}

function IconBriefcase(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

const CORE_PILLARS = [
  {
    id: "visa",
    badge: "98.4% Approval",
    title: "End-to-End Visa Filing",
    subtitle: "Zero Hassle Embassy Documentation",
    description:
      "Full professional documentation, cover letters, flight reservations, bank audits, and appointment scheduling for Schengen, UK, USA, Umrah e-visas, and Southeast Asia.",
    perks: [
      "Dedicated visa specialist assigned to your file",
      "Mock visa interview prep for Schengen & US",
      "Direct Saudi Nusuk e-visa integration",
    ],
  },
  {
    id: "hotels",
    badge: "Personally Inspected",
    title: "Vetted 4★ & 5★ Accommodations",
    subtitle: "Prime City & Haram Locations",
    description:
      "We never place our guests in unverified motels. Every hotel in Makkah, Madinah, Bali, Dubai, and Baku is pre-screened for hygiene, central proximity, and hot buffet breakfasts.",
    perks: [
      "Walking distance from Haram gates in Makkah & Madinah",
      "Central downtown hotels near metro hubs in Europe & Asia",
      "Complimentary room upgrades when available",
    ],
  },
  {
    id: "pricing",
    badge: "Zero Hidden Surcharges",
    title: "Guaranteed Transparent Tariffs",
    subtitle: "Clear PKR & USD Quotations",
    description:
      "What you see is exactly what you pay. Our published tariffs cover airfares, visa fees, hotel stays, tax invoices, and private air-conditioned airport transfers with zero surprise border taxes.",
    perks: [
      "Transparent breakdown of flights, hotels & visas",
      "Flexible split installment plans for early bookings",
      "PayPak, Credit Card, and Bank Wire accepted",
    ],
  },
  {
    id: "concierge",
    badge: "24/7 Karachi Desk",
    title: "Dedicated Ground Concierge",
    subtitle: "Round-the-Clock Peace of Mind",
    description:
      "From your boarding gate at Jinnah International Karachi to your return flight, our 24/7 WhatsApp emergency desk and on-ground city coordinators remain by your side.",
    perks: [
      "Instant WhatsApp assistance in Urdu & English",
      "Direct Muallim supervision for Umrah pilgrims",
      "Real-time flight delay tracking & re-routing",
    ],
  },
];

const DIVISIONS = [
  {
    id: "umrah",
    name: "Spiritual Journeys (Umrah)",
    label: "20-Day Complete Dossiers",
    icon: IconKaaba,
    headline: "Devotion, Dignity & Absolute Peace of Mind",
    lead: "Our flagship 20-Day Umrah delegations operate with direct return flights from Karachi, Lahore, and Islamabad, vetted 4-Star hotels within comfortable walking distance of Masjid al-Haram, the high-speed Haramain bullet train, and dedicated experienced Karachi Muallims.",
    features: [
      "Vetted Clock Tower / Ajyad hotels in Makkah & Markaziya hotels in Madinah",
      "4 Comprehensive guided historical Ziyaraat in private AC coaches",
      "High-speed Haramain bullet train tickets between Makkah & Madinah",
      "Direct group flight blocks with Saudia, PIA, and Emirates",
    ],
    image: "/images/makkah.jpg",
    actionLabel: "Explore 20-Day Umrah Package",
    actionTarget: "packages",
  },
  {
    id: "international",
    name: "International Escapes",
    label: "Bespoke & Group Holidays",
    icon: IconPlane,
    headline: "Unforgettable Horizons Across 25+ Countries",
    lead: "From emerald rice terraces in Bali and high-octane luxury in Dubai, to the ancient Silk Road charm of Baku, the tropical beaches of Thailand, and alpine lakes in Switzerland — every itinerary is crafted with handpicked stays and private excursions.",
    features: [
      "Custom honeymoon packages with candlelight beach dinners and private pool villas",
      "Fixed group departures for families with all tours, transfers, and visas included",
      "Comprehensive Schengen and UK visa guidance with verified flight reservations",
      "English and Urdu-speaking chauffeurs and licensed local guides",
    ],
    image: "/images/destinations/bali.jpeg",
    actionLabel: "View International Holidays",
    actionTarget: "destinations",
  },
  {
    id: "northern",
    name: "Northern Pakistan",
    label: "Domestic Expeditions",
    icon: IconMountain,
    headline: "The Crown of Karakoram & Himalayas",
    lead: "Experience Pakistan's breathtaking north in absolute comfort. From the turquoise waters of Attabad Lake and ancient Baltit Fort in Hunza Valley to the cold deserts of Skardu and Shangrila Resort, guided by expert mountain chauffeurs in 4x4 Prados.",
    features: [
      "Luxury 4x4 Toyota Prado transport with seasoned mountain drivers",
      "Vetted luxury resort stays (Luxus Hunza, Serena, Shangrila)",
      "Daily hot buffet breakfast and scenic bonfire evenings",
      "Direct return flights to Skardu or scenic Karakoram Highway overland routes",
    ],
    image: "/images/hunza.jpg",
    actionLabel: "View Northern Pakistan Packages",
    actionTarget: "packages",
  },
  {
    id: "corporate",
    name: "Corporate & MICE",
    label: "Executive Delegations",
    icon: IconBriefcase,
    headline: "Flawless Global Logistics for Corporate Teams",
    lead: "Trusted by leading Pakistani commercial banks, pharmaceutical firms, and multinational corporations for annual incentive trips, global conference delegations, and executive leadership retreats across Dubai, Baku, Turkey, and Europe.",
    features: [
      "Dedicated corporate account manager and single-invoice billing",
      "Embassy invitation letters and fast-track group visa documentation",
      "Private conference room rentals and gala dinner arrangements",
      "Round-the-clock ground transportation and VIP airport protocol",
    ],
    image: "/images/destinations/dubai.jpeg",
    actionLabel: "Inquire Corporate Tour",
    actionTarget: "contact",
  },
];

const MILESTONES = [
  {
    number: "15,000+",
    label: "Travelers Served",
    caption: "Pakistani families, pilgrims & couples since 2018",
  },
  {
    number: "98.4%",
    label: "Visa Approval Rate",
    caption: "Across Schengen, UK, Umrah & Southeast Asia",
  },
  {
    number: "25+",
    label: "Global Destinations",
    caption: "Direct partnerships across 4 continents",
  },
  {
    number: "4.9 / 5.0",
    label: "Customer Rating",
    caption: "Verified Google, Facebook & traveler reviews",
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "SECP Incorporation",
    badge: "Official (Pvt.) Ltd.",
    description: "Registered under the Companies Act with Securities and Exchange Commission of Pakistan.",
  },
  {
    title: "DTS Tour Operator License",
    badge: "Dept. of Tourist Services",
    description: "Authorized tour operator by the Government of Pakistan Ministry of Tourism (License # 2481).",
  },
  {
    title: "IATA Ticketing Network",
    badge: "Accredited Partners",
    description: "Direct airline ticketing access to Emirates, Qatar, Saudia, PIA, FlyDubai, and Turkish Airlines.",
  },
  {
    title: "Ministry of Hajj & Umrah",
    badge: "Nusuk Portal Authorized",
    description: "Direct Saudi Nusuk portal access for authorized e-visas and verified Makkah/Madinah hotel contracts.",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("umrah");
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const currentDivision = DIVISIONS.find((d) => d.id === activeTab) || DIVISIONS[0];
  const ActiveDivisionIcon = currentDivision.icon;

  return (
    <div className="about-page">
      {/* ===================== HERO (EXACT HOME HERO HEIGHT & BALANCE) ===================== */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <img
          className="about-hero-bg"
          src="/images/mountains.jpg"
          alt="Breathtaking travel scenery"
          fetchPriority="high"
        />
        <div className="about-hero-shade" />

        <Header onPlan={() => plan()} />

        <div className="about-hero-body container">
          <div className="about-hero-copy">
            <p className="eyebrow">
              EST. 2018 <span>·</span> BUKHARI COMMERCIAL, DHA PHASE 6 <span>·</span> KARACHI
            </p>

            <h1 id="about-hero-title">
              Crafting Journeys That
              <br />
              Stay With You Forever.
            </h1>

            <p className="about-hero-subtitle">
              Open Trip (Pvt.) Ltd. is Pakistan’s trusted boutique travel curator, headquartered at
              Bukhari Commercial, DHA Phase 6, Karachi. From sacred 20-Day Umrah pilgrimages to
              handcrafted international escapes across 25+ global destinations.
            </p>

            <div className="about-hero-actions">
              <button
                className="about-btn-primary"
                onClick={() => {
                  if (nav) nav.navigate("packages");
                }}
              >
                Explore Curated Packages <Icon name="chevronRight" size={17} />
              </button>
              <button
                className="about-btn-secondary"
                onClick={() => {
                  if (nav) nav.navigate("contact");
                }}
              >
                Visit Our Karachi Lounge <Icon name="compass" size={17} />
              </button>
            </div>
          </div>

          {/* FLOATING GLASS FEATURE CARD (MIRRORS HOME HERO'S RIGHT SELECTOR BALANCE) */}
          <div className="about-hero-glass-card">
            <div className="glass-card-pill">
              <span className="glass-pill-dot" />
              <span>DHA PHASE 6 · KARACHI HQ</span>
            </div>
            <h3>Boutique Travel Curation</h3>
            <p>
              Direct Muallim supervision for Umrah and handpicked luxury resorts for couples and families.
            </p>

            <div className="glass-card-features">
              <div className="glass-feature-item">
                <span className="glass-feature-bullet">✦</span>
                <span>Flagship 20-Day Escorted Umrah</span>
              </div>
              <div className="glass-feature-item">
                <span className="glass-feature-bullet">✦</span>
                <span>End-to-End Visa Filing (98.4% Success)</span>
              </div>
              <div className="glass-feature-item">
                <span className="glass-feature-bullet">✦</span>
                <span>Guaranteed Transparent PKR Tariffs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MILESTONES STATS STRIP (WARM BALANCED LIGHT BG) ===================== */}
      <section className="about-stats-strip">
        <div className="container">
          <div className="about-stats-grid">
            {MILESTONES.map((item) => (
              <div key={item.label} className="about-stat-card">
                <div className="about-stat-number">{item.number}</div>
                <div className="about-stat-label">{item.label}</div>
                <div className="about-stat-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="about-main">
        {/* ===================== SECTION 1: STYLISH EDITORIAL STORY (CRISP WHITE BG) ===================== */}
        <section className="about-story-section">
          <div className="container about-story-grid">
            <div className="about-story-content">
              <span className="section-eyebrow">OUR HERITAGE & MISSION</span>
              <h2 className="about-story-heading">
                Born in Karachi to Elevate Every Journey.
              </h2>
              
              <p className="about-story-lead">
                Founded in Bukhari Commercial, DHA Phase 6, Open Trip eliminates vague hotel ratings,
                hidden border surcharges, and impersonal ticketing. We personally inspect every property,
                publish transparent PKR tariffs, and escort every Umrah delegation with dedicated Karachi Muallims.
              </p>

              {/* 3 SLEEK FEATURE PILLS */}
              <div className="story-highlights-list">
                <div className="story-highlight-item">
                  <span className="highlight-bullet">✦</span>
                  <div>
                    <strong>Direct Hotel Vetting</strong>
                    <span>Walking distance from Haram gates & downtown city centers.</span>
                  </div>
                </div>
                <div className="story-highlight-item">
                  <span className="highlight-bullet">✦</span>
                  <div>
                    <strong>100% Fixed Tariffs</strong>
                    <span>Zero surprise border taxes or arrival surcharges.</span>
                  </div>
                </div>
                <div className="story-highlight-item">
                  <span className="highlight-bullet">✦</span>
                  <div>
                    <strong>24/7 Karachi Ground Care</strong>
                    <span>Karachi WhatsApp concierge + seasoned on-ground city leads.</span>
                  </div>
                </div>
              </div>

              <div className="about-quote-box">
                <p className="about-quote-text">
                  “We do not sell generic ticket vouchers. We build relationships, safeguard your family’s
                  comfort, and ensure every journey delivers memories you cherish for a lifetime.”
                </p>
                <div className="about-quote-author">
                  <strong>Muhammad Tariq Qureshi</strong>
                  <span>Managing Director, Open Trip (Pvt.) Ltd.</span>
                </div>
              </div>
            </div>

            {/* GORGEOUS LUXURY TRAVEL IMAGERY */}
            <div className="about-story-media">
              <div className="about-media-stack">
                <div className="about-image-card main-image">
                  <img
                    src="/images/story-resort.jpg"
                    alt="Luxury Tropical Resort & Travel Experiences"
                    loading="lazy"
                  />
                  <div className="about-image-badge">
                    <Icon name="compass" size={14} />
                    <span>DHA Phase 6, Karachi Headquarters</span>
                  </div>
                </div>

                <div className="about-image-card sub-image">
                  <img
                    src="/images/story-travelers.jpg"
                    alt="Happy Open Trip Travelers Exploring Scenic Horizons"
                    loading="lazy"
                  />
                  <div className="about-image-caption">
                    <strong>15,000+ Happy Guests</strong>
                    <small>Families, Couples & Pilgrims</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 2: THE 4 PILLARS (SERENE ICE-TEAL LIGHT BG) ===================== */}
        <section className="about-pillars-section">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">THE OPEN TRIP DIFFERENCE</span>
              <h2>Why Pakistani Travelers Rely on Us</h2>
              <p>
                Four steadfast promises that separate Open Trip from standard commercial ticket agencies.
              </p>
            </div>

            <div className="about-pillars-grid">
              {CORE_PILLARS.map((pillar) => (
                <div key={pillar.id} className="about-pillar-card">
                  <div className="pillar-header">
                    <span className="pillar-badge">{pillar.badge}</span>
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <div className="pillar-subtitle">{pillar.subtitle}</div>
                  <p className="pillar-description">{pillar.description}</p>
                  <ul className="pillar-perks">
                    {pillar.perks.map((perk, idx) => (
                      <li key={idx}>
                        <span className="check-bullet">✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3: SPECIALIZED DIVISIONS (WARM PEACH/IVORY LIGHT BG) ===================== */}
        <section className="about-divisions-section">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">OUR SPECIALIZED DIVISIONS</span>
              <h2>Bespoke Expertise for Every Travel Purpose</h2>
              <p>
                Select a division below to see how our specialized travel desks operate.
              </p>
            </div>

            {/* TAB SELECTORS WITH PROFESSIONAL ICONS */}
            <div className="division-tabs-bar">
              {DIVISIONS.map((div) => {
                const DivIcon = div.icon;
                return (
                  <button
                    key={div.id}
                    className={`division-tab-btn ${activeTab === div.id ? "active" : ""}`}
                    onClick={() => setActiveTab(div.id)}
                  >
                    <span className="division-tab-icon">
                      <DivIcon />
                    </span>
                    <span className="division-tab-texts">
                      <strong>{div.name}</strong>
                      <small>{div.label}</small>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT CARD */}
            <div className="division-active-card">
              <div className="division-content-col">
                <div className="division-badge">
                  <ActiveDivisionIcon style={{ marginRight: "6px", verticalAlign: "middle" }} />
                  {currentDivision.label}
                </div>
                <h3 className="division-headline">{currentDivision.headline}</h3>
                <p className="division-lead">{currentDivision.lead}</p>

                <div className="division-features-list">
                  <h4>Key Inclusions & Highlights:</h4>
                  <ul>
                    {currentDivision.features.map((feat, idx) => (
                      <li key={idx}>
                        <span className="feat-bullet">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="division-action-row">
                  <button
                    className="about-btn-primary"
                    onClick={() => {
                      if (nav) nav.navigate(currentDivision.actionTarget);
                    }}
                  >
                    {currentDivision.actionLabel} <Icon name="chevronRight" size={16} />
                  </button>
                  <button
                    className="about-btn-outline"
                    onClick={() => plan({ destination: currentDivision.name })}
                  >
                    Custom Itinerary Request
                  </button>
                </div>
              </div>

              <div className="division-media-col">
                <img
                  src={currentDivision.image}
                  alt={currentDivision.name}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 4: REGULATORY COMPLIANCE (CALM PALE SAGE LIGHT BG) ===================== */}
        <section className="about-compliance-section">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">CREDENTIALS & INTEGRITY</span>
              <h2>Government Licensed & Aviation Accredited</h2>
              <p>
                Operating with complete fiscal, legal, and operational compliance under Pakistani and international travel law.
              </p>
            </div>

            <div className="about-compliance-grid">
              {COMPLIANCE_ITEMS.map((item) => (
                <div key={item.title} className="compliance-card">
                  <div className="compliance-badge">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 5: VISIT KARACHI HQ CTA (DEEP TEAL) ===================== */}
        <section className="about-cta-section">
          <div className="container about-cta-inner">
            <div className="about-cta-content">
              <span className="cta-badge">📍 DHA PHASE 6, KARACHI</span>
              <h2>Join Us for Fresh Coffee & Personalized Trip Planning</h2>
              <p>
                Our client lounge in Bukhari Commercial is open Monday through Saturday. Drop by to review
                itineraries on large screens, discuss visa requirements, or chat directly with our Senior Muallim.
              </p>
              <div className="cta-meta-row">
                <div className="cta-meta-item">
                  <strong>Building 34-C, Lane 5</strong>
                  <span>Bukhari Commercial Area, Phase 6, DHA, Karachi</span>
                </div>
                <div className="cta-meta-item">
                  <strong>Monday – Saturday</strong>
                  <span>10:30 AM – 8:30 PM (Walk-ins Welcome)</span>
                </div>
              </div>
            </div>

            <div className="about-cta-actions">
              <a
                className="cta-whatsapp-btn"
                href="https://wa.me/923101816191?text=Hello%20OpenTrip%20Karachi%2C%20I%20would%20like%20to%20visit%20your%20DHA%20office%20for%20trip%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💬</span> Chat on WhatsApp (+92 310 1816191)
              </a>
              <button
                className="cta-contact-btn"
                onClick={() => {
                  if (nav) nav.navigate("contact");
                }}
              >
                Open Contact & Directions Page
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onPlan={() => plan()}
        onDestination={(item) => plan({ ...item, destination: item.name })}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={close} />
      )}
      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            Open Trip (Pvt.) Ltd. operates strictly according to the Department of
            Tourist Services guidelines. All air tickets and hotel bookings are subject
            to carrier and hotel cancellation terms. Contact our Karachi office for full details.
          </p>
        </Dialog>
      )}
    </div>
  );
}

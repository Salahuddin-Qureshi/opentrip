import { useState, useMemo } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Packages.css";

const PACKAGE_CATEGORIES = [
  {
    id: "All",
    label: "All Packages",
    desc: "Explore our full range of spiritual and leisure travel options.",
    icon: "compass",
    colorHex: "#028AF0",
  },
  {
    id: "Umrah",
    label: "Umrah Packages",
    desc: "Explore available Umrah arrangements.",
    icon: "star",
    colorHex: "#012061",
  },
  {
    id: "International",
    label: "International Holiday Packages",
    desc: "Discover travel options for destinations around the world.",
    icon: "plane",
    colorHex: "#022F82",
  },
  {
    id: "Family",
    label: "Family Packages",
    desc: "Plan a holiday with your loved ones.",
    icon: "heart",
    colorHex: "#FB8902",
  },
  {
    id: "Group",
    label: "Group Packages",
    desc: "Explore arrangements for group travel.",
    icon: "pin",
    colorHex: "#028AF0",
  },
  {
    id: "Customized",
    label: "Customized Packages",
    desc: "Request an itinerary based on your own preferences.",
    icon: "sparkles",
    colorHex: "#03C7FB",
  },
];

const PACKAGES_CATALOG = [
  {
    id: "umrah-20day",
    title: "20-Day Complete Umrah Package",
    destination: "Makkah & Madinah, Saudi Arabia",
    category: "Umrah",
    duration: "20 Days / 19 Nights",
    validity: "Weekly Departures · Valid 2026",
    pricePkr: "230,999",
    description: "Direct return flights, Umrah e-visa, Makkah & Madinah vetted hotels with 24/7 transfers, and complete historical Ziyarat tours.",
    image: "/images/cities/makkah-kaaba.jpg",
    badge: "Spiritual Journey",
    colorHex: "#012061",
    inclusions: [
      "Direct Return Air Tickets",
      "Umrah E-Visa with Insurance",
      "Makkah & Madinah Hotels",
      "Full AC Ground Transport",
      "4 Historical Ziyarat Tours",
      "Religious Guide Support",
    ],
  },
  {
    id: "umrah-10day",
    title: "10-Day Economy Saver Umrah",
    destination: "Makkah & Madinah, Saudi Arabia",
    category: "Umrah",
    duration: "10 Days / 9 Nights",
    validity: "Bi-Weekly Departures · Valid 2026",
    pricePkr: "185,000",
    description: "Value-focused Umrah package with comfortable accommodation close to Haram, reliable airport shuttle, and visa documentation support.",
    image: "/images/cities/madinah.jpg",
    badge: "Economy Saver",
    colorHex: "#022F82",
    inclusions: [
      "Return Flights Included",
      "Umrah Visa Assistance",
      "Makkah 5 Nights + Madinah 4 Nights",
      "Shared AC Bus Transfers",
      "Ziyarat in Both Holy Cities",
      "24/7 Ground Assistance",
    ],
  },
  {
    id: "bali-escape",
    title: "Bali Getaway: Beaches, Temples & Terraces",
    destination: "Bali, Indonesia",
    category: "International",
    duration: "5 Days / 4 Nights",
    validity: "Year-Round Departures · Valid 2026",
    pricePkr: "220,000",
    description: "Immerse in the cultural beauty of Ubud, majestic sea cliff temples at Uluwatu, emerald rice terraces, and sun-kissed beaches.",
    image: "/images/destinations/bali.jpeg",
    badge: "Island Culture",
    colorHex: "#FB8902",
    inclusions: [
      "4 Nights 4★ Resort Stay",
      "Daily Buffet Breakfast",
      "Full-Day Ubud & Kintamani Tour",
      "Uluwatu Sunset Temple Tour",
      "Indonesia E-Visa Assistance",
      "Private Return Transfers",
    ],
  },
  {
    id: "swiss-explorer",
    title: "Swiss Explorer: Alpine Peaks & Glacial Lakes",
    destination: "Zurich, Lucerne & Interlaken, Switzerland",
    category: "International",
    duration: "7 Days / 6 Nights",
    validity: "Spring & Summer 2026 Departures",
    pricePkr: "360,000",
    description: "Soar to snow-clad alpine summits, cruise emerald mountain lakes, and wander through postcard Swiss villages with scenic rail passes.",
    image: "/images/destinations/switzerland.jpeg",
    badge: "Alpine Luxury",
    colorHex: "#028AF0",
    inclusions: [
      "6 Nights Handpicked 4★ Hotels",
      "Swiss All-in-One Travel Rail Pass",
      "Mount Titlis Cable Car Excursion",
      "Lake Lucerne Steamboat Cruise",
      "Schengen Visa Checklist & Guidance",
      "Chauffeur Station Transfers",
    ],
  },
  {
    id: "maldives-luxury",
    title: "Maldives Escape: Overwater Luxury Villas",
    destination: "North Malé Atoll, Maldives",
    category: "International",
    duration: "4 Days / 3 Nights",
    validity: "Year-Round · Daily Bookings",
    pricePkr: "330,000",
    description: "Turquoise lagoons, private overwater villas, vibrant coral reef snorkelling, and complimentary sunset dolphin cruises in island paradise.",
    image: "/images/destinations/maldives.jpeg",
    badge: "Tropical Haven",
    colorHex: "#03C7FB",
    inclusions: [
      "3 Nights Overwater Villa Stay",
      "Half-Board Meal Plan Included",
      "Speedboat Island Transfers",
      "Complimentary Snorkelling Gear",
      "Sunset Dolphin Cruise Experience",
      "Maldives Entry Pass Assistance",
    ],
  },
  {
    id: "dubai-city",
    title: "Dubai City Break: Skyline & Desert Safari",
    destination: "Dubai, United Arab Emirates",
    category: "International",
    duration: "5 Days / 4 Nights",
    validity: "Weekly Flights · Valid 2026",
    pricePkr: "265,000",
    description: "Experience the glittering Burj Khalifa skyline, luxury Marina dinner cruise, thrilling 4x4 desert dune safari, and gold souk shopping.",
    image: "/images/cities/dubai.jpg",
    badge: "Modern Wonder",
    colorHex: "#012061",
    inclusions: [
      "4 Nights 4★ Downtown/Marina Hotel",
      "Daily Buffet Breakfast",
      "4x4 Desert Safari with BBQ Dinner",
      "Burj Khalifa 124th Floor Entry",
      "Dubai Marina Luxury Dhow Cruise",
      "UAE Tourist Visa Assistance",
    ],
  },
  {
    id: "istanbul-heritage",
    title: "Istanbul: Two Continents & Bosphorus Cruise",
    destination: "Istanbul, Türkiye",
    category: "International",
    duration: "5 Days / 4 Nights",
    validity: "Year-Round Departures · Valid 2026",
    pricePkr: "225,000",
    description: "Walk through Ottoman grandeur at Hagia Sophia and Topkapi Palace, sail the scenic Bosphorus Strait, and explore the historic Grand Bazaar.",
    image: "/images/destinations/instanbul.jpeg",
    badge: "Heritage Gem",
    colorHex: "#022F82",
    inclusions: [
      "4 Nights 4★ Central Hotel",
      "Daily Turkish Breakfast",
      "Old City Heritage Guided Tour",
      "Bosphorus Sunset Dinner Cruise",
      "Princes' Islands Day Excursion",
      "Türkiye Visa Guidance",
    ],
  },
  {
    id: "malaysia-family",
    title: "Malaysia Family: KL, Genting & Sunway Lagoon",
    destination: "Kuala Lumpur & Genting, Malaysia",
    category: "Family",
    duration: "5 Days / 4 Nights",
    validity: "Family Friendly · Valid 2026",
    pricePkr: "155,000",
    description: "A fun-filled family holiday with Genting Highlands cable car, Batu Caves exploration, Sunway Lagoon 6-in-1 theme park, and KL city tours.",
    image: "/images/destinations/dubai.jpeg",
    badge: "Family Favorite",
    colorHex: "#FB8902",
    inclusions: [
      "4 Nights Central Family Suite",
      "Daily Buffet Breakfast",
      "Awana SkyWay 2-Way Cable Car",
      "Sunway Lagoon All-Parks Pass",
      "Malaysia E-Visa Processing",
      "Private Airport & Tour Transfers",
    ],
  },
  {
    id: "hunza-skardu-family",
    title: "Northern Splendour: Hunza & Skardu Family Journey",
    destination: "Hunza & Skardu, Pakistan",
    category: "Family",
    duration: "8 Days / 7 Nights",
    validity: "May to October 2026 Departures",
    pricePkr: "165,000",
    description: "Discover Pakistan's crown jewels: serene Attabad Lake boating, ancient Baltit & Altit Forts, Shangrila Resort Skardu, and Sarfaranga Desert.",
    image: "/images/destinations/switzerland.jpeg",
    badge: "Scenic Wonder",
    colorHex: "#028AF0",
    inclusions: [
      "7 Nights Premium Hotel Stays",
      "Dedicated 4x4 Prado with Chauffeur",
      "Attabad Lake Boating & Passu Cones",
      "Baltit & Altit Fort Heritage Passes",
      "Shangrila Resort & Kachura Lake",
      "Daily Breakfast Included",
    ],
  },
  {
    id: "baku-group",
    title: "Baku & Gabala Mountain Discovery for Groups",
    destination: "Baku & Gabala, Azerbaijan",
    category: "Group",
    duration: "5 Days / 4 Nights",
    validity: "Special Group Rates · Valid 2026",
    pricePkr: "165,000",
    description: "Perfect for groups of friends and corporate delegations: Old City Icherisheher, Flame Towers, Shahdag mountain cable cars, and Tufandag resorts.",
    image: "/images/cities/dubai.jpg",
    badge: "Group Tour",
    colorHex: "#012061",
    inclusions: [
      "4 Nights 4★ Baku City Hotel",
      "Daily Buffet Breakfast",
      "Full-Day Gabala & Tufandag Tour",
      "Baku Old & Modern City Tour",
      "Azerbaijan ASAN E-Visa",
      "Dedicated Group AC Coach",
    ],
  },
  {
    id: "vietnam-group",
    title: "Vietnam Group Classic: Halong Bay & Da Nang",
    destination: "Hanoi, Halong Bay & Da Nang, Vietnam",
    category: "Group",
    duration: "6 Days / 5 Nights",
    validity: "Fixed Departure Dates · Valid 2026",
    pricePkr: "195,000",
    description: "Explore Hanoi's French Quarter, cruise amidst the emerald karst towers of Halong Bay, and walk across the Golden Hands Bridge in Da Nang.",
    image: "/images/destinations/bali.jpeg",
    badge: "Group Adventure",
    colorHex: "#022F82",
    inclusions: [
      "5 Nights 4★ Hotels & Luxury Cruise",
      "Daily Breakfast + Cruise Meals",
      "Halong Bay Emerald Day Cruise",
      "Ba Na Hills Cable Car Pass",
      "Vietnam E-Visa Assistance",
      "Private AC Group Coach Transfers",
    ],
  },
  {
    id: "custom-worldwide",
    title: "Customized Tailor-Made Travel Package",
    destination: "Any Domestic or Global Destination",
    category: "Customized",
    duration: "Flexible Dates & Duration",
    validity: "Crafted to Your Preferred Dates",
    pricePkr: "Custom Quote",
    description: "Build an itinerary around your preferred pace, flight routes, hotel categories, and budget with our dedicated trip design specialists.",
    image: "/images/destinations/switzerland.jpeg",
    badge: "Bespoke Curation",
    colorHex: "#03C7FB",
    inclusions: [
      "Custom Flight Booking Options",
      "Curated Hotel Categories (3★ to 5★)",
      "Tailor-Made Sightseeing & Excursions",
      "Private Chauffeur Ground Transfers",
      "End-to-End Visa Assistance",
      "Dedicated 24/7 Trip Coordinator",
    ],
  },
];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const ITEMS_PER_PAGE = 6;

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
    setMobileIdx(0);
  };

  const filtered = useMemo(() => {
    if (activeCategory === "All") return PACKAGES_CATALOG;
    return PACKAGES_CATALOG.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const count = filtered.length;
  const safeIdx = count > 0 ? Math.min(mobileIdx, count - 1) : 0;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentPageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Slots to fill in the 3-column desktop grid so rows are never left with awkward white gaps
  const slotsToFill = (3 - (currentPageItems.length % 3)) % 3;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    document.getElementById("packages-catalog-anchor")?.scrollIntoView({ behavior: "smooth" });
  };

  const prevCard = () => {
    if (count <= 1) return;
    setMobileIdx((prev) => (prev - 1 + count) % count);
  };

  const nextCard = () => {
    if (count <= 1) return;
    setMobileIdx((prev) => (prev + 1) % count);
  };

  const goToService = (servicePage) => {
    if (nav) nav.navigate(servicePage);
    else window.location.hash = servicePage;
  };

  const renderInformativeCard = (type = "custom", key = "info-1") => {
    if (type === "visa") {
      return (
        <article
          key={key}
          className="packages-catalog-card packages-catalog-card--informative packages-info-card--visa"
        >
          <div className="pkg-card-media pkg-info-media">
            <img
              src="/images/cities/dubai.jpg"
              alt="Visa & Air Ticketing Desk"
              className="pkg-card-img"
              loading="lazy"
            />
            <div className="pkg-info-overlay" />
            <span className="pkg-card-badge" style={{ borderColor: "#028AF0" }}>
              Visa &amp; Flight Desk
            </span>
            <span className="pkg-card-duration">
              <Icon name="shield" size={11} /> Official Desk
            </span>
          </div>

          <div className="pkg-card-body">
            <div className="pkg-card-dest-row">
              <Icon name="plane" size={12} />
              <span>Worldwide Air &amp; Visa Solutions</span>
            </div>

            <h3 className="pkg-card-title">Need Direct Flights or Visa Support?</h3>

            <div className="pkg-card-validity-row">
              <Icon name="check" size={11} />
              <span>IATA Certified · Embassy Guidance</span>
            </div>

            <p className="pkg-card-desc">
              Already have accommodation booked? OPEN TRIP assists with independent flight bookings, complex multi-city routes, and complete visa documentation checklists.
            </p>

            <div className="pkg-card-inclusions">
              <span className="inclusions-label">Available Support:</span>
              <div className="inclusions-chips">
                <span className="inclusion-chip">
                  <span className="chip-check">✓</span> Domestic &amp; Global Air Tickets
                </span>
                <span className="inclusion-chip">
                  <span className="chip-check">✓</span> Tourist, Family &amp; Umrah E-Visas
                </span>
                <span className="inclusion-chip">
                  <span className="chip-check">✓</span> Verified Document Checklists
                </span>
                <span className="inclusion-chip">
                  <span className="chip-check">✓</span> Dedicated Travel Desk Support
                </span>
              </div>
            </div>

            <div className="pkg-card-bottom">
              <div className="pkg-price-col">
                <span className="pkg-price-lead">Inquire Service</span>
                <strong className="pkg-price-amount" style={{ fontSize: "16px" }}>
                  Free Consultation
                </strong>
              </div>

              <button
                type="button"
                className="pkg-inquire-action-btn"
                onClick={() => goToService("visa")}
              >
                <span>Explore Visas</span>
                <Icon name="arrow" size={13} />
              </button>
            </div>
          </div>
        </article>
      );
    }

    // Default: Custom Itinerary Builder
    return (
      <article
        key={key}
        className="packages-catalog-card packages-catalog-card--informative packages-info-card--custom"
      >
        <div className="pkg-card-media pkg-info-media">
          <img
            src="/images/destinations/switzerland.jpeg"
            alt="Custom Tailor-Made Itineraries"
            className="pkg-card-img"
            loading="lazy"
          />
          <div className="pkg-info-overlay" />
          <span className="pkg-card-badge" style={{ borderColor: "#FB8902" }}>
            100% Tailor-Made
          </span>
          <span className="pkg-card-duration">
            <Icon name="compass" size={11} /> Custom Itinerary
          </span>
        </div>

        <div className="pkg-card-body">
          <div className="pkg-card-dest-row">
            <Icon name="pin" size={12} />
            <span>Any Global Destination</span>
          </div>

          <h3 className="pkg-card-title">Looking for a Tailored Travel Plan?</h3>

          <div className="pkg-card-validity-row">
            <Icon name="check" size={11} />
            <span>Built Around Your Dates &amp; Budget</span>
          </div>

          <p className="pkg-card-desc">
            Can't find the exact package or dates you want? Tell us where you want to go. Our trip planners will design a bespoke itinerary tailored to your preferences.
          </p>

          <div className="pkg-card-inclusions">
            <span className="inclusions-label">Bespoke Features:</span>
            <div className="inclusions-chips">
              <span className="inclusion-chip">
                <span className="chip-check">✓</span> Flexible Dates &amp; Duration
              </span>
              <span className="inclusion-chip">
                <span className="chip-check">✓</span> 3★ to 5★ Hotel Curation
              </span>
              <span className="inclusion-chip">
                <span className="chip-check">✓</span> Private Chauffeur Transfers
              </span>
              <span className="inclusion-chip">
                <span className="chip-check">✓</span> Dedicated Trip Coordinator
              </span>
            </div>
          </div>

          <div className="pkg-card-bottom">
            <div className="pkg-price-col">
              <span className="pkg-price-lead">Estimated Price</span>
              <strong className="pkg-price-amount" style={{ fontSize: "16px" }}>
                Custom Quote
              </strong>
            </div>

            <button
              type="button"
              className="pkg-inquire-action-btn"
              onClick={() => goToService("custom-tour")}
            >
              <span>Build My Trip</span>
              <Icon name="arrow" size={13} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  const renderPackageCard = (pkg) => (
    <article
      key={pkg.id}
      className="packages-catalog-card"
      style={{ "--card-accent": pkg.colorHex }}
    >
      {/* Photo Header with Inset Badge & Destination Pin */}
      <div className="pkg-card-media">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="pkg-card-img"
          loading="lazy"
        />
        <div className="pkg-card-overlay" />
        <span
          className="pkg-card-badge"
          style={{ borderColor: pkg.colorHex }}
        >
          {pkg.badge}
        </span>
        <span className="pkg-card-duration">
          <Icon name="calendar" size={11} /> {pkg.duration}
        </span>
      </div>

      {/* Card Body */}
      <div className="pkg-card-body">
        <div className="pkg-card-dest-row">
          <Icon name="pin" size={12} />
          <span>{pkg.destination}</span>
        </div>

        <h3 className="pkg-card-title">{pkg.title}</h3>

        <div className="pkg-card-validity-row">
          <Icon name="check" size={11} />
          <span>{pkg.validity}</span>
        </div>

        <p className="pkg-card-desc">{pkg.description}</p>

        {/* Key Inclusions Pills */}
        <div className="pkg-card-inclusions">
          <span className="inclusions-label">Key Inclusions:</span>
          <div className="inclusions-chips">
            {pkg.inclusions.slice(0, 4).map((inc, i) => (
              <span key={i} className="inclusion-chip">
                <span className="chip-check">✓</span> {inc}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Button */}
        <div className="pkg-card-bottom">
          <div className="pkg-price-col">
            <span className="pkg-price-lead">
              {pkg.pricePkr === "Custom Quote" ? "Estimated Price" : "Starting From"}
            </span>
            <strong className="pkg-price-amount">
              {pkg.pricePkr === "Custom Quote" ? "Custom Quote" : `PKR ${pkg.pricePkr}`}
            </strong>
          </div>

          <button
            type="button"
            className="pkg-inquire-action-btn"
            onClick={() =>
              plan({
                name: pkg.title,
                destination: pkg.destination,
                type: pkg.category,
                price: pkg.pricePkr,
              })
            }
          >
            <span>Request Details</span>
            <Icon name="arrow" size={13} />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="packages-page packages-overview-page">
      {/* 1. Hero 100% Matching Home & Services Architecture */}
      <section className="hero hero--service" aria-labelledby="packages-hero-title">
        <img
          className="hero-image"
          src="/images/packages-hero-wide.jpg"
          alt="Explore Travel Packages with OPEN TRIP"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center 38%" }}
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "General Package Inquiry" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Our Travel Packages <span>·</span> Spiritual Journeys &amp; Global Holidays
            </p>
            <h1 id="packages-hero-title">
              Explore Our
              <br />
              Travel Packages
            </h1>
            <p className="hero-description">
              <strong>Find a Package That Fits Your Plans.</strong> Explore travel arrangements for spiritual journeys, international holidays, family trips, and group tours. Share your preferred dates and requirements to receive package details and a quotation.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Customized Package Inquiry" })}>
                Request a Customized Package <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  document
                    .getElementById("packages-catalog-anchor")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse All Packages{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">ALL</span>
              <span className="flight-icon">✦</span>
              <span className="flight-code">INCLUSIVE</span>
            </div>
            <span className="flight-card-sub">IATA Accredited · DTS #3941</span>
          </div>
        </div>
      </section>

      {/* 2. Floating Bar Navigation / Category Filter Pills */}
      <div className="services-nav-searchwrap container" id="packages-catalog-anchor">
        <div className="services-floating-navbar">
          {PACKAGE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`services-nav-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <Icon name={cat.icon} size={14} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Content: Category Overview Cards & Package Catalog Grid */}
      <main className="service-content-section">
        <div className="container">
          {/* Categories High-Level Showcase */}
          <div className="pkg-categories-overview-wrap">
            <div className="pkg-categories-header text-center">
              <span className="pkg-cat-eyebrow">CHOOSE YOUR TRAVEL STYLE</span>
              <h2 className="pkg-cat-heading">Find a Package That Fits Your Plans</h2>
              <p className="pkg-cat-sub">
                Explore travel arrangements for spiritual journeys, international holidays, family trips, and group tours.
              </p>
            </div>

            <div className="pkg-categories-cards-row">
              {PACKAGE_CATEGORIES.filter((c) => c.id !== "All").map((c) => (
                <div
                  key={c.id}
                  className={`pkg-cat-card ${activeCategory === c.id ? "is-selected" : ""}`}
                  onClick={() => handleCategoryChange(c.id)}
                  style={{ "--cat-accent": c.colorHex }}
                >
                  <div
                    className="pkg-cat-icon-box"
                    style={{
                      backgroundColor: `${c.colorHex}15`,
                      color: c.colorHex,
                    }}
                  >
                    <Icon name={c.icon} size={20} />
                  </div>
                  <h4>{c.label}</h4>
                  <p>{c.desc}</p>
                  <span className="pkg-cat-click-cue">
                    <span>{activeCategory === c.id ? "Viewing Category" : "View Packages"}</span>
                    <Icon name="arrow" size={11} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section Divider & Active Category Count */}
          <div className="pkg-active-filter-bar">
            <div>
              <h3>
                {activeCategory === "All"
                  ? "All Available Travel Packages"
                  : `${activeCategory} Packages`}
              </h3>
              <small>
                Showing {currentPageItems.length} of {filtered.length} verified packages ready for quotation
              </small>
            </div>
            {activeCategory !== "All" && (
              <button
                type="button"
                className="pkg-reset-btn"
                onClick={() => handleCategoryChange("All")}
              >
                Show All Packages
              </button>
            )}
          </div>

          {/* 4. Desktop & Tablet: Clean 3-Column Grid (6 items per page + informative filler cards) */}
          <div className="packages-catalog-grid">
            {currentPageItems.map((pkg) => renderPackageCard(pkg))}
            {slotsToFill >= 1 && renderInformativeCard("custom", "filler-1")}
            {slotsToFill >= 2 && renderInformativeCard("visa", "filler-2")}
          </div>

          {/* Pagination Controls (6 items per page) */}
          {totalPages > 1 && (
            <div className="packages-pagination-bar">
              <div className="pagination-count-lead">
                Page <strong>{safeCurrentPage}</strong> of <strong>{totalPages}</strong> ({filtered.length} Packages)
              </div>

              <div className="pagination-controls-row">
                <button
                  type="button"
                  className="pagination-btn pagination-btn--nav"
                  disabled={safeCurrentPage === 1}
                  onClick={() => goToPage(safeCurrentPage - 1)}
                  aria-label="Previous Page"
                >
                  <Icon name="chevronLeft" size={14} />
                  <span>Previous</span>
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      className={`pagination-num-btn ${
                        pageNum === safeCurrentPage ? "is-active" : ""
                      }`}
                      onClick={() => goToPage(pageNum)}
                      aria-label={`Go to page ${pageNum}`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="pagination-btn pagination-btn--nav"
                  disabled={safeCurrentPage === totalPages}
                  onClick={() => goToPage(safeCurrentPage + 1)}
                  aria-label="Next Page"
                >
                  <span>Next</span>
                  <Icon name="chevronRight" size={14} />
                </button>
              </div>
            </div>
          )}

          {/* 5. Mobile Screens (<= 768px): Exactly 1 Card at a Time with Forward & Backward Buttons */}
          <div className="packages-catalog-mobile-carousel">
            <div className="mobile-carousel-controls">
              <button
                type="button"
                className="mobile-nav-btn mobile-nav-prev"
                onClick={prevCard}
                aria-label="Previous package"
              >
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="mobile-carousel-indicators">
                <span className="mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="mobile-dots">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mobile-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to package ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mobile-nav-btn mobile-nav-next"
                onClick={nextCard}
                aria-label="Next package"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="mobile-card-stage">
              {filtered[safeIdx] && renderPackageCard(filtered[safeIdx])}
            </div>
          </div>

          {/* 6. Bottom CTA: Need Something Different? */}
          <div className="service-cta-banner" style={{ marginTop: "60px" }}>
            <div className="cta-banner-text">
              <h3>Need Something Different?</h3>
              <p>
                Request a customized package based on your destination, travel dates, group size, and budget.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => goToService("custom-tour")}
              >
                <span>Request a Customized Package</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={close} />
      )}
    </div>
  );
}

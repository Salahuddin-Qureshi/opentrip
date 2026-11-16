import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const SERVICES_OVERVIEW = [
  {
    id: "flights",
    page: "flights",
    title: "Flight Booking",
    desc: "Explore domestic and international flight options based on your routes, dates, and preferred airlines.",
    badge: "Domestic & International",
    image: "/images/hero-airplane-right.jpg",
    icon: "plane",
    colorHex: "#028AF0",
    highlights: ["Airlines & Routes", "Fare Conditions", "Baggage Allowance"],
  },
  {
    id: "hotels",
    page: "hotels",
    title: "Hotel Reservations",
    desc: "Find accommodation options for your stay across luxury resorts, business suites, and family hotels.",
    badge: "Verified Stays",
    image: "/images/destinations/maldives.jpeg",
    icon: "calendar",
    colorHex: "#FB8902",
    highlights: ["3★ to 5★ Categories", "Family & Groups", "Meal Plans"],
  },
  {
    id: "visa",
    page: "visa",
    title: "Visa Assistance",
    desc: "Get guidance and documentation support for visa applications with structured document checklists.",
    badge: "Application Guidance",
    image: "/images/cities/dubai.jpg",
    icon: "shield",
    colorHex: "#022F82",
    highlights: ["Document Checklist", "Embassy Steps", "Assessment Review"],
  },
  {
    id: "umrah",
    page: "umrah",
    title: "Umrah Packages",
    desc: "Plan your spiritual journey with travel arrangements, close-to-Haram hotels, and reliable ground transfers.",
    badge: "Sacred Pilgrimage",
    image: "/images/cities/makkah-kaaba.jpg",
    icon: "star",
    colorHex: "#012061",
    highlights: ["Makkah & Madinah", "Ziyarat & Transport", "E-Visa Support"],
  },
  {
    id: "packages",
    page: "custom-tour",
    title: "Customized Tour Packages",
    desc: "Build a trip around your interests, dates, and budget with customized private or group itineraries.",
    badge: "Tailored Itineraries",
    image: "/images/destinations/switzerland.jpeg",
    icon: "compass",
    colorHex: "#03C7FB",
    highlights: ["Personalized Schedule", "Family & Honeymoons", "Dedicated Desk"],
  },
  {
    id: "concierge",
    page: "contact",
    title: "Travel Concierge & Inquiries",
    desc: "Looking for corporate group bookings, private airport transfers, travel insurance, or tailored multi-country itineraries? Talk to our travel consultants.",
    badge: "DTS #3941 · 24/7 Desk",
    image: "/images/destinations-hero-wide.jpg",
    icon: "shield",
    colorHex: "#FB8902",
    highlights: ["Corporate & Family Groups", "Custom Route Planning", "24/7 Traveler Desk"],
  },
];

export default function ServicesPage() {
  const [dialog, setDialog] = useState(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const nav = useNavigation();

  const count = SERVICES_OVERVIEW.length;
  const safeIdx = Math.min(mobileIdx, count - 1);

  const prevCard = () => {
    setMobileIdx((prev) => (prev - 1 + count) % count);
  };

  const nextCard = () => {
    setMobileIdx((prev) => (prev + 1) % count);
  };

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goToService = (servicePage) => {
    if (nav) {
      nav.navigate(servicePage);
    } else {
      window.location.hash = servicePage;
    }
  };

  const goToContact = () => {
    if (nav) {
      nav.navigate("contact");
    } else {
      window.location.hash = "contact";
    }
  };

  const renderServiceCard = (item, isWide = false) => (
    <div
      key={item.id}
      className={`overview-service-card ${isWide ? "overview-service-card--wide" : ""
        }`}
      style={{ "--card-accent": item.colorHex }}
    >
      {/* Visual Media Header with Badges */}
      <div className="overview-card-media">
        <img
          src={item.image}
          alt={item.title}
          className="overview-card-img"
          loading="lazy"
        />
        <div className="overview-card-overlay" />
        <span className="overview-card-badge-top">{item.badge}</span>
        <div className="overview-card-icon-pill">
          <Icon name={item.icon} size={18} />
        </div>
      </div>

      {/* Card Body */}
      <div className="overview-card-body">
        <h3 className="overview-card-title">{item.title}</h3>
        <p className="overview-card-desc">{item.desc}</p>

        <div className="overview-highlights-list">
          {item.highlights.map((h, i) => (
            <span key={i} className="overview-highlight-pill">
              <Icon name="check" size={11} /> {h}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="overview-action-btn"
          onClick={() => goToService(item.page)}
        >
          <span>Explore {item.title}</span>
          <Icon name="arrow" size={13} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="services-page">
      {/* 1. Hero 100% Matching Home Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero-airplane-right.jpg"
          alt="Our Travel Services"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "General Inquiry" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Your travel partner <span>·</span> Travel Planning, Made More Convenient
            </p>
            <h1 id="hero-title">
              Our Travel
              <br />
              Services
            </h1>
            <p className="hero-description">
              From the first travel inquiry to your trip arrangements, OPEN TRIP offers a range of services to help you plan with greater ease. Choose the service you need and share your requirements with our team.
            </p>
            <div className="hero-actions">
              <Button onClick={goToContact}>
                Talk to Us <Icon size={17} />
              </Button>
              <Button variant="outline" onClick={() => goToService("packages")}>
                Browse Tour Packages{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge (Home Reference) */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">5 CORE</span>
              <span className="flight-icon">✈</span>
              <span className="flight-code">SERVICES</span>
            </div>
            <span className="flight-card-sub">IATA Accredited · DTS #3941</span>
          </div>
        </div>
      </section>

      {/* 2. Floating Bar Navigation (Home TripSearch Architecture) */}
      <div className="services-nav-searchwrap container">
        <div className="services-floating-navbar">
          <button type="button" className="services-nav-pill active">
            All Services
          </button>
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("flights")}
          >
            <Icon name="plane" size={14} /> Flight Booking
          </button>
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("hotels")}
          >
            <Icon name="calendar" size={14} /> Hotel Reservations
          </button>
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("visa")}
          >
            <Icon name="shield" size={14} /> Visa Assistance
          </button>
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("umrah")}
          >
            <Icon name="star" size={14} /> Umrah Packages
          </button>
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("custom-tour")}
          >
            <Icon name="compass" size={14} /> Tour Packages
          </button>
        </div>
      </div>

      {/* 3. Main Content: 5 Services Cards Styled Like Home Showcase */}
      <main className="service-content-section">
        <div className="container">
          {/* Desktop & Tablet: Clean 3x2 Grid (6 Cards, No Blank Holes) */}
          <div className="services-overview-grid">
            {SERVICES_OVERVIEW.map((item) =>
              renderServiceCard(item, false)
            )}
          </div>

          {/* Mobile Screens (<= 768px): Exactly 1 Card at a Time with Forward & Backward Buttons */}
          <div className="services-mobile-carousel">
            <div className="mobile-carousel-controls">
              <button
                type="button"
                className="mobile-nav-btn mobile-nav-prev"
                onClick={prevCard}
                aria-label="Previous service"
              >
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="mobile-carousel-indicators">
                <span className="mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="mobile-dots">
                  {SERVICES_OVERVIEW.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mobile-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to service ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mobile-nav-btn mobile-nav-next"
                onClick={nextCard}
                aria-label="Next service"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="mobile-card-stage">
              {renderServiceCard(SERVICES_OVERVIEW[safeIdx], false)}
            </div>
          </div>

          {/* 4. Bottom CTA Banner: Not Sure Which Service You Need? */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Not Sure Which Service You Need?</h3>
              <p>
                Contact our team and tell us about your travel plans. We will guide you to the relevant service.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={goToContact}
              >
                <span>Talk to Us</span>
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

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const TRIP_TYPES = [
  {
    id: "family",
    title: "Family Holidays",
    desc: "Travel experiences planned around your family's needs.",
    badge: "Family Friendly",
    icon: "heart",
    colorHex: "#FB8902",
    image: "/images/destinations/maldives.jpeg",
    highlights: ["Child-Friendly Resorts", "Comfortable Transfers", "Flexible Pacing"],
  },
  {
    id: "couples",
    title: "Couple Getaways",
    desc: "Plan a relaxing break or special trip together.",
    badge: "Romantic & Leisure",
    icon: "sparkles",
    colorHex: "#028AF0",
    image: "/images/destinations/bali.jpeg",
    highlights: ["Scenic Views & Villas", "Intimate Excursions", "Bespoke Dining"],
  },
  {
    id: "groups",
    title: "Group Tours",
    desc: "Coordinate travel arrangements for friends, colleagues, or groups.",
    badge: "Friends & Corporate",
    icon: "compass",
    colorHex: "#012061",
    image: "/images/destinations/switzerland.jpeg",
    highlights: ["Coordinated Bookings", "Private Coaches", "Group Discounts"],
  },
  {
    id: "international",
    title: "International Holidays",
    desc: "Explore destinations and travel options abroad.",
    badge: "Global Destinations",
    icon: "plane",
    colorHex: "#022F82",
    image: "/images/cities/dubai.jpg",
    highlights: ["Visa Assistance", "Flight Connections", "City & Cultural Passes"],
  },
  {
    id: "tailor-made",
    title: "Tailor-Made Trips",
    desc: "Build an itinerary around your preferred pace and interests.",
    badge: "Bespoke Pace",
    icon: "check",
    colorHex: "#03C7FB",
    image: "/images/destinations/instanbul.jpeg",
    highlights: ["Custom Duration", "Handpicked Hotels", "Your Own Schedule"],
  },
];

const WHAT_WE_NEED_CUSTOM = [
  "Preferred destination or destinations.",
  "Travel dates and duration.",
  "Number of adults and children, including ages.",
  "Departure city.",
  "Approximate budget.",
  "Preferred hotel category.",
  "Activities, attractions, or experiences of interest.",
];

export default function CustomizedTourPackagesPage() {
  const [dialog, setDialog] = useState(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const nav = useNavigation();

  const count = TRIP_TYPES.length;
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
    if (nav) nav.navigate(servicePage);
    else window.location.hash = servicePage;
  };

  const renderTripTypeCard = (item) => (
    <div
      key={item.id}
      className="overview-service-card"
      style={{ "--card-accent": item.colorHex }}
    >
      <div className="overview-card-media" style={{ height: "175px" }}>
        <img
          src={item.image}
          alt={item.title}
          className="overview-card-img"
          loading="lazy"
        />
        <div className="overview-card-overlay" />
        <span
          className="overview-card-badge-top"
          style={{ borderColor: item.colorHex }}
        >
          {item.badge}
        </span>
        <div className="overview-card-icon-pill">
          <Icon name={item.icon} size={18} />
        </div>
      </div>

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
          onClick={() => plan({ type: item.title })}
        >
          <span>Customize {item.title}</span>
          <Icon name="arrow" size={13} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="services-page customized-tour-packages-page">
      {/* 1. Hero 100% Matching Home & Services Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/destinations/switzerland.jpeg"
          alt="Customized Tour Packages with OPEN TRIP"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center 45%" }}
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Customized Tour Packages" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Customized Tour Packages <span>·</span> Tailored Travel
            </p>
            <h1 id="hero-title">
              A Trip Designed
              <br />
              Around You
            </h1>
            <p className="hero-description">
              Your travel plans should reflect what matters to you. Whether you are planning a family holiday, a couple's getaway, a group tour, or an individual trip, OPEN TRIP can help you explore travel arrangements based on your destination, dates, interests, and budget.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Customized Tour Packages" })}>
                Customize My Trip <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/923101816191", "_blank")}
              >
                WhatsApp Tour Desk{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">TAILOR</span>
              <span className="flight-icon">✦</span>
              <span className="flight-code">MADE</span>
            </div>
            <span className="flight-card-sub">Flexible Dates &amp; Custom Budget</span>
          </div>
        </div>
      </section>

      {/* 2. Floating Bar Navigation (Matches Home & Services Architecture) */}
      <div className="services-nav-searchwrap container">
        <div className="services-floating-navbar">
          <button
            type="button"
            className="services-nav-pill"
            onClick={() => goToService("services")}
          >
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
          <button type="button" className="services-nav-pill active">
            <Icon name="compass" size={14} /> Tour Packages
          </button>
        </div>
      </div>

      {/* 3. Main Content Section: Trip Types & What We Need */}
      <main className="service-content-section">
        <div className="container">
          {/* Trip Types Heading */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                color: "var(--bright-blue, #028af0)",
                background: "rgba(2, 138, 240, 0.08)",
                padding: "4px 14px",
                borderRadius: "20px",
              }}
            >
              Curated Travel Styles
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "30px",
                color: "var(--dark-navy, #012061)",
                margin: "12px 0 6px",
                fontWeight: 700,
              }}
            >
              Trip Types
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--ink-secondary, #334155)",
                margin: 0,
              }}
            >
              Choose your ideal style of travel and share your preferences with our specialist designers.
            </p>
          </div>

          {/* Desktop & Tablet Grid */}
          <div className="services-overview-grid">
            {TRIP_TYPES.map((item, idx) =>
              renderTripTypeCard(item)
            )}
          </div>

          {/* Mobile Screens (<= 768px): Exactly 1 Card at a Time with Forward & Backward Buttons */}
          <div className="services-mobile-carousel">
            <div className="mobile-carousel-controls">
              <button
                type="button"
                className="mobile-nav-btn mobile-nav-prev"
                onClick={prevCard}
                aria-label="Previous trip type"
              >
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="mobile-carousel-indicators">
                <span className="mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="mobile-dots">
                  {TRIP_TYPES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mobile-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to trip type ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mobile-nav-btn mobile-nav-next"
                onClick={nextCard}
                aria-label="Next trip type"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="mobile-card-stage">
              {renderTripTypeCard(TRIP_TYPES[safeIdx])}
            </div>
          </div>

          {/* What We Need Checklist Panel */}
          <div className="service-details-grid" style={{ marginTop: "55px" }}>
            <div className="service-card-panel" style={{ gridColumn: "1 / -1", maxWidth: "860px", margin: "0 auto", width: "100%" }}>
              <div className="service-panel-header">
                <div
                  className="panel-header-icon"
                  style={{
                    backgroundColor: "rgba(2, 138, 240, 0.12)",
                    color: "var(--bright-blue, #028af0)",
                  }}
                >
                  <Icon name="pin" size={24} />
                </div>
                <div>
                  <h3>What We Need</h3>
                  <small>Share these key details to receive your customized itinerary</small>
                </div>
              </div>

              <ul className="service-checklist" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px 24px" }}>
                {WHAT_WE_NEED_CUSTOM.map((item, idx) => (
                  <li key={idx}>
                    <span className="checklist-bullet">{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="service-cta-banner" style={{ marginTop: "55px" }}>
            <div className="cta-banner-text">
              <h3>Let's Build Your Trip</h3>
              <p>
                Tell us what you have in mind and our team will help you explore suitable options.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Customized Tour Packages" })}
              >
                <span>Customize My Trip</span>
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


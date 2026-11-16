import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const PACKAGE_OPTIONS = [
  {
    tier: "Economy Umrah Packages",
    desc: "Practical arrangements for travellers looking for value-focused options.",
    badge: "Economy Saver",
    tagColor: "var(--bright-blue, #028af0)",
    image: "/images/cities/makkah-kaaba.jpg",
  },
  {
    tier: "Standard Umrah Packages",
    desc: "Accommodation and transport options designed for a balanced travel experience.",
    badge: "Comfort Balanced",
    tagColor: "var(--deep-blue, #022f82)",
    image: "/images/cities/madinah.jpg",
  },
  {
    tier: "Premium Umrah Packages",
    desc: "Higher-category accommodation options, subject to availability and quotation.",
    badge: "5★ & Luxury",
    tagColor: "var(--orange, #fb8902)",
    image: "/images/cities/makkah-kaaba.jpg",
  },
  {
    tier: "Customized Umrah Packages",
    desc: "Arrangements tailored to your dates, group size, and preferences.",
    badge: "Bespoke Family",
    tagColor: "var(--dark-navy, #012061)",
    image: "/images/cities/madinah.jpg",
  },
];

const WHAT_CAN_BE_INCLUDED = [
  "Umrah visa assistance, where applicable and specified in the quotation.",
  "Return or onward flight arrangements, if included in the selected package.",
  "Makkah and Madinah hotel accommodation.",
  "Airport and intercity transportation, according to the selected package.",
  "Ziyarat arrangements, if specifically included.",
  "Other services only where clearly listed in the quotation.",
];

const WHAT_WE_NEED_UMRAH = [
  "Departure city.",
  "Preferred travel dates and total duration.",
  "Number of adults and children, including children's ages.",
  "Preferred hotel category and room occupancy.",
  "Makkah and Madinah accommodation preferences.",
  "Transport preference and approximate budget.",
];

export default function UmrahPackagesPage() {
  const [dialog, setDialog] = useState(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const nav = useNavigation();

  const count = PACKAGE_OPTIONS.length;
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

  const renderUmrahCard = (opt) => (
    <div key={opt.tier} className="umrah-option-card">
      <div className="overview-card-media" style={{ height: "160px" }}>
        <img
          src={opt.image}
          alt={opt.tier}
          className="overview-card-img"
          loading="lazy"
        />
        <div className="overview-card-overlay" />
        <span
          className="overview-card-badge-top"
          style={{ borderColor: opt.tagColor }}
        >
          {opt.badge}
        </span>
      </div>
      <div className="overview-card-body">
        <h3 className="overview-card-title" style={{ fontSize: "18.5px" }}>
          {opt.tier}
        </h3>
        <p className="overview-card-desc">{opt.desc}</p>
        <button
          type="button"
          className="overview-action-btn"
          onClick={() => plan({ type: opt.tier })}
        >
          <span>Request Details</span>
          <Icon name="arrow" size={13} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="services-page umrah-packages-page">
      {/* 1. Hero 100% Matching Home Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/cities/makkah-kaaba-wide.jpg"
          alt="Umrah Pilgrimage with OPEN TRIP"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Umrah Packages" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Sacred Pilgrimage <span>·</span> Makkah &amp; Madinah
            </p>
            <h1 id="hero-title">
              Your Spiritual Journey,
              <br />
              Planned with Care
            </h1>
            <p className="hero-description">
              Prepare for your Umrah journey with travel arrangements based on your preferred dates, departure city, duration, accommodation preferences, and budget. OPEN TRIP can assist you in exploring suitable package options.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Umrah Packages" })}>
                Get Umrah Quotation <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/923101816191", "_blank")}
              >
                WhatsApp Pilgrim Desk{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge (Home Reference) */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">MAKKAH</span>
              <span className="flight-icon">🕋</span>
              <span className="flight-code">MADINAH</span>
            </div>
            <span className="flight-card-sub">Close-to-Haram Stays &amp; Ziyarat</span>
          </div>
        </div>
      </section>

      {/* 2. Floating Bar Navigation (Home TripSearch Architecture) */}
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
          <button type="button" className="services-nav-pill active">
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

      {/* 3. Main Content Section */}
      <main className="service-content-section">
        <div className="container">
          {/* Package Options Grid */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                color: "var(--deep-blue, #022f82)",
                background: "rgba(2, 47, 130, 0.08)",
                padding: "4px 14px",
                borderRadius: "20px",
              }}
            >
              Pilgrimage Categories
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
              Package Options
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--ink-secondary, #334155)",
                margin: 0,
              }}
            >
              Choose a package suited to your comfort expectations, dates, and budget.
            </p>
          </div>

          {/* Desktop & Tablet Grid */}
          <div className="umrah-options-grid">
            {PACKAGE_OPTIONS.map((opt) => renderUmrahCard(opt))}
          </div>

          {/* Mobile Screens (<= 768px): Exactly 1 Card at a Time with Forward & Backward Buttons */}
          <div className="umrah-mobile-carousel">
            <div className="mobile-carousel-controls">
              <button
                type="button"
                className="mobile-nav-btn mobile-nav-prev"
                onClick={prevCard}
                aria-label="Previous Umrah package"
              >
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="mobile-carousel-indicators">
                <span className="mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="mobile-dots">
                  {PACKAGE_OPTIONS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mobile-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to Umrah option ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mobile-nav-btn mobile-nav-next"
                onClick={nextCard}
                aria-label="Next Umrah package"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="mobile-card-stage">
              {renderUmrahCard(PACKAGE_OPTIONS[safeIdx])}
            </div>
          </div>

          {/* Two-Column Offer / Need Grid */}
          <div className="service-details-grid" style={{ marginTop: "55px" }}>
            {/* Panel 1: What Can Be Included */}
            <div className="service-card-panel">
              <div className="service-panel-header">
                <div
                  className="panel-header-icon"
                  style={{
                    backgroundColor: "rgba(2, 47, 130, 0.12)",
                    color: "var(--deep-blue, #022f82)",
                  }}
                >
                  <Icon name="star" size={24} />
                </div>
                <div>
                  <h3>What Can Be Included</h3>
                  <small>Standard &amp; Customizable Pilgrimage Amenities</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_CAN_BE_INCLUDED.map((item, idx) => (
                  <li key={idx}>
                    <span className="checklist-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel 2: What We Need */}
            <div className="service-card-panel service-card-panel--orange">
              <div className="service-panel-header">
                <div
                  className="panel-header-icon"
                  style={{
                    backgroundColor: "rgba(251, 137, 2, 0.12)",
                    color: "var(--orange, #fb8902)",
                  }}
                >
                  <Icon name="check" size={24} />
                </div>
                <div>
                  <h3>What We Need</h3>
                  <small>Details for Exact Itinerary &amp; Pricing</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_WE_NEED_UMRAH.map((item, idx) => (
                  <li key={idx}>
                    <span className="checklist-bullet checklist-bullet--blue">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="service-important-box">
            <div
              className="box-icon"
              style={{ color: "var(--orange, #fb8902)" }}
            >
              <Icon name="sparkles" size={24} />
            </div>
            <div>
              <h4 className="box-title">Important Note</h4>
              <p className="box-text">
                Package prices and inclusions depend on travel dates, airline and
                hotel availability, room occupancy, transport arrangements, and
                supplier confirmation. The final quotation will specify confirmed
                services and terms.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Begin Planning Your Umrah Journey</h3>
              <p>
                Share your travel requirements and request a personalized Umrah
                quotation. Our pilgrimage desk is ready to support you.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Umrah Packages" })}
              >
                <span>Get Umrah Quotation</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Pilgrim Desk</span>
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

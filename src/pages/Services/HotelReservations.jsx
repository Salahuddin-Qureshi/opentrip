import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const WHAT_WE_OFFER_HOTELS = [
  "Hotel options across a range of destinations and categories.",
  "Accommodation suggestions based on your preferences and budget.",
  "Room and occupancy arrangements for individuals, couples, families, and groups.",
  "Assistance with available meal plans and hotel details where provided by the supplier.",
];

const WHAT_WE_NEED_HOTELS = [
  "Destination or city.",
  "Check-in and check-out dates.",
  "Number of rooms.",
  "Number of adults and children; include each child's age.",
  "Preferred hotel category or specific hotel, if any.",
  "Meal plan or room preference, if any.",
];

export default function HotelReservationsPage() {
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goToService = (servicePage) => {
    if (nav) nav.navigate(servicePage);
    else window.location.hash = servicePage;
  };

  return (
    <div className="services-page hotel-reservations-page">
      {/* 1. Hero 100% Matching Home Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/destinations/maldives.jpeg"
          alt="Hotel Reservations with OPEN TRIP"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Hotel Reservations" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Curated Accommodations Across the Globe
            </p>
            <h1 id="hero-title">
              Stay Somewhere
              <br />
              That Suits Your Journey
            </h1>
            <p className="hero-description">
              Whether you are travelling for business, leisure, family holidays, or Umrah, OPEN TRIP can assist with hotel reservation inquiries based on your destination, travel dates, room requirements, and budget.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Hotel Reservations" })}>
                Request Hotel Options <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/923101816191", "_blank")}
              >
                WhatsApp Hotel Desk{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge (Home Reference) */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">3★ TO 5★</span>
              <span className="flight-icon">★</span>
              <span className="flight-code">HOTELS</span>
            </div>
            <span className="flight-card-sub">Verified Worldwide Stays</span>
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
          <button type="button" className="services-nav-pill active">
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

      {/* 3. Main Content: What We Offer & What We Need */}
      <main className="service-content-section">
        <div className="container">
          <div className="service-details-grid">
            {/* Panel 1: What We Offer */}
            <div className="service-card-panel">
              <div className="service-panel-header">
                <div
                  className="panel-header-icon"
                  style={{
                    backgroundColor: "rgba(251, 137, 2, 0.12)",
                    color: "var(--orange, #fb8902)",
                  }}
                >
                  <Icon name="calendar" size={24} />
                </div>
                <div>
                  <h3>What We Offer</h3>
                  <small>Curated Stays &amp; Group Booking Rates</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_WE_OFFER_HOTELS.map((item, idx) => (
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
                    backgroundColor: "rgba(2, 47, 130, 0.12)",
                    color: "var(--deep-blue, #022f82)",
                  }}
                >
                  <Icon name="check" size={24} />
                </div>
                <div>
                  <h3>What We Need</h3>
                  <small>Parameters for Handpicked Options</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_WE_NEED_HOTELS.map((item, idx) => (
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

          {/* 4. Important Note Alert Box */}
          <div className="service-important-box">
            <div className="box-icon" style={{ color: "var(--orange, #fb8902)" }}>
              <Icon name="sparkles" size={24} />
            </div>
            <div>
              <h4 className="box-title">Important Note</h4>
              <p className="box-text">
                Hotel rates, room types, facilities, and availability are subject to supplier confirmation. Special requests are not guaranteed unless confirmed by the hotel.
              </p>
            </div>
          </div>

          {/* 5. CTA Banner */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Find Accommodation for Your Trip</h3>
              <p>
                Share your hotel requirements and request available options. We will propose properties that match your standards and budget.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Hotel Reservations" })}
              >
                <span>Request Hotel Options</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Hotel Desk</span>
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

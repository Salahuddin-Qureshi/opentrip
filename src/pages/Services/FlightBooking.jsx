import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const WHAT_WE_OFFER_FLIGHTS = [
  "Domestic and international flight booking assistance.",
  "One-way, return, and multi-city travel inquiries.",
  "Options across available airlines and routes.",
  "Guidance on fare conditions, baggage allowance, and ticket details where provided by the airline or supplier.",
];

const WHAT_WE_NEED_FLIGHTS = [
  "Departure city and destination.",
  "Preferred departure date and return date, if applicable.",
  "Number of adults, children, and infants with ages.",
  "One-way, return, or multi-city preference.",
  "Preferred cabin class or airline, if any.",
  "Passenger contact details for the quotation and booking process.",
];

export default function FlightBookingPage() {
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goToService = (servicePage) => {
    if (nav) nav.navigate(servicePage);
    else window.location.hash = servicePage;
  };

  return (
    <div className="services-page flight-booking-page">
      {/* 1. Hero 100% Matching Home Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero-airplane-right.jpg"
          alt="Flight Booking With OPEN TRIP"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Flight Booking" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Domestic &amp; International Flights
            </p>
            <h1 id="hero-title">
              Find Your Way
              <br />
              to the World
            </h1>
            <p className="hero-description">
              Planning a domestic or international trip? OPEN TRIP assists travellers with flight booking inquiries and available travel options based on their route, dates, passenger details, and preferences.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Flight Booking" })}>
                Request Flight Options <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/923101816191", "_blank")}
              >
                WhatsApp Ticket Desk{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge (Home Reference) */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">KHI</span>
              <span className="flight-icon">✈</span>
              <span className="flight-code">WORLD</span>
            </div>
            <span className="flight-card-sub">Direct GDS Airline Ticketing</span>
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
          <button type="button" className="services-nav-pill active">
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
                    backgroundColor: "rgba(2, 138, 240, 0.12)",
                    color: "var(--bright-blue, #028af0)",
                  }}
                >
                  <Icon name="plane" size={24} />
                </div>
                <div>
                  <h3>What We Offer</h3>
                  <small>Global Air Ticketing &amp; Route Curation</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_WE_OFFER_FLIGHTS.map((item, idx) => (
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
                  <small>Details for Accurate Quotation</small>
                </div>
              </div>

              <ul className="service-checklist">
                {WHAT_WE_NEED_FLIGHTS.map((item, idx) => (
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
                Airfares, seats, baggage allowances, and booking conditions are subject to airline or supplier availability and may change until the booking is confirmed and ticketed.
              </p>
            </div>
          </div>

          {/* 5. CTA Banner */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Ready to Explore Flight Options?</h3>
              <p>
                Share your travel details with us and request a flight quotation. Our ticketing team will search the best connections for you.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Flight Booking" })}
              >
                <span>Request Flight Options</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Ticket Desk</span>
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

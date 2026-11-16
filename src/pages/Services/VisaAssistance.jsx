import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./Services.css";

const OUR_ASSISTANCE = [
  "Initial inquiry and destination assessment.",
  "General guidance about visa categories and application steps.",
  "Document checklist based on the destination and applicant profile.",
  "Assistance with organizing application documents and supporting information.",
  "Guidance about appointment or submission steps where applicable.",
];

const TELL_US_ABOUT_APPLICATION = [
  "Destination country.",
  "Purpose of travel: tourism, family visit, business, or another category.",
  "Intended travel month or date.",
  "Applicant's current country of residence and nationality.",
  "Employment or business status, where relevant.",
  "Number of applicants, if applying with family or a group.",
];

const OUR_PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Destination & Purpose",
    text: "Share your destination and travel purpose with our team.",
  },
  {
    step: "02",
    title: "Inquiry Review",
    text: "Our team reviews the basic inquiry details and eligibility criteria.",
  },
  {
    step: "03",
    title: "Requirements & Checklist",
    text: "We explain the relevant general requirements and document checklist.",
  },
  {
    step: "04",
    title: "Scope & Next Steps",
    text: "If you choose to proceed, we explain the service scope, charges, and next steps before starting the work.",
  },
];

export default function VisaAssistancePage() {
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goToService = (servicePage) => {
    if (nav) nav.navigate(servicePage);
    else window.location.hash = servicePage;
  };

  return (
    <div className="services-page visa-assistance-page">
      {/* 1. Hero 100% Matching Home Architecture */}
      <section className="hero hero--service" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/cities/dubai.jpg"
          alt="Visa Guidance With OPEN TRIP"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Visa Assistance" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              Guidance &amp; Documentation Assistance
            </p>
            <h1 id="hero-title">
              Prepare for Your Journey
              <br />
              with the Right Guidance
            </h1>
            <p className="hero-description">
              Every destination has its own visa process and documentation requirements. OPEN TRIP provides visa-related guidance and documentation assistance to help applicants understand the general steps involved in preparing an application.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Visa Assistance" })}>
                Submit Visa Inquiry <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/923101816191", "_blank")}
              >
                WhatsApp Visa Desk{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Route Badge (Home Reference) */}
          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">GLOBAL</span>
              <span className="flight-icon">🛡</span>
              <span className="flight-code">EMBASSY</span>
            </div>
            <span className="flight-card-sub">Checklists &amp; Filing Support</span>
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
          <button type="button" className="services-nav-pill active">
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

      {/* 3. Main Content: Our Assistance & Tell Us About Your Application */}
      <main className="service-content-section">
        <div className="container">
          <div className="service-details-grid">
            {/* Panel 1: Our Assistance */}
            <div className="service-card-panel">
              <div className="service-panel-header">
                <div
                  className="panel-header-icon"
                  style={{
                    backgroundColor: "rgba(2, 47, 130, 0.12)",
                    color: "var(--deep-blue, #022f82)",
                  }}
                >
                  <Icon name="shield" size={24} />
                </div>
                <div>
                  <h3>Our Assistance</h3>
                  <small>Step-by-Step Filing Support &amp; Review</small>
                </div>
              </div>

              <ul className="service-checklist">
                {OUR_ASSISTANCE.map((item, idx) => (
                  <li key={idx}>
                    <span className="checklist-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel 2: Tell Us About Your Application */}
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
                  <h3>Tell Us About Your Application</h3>
                  <small>Required Details for Eligibility Check</small>
                </div>
              </div>

              <ul className="service-checklist">
                {TELL_US_ABOUT_APPLICATION.map((item, idx) => (
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

          {/* 4. Our Process (4 Steps) */}
          <section className="service-process-section">
            <div className="service-process-heading">
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
                Structured Workflow
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  color: "var(--dark-navy, #012061)",
                  margin: "12px 0 6px",
                  fontWeight: 700,
                }}
              >
                Our Process
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ink-secondary, #334155)",
                  margin: 0,
                }}
              >
                Clear, transparent, and structured application milestones.
              </p>
            </div>

            <div className="service-process-grid">
              {OUR_PROCESS_STEPS.map((step) => (
                <div key={step.step} className="service-step-card">
                  <div className="step-number-pill">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Visa Disclaimer Box */}
          <div className="service-disclaimer-box">
            <div
              className="box-icon"
              style={{ color: "var(--deep-blue, #022f82)" }}
            >
              <Icon name="shield" size={24} />
            </div>
            <div>
              <h4 className="box-title">Visa Disclaimer</h4>
              <p className="box-text">
                Visa requirements, fees, appointment availability, and processing
                times are set by the relevant embassy, consulate, visa application
                centre, or immigration authority and may change without notice.
                The final decision rests solely with the relevant authority. OPEN
                TRIP provides assistance and does not guarantee visa approval or a
                specific decision timeframe. Applicants should verify current
                requirements through official sources.
              </p>
            </div>
          </div>

          {/* 6. CTA Banner */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Need Guidance for Your Visa Application?</h3>
              <p>
                Share your destination and travel purpose with our team. We will
                guide you through the requirements and documentation steps.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Visa Assistance" })}
              >
                <span>Submit Visa Inquiry</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Visa Desk</span>
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

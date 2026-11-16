import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "./About.css";

const CORE_VALUES = [
  {
    id: "customer-focus",
    title: "Customer Focus",
    description: "Understanding the needs and preferences of every traveller.",
    icon: "heart",
    colorKey: "orange",
    colorHex: "#FB8902",
    badge: "Traveller First",
  },
  {
    id: "transparency",
    title: "Transparency",
    description: "Communicating quotations, conditions, inclusions, and exclusions clearly.",
    icon: "shield",
    colorKey: "deep-blue",
    colorHex: "#022F82",
    badge: "100% Clear Pricing",
  },
  {
    id: "professionalism",
    title: "Professionalism",
    description: "Handling inquiries and travel arrangements responsibly.",
    icon: "star",
    colorKey: "dark-navy",
    colorHex: "#012061",
    badge: "Licensed & Accountable",
  },
  {
    id: "personalized-service",
    title: "Personalized Service",
    description: "Helping customers explore options suited to their plans.",
    icon: "compass",
    colorKey: "bright-blue",
    colorHex: "#028AF0",
    badge: "Bespoke Curation",
  },
  {
    id: "continuous-improvement",
    title: "Continuous Improvement",
    description: "Improving our services and customer experience.",
    icon: "sparkles",
    colorKey: "cyan",
    colorHex: "#03C7FB",
    badge: "Always Evolving",
  },
];

const SERVICES_LIST = [
  {
    title: "Flight Bookings",
    desc: "Domestic and international airline ticketing assistance according to your schedule.",
    icon: "plane",
    colorHex: "#028AF0",
  },
  {
    title: "Hotel Reservations",
    desc: "Comfortable accommodations tailored to your destination, budget, and preferences.",
    icon: "pin",
    colorHex: "#FB8902",
  },
  {
    title: "Visa Assistance",
    desc: "Guidance and documentation assistance for smooth visa application processes.",
    icon: "shield",
    colorHex: "#022F82",
  },
  {
    title: "Umrah Packages",
    desc: "Spiritual journeys with verified hotels, seamless transfers, and pilgrim support.",
    icon: "sparkles",
    colorHex: "#012061",
  },
  {
    title: "Customized Tour Packages",
    desc: "Tailored holiday itineraries crafted around your specific duration and budget.",
    icon: "compass",
    colorHex: "#03C7FB",
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "SECP Incorporation",
    badge: "Official (Pvt.) Ltd.",
    description: "Registered and incorporated under the Companies Act with the Securities and Exchange Commission of Pakistan.",
  },
  {
    title: "DTS Licensed Tour Operator",
    badge: "DTS Reg. # 3941",
    description: "Officially licensed and recognized by the Department of Tourist Services, Government of Pakistan.",
  },
  {
    title: "IATA Certified Ticketing",
    badge: "Aviation Accredited",
    description: "Direct airline inventory and global ticketing network access for domestic and international carriers.",
  },
  {
    title: "Ministry of Hajj & Umrah",
    badge: "Nusuk Portal Verified",
    description: "Authorized pilgrim visa processing, verified Makkah/Madinah accommodation, and licensed ground transportation.",
  },
];

export default function AboutPage() {
  const [dialog, setDialog] = useState(null);
  const [srvIdx, setSrvIdx] = useState(0);
  const nav = useNavigation();

  const srvCount = SERVICES_LIST.length;
  const safeSrvIdx = Math.min(srvIdx, srvCount - 1);
  const prevSrv = () => setSrvIdx((prev) => (prev - 1 + srvCount) % srvCount);
  const nextSrv = () => setSrvIdx((prev) => (prev + 1) % srvCount);

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goToContact = () => {
    if (nav) {
      nav.navigate("contact");
    } else {
      window.location.hash = "contact";
    }
  };

  const goToServices = () => {
    if (nav) {
      nav.navigate("services");
    } else {
      window.location.hash = "services";
    }
  };

  return (
    <div className="about-page">
      {/* ===================== HERO SECTION ===================== */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <img
          className="about-hero-bg"
          src="/images/hero-airplane-right.jpg"
          alt="OPEN TRIP Travel Experience"
          fetchPriority="high"
        />
        <div className="about-hero-shade" />

        <Header onPlan={() => plan()} />

        <div className="about-hero-body container">
          <div className="about-hero-copy">
            <span className="about-eyebrow">Your Travel Partner</span>

            <h1 id="about-hero-title">About OPEN TRIP</h1>

            <p className="about-hero-intro">
              OPEN TRIP (PVT.) LTD. is a registered and licensed travel and tourism company offering a range of travel-related services, including flight bookings, hotel reservations, visa assistance, Umrah packages, and customized tour packages. We aim to make travel planning more convenient by understanding each customer's requirements and helping them explore suitable travel arrangements.
            </p>

            <div className="about-hero-actions">
              <button className="about-btn-primary" onClick={goToContact}>
                Contact Our Team <Icon name="chevronRight" size={17} />
              </button>
              <button className="about-btn-secondary" onClick={goToServices}>
                Explore Our Services <Icon name="compass" size={17} />
              </button>
            </div>
          </div>

          {/* Floating Credentials Badge */}
          <div className="about-hero-credentials-card">
            <div className="about-cred-pill">
              <span className="cred-dot" />
              <span>DTS Reg. #3941 · SECP Registered</span>
            </div>
            <h3>Registered & Licensed Travel Partner</h3>
            <p>
              Dedicated travel facilitation, transparent quotations, and confirmed bookings across global destinations.
            </p>
            <div className="about-cred-stats">
              <div className="cred-stat-item">
                <strong style={{ color: "#FB8902" }}>100%</strong>
                <span>Legal Compliance</span>
              </div>
              <div className="cred-stat-item">
                <strong style={{ color: "#028AF0" }}>24/7</strong>
                <span>Karachi Desk</span>
              </div>
              <div className="cred-stat-item">
                <strong style={{ color: "#03C7FB" }}>Clear</strong>
                <span>Pricing Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="about-main">
        {/* ===================== SECTION 1: MISSION & VISION ===================== */}
        <section className="about-mv-section">
          <div className="container">
            <div className="about-mv-grid">
              {/* Mission Card */}
              <div className="about-mv-card mission-card">
                <div className="mv-card-top">
                  <div className="mv-icon-box mv-icon-box--mission">
                    <Icon name="sparkles" size={26} />
                  </div>
                  <span className="mv-badge mv-badge--mission">Customer Focused</span>
                </div>
                <h2>Our Mission</h2>
                <p className="mv-text">
                  To make travel planning simpler and more convenient through customer-focused services, clear communication, and practical travel assistance.
                </p>
              </div>

              {/* Vision Card */}
              <div className="about-mv-card vision-card">
                <div className="mv-card-top">
                  <div className="mv-icon-box mv-icon-box--vision">
                    <Icon name="compass" size={26} />
                  </div>
                  <span className="mv-badge mv-badge--vision">Trusted Guidance</span>
                </div>
                <h2>Our Vision</h2>
                <p className="mv-text">
                  To become a trusted travel partner for individuals, families, and groups by delivering helpful guidance and dependable travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 2: OUR VALUES (EXECUTIVE SPLIT SHOWCASE WITH FEATURED IMAGE) ===================== */}
        <section className="about-values-section" id="values">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">OUR GUIDING PRINCIPLES</span>
              <h2>Our Values</h2>
              <p>
                Every itinerary, quotation, and customer relationship is shaped by our five steadfast values.
              </p>
            </div>

            <div className="about-values-showcase-split">
              {/* Left Column: Premium Visual Anchor Image Card */}
              <div className="about-values-visual-card">
                <img
                  src="/images/destinations/maldives.jpeg"
                  alt="OPEN TRIP Travel Experience"
                  className="values-visual-img"
                  loading="lazy"
                />
                <div className="values-visual-overlay" />

                <div className="values-visual-top-badge">
                  <span className="visual-badge-dot" />
                  <span>Licensed & Registered Travel Partner</span>
                </div>

                <div className="values-visual-glass-content">
                  <span className="values-visual-eyebrow">OPEN TRIP COMMITMENT</span>
                  <h3 className="values-visual-title">Integrity in Every Quote. Care in Every Journey.</h3>
                  <p className="values-visual-lead">
                    From transparent pricing to personalized assistance, our values guide every interaction with our travellers.
                  </p>

                  <div className="values-visual-bottom-row">
                    <button
                      type="button"
                      className="values-visual-cta-btn"
                      onClick={goToContact}
                    >
                      <span>Contact Our Team</span>
                      <Icon name="arrow" size={14} />
                    </button>
                    <span className="values-visual-reg-pill">DTS #3941 · SECP</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 5 Core Values Sleek Cards */}
              <div className="about-values-cards-stack">
                {CORE_VALUES.map((val, idx) => (
                  <div
                    key={val.id}
                    className={`about-value-strip about-value-strip--${val.colorKey}`}
                    style={{ "--card-accent": val.colorHex }}
                  >
                    <div className="value-strip-left">
                      <span className="value-strip-num">0{idx + 1}</span>
                      <div
                        className="value-strip-icon-box"
                        style={{
                          backgroundColor: `${val.colorHex}15`,
                          color: val.colorHex,
                          border: `1.5px solid ${val.colorHex}30`,
                        }}
                      >
                        <Icon name={val.icon} size={20} />
                      </div>
                    </div>

                    <div className="value-strip-content">
                      <div className="value-strip-top">
                        <h3 className="value-strip-title">{val.title}</h3>
                        <span
                          className="value-strip-badge"
                          style={{
                            backgroundColor: `${val.colorHex}12`,
                            color: val.colorHex,
                            borderColor: `${val.colorHex}25`,
                          }}
                        >
                          {val.badge}
                        </span>
                      </div>
                      <p className="value-strip-desc">{val.description}</p>
                    </div>

                    <div
                      className="value-strip-accent-edge"
                      style={{ backgroundColor: val.colorHex }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3: SERVICES WE OFFER ===================== */}
        <section className="about-services-section">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">COMPLETE TRAVEL FACILITATION</span>
              <h2>Services Offered by OPEN TRIP</h2>
              <p>
                From domestic journeys to international holidays and sacred pilgrimages, we assist at every stage.
              </p>
            </div>

            {/* Desktop & Tablet Grid */}
            <div className="about-services-grid">
              {SERVICES_LIST.map((srv, idx) => (
                <div
                  key={idx}
                  className="about-service-item"
                  style={{ "--srv-accent": srv.colorHex }}
                >
                  <span
                    className="about-srv-icon"
                    style={{
                      backgroundColor: `${srv.colorHex}15`,
                      color: srv.colorHex,
                      border: `1px solid ${srv.colorHex}30`,
                    }}
                  >
                    <Icon name={srv.icon} size={22} />
                  </span>
                  <h4>{srv.title}</h4>
                  <p>{srv.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile (<= 768px): Exactly 1 Card at a Time with Forward & Backward Buttons */}
            <div className="about-services-mobile-carousel">
              <div className="mobile-carousel-controls">
                <button
                  type="button"
                  className="mobile-nav-btn mobile-nav-prev"
                  onClick={prevSrv}
                  aria-label="Previous service"
                >
                  <Icon name="chevronLeft" size={18} />
                </button>

                <div className="mobile-carousel-indicators">
                  <span className="mobile-counter">
                    {String(safeSrvIdx + 1).padStart(2, "0")} / {String(srvCount).padStart(2, "0")}
                  </span>
                  <div className="mobile-dots">
                    {SERVICES_LIST.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`mobile-dot ${i === safeSrvIdx ? "active" : ""}`}
                        onClick={() => setSrvIdx(i)}
                        aria-label={`Go to service ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="mobile-nav-btn mobile-nav-next"
                  onClick={nextSrv}
                  aria-label="Next service"
                >
                  <Icon name="chevronRight" size={18} />
                </button>
              </div>

              <div className="mobile-card-stage">
                <div
                  className="about-service-item"
                  style={{ "--srv-accent": SERVICES_LIST[safeSrvIdx].colorHex }}
                >
                  <span
                    className="about-srv-icon"
                    style={{
                      backgroundColor: `${SERVICES_LIST[safeSrvIdx].colorHex}15`,
                      color: SERVICES_LIST[safeSrvIdx].colorHex,
                      border: `1px solid ${SERVICES_LIST[safeSrvIdx].colorHex}30`,
                    }}
                  >
                    <Icon name={SERVICES_LIST[safeSrvIdx].icon} size={22} />
                  </span>
                  <h4>{SERVICES_LIST[safeSrvIdx].title}</h4>
                  <p>{SERVICES_LIST[safeSrvIdx].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 4: CREDENTIALS & LICENSING ===================== */}
        <section className="about-compliance-section">
          <div className="container">
            <div className="about-section-header text-center">
              <span className="section-eyebrow">LEGAL CREDENTIALS & INTEGRITY</span>
              <h2>Licensed, Registered & Accredited</h2>
              <p>
                Operating with complete fiscal, legal, and operational compliance under Pakistani and international travel regulations.
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

        {/* ===================== SECTION 5: CLOSING CTA ===================== */}
        <section className="about-closing-cta">
          <div className="container about-cta-inner">
            <div className="about-cta-content">
              <span className="about-cta-pill">LET'S CONNECT</span>
              <h2>Let's Make Your Next Journey Happen.</h2>
              <p>
                Tell us where you would like to go, and our team will help you explore the next steps.
              </p>
            </div>

            <div className="about-cta-actions">
              <button className="about-cta-btn-main" onClick={goToContact}>
                Contact Our Team <Icon name="chevronRight" size={16} />
              </button>
              <a
                className="about-cta-whatsapp"
                href="https://wa.me/923101816191?text=Hello%20OpenTrip%2C%20I%20would%20like%20to%20plan%20a%20journey%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onPlan={() => plan()}
        onDestination={(item) => plan({ ...item, destination: item.name })}
        onPolicy={(title) => setDialog({ type: "policy", title })}
      />

      {/* Interactive Modals */}
      {dialog?.type === "trip" && (
        <TripDialog trip={dialog.trip} onClose={close} />
      )}
      {dialog?.type === "policy" && (
        <Dialog title={dialog.title} onClose={close}>
          <p>
            OPEN TRIP (PVT.) LTD. is committed to absolute clarity, legally compliant travel facilitation,
            and complete pricing transparency for all international holidays, Umrah pilgrimages, and flight bookings.
          </p>
          <p>
            All quotations, inclusions, and booking conditions are formally communicated before reservation confirmation.
          </p>
        </Dialog>
      )}
    </div>
  );
}

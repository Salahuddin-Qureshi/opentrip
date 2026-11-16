import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./ServicesSection.css";

const SERVICES_DATA = [
  {
    id: "flights",
    title: "Flight Booking",
    description:
      "Plan your journey with domestic and international flight booking assistance. Explore available airline options and travel arrangements according to your preferences.",
    tag: "Domestic & International",
    target: "flights",
    iconName: "plane",
    actionLabel: "Explore Flights",
  },
  {
    id: "hotels",
    title: "Hotel Reservations",
    description:
      "Find suitable accommodation based on your destination, budget, and preferences.",
    tag: "Verified 3★ to 5★",
    target: "hotels",
    iconName: "hotel",
    actionLabel: "Reserve Hotel",
  },
  {
    id: "visa",
    title: "Visa Assistance",
    description:
      "Get guidance and documentation assistance for your visa application. Our team helps you understand general requirements and the application process for your intended destination.",
    tag: "Expert Guidance",
    target: "visa",
    iconName: "check",
    actionLabel: "Visa Assistance",
  },
  {
    id: "umrah",
    title: "Umrah Packages",
    description:
      "Plan your spiritual journey with accommodation, transportation, and relevant travel assistance according to your selected package.",
    tag: "Sacred Pilgrimages",
    target: "umrah",
    iconName: "moon",
    actionLabel: "View Umrah",
  },
  {
    id: "tours",
    title: "Customized Tour Packages",
    description:
      "Explore destinations with travel plans tailored to your preferences, duration, budget, and requirements.",
    tag: "Bespoke Itineraries",
    target: "packages",
    iconName: "compass",
    actionLabel: "Browse Packages",
  },
];

function ServiceCard({ srv, isWide, onAction }) {
  return (
    <div className={`service-card ${isWide ? "service-card--wide" : ""}`}>
      <div className="service-card-top">
        <span className="service-tag">{srv.tag}</span>
        <span className="service-icon-circle">
          <Icon
            name={
              srv.iconName === "plane"
                ? "paperPlane"
                : srv.iconName === "hotel"
                ? "calendar"
                : srv.iconName === "moon"
                ? "star"
                : srv.iconName === "compass"
                ? "compass"
                : "check"
            }
            size={22}
          />
        </span>
      </div>
      <h3 className="service-title">{srv.title}</h3>
      <p className="service-desc">{srv.description}</p>
      <button
        type="button"
        className="service-action-btn"
        onClick={() => onAction(srv)}
      >
        <span>{srv.actionLabel}</span>
        <Icon size={14} />
      </button>
    </div>
  );
}

export default function ServicesSection({ onPlan }) {
  const [mobileIdx, setMobileIdx] = useState(0);
  const count = SERVICES_DATA.length;
  const nav = useNavigation();

  const prevCard = () => {
    setMobileIdx((prev) => (prev - 1 + count) % count);
  };

  const nextCard = () => {
    setMobileIdx((prev) => (prev + 1) % count);
  };

  const handleAction = (item) => {
    if (nav && item.target) {
      nav.navigate(item.target);
    } else if (item.target === "plan") {
      onPlan({ type: item.title });
    } else {
      const elem = document.getElementById(item.target);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        onPlan({ type: item.title });
      }
    }
  };

  const scrollToAllServices = () => {
    if (nav) {
      nav.navigate("services");
    } else {
      const elem =
        document.getElementById("packages") ||
        document.getElementById("destinations");
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="page-section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need for Your Journey"
          centered
        >
          <p className="services-lead-text">
            Comprehensive travel management, visa filings, holy pilgrimages, and
            bespoke holiday packages — all with certified expertise and
            transparent pricing.
          </p>
        </SectionHeading>

        {/* 1. Desktop & Tablet Grid (Hidden on Mobile) */}
        <div className="services-desktop-grid">
          {SERVICES_DATA.map((srv, idx) => (
            <ServiceCard
              key={srv.id}
              srv={srv}
              isWide={idx === 4}
              onAction={handleAction}
            />
          ))}
        </div>

        {/* 2. Mobile Screens: Exactly 1 Service Card at a Time with Forward & Backward Buttons */}
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
                {String(mobileIdx + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
              <div className="mobile-dots">
                {SERVICES_DATA.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`mobile-dot ${i === mobileIdx ? "active" : ""}`}
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
            <ServiceCard
              srv={SERVICES_DATA[mobileIdx]}
              isWide={false}
              onAction={handleAction}
            />
          </div>
        </div>

        <div className="services-cta-row">
          <Button variant="primary" onClick={scrollToAllServices}>
            View All Services <Icon size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

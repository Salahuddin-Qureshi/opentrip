import { useRef, useState, useEffect } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { visaServices } from "../../data/home";
import "./VisaSection.css";

export default function VisaSection({ onPlan }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const card = trackRef.current.querySelector(".visa-card");
    if (card) {
      const cardWidth = card.offsetWidth + 24;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), visaServices.length - 1));
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState, { passive: true });
      updateScrollState();
      return () => el.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  const scrollNext = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".visa-card");
    const step = (card?.offsetWidth || 340) + 24;

    // If at end, loop back to start
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".visa-card");
    const step = (card?.offsetWidth || 340) + 24;

    // If at start, loop to end
    if (scrollLeft <= 10) {
      trackRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".visa-card");
    const step = (card?.offsetWidth || 340) + 24;
    trackRef.current.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section className="page-section visa-section" id="visa">
      <div className="container">
        <div className="visa-header-wrap">
          <SectionHeading
            eyebrow="Embassy & E-Visa Facilitation"
            title="Your Journey Starts With the Right Visa"
          >
            <div className="visa-header-controls">
              <span className="visa-count-hint">
                Showing all 6 top destinations in one row
              </span>
              <div className="visa-nav-btns">
                <button
                  type="button"
                  className="round-button visa-ctrl-btn"
                  onClick={scrollPrev}
                  aria-label="Previous visa destinations"
                  title="Previous"
                >
                  <Icon name="chevronLeft" size={18} />
                </button>
                <button
                  type="button"
                  className="round-button visa-ctrl-btn"
                  onClick={scrollNext}
                  aria-label="Next visa destinations"
                  title="Next"
                >
                  <Icon name="chevronRight" size={18} />
                </button>
              </div>
            </div>
          </SectionHeading>
        </div>

        {/* Single-Row Carousel Viewport */}
        <div className="visa-slider-wrapper">
          <button
            type="button"
            className="visa-edge-arrow visa-edge-arrow--prev"
            onClick={scrollPrev}
            aria-label="Previous visa card"
          >
            <Icon name="chevronLeft" size={20} />
          </button>

          <div className="visa-carousel-track" ref={trackRef}>
            {visaServices.map((visa, idx) => (
              <div key={visa.id} className="visa-card">
                {/* City Photo Header */}
                <div className="visa-card-media">
                  <img
                    src={visa.image}
                    alt={`${visa.country} ${visa.city} landmark`}
                    loading="lazy"
                  />
                  <div className="visa-media-overlay" />
                  <div className="visa-media-top">
                    <span className="visa-country-code-badge">{visa.code}</span>
                    <span className="visa-rate-badge">
                      <Icon name="shield" size={12} /> {visa.approvalRate}
                    </span>
                  </div>
                  <div className="visa-media-caption">
                    <h4>{visa.country}</h4>
                    <span className="visa-city-name">{visa.city}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="visa-card-body">
                  <div className="visa-type-pill">
                    <Icon name="sparkles" size={13} />
                    <span>{visa.visaType}</span>
                  </div>

                  <p className="visa-desc">{visa.description}</p>

                  <div className="visa-meta-details">
                    <div className="visa-meta-item">
                      <span className="meta-label">Processing Time</span>
                      <span className="meta-val">
                        <Icon name="clock" size={13} /> {visa.processingTime}
                      </span>
                    </div>
                    <div className="visa-meta-item">
                      <span className="meta-label">Validity / Stay</span>
                      <span className="meta-val">{visa.stayDuration}</span>
                    </div>
                  </div>

                  <div className="visa-requirements-strip">
                    <small>Required Documents</small>
                    <p>{visa.requirements}</p>
                  </div>

                  <div className="visa-card-action">
                    <button
                      type="button"
                      className="visa-inquire-btn"
                      onClick={() =>
                        onPlan({
                          destination: `${visa.country} Visa`,
                          tripType: "Visa",
                          notes: `Visa inquiry for ${visa.country} (${visa.visaType})`,
                        })
                      }
                    >
                      <span>Visa Inquiry</span>
                      <Icon size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="visa-edge-arrow visa-edge-arrow--next"
            onClick={scrollNext}
            aria-label="Next visa card"
          >
            <Icon name="chevronRight" size={20} />
          </button>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="visa-carousel-dots">
          {visaServices.map((visa, idx) => (
            <button
              key={visa.id}
              type="button"
              className={`visa-dot ${activeIndex === idx ? "active" : ""}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to ${visa.country}`}
              title={visa.country}
            />
          ))}
        </div>

        {/* Consular Support Bar */}
        <div className="visa-support-bar">
          <div className="support-bar-text">
            <h4>Applying for UK, USA, Canada or Schengen Sticker Visas?</h4>
            <p>
              Our senior consular consultants provide personalized document evaluation, cover letters,
              tax return file preparation, and biometric appointment bookings.
            </p>
          </div>
          <div className="support-bar-action">
            <Button
              onClick={() =>
                onPlan({
                  destination: "Worldwide Visa Consultancy",
                  notes: "General Worldwide Visa inquiry",
                })
              }
            >
              Consult Visa Expert <Icon size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import { benefits } from "../../data/home";
import "./BenefitsSection.css";

export default function BenefitsSection() {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollNext = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".benefit-card");
    const step = (card?.offsetWidth || 320) + 20;

    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActiveIdx(0);
    } else {
      trackRef.current.scrollBy({ left: step, behavior: "smooth" });
      setActiveIdx((prev) => Math.min(prev + 1, benefits.length - 1));
    }
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".benefit-card");
    const step = (card?.offsetWidth || 320) + 20;

    if (scrollLeft <= 10) {
      trackRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      setActiveIdx(benefits.length - 1);
    } else {
      trackRef.current.scrollBy({ left: -step, behavior: "smooth" });
      setActiveIdx((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft } = trackRef.current;
    const card = trackRef.current.querySelector(".benefit-card");
    const step = (card?.offsetWidth || 320) + 20;
    const idx = Math.round(scrollLeft / step);
    setActiveIdx(Math.min(Math.max(idx, 0), benefits.length - 1));
  };

  return (
    <section className="page-section benefits-section" id="benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Journey Deserves the Right Travel Partner"
          centered
        >
          <p className="benefits-subtitle">
            Whether you are traveling for leisure, business, study, or sacred Umrah, OPEN TRIP provides end-to-end guidance, confirmed itineraries, and round-the-clock peace of mind.
          </p>
        </SectionHeading>

        {/* Carousel controls visible on mobile / tablet */}
        <div className="benefits-carousel-wrapper">
          <button
            type="button"
            className="benefits-carousel-arrow benefits-carousel-arrow--prev"
            onClick={scrollPrev}
            aria-label="Previous commitment"
          >
            <Icon name="chevronLeft" size={18} />
          </button>

          <div
            className="benefits-grid benefits-carousel-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {benefits.map((item, index) => (
              <div
                className={`benefit-card ${activeIdx === index ? "is-active-card" : ""}`}
                key={item.title}
              >
                <div className="benefit-card-top">
                  <span className={`benefit-icon benefit-icon--${item.tone}`}>
                    <Icon
                      name={
                        item.icon === "globe"
                          ? "compass"
                          : item.icon === "award"
                          ? "star"
                          : item.icon === "sliders"
                          ? "pin"
                          : item.icon === "checkCircle"
                          ? "check"
                          : item.icon
                      }
                      size={26}
                    />
                  </span>
                  <span className="benefit-card-num">0{index + 1}</span>
                </div>
                <div className="benefit-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="benefits-carousel-arrow benefits-carousel-arrow--next"
            onClick={scrollNext}
            aria-label="Next commitment"
          >
            <Icon name="chevronRight" size={18} />
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="benefits-carousel-dots">
          {benefits.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${activeIdx === idx ? "active" : ""}`}
              onClick={() => {
                if (trackRef.current) {
                  const card = trackRef.current.querySelector(".benefit-card");
                  const step = (card?.offsetWidth || 320) + 20;
                  trackRef.current.scrollTo({ left: idx * step, behavior: "smooth" });
                  setActiveIdx(idx);
                }
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

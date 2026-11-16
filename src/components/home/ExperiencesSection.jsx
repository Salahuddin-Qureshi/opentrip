import { useRef } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "../../data/home";
import { useNavigation } from "../../context/NavigationContext";

export default function ExperiencesSection({ onSelect }) {
  const trackRef = useRef(null);
  const nav = useNavigation();

  const scrollNext = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".experience-card");
    const step = (card?.offsetWidth || 300) + 20;

    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".experience-card");
    const step = (card?.offsetWidth || 300) + 20;

    if (scrollLeft <= 10) {
      trackRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section className="experiences-section page-section container" id="experiences">
      <SectionHeading
        eyebrow="Curated Travel Experiences"
        title="Tailored for How You Love to Travel"
      >
        <div className="experiences-header-aside">
          <p className="experiences-lead-copy">
            From mountain treks and sun-drenched coastal escapes to romantic hideaways and family getaways — explore trips crafted around your ideal travel style.
          </p>
          <div className="experiences-nav-row">
            <Button
              variant="outline"
              onClick={() => {
                if (nav?.navigate) {
                  nav.navigate("packages");
                } else {
                  window.location.hash = "packages";
                }
              }}
            >
              Explore Packages <Icon size={15} />
            </Button>
            <div className="experiences-nav-btns">
              <button
                type="button"
                className="round-button experiences-ctrl-btn"
                onClick={scrollPrev}
                aria-label="Previous experiences"
                title="Previous"
              >
                <Icon name="chevronLeft" size={17} />
              </button>
              <button
                type="button"
                className="round-button experiences-ctrl-btn"
                onClick={scrollNext}
                aria-label="Next experiences"
                title="Next"
              >
                <Icon name="chevronRight" size={17} />
              </button>
            </div>
          </div>
        </div>
      </SectionHeading>

      {/* Full-Width & Stylish Single-Row Carousel Slider */}
      <div className="experiences-slider-wrapper">
        <button
          type="button"
          className="experiences-edge-btn experiences-edge-prev"
          onClick={scrollPrev}
          aria-label="Previous experiences"
          title="Previous"
        >
          <Icon name="chevronLeft" size={18} />
        </button>

        <div className="experiences-slider-track" ref={trackRef}>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.name}
              experience={experience}
              onSelect={onSelect}
            />
          ))}
        </div>

        <button
          type="button"
          className="experiences-edge-btn experiences-edge-next"
          onClick={scrollNext}
          aria-label="Next experiences"
          title="Next"
        >
          <Icon name="chevronRight" size={18} />
        </button>
      </div>
    </section>
  );
}

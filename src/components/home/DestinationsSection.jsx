import { useRef } from "react";
import SectionHeading from "../common/SectionHeading";
import ArrowLink from "../common/ArrowLink";
import Icon from "../common/Icon";
import DestinationCard from "../cards/DestinationCard";
import { allDestinations } from "../../data/home";

export default function DestinationsSection({ onSelect }) {
  const trackRef = useRef(null);

  const order = [
    "Bali",
    "Switzerland",
    "Maldives",
    "Dubai",
    "Turkey",
    "Hunza",
    "Skardu",
    "Thailand",
  ];

  const scrollNext = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".destination-card");
    const step = (card?.offsetWidth || 290) + 20;

    // Loop back to start if reached end
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const card = trackRef.current.querySelector(".destination-card");
    const step = (card?.offsetWidth || 290) + 20;

    // Loop to end if at start
    if (scrollLeft <= 10) {
      trackRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      trackRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section className="page-section container" id="destinations">
      <SectionHeading
        eyebrow="Popular Destinations"
        title="Some places stay with you forever."
      >
        <div className="destinations-header-aside">
          <div className="destinations-nav-row">
            <ArrowLink href="#packages">View All Packages</ArrowLink>
            <div className="destinations-nav-btns">
              <button
                type="button"
                className="round-button destinations-ctrl-btn"
                onClick={scrollPrev}
                aria-label="Previous destinations"
                title="Previous"
              >
                <Icon name="chevronLeft" size={17} />
              </button>
              <button
                type="button"
                className="round-button destinations-ctrl-btn"
                onClick={scrollNext}
                aria-label="Next destinations"
                title="Next"
              >
                <Icon name="chevronRight" size={17} />
              </button>
            </div>
          </div>
        </div>
      </SectionHeading>

      {/* Single-Row Carousel Slider */}
      <div className="destinations-slider-wrapper">
        <button
          type="button"
          className="destinations-edge-arrow destinations-edge-arrow--prev"
          onClick={scrollPrev}
          aria-label="Previous destination"
        >
          <Icon name="chevronLeft" size={20} />
        </button>

        <div
          className="destinations-grid destinations-carousel-track"
          ref={trackRef}
        >
          {order.map((name) => {
            const item = allDestinations.find((d) => d.name === name);
            if (!item) return null;
            return (
              <DestinationCard
                key={name}
                destination={item}
                onSelect={onSelect}
                className={`destination-card--${name.toLowerCase()}`}
              />
            );
          })}
        </div>

        <button
          type="button"
          className="destinations-edge-arrow destinations-edge-arrow--next"
          onClick={scrollNext}
          aria-label="Next destination"
        >
          <Icon name="chevronRight" size={20} />
        </button>
      </div>
    </section>
  );
}

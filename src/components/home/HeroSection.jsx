import { useState } from "react";
import Header from "../layout/Header";
import Button from "../common/Button";
import Icon from "../common/Icon";
import DestinationSelector from "./DestinationSelector";
import { destinations } from "../../data/destinations";
import "./HeroSection.css";
export default function HeroSection({ onPlan }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const [hasSelected, setHasSelected] = useState(false);
  const active = destinations[activeIndex];
  const select = (index) => {
    setActiveIndex(index);
    setHasSelected(true);
  };
  const explore = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={hasSelected ? active.image : "/images/hero-coast.jpeg"}
        alt=""
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <Header onPlan={onPlan} onExplore={explore} />
      <div className="hero-body container">
        <div className="hero-copy">
          <p className="eyebrow">
            Explore <span>·</span> Discover <span>·</span> Belong
          </p>
          <h1 id="hero-title">
            Go Beyond
            <br />
            the Ordinary.
          </h1>
          <p className="hero-description">
            Discover extraordinary destinations, unforgettable
            <br className="desktop-break" /> experiences, and journeys made just
            for you.
          </p>
          <div className="hero-actions">
            <Button onClick={explore}>
              Explore Destinations <Icon size={17} />
            </Button>
            <Button variant="outline" onClick={onPlan}>
              Plan My Trip{" "}
              <span className="play-icon">
                <Icon name="play" size={17} />
              </span>
            </Button>
          </div>
        </div>
        <DestinationSelector
          destinations={destinations}
          activeIndex={activeIndex}
          onSelect={select}
        />
        <a className="scroll-cue" href="#trip-search">
          <span className="mouse-icon">
            <span />
          </span>
          Scroll to explore
        </a>
        <div className="destination-caption" aria-live="polite">
          <span>{hasSelected ? active.name : "Discover"}</span>
          <p>{hasSelected ? active.caption : "A world beyond the ordinary"}</p>
        </div>
      </div>
    </section>
  );
}

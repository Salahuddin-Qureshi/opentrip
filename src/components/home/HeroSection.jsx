import Header from "../layout/Header";
import Button from "../common/Button";
import Icon from "../common/Icon";
import "./HeroSection.css";

export default function HeroSection({ onPlan }) {
  const exploreServices = () => {
    const elem = document.getElementById("services") || document.getElementById("destinations");
    elem?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/images/hero-airplane-right.jpg"
        alt="OPEN TRIP Flight Soaring Over Tropical Islands"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <Header onPlan={onPlan} onExplore={exploreServices} />
      <div className="hero-body container">
        <div className="hero-copy">
          <p className="eyebrow">
            Your travel partner <span>·</span> Discover the world with confidence.
          </p>
          <h1 id="hero-title">
            Explore the World
            <br />
            with OPEN TRIP
          </h1>
          <p className="hero-description">
            Whether you are planning an international holiday, booking flights, finding the right hotel,
            seeking visa assistance, study visa or preparing for your spiritual journey, OPEN TRIP is
            here to help make your travel planning simpler and more convenient.
          </p>
          <div className="hero-actions">
            <Button onClick={exploreServices}>
              Explore Our Services <Icon size={17} />
            </Button>
            <Button variant="outline" onClick={onPlan}>
              Get a Quote{" "}
              <span className="play-icon">
                <Icon name="play" size={17} />
              </span>
            </Button>
          </div>
        </div>

        {/* Floating Route Badge inspired by reference design */}
        <div className="hero-flight-card" aria-hidden="true">
          <div className="flight-card-route">
            <span className="flight-code">KHI</span>
            <span className="flight-icon">✈</span>
            <span className="flight-code">WORLD</span>
          </div>
          <span className="flight-card-sub">Direct GDS Airline Ticketing</span>
        </div>

        <a className="scroll-cue" href="#trip-search">
          <span className="mouse-icon">
            <span />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}

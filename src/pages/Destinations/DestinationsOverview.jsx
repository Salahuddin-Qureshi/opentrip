import { useMemo, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import TripDialog from "../../features/trips/TripDialog";
import { useNavigation } from "../../context/NavigationContext";
import "../Services/Services.css";
import "./DestinationsOverview.css";

const REGIONS = [
  { id: "All", label: "All Destinations", icon: "globe" },
  { id: "Middle East", label: "Middle East", icon: "sun" },
  { id: "Asia", label: "Asia", icon: "compass" },
  { id: "Europe", label: "Europe", icon: "mountain" },
];

const DESTINATIONS = [
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    description:
      "Discover modern attractions, shopping, beaches, and family experiences.",
    image: "/images/cities/dubai.jpg",
    focus: "center 45%",
    tag: "City & Family",
    accent: "#028AF0",
    ideas: ["Modern Attractions", "Shopping", "Beaches", "Family Fun"],
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    country: "Makkah & Madinah",
    region: "Middle East",
    description:
      "Plan your visit for Umrah and explore travel arrangements for Makkah and Madinah.",
    image: "/images/cities/makkah-kaaba-wide.jpg",
    focus: "70% center",
    tag: "Spiritual Journey",
    accent: "#012061",
    ideas: ["Umrah", "Makkah", "Madinah", "Ziyarat"],
    servicePage: "umrah",
    serviceLabel: "View Umrah Packages",
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Türkiye",
    region: "Europe",
    description:
      "Explore a blend of history, culture, city life, and natural beauty.",
    image: "/images/destinations/instanbul.jpeg",
    focus: "center 40%",
    tag: "History & Culture",
    accent: "#FB8902",
    ideas: ["History", "Culture", "City Life", "Nature"],
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    country: "Baku & Beyond",
    region: "Asia",
    description:
      "Discover Baku's waterfront, architecture, and cultural attractions.",
    image: "/images/destinations/azerbaijan.jpg",
    focus: "center 50%",
    tag: "Waterfront & Architecture",
    accent: "#022F82",
    ideas: ["Baku Waterfront", "Architecture", "Old City", "Culture"],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    country: "Kuala Lumpur & More",
    region: "Asia",
    description:
      "Explore vibrant cities, nature, and family-friendly destinations.",
    image: "/images/destinations/malaysia.jpg",
    focus: "center 45%",
    tag: "Family Friendly",
    accent: "#03C7FB",
    ideas: ["Vibrant Cities", "Nature", "Family Trips"],
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Bangkok & Islands",
    region: "Asia",
    description:
      "Discover beaches, city experiences, and cultural attractions.",
    image: "/images/cities/bangkok.jpg",
    focus: "center 50%",
    tag: "Beaches & Culture",
    accent: "#FB8902",
    ideas: ["Beaches", "City Experiences", "Temples & Culture"],
  },
  {
    id: "switzerland",
    name: "Switzerland",
    country: "The Swiss Alps",
    region: "Europe",
    description:
      "Explore scenic landscapes, mountain destinations, and picturesque towns.",
    image: "/images/destinations/switzerland.jpeg",
    focus: "center 40%",
    tag: "Alpine Scenery",
    accent: "#028AF0",
    ideas: ["Scenic Landscapes", "Mountains", "Picturesque Towns"],
  },
  {
    id: "italy",
    name: "Italy",
    country: "Rome, Venice & Amalfi",
    region: "Europe",
    description:
      "Discover historic cities, art, architecture, and food culture.",
    image: "/images/destinations/italy.jpg",
    focus: "center 50%",
    tag: "Art & Food Culture",
    accent: "#022F82",
    ideas: ["Historic Cities", "Art", "Architecture", "Food Culture"],
  },
  {
    id: "greece",
    name: "Greece",
    country: "Athens & the Islands",
    region: "Europe",
    description:
      "Explore islands, coastal views, and historic landmarks.",
    image: "/images/destinations/greece.jpg",
    focus: "center 50%",
    tag: "Islands & Coast",
    accent: "#03C7FB",
    ideas: ["Islands", "Coastal Views", "Historic Landmarks"],
  },
];

const WHY_PLAN = [
  {
    icon: "compass",
    title: "Destination Guidance",
    text: "Share your interests and our team will suggest places that suit your travel style.",
  },
  {
    icon: "plane",
    title: "Flights & Hotels",
    text: "Get flight and accommodation options arranged around your preferred dates.",
  },
  {
    icon: "shield",
    title: "Visa Assistance",
    text: "Receive general guidance and a document checklist for your destination.",
  },
  {
    icon: "users",
    title: "Family & Group Trips",
    text: "Plan comfortable travel arrangements for families, friends, and groups.",
  },
];

export default function DestinationsOverviewPage() {
  const [region, setRegion] = useState("All");
  const [mobileIdx, setMobileIdx] = useState(0);
  const [dialog, setDialog] = useState(null);
  const nav = useNavigation();

  const plan = (trip = null) => setDialog({ type: "trip", trip });
  const close = () => setDialog(null);

  const goTo = (page) => {
    if (nav) nav.navigate(page);
    else window.location.hash = page;
  };

  const filtered = useMemo(
    () => (region === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.region === region)),
    [region]
  );

  const count = filtered.length;
  const safeIdx = count > 0 ? Math.min(mobileIdx, count - 1) : 0;
  // Fill the last desktop row so the 3-column grid never shows an empty gap
  const slotsToFill = (3 - (count % 3)) % 3;

  const changeRegion = (id) => {
    setRegion(id);
    setMobileIdx(0);
  };

  const askAbout = (dest) =>
    plan({
      name: `${dest.name} Trip Inquiry`,
      destination: dest.name,
      type: "Destination Inquiry",
    });

  const renderCard = (dest) => (
    <article
      key={dest.id}
      className="dest-ov-card"
      style={{ "--dest-accent": dest.accent }}
    >
      <div className="dest-ov-media">
        <img
          src={dest.image}
          alt={`${dest.name}, ${dest.country}`}
          loading="lazy"
          style={{ objectPosition: dest.focus }}
        />
        <div className="dest-ov-shade" />
        <span className="dest-ov-tag">{dest.tag}</span>
        <span className="dest-ov-region">
          <Icon name="pin" size={11} /> {dest.region}
        </span>
        <div className="dest-ov-media-title">
          <h3>{dest.name}</h3>
          <span>{dest.country}</span>
        </div>
      </div>

      <div className="dest-ov-body">
        <p className="dest-ov-desc">{dest.description}</p>

        <div className="dest-ov-ideas">
          {dest.ideas.map((idea) => (
            <span key={idea} className="dest-ov-chip">
              <Icon name="check" size={11} /> {idea}
            </span>
          ))}
        </div>

        <div className="dest-ov-actions">
          <button
            type="button"
            className="dest-ov-btn-primary"
            onClick={() => askAbout(dest)}
          >
            <span>Ask About {dest.name}</span>
            <Icon name="arrow" size={13} />
          </button>
          {dest.servicePage && (
            <button
              type="button"
              className="dest-ov-btn-link"
              onClick={() => goTo(dest.servicePage)}
            >
              {dest.serviceLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );

  const renderFiller = (variant, key) =>
    variant === "custom" ? (
      <article key={key} className="dest-ov-card dest-ov-card--filler">
        <div className="dest-filler-icon">
          <Icon name="globe" size={26} />
        </div>
        <span className="dest-filler-eyebrow">Not on the list?</span>
        <h3>Have Another Destination in Mind?</h3>
        <p>
          Tell us where you would like to travel and we will help you explore
          available options for flights, hotels, and travel arrangements.
        </p>
        <ul className="dest-filler-list">
          <li><Icon name="check" size={12} /> Any country or city</li>
          <li><Icon name="check" size={12} /> Your dates and budget</li>
          <li><Icon name="check" size={12} /> Family, couple, or group travel</li>
        </ul>
        <button
          type="button"
          className="dest-ov-btn-primary"
          onClick={() => plan({ type: "Destination Inquiry" })}
        >
          <span>Ask About a Destination</span>
          <Icon name="arrow" size={13} />
        </button>
      </article>
    ) : (
      <article key={key} className="dest-ov-card dest-ov-card--filler dest-ov-card--filler-dark">
        <div className="dest-filler-icon">
          <Icon name="shield" size={26} />
        </div>
        <span className="dest-filler-eyebrow">Before you travel</span>
        <h3>Need Visa Guidance for Your Destination?</h3>
        <p>
          Every destination has its own visa process. Our team can share general
          requirements and a document checklist based on your travel purpose.
        </p>
        <ul className="dest-filler-list">
          <li><Icon name="check" size={12} /> Destination assessment</li>
          <li><Icon name="check" size={12} /> Document checklist</li>
          <li><Icon name="check" size={12} /> Submission step guidance</li>
        </ul>
        <button
          type="button"
          className="dest-ov-btn-primary"
          onClick={() => goTo("visa")}
        >
          <span>Explore Visa Assistance</span>
          <Icon name="arrow" size={13} />
        </button>
      </article>
    );

  return (
    <div className="services-page destinations-overview-page">
      {/* 1. Hero (same unified size as Services & Packages) */}
      <section className="hero hero--service" aria-labelledby="dest-hero-title">
        <img
          className="hero-image"
          src="/images/destinations-hero-wide.jpg"
          alt="Traveller overlooking a scenic coastline"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "right 45%" }}
        />
        <div className="hero-shade" />
        <Header onPlan={() => plan({ type: "Destination Inquiry" })} />

        <div className="hero-body container">
          <div className="hero-copy">
            <p className="eyebrow">
              The World Is Waiting <span>·</span> Destination Ideas
            </p>
            <h1 id="dest-hero-title">
              Explore
              <br />
              Destinations
            </h1>
            <p className="hero-description">
              Discover places, cultures, and experiences for your next journey.
              Browse destination ideas and contact OPEN TRIP to discuss travel
              arrangements for your preferred location.
            </p>
            <div className="hero-actions">
              <Button onClick={() => plan({ type: "Destination Inquiry" })}>
                Ask About a Destination <Icon size={17} />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("destinations-catalog")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Destinations{" "}
                <span className="play-icon">
                  <Icon name="play" size={17} />
                </span>
              </Button>
            </div>
          </div>

          <div className="hero-flight-card" aria-hidden="true">
            <div className="flight-card-route">
              <span className="flight-code">KHI</span>
              <span className="flight-icon">✈</span>
              <span className="flight-code">WORLD</span>
            </div>
            <span className="flight-card-sub">9 Featured Destinations</span>
          </div>
        </div>
      </section>

      {/* 2. Floating region filter bar */}
      <div className="services-nav-searchwrap container" id="destinations-catalog">
        <div className="services-floating-navbar">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`services-nav-pill ${region === r.id ? "active" : ""}`}
              onClick={() => changeRegion(r.id)}
            >
              <Icon name={r.icon} size={14} />
              <span>{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="service-content-section">
        <div className="container">
          {/* Section heading */}
          <div className="dest-ov-heading">
            <span className="dest-ov-eyebrow">Destination Ideas</span>
            <h2>The World Is Waiting</h2>
            <p>
              From spiritual journeys to city breaks, island escapes, and mountain
              getaways — choose a destination and our team will help you plan it.
            </p>
          </div>

          <div className="dest-ov-filter-row">
            <div>
              <h3>
                {region === "All" ? "All Destinations" : `${region} Destinations`}
              </h3>
              <small>
                Showing {count} destination{count === 1 ? "" : "s"}
              </small>
            </div>
            {region !== "All" && (
              <button
                type="button"
                className="dest-ov-reset"
                onClick={() => changeRegion("All")}
              >
                Show All Destinations
              </button>
            )}
          </div>

          {/* 3. Desktop / tablet grid */}
          <div className="dest-ov-grid">
            {filtered.map(renderCard)}
            {slotsToFill >= 1 && renderFiller("custom", "filler-custom")}
            {slotsToFill >= 2 && renderFiller("visa", "filler-visa")}
          </div>

          {/* 4. Mobile: one card at a time with prev / next */}
          <div className="dest-ov-mobile">
            <div className="dest-ov-mobile-controls">
              <button
                type="button"
                className="dest-ov-mobile-btn"
                onClick={() => setMobileIdx((p) => (p - 1 + count) % count)}
                aria-label="Previous destination"
              >
                <Icon name="chevronLeft" size={18} />
              </button>
              <div className="dest-ov-mobile-indicators">
                <span className="dest-ov-mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="dest-ov-mobile-dots">
                  {filtered.map((d, i) => (
                    <button
                      key={d.id}
                      type="button"
                      className={`dest-ov-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to ${d.name}`}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="dest-ov-mobile-btn"
                onClick={() => setMobileIdx((p) => (p + 1) % count)}
                aria-label="Next destination"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>
            <div className="dest-ov-mobile-stage">
              {filtered[safeIdx] && renderCard(filtered[safeIdx])}
            </div>
          </div>

          {/* 5. How we help */}
          <div className="dest-ov-help">
            <div className="dest-ov-heading dest-ov-heading--compact">
              <span className="dest-ov-eyebrow">How OPEN TRIP Helps</span>
              <h2>Plan Your Trip with Our Team</h2>
            </div>
            <div className="dest-ov-help-grid">
              {WHY_PLAN.map((item) => (
                <div key={item.title} className="dest-ov-help-card">
                  <div className="dest-ov-help-icon">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. CTA */}
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <h3>Have Another Destination in Mind?</h3>
              <p>
                Tell us where you would like to travel and we will help you explore
                available options.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="cta-btn-main"
                onClick={() => plan({ type: "Destination Inquiry" })}
              >
                <span>Ask About a Destination</span>
                <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* 7. Travel information note */}
          <div className="service-disclaimer-box">
            <div className="box-icon" style={{ color: "var(--deep-blue, #022f82)" }}>
              <Icon name="info" size={22} />
            </div>
            <div>
              <h4 className="box-title">Travel Information Note</h4>
              <p className="box-text">
                Destination descriptions on this page are for general travel
                inspiration. Visa information, entry rules, and travel advisories
                can change at any time. Please verify current requirements with the
                relevant official sources before making travel plans.
              </p>
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


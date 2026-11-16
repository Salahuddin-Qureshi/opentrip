import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import FilterTabs from "../common/FilterTabs";
import PackageCard from "../cards/PackageCard";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { packages } from "../../data/home";
import { useNavigation } from "../../context/NavigationContext";
import "./PackagesSection.css";

export default function PackagesSection({
  category,
  onCategoryChange,
  search,
  onClearSearch,
  onSelect,
}) {
  const nav = useNavigation();
  const [mobileIdx, setMobileIdx] = useState(0);

  const filtered = packages.filter(
    (trip) =>
      (category === "All" || trip.categories.includes(category)) &&
      (!search?.destination ||
        trip.destination
          .toLowerCase()
          .includes(search.destination.toLowerCase().trim()))
  );

  const count = filtered.length;
  const safeIdx = count > 0 ? Math.min(mobileIdx, count - 1) : 0;

  const prevCard = () => {
    if (count <= 1) return;
    setMobileIdx((prev) => (prev - 1 + count) % count);
  };

  const nextCard = () => {
    if (count <= 1) return;
    setMobileIdx((prev) => (prev + 1) % count);
  };

  return (
    <section className="packages-section" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Packages"
          title="Find the Right Package for Your Journey"
        >
          <FilterTabs
            options={[
              "All",
              "Adventure",
              "Beach",
              "Family",
              "Luxury",
              "Cultural",
            ]}
            value={category}
            onChange={(val) => {
              onCategoryChange(val);
              setMobileIdx(0);
            }}
          />
        </SectionHeading>

        <p className="packages-lead-caption">
          Explore Umrah, international holiday, family, group, and customized travel arrangements.
          Package details, inclusions, exclusions, dates, and prices are shared according to confirmed availability and your requirements.
        </p>

        {search && (
          <div className="search-context">
            <p>
              Trips for {search.destination || "every destination"} ·{" "}
              {search.travelers} travellers · {search.date || "Flexible dates"}
            </p>
            <button onClick={onClearSearch}>Clear search</button>
          </div>
        )}

        {/* 1. Desktop & Tablet: Clean 4-Card / 2-Column Grid */}
        <div className="packages-desktop-grid">
          {filtered.map((trip) => (
            <PackageCard key={trip.id} trip={trip} onSelect={onSelect} />
          ))}
        </div>

        {/* 2. Mobile Screens: Exactly 1 Card at a Time with Forward & Backward Buttons */}
        {count > 0 && (
          <div className="packages-mobile-carousel">
            <div className="mobile-carousel-controls">
              <button
                type="button"
                className="mobile-nav-btn mobile-nav-prev"
                onClick={prevCard}
                aria-label="Previous package"
              >
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="mobile-carousel-indicators">
                <span className="mobile-counter">
                  {String(safeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div className="mobile-dots">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`mobile-dot ${i === safeIdx ? "active" : ""}`}
                      onClick={() => setMobileIdx(i)}
                      aria-label={`Go to package ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="mobile-nav-btn mobile-nav-next"
                onClick={nextCard}
                aria-label="Next package"
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="mobile-card-stage">
              <PackageCard trip={filtered[safeIdx]} onSelect={onSelect} />
            </div>
          </div>
        )}

        {!count && (
          <div className="empty-state">
            <h3>Your journey deserves a personal touch.</h3>
            <p>
              There are no sample packages for this combination. Let’s put
              together a trip around you.
            </p>
            <Button
              onClick={() => onSelect({ destination: search?.destination })}
            >
              Plan a Custom Trip
            </Button>
          </div>
        )}

        {/* Buttons: View Packages | Request a Quote */}
        <div className="packages-view-all-row">
          <Button
            variant="outline"
            onClick={() => {
              if (nav) {
                nav.navigate("packages");
              } else {
                window.location.hash = "packages";
              }
            }}
          >
            View Packages <Icon size={16} />
          </Button>

          <Button
            variant="primary"
            onClick={() => onSelect({ type: "Featured Package" })}
          >
            Request a Quote <Icon size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

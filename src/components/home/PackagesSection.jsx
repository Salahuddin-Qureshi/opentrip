import SectionHeading from "../common/SectionHeading";
import FilterTabs from "../common/FilterTabs";
import PackageCard from "../cards/PackageCard";
import Button from "../common/Button";
import { packages } from "../../data/home";
export default function PackagesSection({
  category,
  onCategoryChange,
  search,
  onClearSearch,
  onSelect,
}) {
  const filtered = packages.filter(
    (trip) =>
      (category === "All" || trip.categories.includes(category)) &&
      (!search?.destination ||
        trip.destination
          .toLowerCase()
          .includes(search.destination.toLowerCase().trim())),
  );
  return (
    <section className="packages-section" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow="Featured packages"
          title={
            <>
              Unforgettable journeys,
              <br />
              carefully curated.
            </>
          }
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
            onChange={onCategoryChange}
          />
        </SectionHeading>
        {search && (
          <div className="search-context">
            <p>
              Trips for {search.destination || "every destination"} ·{" "}
              {search.travelers} travellers · {search.date || "Flexible dates"}
            </p>
            <button onClick={onClearSearch}>Clear search</button>
          </div>
        )}
        <div className="packages-grid" aria-live="polite">
          {filtered.map((trip) => (
            <PackageCard key={trip.id} trip={trip} onSelect={onSelect} />
          ))}
        </div>
        {!filtered.length && (
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
        <p className="sample-caption">
          Sample itineraries and indicative prices. Final availability and
          pricing are confirmed during planning.
        </p>
      </div>
    </section>
  );
}

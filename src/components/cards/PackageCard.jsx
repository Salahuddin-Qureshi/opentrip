import Icon from "../common/Icon";
import { useNavigation } from "../../context/NavigationContext";

export default function PackageCard({ trip, onSelect }) {
  const nav = useNavigation();
  const pkrVal = trip.pricePkr || (trip.price * 278).toLocaleString("en-US");

  const handleViewDetails = (e) => {
    e.stopPropagation();
    if (nav?.navigate) {
      nav.navigate("packages");
    } else {
      window.location.hash = "packages";
    }
  };

  const handleInquire = (e) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(trip);
    }
  };

  return (
    <article className="package-card">
      {/* Photo Header with Top Duration and Bottom Country Tags */}
      <div className="package-photo-wrap">
        <button
          type="button"
          className="package-photo"
          onClick={handleInquire}
          aria-label={`Inquire about ${trip.name}`}
        >
          <img
            src={trip.image}
            alt={`${trip.destination} scenery`}
            loading="lazy"
          />
        </button>
        <div className="package-photo-overlay" />
        <span className="package-duration-pill">
          <Icon name="calendar" size={11} />
          <span>{trip.days}D / {trip.nights}N</span>
        </span>
        <span className="package-country-tag">
          {trip.country || trip.destination}
        </span>
      </div>

      <div className="package-copy">
        <div className="package-destination-tag">
          <Icon name="pin" size={11} />
          <span>{trip.destination}</span>
        </div>

        <h3 className="package-title" onClick={handleInquire}>
          {trip.name}
        </h3>

        <p className="package-desc">{trip.description}</p>

        {trip.highlights && trip.highlights.length > 0 && (
          <div className="package-chips-row">
            {trip.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="package-feature-chip">
                <span className="chip-dot">✓</span>
                <span>{h}</span>
              </span>
            ))}
          </div>
        )}

        <div className="package-bottom">
          <div className="package-price-row">
            <div className="package-price-box">
              <span className="price-prefix">Starting From</span>
              <strong className="package-price-main">PKR {pkrVal}</strong>
            </div>
            <span className="package-price-unit">Per Person</span>
          </div>

          <div className="package-card-btns">
            <button
              type="button"
              className="package-details-btn"
              onClick={handleViewDetails}
              title="Explore all package itineraries"
            >
              <span>View Details</span>
            </button>
            <button
              type="button"
              className="package-inquire-btn"
              onClick={handleInquire}
              title="Request a customized quotation"
            >
              <span>Inquire</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

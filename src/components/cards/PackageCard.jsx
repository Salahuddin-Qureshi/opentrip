import Icon from "../common/Icon";
import Button from "../common/Button";

export default function PackageCard({ trip, onSelect }) {
  const pkrVal = trip.pricePkr || (trip.price * 278).toLocaleString("en-US");

  return (
    <article className="package-card">
      {/* Framed Inset Photo Header */}
      <div className="package-photo-wrap">
        <button
          type="button"
          className="package-photo"
          onClick={() => onSelect(trip)}
          aria-label={`View ${trip.name}`}
        >
          <img
            src={trip.image}
            alt={`${trip.destination} scenery`}
            loading="lazy"
          />
        </button>
        <div className="package-photo-overlay" />
        <span className="package-duration-pill">
          <Icon name="calendar" size={10.5} />
          <span>{trip.days}D / {trip.nights}N</span>
        </span>
        {trip.country && (
          <span className="package-country-tag">
            {trip.country}
          </span>
        )}
      </div>

      <div className="package-copy">
        <div className="package-destination-tag">
          <Icon name="pin" size={11} />
          <span>{trip.destination}</span>
        </div>

        <h3 className="package-title">{trip.name}</h3>

        <p className="package-desc">{trip.description}</p>

        {trip.highlights && trip.highlights.length > 0 && (
          <div className="package-chips-row">
            {trip.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="package-feature-chip">
                <span className="chip-dot">●</span>
                <span>{h}</span>
              </span>
            ))}
          </div>
        )}

        <div className="package-bottom">
          <div className="package-price-box">
            <span className="price-prefix">Starting from</span>
            <strong className="package-price-main">PKR {pkrVal}</strong>
          </div>

          <div className="package-card-btns">
            <button
              type="button"
              className="package-details-btn"
              onClick={() => onSelect(trip)}
            >
              View Details
            </button>
            <Button
              className="package-inquire-btn"
              onClick={() => onSelect(trip)}
            >
              Inquire
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

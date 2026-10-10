import Icon from "../common/Icon";
export default function PackageCard({ trip, onSelect }) {
  return (
    <article className="package-card">
      <button
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
      <div className="package-copy">
        <h3>{trip.name}</h3>
        <div className="package-meta">
          <span>
            <Icon name="calendar" size={13} />
            {trip.days} Days
          </span>
          <span>
            <Icon name="moon" size={13} />
            {trip.nights} Nights
          </span>
        </div>
        <p>{trip.description}</p>
        <div className="package-bottom">
          <span>
            From <strong>${trip.price.toLocaleString("en-US")}</strong> / person
          </span>
          <button
            className="card-arrow"
            onClick={() => onSelect(trip)}
            aria-label={`Explore ${trip.name}`}
          >
            <Icon size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

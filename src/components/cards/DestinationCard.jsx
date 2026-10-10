import Icon from "../common/Icon";
export default function DestinationCard({
  destination,
  onSelect,
  className = "",
}) {
  return (
    <button
      className={`destination-card ${className}`}
      onClick={() => onSelect(destination)}
    >
      <img
        src={destination.image}
        alt={`${destination.name} travel scenery`}
        loading="lazy"
      />
      <span className="destination-card-copy">
        <span>
          <strong>{destination.name}</strong>
          <small>{destination.caption}</small>
        </span>
        <span className="card-arrow">
          <Icon size={17} />
        </span>
      </span>
    </button>
  );
}

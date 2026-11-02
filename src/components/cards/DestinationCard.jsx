import Icon from "../common/Icon";

export default function DestinationCard({
  destination,
  onSelect,
  className = "",
}) {
  if (!destination) return null;
  return (
    <div
      className={`destination-card ${className}`}
      onClick={() => onSelect(destination)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(destination);
        }
      }}
    >
      <img
        src={destination.image}
        alt={`${destination.name} scenery`}
        loading="lazy"
      />
      <div className="destination-card-overlay" />
      <div className="destination-card-header">
        {destination.country && (
          <span className="dest-country-badge">{destination.country}</span>
        )}
      </div>
      <div className="destination-card-copy">
        <div className="dest-info">
          <strong>{destination.name}</strong>
          <small>{destination.caption}</small>
          {destination.description && (
            <p className="dest-desc">{destination.description}</p>
          )}
        </div>
        <div className="dest-action-bar">
          <span className="dest-explore-label">Explore</span>
          <span className="card-arrow">
            <Icon size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}

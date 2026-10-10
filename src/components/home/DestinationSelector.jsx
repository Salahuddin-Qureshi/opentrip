import Icon from '../common/Icon';
export default function DestinationSelector({ destinations, activeIndex, onSelect }) {
  return <div className="destination-selector" id="hero-destinations">
    <div className="destination-list" role="group" aria-label="Featured destinations">
      {destinations.map((destination, index) => <button key={destination.name} className={`destination-option ${activeIndex === index ? 'is-active' : ''}`} aria-pressed={activeIndex === index} onClick={() => onSelect(index)}><img src={destination.image} alt="" /><span>{destination.name}</span></button>)}
    </div>
    <div className="destination-controls"><span>{String(activeIndex + 1).padStart(2, '0')} <span className="muted">/ {String(destinations.length).padStart(2, '0')}</span></span><button className="round-button" aria-label="Previous destination" onClick={() => onSelect((activeIndex - 1 + destinations.length) % destinations.length)}><Icon name="chevronLeft" size={15} /></button><button className="round-button next" aria-label="Next destination" onClick={() => onSelect((activeIndex + 1) % destinations.length)}><Icon name="chevronRight" size={15} /></button></div>
  </div>;
}

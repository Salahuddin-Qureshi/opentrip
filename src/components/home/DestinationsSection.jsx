import SectionHeading from "../common/SectionHeading";
import ArrowLink from "../common/ArrowLink";
import DestinationCard from "../cards/DestinationCard";
import { allDestinations } from "../../data/home";
export default function DestinationsSection({ onSelect }) {
  const order = [
    "Bali",
    "Switzerland",
    "Dubai",
    "Maldives",
    "Istanbul",
    "Hunza",
  ];
  return (
    <section className="page-section container" id="destinations">
      <SectionHeading
        eyebrow="Top destinations"
        title="Some places stay with you forever."
      >
        <p>
          From tropical beaches to breathtaking mountains,
          <br />
          explore handpicked destinations around the world.
        </p>
        <ArrowLink href="#packages">View All Trips</ArrowLink>
      </SectionHeading>
      <div className="destinations-grid">
        {order.map((name) => (
          <DestinationCard
            key={name}
            destination={allDestinations.find((item) => item.name === name)}
            onSelect={onSelect}
            className={`destination-card--${name.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  );
}

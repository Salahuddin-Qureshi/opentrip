import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import { benefits } from "../../data/home";
export default function BenefitsSection() {
  return (
    <section className="page-section benefits-section container">
      <SectionHeading
        eyebrow="Why choose OpenTrip"
        title="Travel better. Travel deeper."
        centered
      />
      <div className="benefits-grid">
        {benefits.map((item) => (
          <div className="benefit" key={item.title}>
            <span className={`benefit-icon benefit-icon--${item.tone}`}>
              <Icon name={item.icon} size={30} />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

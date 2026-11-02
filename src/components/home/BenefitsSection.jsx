import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import { benefits } from "../../data/home";

export default function BenefitsSection() {
  return (
    <section className="page-section benefits-section" id="benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose OpenTrip"
          title="Four Commitments Behind Every Journey."
          centered
        >
          <p className="benefits-subtitle">
            Whether you are traveling for leisure, business, or sacred Umrah, here is why
            thousands of Pakistani families trust OpenTrip for their memorable journeys.
          </p>
        </SectionHeading>
        <div className="benefits-grid">
          {benefits.map((item) => (
            <div className="benefit-card" key={item.title}>
              <span className={`benefit-icon benefit-icon--${item.tone}`}>
                <Icon name={item.icon} size={26} />
              </span>
              <div className="benefit-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

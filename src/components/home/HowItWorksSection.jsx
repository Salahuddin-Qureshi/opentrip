import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { howItWorksSteps } from "../../data/home";
import "./HowItWorksSection.css";

export default function HowItWorksSection({ onPlan }) {
  return (
    <section className="page-section how-it-works-section">
      <div className="container">
        <SectionHeading
          eyebrow="Simple 3-Step Journey"
          title="How OpenTrip Works"
          centered
        >
          <p className="how-subtitle">
            From your very first idea to your return flight, we make planning completely effortless,
            flexible, and transparent.
          </p>
        </SectionHeading>

        <div className="steps-grid">
          {howItWorksSteps.map((item, idx) => (
            <div key={item.step} className="step-card">
              <div className="step-number-badge">{item.step}</div>
              <div className="step-icon-wrap">
                <Icon name={item.icon} size={28} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {idx < howItWorksSteps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <div className="how-cta-center">
          <Button onClick={onPlan}>
            Plan Your Journey Now <Icon size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}


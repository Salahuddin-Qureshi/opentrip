import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { howItWorksSteps } from "../../data/home";
import "./HowItWorksSection.css";

export default function HowItWorksSection({ onPlan }) {
  return (
    <section className="page-section how-it-works-section" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey in Four Simple Steps"
          centered
        >
          <p className="how-subtitle">
            From your very first inquiry to your flight home, our team provides personalized assistance, clear pricing, and verified arrangements every step of the way.
          </p>
        </SectionHeading>

        <div className="steps-grid steps-grid--4">
          {howItWorksSteps.map((item, idx) => (
            <div key={item.step} className="step-card">
              <div className="step-number-badge">{item.step}</div>
              <div className="step-icon-wrap">
                <Icon name={item.icon === "users" ? "users" : item.icon === "calendar" ? "calendar" : item.icon === "sparkles" ? "star" : "compass"} size={26} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {idx < howItWorksSteps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <div className="how-cta-center">
          <Button onClick={onPlan}>
            Get Started — Request a Quote <Icon size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

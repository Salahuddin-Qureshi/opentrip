import Button from "../common/Button";
import Icon from "../common/Icon";
export default function PlanningSection({ onPlan }) {
  return (
    <section className="planning-section">
      <img src="/images/destinations/maldives.jpeg" alt="" loading="lazy" />
      <div className="container">
        <p className="section-eyebrow">Ready for your next adventure?</p>
        <h2>Your next chapter starts somewhere new.</h2>
        <p>Let’s plan a journey you’ll never forget.</p>
        <div>
          <Button onClick={onPlan}>
            Start Planning <Icon size={17} />
          </Button>
          <Button variant="outline" onClick={onPlan}>
            Plan Your Perfect Escape <Icon name="compass" size={19} />
          </Button>
        </div>
      </div>
    </section>
  );
}

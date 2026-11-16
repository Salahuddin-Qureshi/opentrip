import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import "./WelcomeSection.css";

export default function WelcomeSection({ onPlan }) {
  const exploreServices = () => {
    const elem = document.getElementById("services");
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page-section welcome-section" id="welcome">
      <div className="container">
        <div className="welcome-card">
          <div className="welcome-inner">
            <div className="welcome-content">
              <span className="welcome-eyebrow">
                <span className="welcome-eyebrow-dot" />
                Welcome to OPEN TRIP (PVT.) LTD.
              </span>
              <h2 className="welcome-title">Making Every Journey Memorable</h2>
              <p className="welcome-text">
                At <strong>OPEN TRIP (PVT.) LTD.</strong>, we believe every journey begins with the right travel partner.
                We offer a range of travel-related services designed to make planning easier and more convenient.
                From flight bookings and hotel reservations to visa assistance, Umrah packages, and customized tour
                packages, our team helps travellers explore suitable options based on their needs.
              </p>

              <div className="welcome-highlights">
                <div className="welcome-highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>DTS Licensed Reg. #3941</span>
                </div>
                <div className="welcome-highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>IATA Certified Global Ticketing</span>
                </div>
                <div className="welcome-highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>100% Transparent Quotations</span>
                </div>
              </div>

              <div className="welcome-actions">
                <Button onClick={exploreServices}>
                  Explore Our Services <Icon size={16} />
                </Button>
                <Button variant="outline" onClick={onPlan}>
                  Get a Quote
                </Button>
              </div>
            </div>

            <div className="welcome-media-col">
              <div className="welcome-stat-card">
                <div className="welcome-stat-number">12+</div>
                <div className="welcome-stat-label">Years of Travel Excellence</div>
                <p className="welcome-stat-sub">Trusted by thousands of Pakistani families for domestic, international &amp; holy pilgrimage journeys.</p>
              </div>
              <div className="welcome-mini-cards">
                <div className="welcome-mini-badge">
                  <span className="badge-tag">24/7 Desk</span>
                  <strong>Direct Karachi VIP Concierge</strong>
                </div>
                <div className="welcome-mini-badge">
                  <span className="badge-tag">99.4% Rate</span>
                  <strong>Expert Visa Scrutiny &amp; Filing</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


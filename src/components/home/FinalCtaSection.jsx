import Button from "../common/Button";
import Icon from "../common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./FinalCtaSection.css";

export default function FinalCtaSection({ onPlan }) {
  const nav = useNavigation();

  const handleContact = (e) => {
    e.preventDefault();
    if (nav) {
      nav.navigate("contact");
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="page-section final-cta-section" id="final-cta">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-bg-glow" />
          <div className="final-cta-content">
            <span className="final-cta-eyebrow">Ready To Travel?</span>
            <h2 className="final-cta-title">Let&apos;s Plan Your Next Journey!</h2>
            <p className="final-cta-subtitle">
              Have a destination in mind? Contact <strong>OPEN TRIP (PVT.) LTD.</strong> for assistance with flight bookings,
              hotel reservations, visa assistance, Umrah packages, and customized tours.
            </p>

            <div className="final-cta-actions">
              {/* Button 1: Contact Us */}
              <button
                type="button"
                className="final-cta-btn final-cta-btn--contact"
                onClick={handleContact}
              >
                <span>Contact Us</span>
                <Icon size={16} />
              </button>

              {/* Button 2: Chat on WhatsApp */}
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="final-cta-btn final-cta-btn--wa"
              >
                <Icon name="whatsapp" size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Button 3: Request a Quotation */}
              <button
                type="button"
                className="final-cta-btn final-cta-btn--quote"
                onClick={onPlan}
              >
                <span>Request a Quotation</span>
                <Icon name="star" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


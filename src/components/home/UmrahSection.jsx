import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { umrahPackages } from "../../data/home";
import "./UmrahSection.css";

export default function UmrahSection({ onPlan }) {
  return (
    <section className="page-section umrah-section" id="umrah">
      <div className="container">
        <div className="umrah-header-wrap">
          <SectionHeading
            eyebrow="Sacred Pilgrimage Services"
            title="Your Sacred Journey Begins Here"
            centered
          >
            <p className="umrah-subtitle">
              Make your spiritual journey memorable with carefully arranged Umrah travel services,
              convenient hotels near Haram, seamless transfers, and dedicated pilgrim guidance.
            </p>
          </SectionHeading>
        </div>

        {/* Clean, Spacious & Uncluttered Umrah Cards */}
        <div className="umrah-grid">
          {umrahPackages.map((pkg) => (
            <article key={pkg.id} className="umrah-card">
              {/* Clean Framed Photo - Uncluttered */}
              <div className="umrah-photo-frame">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className={`umrah-card-img umrah-img-${pkg.id}`}
                />
                <div className="umrah-photo-gradient" />
                <span className="umrah-floating-duration">
                  <Icon name="calendar" size={11} /> {pkg.duration}
                </span>
              </div>

              {/* Spacious Card Body */}
              <div className="umrah-card-body">
                <h4 className="umrah-card-title">{pkg.title}</h4>

                {/* Clean, Single-Line Location Info (No bulky colored boxes) */}
                <div className="umrah-stay-summary">
                  <Icon name="pin" size={13} />
                  <span>{pkg.makkahHotel} · {pkg.madinahHotel}</span>
                </div>

                {/* Clean, Light Checklist */}
                <ul className="umrah-features-clean">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <Icon name="check" size={13} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacious Bottom Area: Price above, Clean Full-Width Button below */}
                <div className="umrah-bottom-spacious">
                  <div className="umrah-price-block">
                    <span className="umrah-price-label">Starting From</span>
                    <strong className="umrah-price-amount">PKR {pkg.pricePkr}</strong>
                  </div>

                  <button
                    type="button"
                    className="umrah-inquire-btn-clean"
                    onClick={() =>
                      onPlan({
                        destination: pkg.title,
                        tripType: "Umrah",
                        notes: `Umrah inquiry for ${pkg.title} (${pkg.duration})`,
                      })
                    }
                  >
                    <span>Inquire Package</span>
                    <Icon size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Guidance Strip */}
        <div className="umrah-cta-footer">
          <div className="umrah-footer-left">
            <h4>Need Custom Dates or 5-Star Executive Clock Tower Upgrades?</h4>
            <p>Our Umrah desk in Karachi assists with private GMC Yukon transfers, customized family stays, and visa guidance.</p>
          </div>
          <div className="umrah-cta-buttons">
            <Button
              onClick={() =>
                onPlan({
                  destination: "Custom Umrah Package",
                  tripType: "Umrah",
                  notes: "Custom VIP Umrah inquiry",
                })
              }
            >
              Explore Umrah Packages <Icon size={16} />
            </Button>
            <a
              className="whatsapp-outline-cta"
              href="https://wa.me/923101816191?text=Salam%20I%20would%20like%20information%20on%20Umrah%20packages"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              <span>Talk to Umrah Advisor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

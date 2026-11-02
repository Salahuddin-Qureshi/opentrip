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

        {/* Distinctive Umrah Cards Grid */}
        <div className="umrah-grid">
          {umrahPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`umrah-card ${pkg.popular ? "umrah-card--featured" : ""}`}
            >
              {/* Distinctive Framed Photo with Arched Top */}
              <div className="umrah-photo-frame">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className={`umrah-card-img umrah-img-${pkg.id}`}
                />
                <div className="umrah-photo-gradient" />
                <span className={`umrah-badge-ribbon ${pkg.popular ? "umrah-badge-ribbon--popular" : ""}`}>
                  {pkg.badge}
                </span>
                <span className="umrah-duration-badge">
                  <Icon name="calendar" size={11} /> {pkg.duration}
                </span>
              </div>

              {/* Distinctive Card Body */}
              <div className="umrah-card-body">
                <div className="umrah-card-headline">
                  <h4>{pkg.title}</h4>
                  <span className="umrah-tier-chip">{pkg.tier}</span>
                </div>

                {/* Pilgrimage Stays with Distinct Styling */}
                <div className="umrah-stays-stack">
                  <div className="stay-chip stay-chip--makkah">
                    <span className="stay-icon-dot">●</span>
                    <span className="stay-text">{pkg.makkahHotel}</span>
                  </div>
                  <div className="stay-chip stay-chip--madinah">
                    <span className="stay-icon-dot">●</span>
                    <span className="stay-text">{pkg.madinahHotel}</span>
                  </div>
                </div>

                {/* Checklist with Circular Badges */}
                <ul className="umrah-checklist">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="check-dot">
                        <Icon name="check" size={10} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Pricing & Action */}
                <div className="umrah-bottom-bar">
                  <div className="umrah-fare-box">
                    <small>Starting from</small>
                    <strong>PKR {pkg.pricePkr}</strong>
                  </div>

                  <button
                    type="button"
                    className={`umrah-book-btn ${pkg.popular ? "umrah-book-btn--popular" : ""}`}
                    onClick={() =>
                      onPlan({
                        destination: pkg.title,
                        tripType: "Umrah",
                        notes: `Umrah inquiry for ${pkg.title} (${pkg.duration})`,
                      })
                    }
                  >
                    <span>Inquire</span>
                    <Icon size={13} />
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

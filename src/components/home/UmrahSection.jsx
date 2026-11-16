import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { umrahPackages } from "../../data/home";
import "./UmrahSection.css";

function UmrahCard({ pkg, onPlan }) {
  return (
    <article className="umrah-card">
      {/* Clean Framed Photo */}
      <div className="umrah-photo-frame">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className={`umrah-card-img umrah-img-${pkg.id}`}
        />
        <div className="umrah-photo-overlay" />
        <span className="umrah-photo-badge">{pkg.tier}</span>
        <span className="umrah-photo-duration">
          <Icon name="calendar" size={11} />
          <span>{pkg.duration}</span>
        </span>
      </div>

      {/* Card Body */}
      <div className="umrah-card-body">
        <h3 className="umrah-card-title">{pkg.title}</h3>

        <div className="umrah-location-line">
          <Icon name="pin" size={12} />
          <span>{pkg.makkahHotel} · {pkg.madinahHotel}</span>
        </div>

        <ul className="umrah-features-clean">
          {pkg.features.map((feat, i) => (
            <li key={i}>
              <Icon name="check" size={13} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="umrah-bottom-block">
          <div className="umrah-price-col">
            <span className="umrah-price-lbl">Starting From</span>
            <strong className="umrah-price-val">PKR {pkg.pricePkr}</strong>
          </div>

          <button
            type="button"
            className="umrah-inquire-btn-clean"
            onClick={() => onPlan(pkg)}
          >
            <span>Inquire Package</span>
            <Icon size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function UmrahSection({ onPlan }) {
  const [mobileIdx, setMobileIdx] = useState(0);
  const count = umrahPackages.length;

  const prevCard = () => {
    setMobileIdx((prev) => (prev - 1 + count) % count);
  };

  const nextCard = () => {
    setMobileIdx((prev) => (prev + 1) % count);
  };

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

        {/* 1. Desktop & Tablet: Clean 4-Card / 2-Column Grid */}
        <div className="umrah-desktop-grid">
          {umrahPackages.map((pkg) => (
            <UmrahCard key={pkg.id} pkg={pkg} onPlan={onPlan} />
          ))}
        </div>

        {/* 2. Mobile Screens: Exactly 1 Umrah Card at a Time with Forward & Backward Buttons */}
        <div className="umrah-mobile-carousel">
          <div className="mobile-carousel-controls">
            <button
              type="button"
              className="mobile-nav-btn mobile-nav-prev"
              onClick={prevCard}
              aria-label="Previous Umrah package"
            >
              <Icon name="chevronLeft" size={18} />
            </button>

            <div className="mobile-carousel-indicators">
              <span className="mobile-counter">
                {String(mobileIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <div className="mobile-dots">
                {umrahPackages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`mobile-dot ${i === mobileIdx ? "active" : ""}`}
                    onClick={() => setMobileIdx(i)}
                    aria-label={`Go to Umrah package ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mobile-nav-btn mobile-nav-next"
              onClick={nextCard}
              aria-label="Next Umrah package"
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>

          <div className="mobile-card-stage">
            <UmrahCard pkg={umrahPackages[mobileIdx]} onPlan={onPlan} />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="umrah-cta-footer">
          <div className="umrah-footer-left">
            <h4>Planning a Custom or VIP Family Umrah?</h4>
            <p>
              Direct Nusuk VIP ground handling, private GMC Yukon chauffeured transfers,
              and 5-Star clock tower suites tailored to your dates.
            </p>
          </div>
          <div className="umrah-cta-buttons">
            <a
              className="whatsapp-outline-cta"
              href="https://wa.me/923101816191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={15} />
              <span>WhatsApp Mutawwif</span>
            </a>
            <Button onClick={() => onPlan({ type: "Custom Umrah" })}>
              Request Custom Itinerary <Icon size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

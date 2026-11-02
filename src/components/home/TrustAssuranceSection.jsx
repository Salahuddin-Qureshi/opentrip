import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import "./TrustAssuranceSection.css";

const TRUST_PILLARS = [
  {
    id: "certified",
    icon: "shield",
    stat: "DTS Reg. #3941",
    title: "Government & IATA Certified",
    description:
      "Fully licensed by the Department of Tourist Services Pakistan and certified for international airline ticketing & Umrah facilitation.",
    highlight: "100% Legally Compliant",
  },
  {
    id: "pricing",
    icon: "sparkles",
    stat: "Zero Hidden Fees",
    title: "100% Price Transparency",
    description:
      "Every quotation includes government taxes, hotel resort fees, and confirmed itinerary vouchers with no surprise charges on checkout.",
    highlight: "Best Value Guaranteed",
  },
  {
    id: "visa",
    icon: "award",
    stat: "99.4% Success Rate",
    title: "Expert Visa Scrutiny",
    description:
      "Meticulous consular file preparation, biometric appointment assistance, and fast-track electronic visa issuance across 15+ nations.",
    highlight: "18,000+ Approved Visas",
  },
  {
    id: "support",
    icon: "clock",
    stat: "24/7 On-Ground Desk",
    title: "Dedicated Local Concierge",
    description:
      "Direct WhatsApp access to senior curators in Karachi with active on-ground support teams in Makkah, Madinah, Dubai, and Bangkok.",
    highlight: "Round-the-Clock Support",
  },
];

const METRICS = [
  { number: "12+", label: "Years of Excellence" },
  { number: "25,000+", label: "Happy Pakistani Travelers" },
  { number: "99.4%", label: "Visa Approval Record" },
  { number: "4.9 ★", label: "Client Satisfaction Rating" },
];

export default function TrustAssuranceSection() {
  return (
    <section className="page-section trust-assurance-section" id="trust-pillars">
      <div className="container">
        <SectionHeading
          eyebrow="Our Guarantees & Credentials"
          title="Crafted With Care. Backed by Unwavering Trust."
          centered
        >
          <p className="trust-subtitle">
            Whether you are embarking on sacred Umrah, a family holiday, or a global adventure,
            experience the assurance of Pakistan's trusted travel curators.
          </p>
        </SectionHeading>

        {/* 4 Clean Photo-Free Trust Pillars */}
        <div className="trust-pillars-grid">
          {TRUST_PILLARS.map((pillar) => (
            <div key={pillar.id} className="trust-card">
              <div className="trust-card-top">
                <span className="trust-icon-box">
                  <Icon name={pillar.icon} size={22} />
                </span>
                <span className="trust-stat-tag">{pillar.stat}</span>
              </div>
              <h3 className="trust-card-title">{pillar.title}</h3>
              <p className="trust-card-desc">{pillar.description}</p>
              <div className="trust-card-footer">
                <span className="trust-badge-pill">
                  <Icon name="check" size={12} />
                  <span>{pillar.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Counter Bar (Photo-free) */}
        <div className="trust-metrics-strip">
          {METRICS.map((item, idx) => (
            <div key={idx} className="trust-metric-item">
              <strong className="metric-number">{item.number}</strong>
              <span className="metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


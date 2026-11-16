import { useState, useMemo } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Icon from "../../components/common/Icon";
import { useNavigation } from "../../context/NavigationContext";
import "./FaqPage.css";

const FAQ_SECTIONS = [
  {
    id: "general",
    title: "General FAQs",
    icon: "info",
    desc: "Services, contact points, quotations & custom packages",
    items: [
      {
        q: "What services does OPEN TRIP provide?",
        a: "OPEN TRIP provides flight booking, hotel reservations, visa assistance, Umrah packages, and customized tour packages.",
      },
      {
        q: "How can I contact OPEN TRIP?",
        a: "You can contact us through the phone, WhatsApp, email, or inquiry form listed on our website. Our official phone numbers are 0317 8224101 / 102 / 103 / 104, WhatsApp at +92 310 1816191 and +92 301 0089009, and email at Info@opentrip.pk.",
      },
      {
        q: "How can I receive a quotation?",
        a: "Submit your requirements through the Get a Quote form or contact our team directly through our website, phone, or WhatsApp desk.",
      },
      {
        q: "Can I request a customized package?",
        a: "Yes. Share your preferred destination, travel dates, number of travellers, and budget, and our travel curators will tailor a custom itinerary for you.",
      },
    ],
  },
  {
    id: "flight",
    title: "Flight FAQs",
    icon: "plane",
    desc: "Routes, seat ticketing, rules & price validity",
    items: [
      {
        q: "Can I request a one-way or return flight?",
        a: "Yes. Mention your trip type and preferred dates in your inquiry, whether one-way, return (round trip), or multi-city.",
      },
      {
        q: "Are flight prices fixed?",
        a: "Airfares and seat availability may change until ticketing and are subject to airline/supplier conditions. We recommend prompt confirmation upon receiving your quotation.",
      },
    ],
  },
  {
    id: "hotel",
    title: "Hotel FAQs",
    icon: "home",
    desc: "Accommodations, room categories & family options",
    items: [
      {
        q: "Can I request a specific hotel?",
        a: "Yes. Mention the hotel name and dates; availability and rates will need confirmation from our suppliers.",
      },
      {
        q: "Can I request a family room?",
        a: "Share the number of adults, children, and each child's age so suitable room options and bedding configurations can be checked.",
      },
    ],
  },
  {
    id: "visa",
    title: "Visa FAQs",
    icon: "shield",
    desc: "Approval criteria, embassy regulations & timelines",
    items: [
      {
        q: "Does OPEN TRIP guarantee visa approval?",
        a: "No. The final decision is made by the relevant embassy, consulate, or immigration authority. OPEN TRIP assists with document preparation, checklist verification, and application submission guidance.",
      },
      {
        q: "Are visa requirements the same for every applicant?",
        a: "No. Requirements depend on destination, visa category, nationality, residence, and individual circumstances.",
      },
      {
        q: "Can visa fees and processing times change?",
        a: "Yes. They are set by the relevant authorities and may change without prior notice.",
      },
    ],
  },
  {
    id: "umrah-tour",
    title: "Umrah & Tour FAQs",
    icon: "star",
    desc: "Sacred pilgrimage, group departures & package inclusions",
    items: [
      {
        q: "Can I request an Umrah package for my preferred dates?",
        a: "Yes. Share your dates, departure city, duration, group size, and accommodation preferences.",
      },
      {
        q: "Can packages be customized?",
        a: "Subject to availability, we can discuss arrangements based on your requirements.",
      },
      {
        q: "Are all services included in the displayed package?",
        a: "Each quotation should clearly list inclusions and exclusions. Please review it before confirming your booking.",
      },
    ],
  },
];

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndices, setExpandedIndices] = useState({
    "general-0": true,
    "general-1": true,
  });
  const nav = useNavigation();

  const toggleAccordion = (key) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FAQ_SECTIONS.filter((sec) => {
      if (activeTab !== "all" && sec.id !== activeTab) return false;
      if (!q) return true;
      return (
        sec.title.toLowerCase().includes(q) ||
        sec.items.some(
          (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        )
      );
    }).map((sec) => {
      if (!q) return sec;
      return {
        ...sec,
        items: sec.items.filter(
          (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      };
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="faq-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero hero--service faq-hero-section" aria-labelledby="faq-page-heading">
        <img
          className="hero-image"
          src="/images/hero-airplane-right.jpg"
          alt="Frequently Asked Questions - OPEN TRIP"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "right 14%" }}
        />
        <div className="hero-shade" />
        <Header />

        <div className="hero-body container">
          <div className="hero-copy faq-hero-copy">
            <p className="eyebrow">
              Help Center &amp; Guidance <span>·</span> OPEN TRIP (PVT.) LTD.
            </p>
            <h1 id="faq-page-heading" className="faq-main-title">
              Frequently Asked Questions
            </h1>
            <p className="faq-hero-tagline">
              Clear Answers for Your Travel Planning
            </p>
            <p className="hero-description faq-hero-desc">
              Have questions about booking flights, reserving hotels, visa documentation, sacred Umrah packages, or bespoke tours? Browse our verified questions and answers below or contact our team directly.
            </p>

            {/* Quick Search Bar */}
            <div className="faq-search-bar">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Search questions (e.g. visa approval, hotel family room, Umrah dates)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-clear-btn"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN ACCORDION CONTENT */}
      <main className="faq-main-content">
        <div className="container faq-container">
          
          {/* Category Tabs */}
          <div className="faq-category-tabs">
            <button
              type="button"
              className={`faq-cat-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Categories
            </button>
            {FAQ_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className={`faq-cat-tab ${activeTab === sec.id ? "active" : ""}`}
                onClick={() => setActiveTab(sec.id)}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Sections List */}
          {filteredSections.length === 0 ? (
            <div className="faq-empty-state">
              <Icon name="info" size={32} />
              <h3>No matching questions found</h3>
              <p>Try searching with different keywords, or reach out to our team directly.</p>
              <button
                type="button"
                className="button button--primary"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
              >
                Clear Search &amp; Show All
              </button>
            </div>
          ) : (
            <div className="faq-sections-list">
              {filteredSections.map((sec) => (
                <div key={sec.id} className="faq-group-box">
                  <div className="faq-group-header">
                    <div className="faq-group-icon">
                      <Icon name={sec.icon} size={20} />
                    </div>
                    <div>
                      <h2>{sec.title}</h2>
                      <p>{sec.desc}</p>
                    </div>
                  </div>

                  <div className="faq-items-accordion">
                    {sec.items.map((item, idx) => {
                      const itemKey = `${sec.id}-${idx}`;
                      const isExpanded = !!expandedIndices[itemKey];

                      return (
                        <div
                          key={item.q}
                          className={`faq-item-card ${isExpanded ? "expanded" : ""}`}
                        >
                          <button
                            type="button"
                            className="faq-question-btn"
                            onClick={() => toggleAccordion(itemKey)}
                            aria-expanded={isExpanded}
                          >
                            <span className="faq-q-text">{item.q}</span>
                            <span className="faq-toggle-icon">
                              {isExpanded ? "−" : "+"}
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="faq-answer-panel">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="faq-footer-cta">
            <div className="faq-cta-text">
              <h3>Still Have Questions About Your Journey?</h3>
              <p>
                Our travel consultants are available to assist with personalized itineraries, flight options, and official visa guidance.
              </p>
            </div>
            <div className="faq-cta-actions">
              <button
                type="button"
                className="button button--primary"
                onClick={() => nav?.navigate("contact")}
              >
                Contact OPEN TRIP <Icon name="arrow" size={15} />
              </button>
              <a
                href="https://wa.me/923101816191"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline faq-wa-btn"
              >
                <Icon name="whatsapp" size={16} /> <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


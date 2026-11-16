import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import "./FaqSection.css";

const FAQ_ITEMS = [
  {
    q: "What services does OPEN TRIP provide?",
    a: "We provide flight booking, hotel reservations, visa assistance, Umrah packages, and customized tour packages.",
  },
  {
    q: "Can I request a customized package?",
    a: "Yes. Share your destination, travel dates, number of travellers, and preferences.",
  },
  {
    q: "Does OPEN TRIP assist with international flights?",
    a: "Yes, we assist with domestic and international flight booking inquiries.",
  },
  {
    q: "Can OPEN TRIP guarantee visa approval?",
    a: "No. Visa decisions are made solely by the relevant embassy, consulate, or immigration authority.",
  },
];

export default function FaqSection({ onPlan }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="page-section faq-section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="Home FAQ"
          title="Frequently Asked Questions"
          centered
        >
          <p className="faq-subtitle">
            Everything you need to know about planning flights, hotels, visas, Umrah, and customized trips with OPEN TRIP.
          </p>
        </SectionHeading>

        <div className="faq-container">
          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-number">0{idx + 1}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-q-icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d={isOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-aside-box">
            <div className="faq-aside-inner">
              <span className="faq-aside-badge">Still Have Questions?</span>
              <h3>Need personalized travel advice?</h3>
              <p>
                Our senior travel curators and Umrah advisors in Karachi are standing by to assist with your specific itinerary requirements.
              </p>
              <div className="faq-aside-actions">
                <a
                  href="https://wa.me/923101816191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-wa-link"
                >
                  <Icon name="whatsapp" size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="faq-quote-link"
                  onClick={onPlan}
                >
                  <span>Request a Quotation</span>
                  <Icon size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


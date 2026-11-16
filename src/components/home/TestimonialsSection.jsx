import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/home";

export default function TestimonialsSection() {
  const [start, setStart] = useState(0);

  const prev = () =>
    setStart((start + testimonials.length - 1) % testimonials.length);
  const next = () =>
    setStart((start + 1) % testimonials.length);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Real Experiences. Meaningful Journeys."
        >
          <div className="destinations-header-aside">
            <p className="destinations-lead-copy">
              We value every customer and continuously aim to make travel planning convenient and clear. Read feedback shared by our customers.
            </p>
            <div className="testimonial-controls">
              <button
                className="round-button"
                aria-label="Previous traveler review"
                onClick={prev}
              >
                <Icon name="chevronLeft" size={18} />
              </button>
              <button
                className="round-button"
                aria-label="Next traveler review"
                onClick={next}
              >
                <Icon name="chevronRight" size={18} />
              </button>
            </div>
          </div>
        </SectionHeading>

        <div className="testimonials-grid" aria-live="polite">
          {[0, 1, 2].map((offset) => {
            const item = testimonials[(start + offset) % testimonials.length];
            return <TestimonialCard key={item.name} testimonial={item} />;
          })}
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${start === idx ? "active" : ""}`}
              onClick={() => setStart(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="reviews-verification-banner">
          <span className="verification-pill">
            <span className="verification-check">✓</span>
            Verified Customer Feedback · Published only with authentic traveller permission
          </span>
        </div>
      </div>
    </section>
  );
}

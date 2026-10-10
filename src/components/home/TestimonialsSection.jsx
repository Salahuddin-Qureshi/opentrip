import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/home";
export default function TestimonialsSection() {
  const [start, setStart] = useState(0);
  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="Traveller stories"
          title="What travellers say about us."
        >
          <div className="testimonial-controls">
            <button
              className="round-button"
              aria-label="Previous traveller stories"
              onClick={() =>
                setStart(
                  (start + testimonials.length - 1) % testimonials.length,
                )
              }
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              className="round-button"
              aria-label="Next traveller stories"
              onClick={() => setStart((start + 1) % testimonials.length)}
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </SectionHeading>
        <div className="testimonials-grid" aria-live="polite">
          {[0, 1, 2].map((offset) => (
            <TestimonialCard
              key={testimonials[(start + offset) % testimonials.length].name}
              testimonial={testimonials[(start + offset) % testimonials.length]}
            />
          ))}
        </div>
        <p className="sample-caption">
          Illustrative traveller stories from the design preview.
        </p>
      </div>
    </section>
  );
}

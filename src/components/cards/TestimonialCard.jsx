export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-avatar" aria-hidden="true">
        {testimonial.initials}
      </div>
      <div>
        <blockquote>“{testimonial.quote}”</blockquote>
        <figcaption>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.type}</span>
        </figcaption>
      </div>
    </figure>
  );
}

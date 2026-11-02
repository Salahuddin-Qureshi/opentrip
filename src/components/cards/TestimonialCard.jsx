import Icon from "../common/Icon";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-stars" aria-label="5 out of 5 stars">
          {[...Array(testimonial.stars || 5)].map((_, i) => (
            <Icon key={i} name="star" size={16} />
          ))}
        </div>
        {testimonial.destination && (
          <span className="testimonial-destination-tag">
            <Icon name="pin" size={12} /> {testimonial.destination}
          </span>
        )}
      </div>

      <blockquote className="testimonial-quote">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="testimonial-author-row">
        <div className="testimonial-avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div className="testimonial-author-info">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.type}</span>
        </div>
      </figcaption>
    </figure>
  );
}

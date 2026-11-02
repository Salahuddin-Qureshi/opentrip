import { useState } from "react";
import Button from "../common/Button";
import Icon from "../common/Icon";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <span className="newsletter-eyebrow">
              <Icon name="sparkles" size={16} /> Exclusive Travel Updates
            </span>
            <h2>Get Inspired for Your Next Adventure.</h2>
            <p>
              Subscribe for seasonal airfare promotions, secret destination itineraries,
              visa policy alerts, and curated holiday discounts directly to your inbox.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <Icon name="pin" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                />
              </div>
              <Button type="submit">
                Subscribe <Icon size={16} />
              </Button>
            </form>

            {subscribed && (
              <div className="newsletter-success" role="status">
                <Icon name="check" size={16} />
                <span>Thank you for subscribing! Your email has been registered for upcoming travel releases.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


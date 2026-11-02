import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { flightRoutes } from "../../data/home";
import "./FlightsSection.css";

export default function FlightsSection({ onPlan }) {
  const [tripType, setTripType] = useState("round-trip");
  const [activeTab, setActiveTab] = useState("international");
  const [origin, setOrigin] = useState("Karachi (KHI)");
  const [destination, setDestination] = useState("Dubai (DXB)");

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    onPlan({
      destination: `${origin} to ${destination}`,
      tripType: `Flight (${tripType === "round-trip" ? "Round Trip" : "One Way"})`,
      notes: `Flight ticket inquiry from ${origin} to ${destination} (${tripType})`,
    });
  };

  return (
    <section className="page-section flights-section" id="flights">
      <div className="container">
        <div className="flights-header-wrap">
          <SectionHeading
            eyebrow="Air Ticketing & Reservation Desk"
            title="Ready for Your Next Flight?"
            centered
          >
            <p className="flights-subtitle">
              Direct GDS ticketing desk with transparent airline fares, 24-hour fare holds,
              extra baggage allowances, and hassle-free date change re-routing.
            </p>
          </SectionHeading>
        </div>

        {/* Flight Inquiry Box */}
        <div className="flight-planner-card">
          <div className="flight-type-toggles">
            <button
              type="button"
              className={`toggle-pill ${tripType === "round-trip" ? "active" : ""}`}
              onClick={() => setTripType("round-trip")}
            >
              Round-Trip
            </button>
            <button
              type="button"
              className={`toggle-pill ${tripType === "one-way" ? "active" : ""}`}
              onClick={() => setTripType("one-way")}
            >
              One-Way
            </button>
            <span className="flights-note-chip">
              <Icon name="shield" size={13} /> Official IATA Verified Agency Desk
            </span>
          </div>

          <form className="flight-quick-form" onSubmit={handleInquirySubmit}>
            <div className="flight-form-row">
              <label className="flight-field">
                <span className="flight-field-label">Departure From</span>
                <div className="flight-field-input">
                  <Icon name="plane" size={16} />
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="City or Airport (e.g. Karachi)"
                    required
                  />
                </div>
              </label>

              <label className="flight-field">
                <span className="flight-field-label">Going To</span>
                <div className="flight-field-input">
                  <Icon name="pin" size={16} />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="City or Airport (e.g. Dubai)"
                    required
                  />
                </div>
              </label>

              <label className="flight-field">
                <span className="flight-field-label">Departure Date</span>
                <div className="flight-field-input">
                  <Icon name="calendar" size={16} />
                  <input type="date" aria-label="Departure flight date" />
                </div>
              </label>

              {tripType === "round-trip" && (
                <label className="flight-field">
                  <span className="flight-field-label">Return Date</span>
                  <div className="flight-field-input">
                    <Icon name="calendar" size={16} />
                    <input type="date" aria-label="Return flight date" />
                  </div>
                </label>
              )}

              <label className="flight-field">
                <span className="flight-field-label">Cabin Class</span>
                <div className="flight-field-input">
                  <Icon name="users" size={16} />
                  <select defaultValue="Economy">
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                  </select>
                </div>
              </label>
            </div>

            <div className="flight-form-actions">
              <Button type="submit">
                Inquire Lowest Fares <Icon size={16} />
              </Button>
              <a
                className="whatsapp-flight-btn"
                href="https://wa.me/923101816191?text=Salam%20I%20need%20a%20flight%20ticket%20quotation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={16} />
                <span>Instant Desk Chat</span>
              </a>
            </div>
          </form>
        </div>

        {/* Route Highlights Tabs */}
        <div className="routes-showcase">
          <div className="routes-tab-bar">
            <button
              className={`routes-tab ${activeTab === "international" ? "active" : ""}`}
              onClick={() => setActiveTab("international")}
            >
              International Routes
            </button>
            <button
              className={`routes-tab ${activeTab === "domestic" ? "active" : ""}`}
              onClick={() => setActiveTab("domestic")}
            >
              Domestic Flights (Pakistan)
            </button>
          </div>

          <div className="routes-grid">
            {flightRoutes[activeTab].map((rt, idx) => (
              <div key={idx} className="route-card">
                <div className="route-cities">
                  <strong>{rt.from}</strong>
                  <span className="route-arrow">
                    <Icon name="arrow" size={16} />
                  </span>
                  <strong>{rt.to}</strong>
                </div>
                <div className="route-airlines">
                  <span>{rt.airlines}</span>
                </div>
                <div className="route-card-bottom">
                  <span className="route-duration">
                    <Icon name="clock" size={13} /> {rt.duration} avg
                  </span>
                  <button
                    type="button"
                    className="route-inquire-link"
                    onClick={() =>
                      onPlan({
                        destination: `${rt.from} to ${rt.to}`,
                        tripType: "Flight Booking",
                        notes: `Inquiry for route ${rt.from} to ${rt.to} via ${rt.airlines}`,
                      })
                    }
                  >
                    Check Seat Rate →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


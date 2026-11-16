import { useState } from "react";
import Dialog from "../../components/common/Dialog";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";
import { allDestinations } from "../../data/home";

const SERVICE_OPTIONS = [
  "Customized Tour Packages",
  "Umrah Packages",
  "Flight Booking",
  "Hotel Reservations",
  "Visa Assistance",
  "Transfers",
  "International Cruises",
];

export default function TripDialog({ trip, onClose, onDismiss }) {
  const [summary, setSummary] = useState(null);
  const handleClose = onClose || onDismiss;

  const defaultService =
    trip?.type ||
    (trip?.tier ? "Umrah Packages" : "Customized Tour Packages");

  return (
    <Dialog
      title={
        summary
          ? "Quotation Request Received!"
          : trip?.name || trip?.title || "Request a Quotation · OPEN TRIP"
      }
      onClose={handleClose}
    >
      {summary ? (
        <div className="trip-summary">
          <p style={{ fontWeight: 600, color: "var(--dark-navy, #012061)", marginBottom: "8px" }}>
            Thank you! Your quotation request has been prepared:
          </p>
          <dl>
            {Object.entries(summary).map(([key, value]) => (
              <div key={key}>
                <dt style={{ textTransform: "capitalize" }}>{key}</dt>
                <dd>{value || "Flexible"}</dd>
              </div>
            ))}
          </dl>
          <p style={{ fontSize: "12.5px", color: "#64748b", margin: "14px 0" }}>
            Our team will review your requirements and identify the most suitable options and transparent pricing for you.
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
            <a
              href={`https://wa.me/923101816191?text=${encodeURIComponent(
                `Hello OPEN TRIP, I would like to request a quotation:\nService: ${summary.service || "Travel"}\nDestination: ${summary.destination || "Flexible"}\nTravellers: ${summary.travellers || "2"}\nDate: ${summary.departure || "Flexible"}\nPreferences: ${summary.preferences || "None"}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                background: "#25d366",
                color: "#ffffff",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "13px",
              }}
            >
              <Icon name="whatsapp" size={16} />
              <span>Send via WhatsApp (+92 310 1816191)</span>
            </a>

            <Button onClick={handleClose} variant="outline" style={{ color: "var(--dark-navy)" }}>
              Close <Icon size={14} />
            </Button>
          </div>
        </div>
      ) : (
        <>
          {trip?.image && (
            <img
              className="dialog-image"
              src={trip.image}
              alt={trip.destination || trip.name || trip.title}
            />
          )}
          <p>
            {trip?.description ||
              "Share your requirements below and our team will prepare a tailored quotation based on confirmed availability."}
          </p>
          {trip?.highlights && (
            <ul className="trip-highlights">
              {trip.highlights.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <form
            className="planner-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSummary(Object.fromEntries(new FormData(event.currentTarget)));
            }}
          >
            <label>
              Service Required
              <select name="service" defaultValue={defaultService}>
                {SERVICE_OPTIONS.map((srv) => (
                  <option key={srv}>{srv}</option>
                ))}
              </select>
            </label>

            <label>
              Destination
              <select
                name="destination"
                defaultValue={trip?.destination || ""}
                required
              >
                <option value="" disabled>
                  Choose a destination
                </option>
                {allDestinations.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
                {trip?.destination &&
                  !allDestinations.some(
                    (item) => item.name === trip.destination,
                  ) && <option>{trip.destination}</option>}
                <option>Saudi Arabia (Makkah &amp; Madinah)</option>
                <option>United Arab Emirates</option>
                <option>Turkey</option>
                <option>Azerbaijan</option>
                <option>Malaysia</option>
                <option>Thailand</option>
                <option>Switzerland / Europe</option>
                <option>Flexible / Other Destination</option>
              </select>
            </label>

            <div className="planner-row">
              <label>
                Travellers
                <select name="travellers" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, "7+ Family / Group"].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label>
                Approximate Travel Date
                <input type="date" name="departure" />
              </label>
            </div>

            <label>
              Preferences &amp; Requirements
              <textarea
                name="preferences"
                placeholder="Hotel category, direct flights, special guidance, budget preferences…"
                rows="3"
              />
            </label>

            <Button type="submit">
              Submit Quotation Request <Icon size={16} />
            </Button>
            <small>
              Quotations and booking conditions will be shared clearly before any reservation is confirmed.
            </small>
          </form>
        </>
      )}
    </Dialog>
  );
}

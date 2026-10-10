import { useState } from "react";
import Dialog from "../../components/common/Dialog";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";
import { allDestinations } from "../../data/home";
export default function TripDialog({ trip, onClose }) {
  const [summary, setSummary] = useState(null);
  return (
    <Dialog
      title={
        summary
          ? "Your next chapter starts here."
          : trip?.name || "Where do you dream of going?"
      }
      onClose={onClose}
    >
      {summary ? (
        <div className="trip-summary">
          <p>Your trip idea is ready:</p>
          <dl>
            {Object.entries(summary).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value || "Flexible"}</dd>
              </div>
            ))}
          </dl>
          <p>
            No booking has been made. Save these preferences for when you’re
            ready to plan.
          </p>
          <Button onClick={onClose}>
            Keep Exploring <Icon />
          </Button>
        </div>
      ) : (
        <>
          {trip?.image && (
            <img
              className="dialog-image"
              src={trip.image}
              alt={trip.destination || trip.name}
            />
          )}
          <p>
            {trip?.description ||
              "Tell us a little about the journey you have in mind."}
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
                <option>Surprise me</option>
              </select>
            </label>
            <div className="planner-row">
              <label>
                Travellers
                <select name="travellers" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label>
                Departure date
                <input type="date" name="departure" />
              </label>
            </div>
            <label>
              Your kind of journey
              <textarea
                name="preferences"
                placeholder="Slow mornings, mountain trails, a special occasion…"
                rows="3"
              />
            </label>
            <Button type="submit">
              Create My Trip Idea <Icon />
            </Button>
            <small>
              This planner saves no personal data and does not make a
              reservation.
            </small>
          </form>
        </>
      )}
    </Dialog>
  );
}

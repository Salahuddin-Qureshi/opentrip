import { useEffect, useRef, useState } from "react";
import Icon from "../../components/common/Icon";
export default function TripDialog({ trip, onClose }) {
  const ref = useRef(null);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const previous = document.activeElement;
    const dialog = ref.current;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="trip-dialog"
      aria-label="Plan your Opentrip journey"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <button
        className="dialog-close"
        onClick={onClose}
        aria-label="Close trip planner"
      >
        <Icon name="close" />
      </button>
      {complete ? (
        <div className="plan-complete">
          <span className="success-icon">
            <Icon name="check" size={30} />
          </span>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>Your adventure starts here.</h2>
          <p>
            Your trip idea is ready. This is a frontend preview, so no request
            has been sent or booking made.
          </p>
          <button className="button dark" onClick={onClose}>
            Keep exploring <Icon />
          </button>
        </div>
      ) : (
        <>
          <p className="eyebrow">MAKE ROOM FOR A LITTLE WONDER</p>
          <h2>{trip ? trip.name : "Where do you dream of going?"}</h2>
          <p>
            {trip
              ? trip.description
              : "A few details to imagine a journey that feels like you."}
          </p>
          {trip && (
            <ul className="trip-highlights">
              {trip.highlights.map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setComplete(true);
            }}
          >
            <label>
              Your name
              <input
                name="name"
                placeholder="First and last name"
                required
                autoComplete="name"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>
            <div className="form-row">
              <label>
                Destination
                <select
                  name="destination"
                  defaultValue={trip?.name || ""}
                  required
                >
                  <option value="" disabled>
                    Choose a place
                  </option>
                  <option>Hunza Valley</option>
                  <option>Bali</option>
                  <option>Cappadocia</option>
                  <option>Surprise me</option>
                </select>
              </label>
              <label>
                Travelers
                <select name="travelers">
                  <option>1 traveler</option>
                  <option>2 travelers</option>
                  <option>3–5 travelers</option>
                  <option>6+ travelers</option>
                </select>
              </label>
            </div>
            <button className="button dark" type="submit">
              Create my trip idea <Icon />
            </button>
            <small>Just dreaming for now. No payment or reservation.</small>
          </form>
        </>
      )}
    </dialog>
  );
}

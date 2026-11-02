import Button from "../common/Button";
import Icon from "../common/Icon";
import { allDestinations } from "../../data/home";
import "./TripSearch.css";

function SearchField({ label, icon, children }) {
  return (
    <label className="search-field">
      <span className="search-label">{label}</span>
      <span className="search-input">
        <Icon name={icon} size={18} />
        {children}
      </span>
    </label>
  );
}

export default function TripSearch({ destinationRef, onSearch }) {
  return (
    <div className="search-wrap container" id="trip-search">
      <form
        className="trip-search"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(Object.fromEntries(new FormData(event.currentTarget)));
        }}
      >
        <SearchField label="Where to?" icon="pin">
          <input
            ref={destinationRef}
            name="destination"
            list="destination-options"
            placeholder="Search destination, city..."
            required
            autoComplete="off"
          />
          <datalist id="destination-options">
            {allDestinations.map((item) => (
              <option key={item.name} value={item.name} />
            ))}
          </datalist>
        </SearchField>

        <SearchField label="Departure Date" icon="calendar">
          <input name="date" type="date" aria-label="Departure date" />
        </SearchField>

        <SearchField label="Return Date" icon="calendar">
          <input name="returnDate" type="date" aria-label="Return date" />
        </SearchField>

        <SearchField label="Travellers" icon="users">
          <select name="travelers" defaultValue="2">
            <option value="1">1 Traveller</option>
            {[2, 3, 4, 5, 6, 8, 10].map((count) => (
              <option key={count} value={count}>
                {count} Travellers
              </option>
            ))}
          </select>
        </SearchField>

        <SearchField label="Trip Type" icon="grid">
          <select name="type">
            <option>Any type</option>
            <option>Adventure</option>
            <option>Beach</option>
            <option>Family</option>
            <option>Luxury</option>
            <option>Cultural</option>
          </select>
        </SearchField>

        <div className="search-submit-wrap">
          <Button type="submit">
            Find Journeys <Icon name="search" size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}

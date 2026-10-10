import Button from "../common/Button";
import Icon from "../common/Icon";
import { allDestinations } from "../../data/home";
import "./TripSearch.css";
function SearchField({ label, icon, children }) {
  return (
    <label className="search-field">
      <span className="search-label">{label}</span>
      <span className="search-input">
        <Icon name={icon} size={20} />
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
        <SearchField label="Where do you want to go?" icon="pin">
          <input
            ref={destinationRef}
            name="destination"
            list="destination-options"
            placeholder="Search destinations..."
            required
            autoComplete="off"
          />
          <datalist id="destination-options">
            {allDestinations.map((item) => (
              <option key={item.name} value={item.name} />
            ))}
          </datalist>
        </SearchField>
        <SearchField label="When?" icon="calendar">
          <input name="date" type="date" aria-label="Departure date" />
        </SearchField>
        <SearchField label="Travellers" icon="users">
          <select name="travelers" defaultValue="2">
            <option value="1">1 Traveller</option>
            {[2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} Travellers
              </option>
            ))}
          </select>
        </SearchField>
        <SearchField label="Travel Type" icon="grid">
          <select name="type">
            <option>Any type</option>
            <option>Adventure</option>
            <option>Beach</option>
            <option>Family</option>
            <option>Luxury</option>
            <option>Cultural</option>
          </select>
        </SearchField>
        <Button type="submit">
          Explore Trips <Icon name="search" size={17} />
        </Button>
      </form>
    </div>
  );
}

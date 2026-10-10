export default function FilterTabs({ options, value, onChange }) {
  return (
    <div
      className="filter-tabs"
      role="group"
      aria-label="Filter travel packages"
    >
      {options.map((option) => (
        <button
          key={option}
          aria-pressed={option === value}
          className={option === value ? "selected" : ""}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

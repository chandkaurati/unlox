const FILTERS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

function FilterBar({ filter, onChange, onClearCompleted, hasCompleted }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__tabs">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={filter === value ? "tab tab--active" : "tab"}
            onClick={() => onChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button type="button" className="link-btn" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
}

export default FilterBar;

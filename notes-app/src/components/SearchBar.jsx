function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search notes..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;

function CategoryFilter({ categories, selected, onChange }) {
  const options = ["All", ...categories];

  return (
    <div className="categories">
      {options.map((name) => (
        <button
          key={name}
          type="button"
          className={selected === name ? "tab tab--active" : "tab"}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

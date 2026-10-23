import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, dueDate);
    setText("");
    setDueDate("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        className="todo-form__date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="btn btn--primary" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;

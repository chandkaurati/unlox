import { useState } from "react";

const formatDate = (value) => {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const isOverdue = (task) => {
  if (!task.dueDate || task.completed) return false;
  const today = new Date().toISOString().slice(0, 10);
  return task.dueDate < today;
};

function TodoItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(task.text);
  const [draftDate, setDraftDate] = useState(task.dueDate);

  const startEditing = () => {
    setDraftText(task.text);
    setDraftDate(task.dueDate);
    setIsEditing(true);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const trimmed = draftText.trim();
    if (!trimmed) return;
    onEdit(task.id, trimmed, draftDate);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="todo-item todo-item--editing">
        <form className="edit-form" onSubmit={saveEdit}>
          <input
            type="text"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            autoFocus
          />
          <input
            type="date"
            value={draftDate}
            onChange={(e) => setDraftDate(e.target.value)}
          />
          <div className="edit-form__actions">
            <button type="submit" className="btn btn--primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className={task.completed ? "todo-item todo-item--done" : "todo-item"}>
      <input
        type="checkbox"
        className="todo-item__check"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.text}" as ${task.completed ? "pending" : "completed"}`}
      />

      <div className="todo-item__body">
        <span className="todo-item__text">{task.text}</span>
        <div className="todo-item__meta">
          <span className={task.completed ? "badge badge--done" : "badge"}>
            {task.completed ? "Completed" : "Pending"}
          </span>
          {task.dueDate && (
            <span
              className={
                isOverdue(task) ? "todo-item__due todo-item__due--late" : "todo-item__due"
              }
            >
              Due {formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>

      <div className="todo-item__actions">
        <button type="button" className="btn btn--ghost" onClick={startEditing}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn--danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

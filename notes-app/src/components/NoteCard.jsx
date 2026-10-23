const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

function NoteCard({ note, onEdit, onDelete }) {
  const { id, title, content, category, createdAt, updatedAt } = note;
  const wasEdited = updatedAt !== createdAt;

  return (
    <article className="note-card">
      <div className="note-card__top">
        <span className={`chip chip--${category.toLowerCase()}`}>{category}</span>
      </div>
      <h3 className="note-card__title">{title}</h3>
      {content && <p className="note-card__content">{content}</p>}
      <footer className="note-card__footer">
        <time className="note-card__time">
          {wasEdited ? `Edited ${formatTime(updatedAt)}` : formatTime(createdAt)}
        </time>
        <div className="note-card__actions">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => onEdit(id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn--danger"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </footer>
    </article>
  );
}

export default NoteCard;

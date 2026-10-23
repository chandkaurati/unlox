import NoteCard from "./NoteCard";

function NoteList({ notes, hasNotes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <p className="empty">
        {hasNotes
          ? "No notes match your search."
          : "No notes yet. Write your first one above."}
      </p>
    );
  }

  return (
    <section className="note-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default NoteList;

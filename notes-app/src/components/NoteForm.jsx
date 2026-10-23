import { useState, useEffect } from "react";

function NoteForm({ categories, editingNote, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category);
    } else {
      setTitle("");
      setContent("");
      setCategory(categories[0]);
    }
  }, [editingNote, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    const cleanContent = content.trim();
    if (!cleanTitle && !cleanContent) return;
    onSave({
      title: cleanTitle || "Untitled",
      content: cleanContent,
      category,
    });
    setTitle("");
    setContent("");
    setCategory(categories[0]);
  };

  const isEditing = Boolean(editingNote);

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit note" : "New note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write something..."
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="note-form__footer">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="note-form__actions">
          {isEditing && (
            <button type="button" className="btn btn--ghost" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="btn btn--primary"
            disabled={!title.trim() && !content.trim()}
          >
            {isEditing ? "Update" : "Add note"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default NoteForm;

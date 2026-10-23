import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

const STORAGE_KEY = "notes-app-notes";
const CATEGORIES = ["Personal", "Work", "Study", "Ideas"];

const loadNotes = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [editingNote, setEditingNote] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const saveNote = ({ title, content, category }) => {
    if (editingNote) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote.id
            ? { ...note, title, content, category, updatedAt: Date.now() }
            : note
        )
      );
      setEditingNote(null);
      return;
    }

    const now = Date.now();
    const newNote = {
      id: now,
      title,
      content,
      category,
      createdAt: now,
      updatedAt: now,
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (editingNote && editingNote.id === id) {
      setEditingNote(null);
    }
  };

  const startEdit = (id) => {
    const note = notes.find((n) => n.id === id);
    setEditingNote(note);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const query = search.trim().toLowerCase();

  const visibleNotes = notes.filter((note) => {
    const matchesCategory = category === "All" || note.category === category;
    const matchesSearch =
      !query ||
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="app">
      <header className="app-header">
        <h1>My Notes</h1>
        <p>{notes.length === 1 ? "1 note" : `${notes.length} notes`}</p>
      </header>

      <NoteForm
        categories={CATEGORIES}
        editingNote={editingNote}
        onSave={saveNote}
        onCancel={() => setEditingNote(null)}
      />

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={CATEGORIES}
          selected={category}
          onChange={setCategory}
        />
      </div>

      <NoteList
        notes={visibleNotes}
        hasNotes={notes.length > 0}
        onEdit={startEdit}
        onDelete={deleteNote}
      />
    </main>
  );
}

export default App;

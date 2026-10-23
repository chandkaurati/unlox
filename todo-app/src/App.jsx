import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import "./App.css";

const STORAGE_KEY = "todo-app-tasks";

const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, dueDate) => {
    const newTask = {
      id: Date.now(),
      text,
      dueDate,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, text, dueDate) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text, dueDate } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <main className="app">
      <header className="app-header">
        <h1>My Tasks</h1>
        <p>
          {pendingCount} pending · {completedCount} completed
        </p>
      </header>

      <TodoForm onAdd={addTask} />

      <FilterBar
        filter={filter}
        onChange={setFilter}
        onClearCompleted={clearCompleted}
        hasCompleted={completedCount > 0}
      />

      <TodoList
        tasks={visibleTasks}
        filter={filter}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </main>
  );
}

export default App;

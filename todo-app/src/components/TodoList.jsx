import TodoItem from "./TodoItem";

const EMPTY_MESSAGES = {
  all: "No tasks yet. Add your first one above.",
  pending: "Nothing pending. Nice work!",
  completed: "No completed tasks yet.",
};

function TodoList({ tasks, filter, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;

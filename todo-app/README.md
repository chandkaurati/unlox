# To-Do App

A simple, responsive task manager built with React and Vite.

## Features

- Add, edit, delete and complete tasks
- Pending / Completed status badge on every task
- Filter by All, Pending or Completed
- Optional due date, with overdue tasks highlighted
- Clear all completed tasks in one click
- Tasks saved in Local Storage, so they survive a refresh
- Responsive layout for mobile and desktop

## Technologies

- React 18 (functional components, `useState`, `useEffect`)
- Vite
- Plain CSS

## Project Structure

```
src/
  components/
    FilterBar.jsx
    TodoForm.jsx
    TodoItem.jsx
    TodoList.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Setup

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```

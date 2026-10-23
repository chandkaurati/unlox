# Notes App

A clean, responsive notes app built with React and Vite.

## Features

- Create, edit and delete notes
- Notes shown in a responsive card grid
- Categories: Personal, Work, Study, Ideas
- Filter notes by category
- Search across note titles and content
- Created / last edited timestamp on every note
- Notes saved in Local Storage, so they survive a refresh

## Technologies

- React 18 (functional components, `useState`, `useEffect`)
- Vite
- Plain CSS

## Project Structure

```
src/
  components/
    CategoryFilter.jsx
    NoteCard.jsx
    NoteForm.jsx
    NoteList.jsx
    SearchBar.jsx
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

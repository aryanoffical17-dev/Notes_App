
import React, { useState } from "react";

import PageHeader from "./components/PageHeader";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

import useNotes from "./hooks/useNotes";
import useDebounce from "./Hooks/usedebounced.js"

function App() {
  const { notes, addNote, deleteNote } = useNotes();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .includes(debouncedSearch.trim().toLowerCase())
  );

  const emptyMessage = debouncedSearch.trim()
    ? `No notes found for "${debouncedSearch}".`
    : "No notes yet. Create your first note!";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <PageHeader />

        <SearchBar
          search={search}
          onSearchChange={setSearch}
        />

        <NoteForm onAddNote={addNote} />

        <NoteList
          notes={filteredNotes}
          onDeleteNote={deleteNote}
          emptyMessage={emptyMessage}
        />
      </div>
    </div>
  );
}

export default App;


import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return (
      <p className="mt-6 text-center text-gray-500">
        No notes to display.
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          description={note.description}
          date={note.createdAt}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;

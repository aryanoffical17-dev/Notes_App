
import { useState, useEffect } from "react";
import { loadNotes, saveNotes } from "../utils/storage";

function useNotes() {
  const [notes, setNotes] = useState(() => loadNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (newNote) => {
    const noteWithDetails = {
      ...newNote,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [...prevNotes, noteWithDetails]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  return { notes, addNote, deleteNote };
}

export default useNotes;

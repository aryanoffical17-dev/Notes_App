
const STORAGE_KEY = "notes";

export function loadNotes() {
  try {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    return savedNotes ? JSON.parse(savedNotes) : [];
  } catch (error) {
    console.error("Could not load notes:", error);
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Could not save notes:", error);
  }
}

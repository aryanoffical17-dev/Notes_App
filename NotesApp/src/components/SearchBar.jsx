
import React from "react";

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="py-4">
      <div className="rounded-2xl border border-gray-300 bg-white px-5 py-4 shadow-sm">
        <label
          htmlFor="note-search"
          className="block px-3 py-2 text-sm"
        >
          Search
        </label>

        <input
          id="note-search"
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;

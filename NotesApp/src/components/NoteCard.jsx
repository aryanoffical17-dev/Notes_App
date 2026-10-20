
import React from "react";

function NoteCard({
  title,
  description,
  date,
  onDelete,
}) {
  return (
    <article className="w-full rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-6 text-gray-800">
          {title}
        </h3>

        <button
          type="button"
          className="rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100"
          aria-label="More options"
        >
          ⋮
        </button>
      </div>

      <p className="mb-5 text-sm font-normal leading-6 text-gray-600">
        {description}
      </p>

      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400">
          {date ? new Date(date).toLocaleDateString() : ""}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-50"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </footer>
    </article>
  );
}

export default NoteCard;

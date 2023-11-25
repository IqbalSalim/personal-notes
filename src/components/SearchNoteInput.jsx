import React from "react";

function SearchNoteInput({ searchNote }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={(event) => searchNote(event)}
      />
    </div>
  );
}

export default SearchNoteInput;

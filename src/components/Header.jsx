import React from "react";
import SearchNoteInput from "./SearchNoteInput";

function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchNoteInput searchNote={searchNote} />
    </div>
  );
}

export default Header;

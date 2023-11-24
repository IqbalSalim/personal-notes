import React from "react";
import NoteItem from "./NoteItem";

function ActiveNotes({ notesActive, showFormattedDate, onArcive, onDelete }) {
  if (notesActive.length !== 0) {
    return (
      <>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {notesActive.map((note) => (
            <NoteItem
              showFormattedDate={showFormattedDate}
              id={note.id}
              key={note.id}
              onDelete={onDelete}
              onArcive={onArcive}
              {...note}
              textButton="Arsipkan"
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Catatan Aktif</h2>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </>
  );
}

export default ActiveNotes;

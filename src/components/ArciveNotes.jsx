import React from "react";
import NoteItem from "./NoteItem";

function ArciveNotes({ notesArcive, showFormattedDate, onArcive, onDelete }) {
  if (notesArcive.length !== 0) {
    return (
      <>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {notesArcive.map((note) => (
            <NoteItem
              showFormattedDate={showFormattedDate}
              id={note.id}
              key={note.id}
              onDelete={onDelete}
              onArcive={onArcive}
              {...note}
              textButton="Pindahkan"
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Arsip</h2>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </>
  );
}

export default ArciveNotes;

import React from "react";
import NoteInput from "./NoteInput";
import ActiveNotes from "./ActiveNotes";
import ArciveNotes from "./ArciveNotes";

function Body({ addNote, notes, onDelete, onArcive, showFormattedDate }) {
  let notesActive = notes.filter((note) => note.archived === false);
  let notesArcive = notes.filter((note) => note.archived !== false);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <ActiveNotes
        notesActive={notesActive}
        showFormattedDate={showFormattedDate}
        onArcive={onArcive}
        onDelete={onDelete}
      />
      <ArciveNotes
        notesArcive={notesArcive}
        showFormattedDate={showFormattedDate}
        onArcive={onArcive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Body;

import React from "react";

function ArciveButton({ id, onArcive, textButton }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArcive(id)}>
      {textButton}
    </button>
  );
}

export default ArciveButton;

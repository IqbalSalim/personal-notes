import React from "react";

function RemoveButton({ id, onRemove }) {
  return (
    <button className="note-item__archive-button" onClick={() => onRemove(id)}>
      Arsipkan
    </button>
  );
}

export default RemoveButton;

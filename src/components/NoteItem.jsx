import React from "react";
import DeleteButton from "./DeleteButton";
import ArciveButton from "./ArciveButton";

function NoteItem({
  showFormattedDate,
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArcive,
  textButton,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArciveButton id={id} onArcive={onArcive} textButton={textButton} />
      </div>
    </div>
  );
}

export default NoteItem;

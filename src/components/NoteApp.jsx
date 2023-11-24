import React from "react";
import Header from "./Header";
import Body from "./Body";
import { getInitialData, showFormattedDate } from "../utils/index";
class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      tempNotes: getInitialData(),
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArciveHandler = this.onArciveHandler.bind(this);
  }

  onSearchNoteHandler($search) {
    console.log(new Date().toJSON());
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toJSON(),
            archived: false,
          },
        ],

        tempNotes: notes,
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: notes, tempNotes: notes });
  }

  onArciveHandler(id) {
    let notesUpdate = this.state.notes;
    let objIndex = this.state.notes.findIndex((obj) => obj.id == id);
    if (objIndex == -1) return false;
    notesUpdate[objIndex].archived = !notesUpdate[objIndex].archived;
    this.setState(() => {
      return {
        notes: notesUpdate,
        tempNotes: notesUpdate,
      };
    });
  }

  render() {
    return (
      <>
        <Header searchNote={this.onSearchNoteHandler} />
        <Body
          addNote={this.onAddNoteHandler}
          notes={this.state.tempNotes}
          onDelete={this.onDeleteHandler}
          onArcive={this.onArciveHandler}
          showFormattedDate={showFormattedDate}
        />
      </>
    );
  }
}

export default NoteApp;

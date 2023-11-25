import React from "react";
import Header from "./Header";
import Body from "./Body";
import { getInitialData, showFormattedDate } from "../utils/index";
class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArciveHandler = this.onArciveHandler.bind(this);
  }

  onSearchNoteHandler(event) {
    this.setState({
      search: event.target.value,
    });
    event.preventDefault();
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
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: notes });
  }

  onArciveHandler(id) {
    let notesUpdate = this.state.notes;
    let objIndex = this.state.notes.findIndex((obj) => obj.id == id);
    if (objIndex == -1) return false;
    notesUpdate[objIndex].archived = !notesUpdate[objIndex].archived;
    this.setState(() => {
      return {
        notes: notesUpdate,
      };
    });
  }

  render() {
    let re = "";
    if (this.state.search !== "" || this.state.search !== null) {
      re = new RegExp(`${this.state.search}` + ".*", "gi");
    }
    return (
      <>
        <Header searchNote={this.onSearchNoteHandler} />
        <Body
          addNote={this.onAddNoteHandler}
          notes={
            this.state.search !== "" || this.state.search !== null
              ? this.state.notes.filter((i) => i.title.match(re))
              : this.state.notes
          }
          onDelete={this.onDeleteHandler}
          onArcive={this.onArciveHandler}
          showFormattedDate={showFormattedDate}
        />
      </>
    );
  }
}

export default NoteApp;

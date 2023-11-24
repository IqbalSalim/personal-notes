import React from "react";
import Header from "./Header";
import { getInitialData, showFormattedDate } from "../utils/index";
class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onSearchNoteHandler($search) {
    event.preventDefault();
    console.log($search);
  }

  render() {
    return <Header searchNote={this.onSearchNoteHandler} />;
  }
}

export default NoteApp;

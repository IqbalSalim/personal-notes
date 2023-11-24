import React from "react";

class SearchNoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
    event.preventDefault();
    this.props.searchNote(this.state.search);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.search}
          onChange={this.onSearchChangeEventHandler}
        />
      </div>
    );
  }
}

export default SearchNoteInput;

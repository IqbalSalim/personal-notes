import React from "react";

class SearchNote extends React.Component {
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
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        value={this.state.search}
        onChange={this.onSearchChangeEventHandler}
      />
    );
  }
}

export default SearchNote;

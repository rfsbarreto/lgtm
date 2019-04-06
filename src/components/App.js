import React, { Component } from "react";

import giphy from "../apis/giphy";
import GifDetail from "./GifDetail";

export default class App extends Component {
  state = { gif: null };

  componentDidMount() {
    this.onClickRandom();
  }

  onClickRandom = async () => {
    const response = await giphy.get("/gifs/random");

    this.setState({ gif: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <GifDetail gif={this.state.gif} />

        <button
          className="ui inverted orange button"
          onClick={this.onClickRandom}
        >
          <i className="icon sync" />
          Generate random approve gif!
        </button>
      </div>
    );
  }
}

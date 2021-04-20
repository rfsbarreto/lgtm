import React, { Component } from "react";

import giphy from "../apis/giphy";
import {TAGS_ARRAY} from "../constants";
import GifDetail from "./GifDetail";



export default class App extends Component {
  state = { gif: null };

  componentDidMount() {
    this.onClickRandom();
  }

  onClickRandom = async () => {
    var tag = TAGS_ARRAY[Math.floor(Math.random() * TAGS_ARRAY.length)]
    const response = await giphy.get("/gifs/random", { params: { tag: tag } } );

    this.setState({ gif: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <GifDetail gif={this.state.gif} />

        <div className="ui divider" />

        <center>
          <button
            className="ui inverted primary button"
            onClick={this.onClickRandom}
            align="centered"
          >
            <i className="icon sync" />
            Generate random approve gif!
          </button>
        </center>
      </div>
    );
  }
}

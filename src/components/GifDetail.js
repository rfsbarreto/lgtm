import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class GifDetail extends Component {
  state = { copied: false };

  onCopyClick = () => {
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  render() {
    if (!this.props.gif) {
      return <div>Loading...</div>;
    }

    const {
      images: { fixed_width_downsampled },
      title,
      id,
    } = this.props.gif;

    // Hack to use the embeded GIF link 👀
    const githubEmbed = `![LGTM](https://media.giphy.com/media/${id}/giphy.gif)`;

    const copyButtonIcon = this.state.copied ? "check" : "clipboard";
    const copyText = this.state.copied ? "copied!" : "copy to clipboard";

    return (
      <div className="ui centered card">
        <div className="image">
          <img
            className="ui medium rounded image"
            src={fixed_width_downsampled.url}
            alt={title}
          />
        </div>
        <div className="content">
          <div className="description" style={{ wordWrap: "break-word" }}>
            {githubEmbed}
          </div>
        </div>
        <CopyToClipboard text={githubEmbed} onCopy={this.onCopyClick}>
          <div className="ui bottom attached button">
            <i className={`${copyButtonIcon} icon`} />
            {copyText}
          </div>
        </CopyToClipboard>
      </div>
    );
  }
}

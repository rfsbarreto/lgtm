import React from "react";

const GifDetail = ({ gif }) => {

  if (!gif) {
    return (
      <div className="ui placeholder">
        <div className="image" />
      </div>
    );
  }

  return (
    <div className="ui centered card">
      <div className="image">
        <img
          className="ui medium rounded image"
          src={gif.fixed_width_downsampled_url}
          alt={gif.title}
        />
      </div>
      <div className="content">
        <div className="description" style={{ wordWrap:"break-word" }}>
          {`![LGTM](${gif.image_original_url})`}
        </div>
      </div>
      <div className="ui bottom attached button copyToken" name="copyToken" value="copy">
        <i className="clipboard icon"></i>
        Copy
      </div>
    </div>
  );
};

export default GifDetail;

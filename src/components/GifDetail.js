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
    <div>
      <img
        className="ui medium rounded image"
        src={gif.fixed_width_downsampled_url}
        alt={gif.title}
      />
      <br />
      <p>{`![LGTM](${gif.image_original_url})`}</p>
    </div>
  );
};

export default GifDetail;

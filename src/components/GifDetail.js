import React from "react";

const GifDetail = ({ gif }) => {

  if (!gif) {
    return (
      <div className="ui placeholder">
        <div className="image" />
      </div>
    );
  }

  const cardDivStyle = {
    margin: '20px',
    span: '20px',
    align: 'center',
    width: `${gif.image_original_url.length}`
  };

  return (
    <div>
      <div class="ui centered card">
        <div class="image">
          <img
            className="ui medium rounded image"
            src={gif.fixed_width_downsampled_url}
            alt={gif.title}
          />
        </div>
        <div class="content">
          <p>{`![LGTM](${gif.image_original_url})`}</p>
        </div>
        <div class="ui bottom attached button copyToken" name="copyToken" value="copy">
          <i class="clipboard icon"></i>
          Copy
        </div>
      </div>
    </div>
  );
};

export default GifDetail;

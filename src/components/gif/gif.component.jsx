import React from "react";

import "./gif.styles.css";

const Gif = ({ gif }) => {
  const { title } = gif;
  const {
    images: {
      downsized_large: { url },
    },
  } = gif;

  return (
    <div className="col-12 col-sm-4 mb-4">
      <div className="card">
        <img className="card-img-top gif" src={url} alt={title} />

        <div className="card-body">
          <h6 className="card-title">
            {title ? title.toLowerCase() : "no title provided"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Gif;

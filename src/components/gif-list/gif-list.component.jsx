import React, { useContext } from "react";

import Gif from "../gif/gif.component";

import { GifContext } from "../../context/index";

const GifList = () => {
  const appContext = useContext(GifContext);
  const { searchGif, isFormSubmitted, gifList } = appContext;

  return (
    <div className="mt-5">
      {isFormSubmitted ? (
        <p className="mb-3 font-weight-bold">Result of '{searchGif}'</p>
      ) : (
        <p className="mb-3 font-weight-bold">Typing ...</p>
      )}

      <div className="row">
        {gifList.map((gif) => (
          <Gif key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default GifList;

import React, { useContext } from "react";

import { GifContext } from "../../context/index";

const SearchGif = () => {
  const appContext = useContext(GifContext);
  const { handleSearchGif, handleSubmitSearchGif } = appContext;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center">Search For a Gif!</h2>
        <p className="text-center text-muted mb-2">Get your favorite gif.</p>

        <form onSubmit={handleSubmitSearchGif}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="searchedGif"
              placeholder="Type somthing ..."
              onChange={handleSearchGif}
            />
          </div>

          <button className="btn btn-primary btn-sm btn-block" type="submit">
            Get The Gif
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchGif;

import React, { useState, useEffect } from "react";

const GifContext = React.createContext();

const GifProvider = (props) => {
  const apiKey = "gz5XpUxAKebvMbQv3exaumG1U09kc6TU";
  const apiUrl = "http://api.giphy.com/v1/gifs/search?q=";

  const [searchGif, setSearchGif] = useState("programming");
  const [gifList, setGifList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchGif = (event) => setSearchGif(event.target.value);

  const fetchGif = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${apiUrl}${searchGif}&api_key=${apiKey}&limit=12`
      );
      const searchedGif = await response.json();

      setGifList(searchedGif.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmitSearchGif = (event) => {
    event.preventDefault();
    fetchGif();
  };

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <GifContext.Provider
      value={{
        gifList,
        searchGif,
        isLoading,
        handleSearchGif,
        handleSubmitSearchGif,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
};

const GifConsumer = GifContext.Consumer;

export { GifContext, GifProvider, GifConsumer };

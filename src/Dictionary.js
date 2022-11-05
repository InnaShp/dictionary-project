import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null)

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f917000010000019d8a9e9115504db594c1fe0e8186ef44";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="hero">
            <h1>Dictionary</h1>
            <h2>What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input type="search" className="form-control" placeholder="Search" onChange={updateKeyword} />
            </form>
            <p className="mt-2">Suggested words: sunrise, yoga, book, behavior...</p>
        </div> 
        <div className="description">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
  
}
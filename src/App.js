import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import SongsAdded from './components/SongsAdded';

function App() {

  const [inputText, setInputText] = useState("");
  const [songs, setSongs] = useState([]);
  const [status, setSonglist] = useState("All songs");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(function () {
    switch (status) {
      case "SongsAdded":
        setFilteredSongs(songs.filter(song => song.added === true))
        break;

      case "NotAdded":
        setFilteredSongs(songs.filter(song => song.added === false))
        break;

      default:
        setFilteredSongs(songs);
        break;
    }
  }, [songs, status]);

  return (
    <div className="App">
      <header>
        <h1>Rosalify</h1>
        <img src="wr_disney.png" alt="William as disney with Nocco in my hand" />
      </header>
      <Form
        inputText={inputText}
        songs={songs}
        setSongs={setSongs}
        setInputText={setInputText}
        setSonglist={setSonglist}
      />

      <SongsAdded
        setSongs={setSongs}
        songs={songs}
        filteredSongs={filteredSongs}
      />
    </div>
  );
}

export default App;
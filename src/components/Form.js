import React from 'react';

function Form({ setInputText, songs, setSongs, inputText, setSonglist }) {
    function inputTextHandler(e) {
        setInputText(e.target.value);
    };

    function submitPlaylist(e) {
        e.preventDefault();
        setSongs([
            ...songs, { text: inputText, added: false, edited: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    function listForSong(e) {
        setSonglist(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="text-input"
            />

            <button onClick={submitPlaylist} className="add" type="submit">+</button>
            <div className="select">
                <select onChange={listForSong} name="filterSongs" className="filter-list">
                    <option value="all">All songs</option>
                    <option value="SongsAdded">Songs added</option>
                    <option value="NotAdded">Not added</option>
                </select>
            </div>
        </form>
    )
}

export default Form;
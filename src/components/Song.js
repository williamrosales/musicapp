import React from "react";
import { FaCheck, FaTrash, FaCog } from "react-icons/fa"

function Song({ text, song, songs, setSongs }) {

    function deleteSong() {
        setSongs(songs.filter((el) => el.id !== song.id));
    };

    function addSong() {
        setSongs(
            songs.map((item) => {
                if (item.id === song.id) {
                    return {
                        ...item,
                        added: !item.added,
                    };
                }
                return item;
            })
        );
    };

    function editSong() {
        setSongs(
            songs.map((item) => {
                if (item.id === song.id) {
                    return {
                        ...item,
                        edited: !item.edited,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="song-btns">
            <li className={`song-item ${song.added ? "added" : song.edited ? "edited" : ''} `}>{text}</li>
            <button onClick={addSong} className="complete-btn">
                <FaCheck />
            </button>

            <button onClick={deleteSong} className="trash-btn">
                <FaTrash />
            </button>


            <button onClick={editSong} className="edit-btn">
                <FaCog />
            </button>
        </div>
    );
};

export default Song;
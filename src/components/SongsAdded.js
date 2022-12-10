import Song from "./Song";

function SongsAdded({ songs, setSongs, filteredSongs }) {

    return (
        <div className="song-container">
            <ul className="song-list">
                {filteredSongs.map((song) => (
                    <Song
                        setSongs={setSongs}
                        songs={songs}
                        key={song.id}
                        song={song}
                        text={song.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SongsAdded;
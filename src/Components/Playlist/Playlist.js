import React from 'react';
import './Playlist.css';
// import '../Tracklist/Tracklist.js'


class Playlist extends React.Component() {
  

    render () {
        return (
        <div className="Playlist">
          <div>
            <input defaultValue= {"New Playlist"}/>
            {/* <TrackList/> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
          </div>
        </div>
        )
    };
};

export default Playlist;
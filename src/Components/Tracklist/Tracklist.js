import React from 'react';
import './Tracklist.css';
import '../Track/Track.js'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
             {this.props.tracks.map(track => {
                return <track track={track}
                              key={track.id}/>
             })}
            </div>
        );
    };
};

export default TrackList;
import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track.js'

class Tracklist extends React.Component {
    render() {
        return (
            <div className="Tracklist">
             {this.props.tracks.map(track => {
                return <track track={track}
                              key={track.id}/>
             })}
             <Track onAdd = {this.props.onAdd} onRemove={this.props.onRemove} isRemoval={true}/>
            </div>
        );
    };
};

export default Tracklist;
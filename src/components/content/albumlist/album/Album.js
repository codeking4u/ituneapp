import React from 'react';

function Album(props){
    return (
        <div key ={props.songData.trackId} id ={props.songData.trackId}>
            {props.songData.trackName}
        </div>
    );
}

export default Album;
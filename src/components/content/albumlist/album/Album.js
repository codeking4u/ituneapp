import React from 'react';
import './Album.css';

function Album(props){
    return (
        <div className="album-card" key={props.songData.trackId}>
                <div className="album-holder">
                    <div className="poster-holder">
                        <div className="image-poster " 
                             style={{backgroundImage: `url(${props.songData.artworkUrl100})`}}>
                         </div>
                    </div>
                    <div className="album-data">
                        <h2>{props.songData.artistName}</h2>
                        <div className="album-scrollable">
                            <p><b>Price </b>: ${props.songData.trackPrice}</p>
                            <p><b>Collection Name</b>: {props.songData.collectionName}</p>
                            {props.songData.shortDescription ? (
                                <p><b>Description </b>: {props.songData.longDescription} </p>) : null}
                        </div>
                    </div>

                </div>
            </div>

    );
}

export default Album;
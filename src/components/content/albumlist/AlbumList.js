import React from 'react';
import { useSelector } from 'react-redux';
import Album from './album/Album';

function AlbumList(){

    const stateData =  useSelector(state=> state);
    const content= (stateData.search.data.length==0)?  <div className="no-content">Welcome to the world of Music</div> : stateData.search.data.map(song=> <Album songData = {song}/>);
    return (
        content       
    );
}

export default AlbumList;
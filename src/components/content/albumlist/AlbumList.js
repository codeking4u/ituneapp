import React from 'react';
import { useSelector } from 'react-redux';
import Album from './album/Album';

function AlbumList(){

    const stateData =  useSelector(state=> state);
    return (
        stateData.search.data.map(song=> <Album songData = {song}/> )        
    );
}

export default AlbumList;
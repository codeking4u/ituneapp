import axios from 'axios';
import React,{ useRef } from 'react';
import { useDispatch } from 'react-redux';
import {searchAction} from '../../actions';

import AlbumList from './albumlist/AlbumList';


const URL = 'https://itunes.apple.com/search?term=';

function Content(){

    const searchContent= useRef();
    const dispatch = useDispatch();

    function searchSong(){
        axios.get(URL+searchContent.current.value).then( res => {
            dispatch(searchAction(res.data.results)); 
        }).catch(function (error) {
        console.log(error);
        });
        
    }
    return (
        <div>
            <input type="text" className="search" placeholder="Search your song" ref={searchContent}></input> 
            <button id="search-button" onClick={searchSong}>Search</button>
            <div className= "album-wrapper">
                <div className="single-album">
                    <AlbumList />
                </div> 
            </div>
        </div>
    );
}
export default Content;
import axios from 'axios';
import React,{ useRef } from 'react';
import { useDispatch } from 'react-redux';
import {searchAction} from '../../actions';

import AlbumList from './albumlist/AlbumList';
import './index.css';

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
    function searchKey(e){
        if(e.keyCode===13){
            searchSong();
        }
    }
    return (
        <div>
            <div className="searchWrap">
            <input type="text" className="search" placeholder="Search your song" onKeyDown= {searchKey} ref={searchContent} /> 
            <button id="search-button" onClick={searchSong}>Search</button>
            </div>
            <div className= "album-wrapper">
                <AlbumList />
            </div>
        </div>
    );
}
export default Content;
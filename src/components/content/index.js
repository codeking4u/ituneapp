import React,{ useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {searchAction} from '../../actions';;

function Content(){
    
    
    const searchContent= useRef();
    const dispatch = useDispatch();

    function searchSong(){
        console.log('Searching song... '+searchContent.current.value);
        //dispatch the action
        console.log(URL + searchContent.current.value);
        dispatch(searchAction(searchContent.current.value));
    }
    return (
        <div>
            <input type="text" className="search" placeholder="Search your song" ref={searchContent}></input> 
            <button id="search-button" onClick={searchSong}>Search</button>
        </div>
    );
}
export default Content;
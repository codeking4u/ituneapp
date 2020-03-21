import axios from 'axios';

const URL = 'https://itunes.apple.com/search?term=';
const initialState = {
    data: []

};
var config = {
    headers: {'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers':'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
            'Access-Control-Expose-Headers':'Content-Length,Content-Range',
}
};

const searchReducer = (state = initialState,action)=>{

    switch(action.type){
        case 'SEARCHSONGS':
            axios.get(URL+action.payload).then( res => console.log(res));
        default:
            return state;


    }
}
export default searchReducer;
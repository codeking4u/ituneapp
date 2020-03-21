
const initialState = {
    data: []

};

const searchReducer = (state = initialState,action)=>{

    switch(action.type){
        case 'SEARCHSONGS':
                return {
                    ...state,
                    data: action.payload
                }
        default:
            return state;


    }
}
export default searchReducer;
// import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER } from "../action/actionTypes"

import { ADD_IMG } from "./actions/actionsTypes";

const initialState = {
    data:{
        1:'1',
        2:'2'
    },
    images:[]
}

export const reducer = (state = initialState, action) => {

    console.log(action);

    switch(action.type){
        case ADD_IMG :
            return{
                ...state,
                images:[...state.images,{id:state.images.length,img:action.payload}]
            }
        default:
            return state
    }
}
// import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER } from "../action/actionTypes"

import * as Actions  from "./actions/actionsTypes";

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
        case Actions.ADD_IMG :
            return{
                ...state,
                images:[...state.images,{id:state.images.length?state.images[state.images.length-1]?.id+1:1,...action.payload}]
            }
        case Actions.DELETE_IMG:
            return{
                ...state,
                images:[...state?.images.filter((image)=>image?.id!==action?.payload?.id)]
            }
        default:
            return state
    }
}
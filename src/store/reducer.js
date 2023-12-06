// import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER } from "../action/actionTypes"

import { AddImg } from "./Functions/AddImg";
import { DeleteImg } from "./Functions/DeleteImg";
import { SetImgs } from "./Functions/SetImgs";
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
                images:[...AddImg({images:state.images,payload:action.payload})]
            }
        case Actions.DELETE_IMG:
            return{
                ...state,
                images: [...DeleteImg({images:state?.images,payload:action?.payload})]
            }
        case Actions.SET_IMGS: 
            return{
                ...state,
                images:[...SetImgs()]
            }
        default:
            return state
    }
}
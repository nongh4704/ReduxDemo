"use strict";

import {
    DELETE_TODO,
    ADD_TODO,
    CHECK_TODO
} from "../actions/index";
import {combineReducers} from "redux";

function todo(state = [],action){
    let nextState = state.slice();
    switch(action.type){
        case ADD_TODO: {
            if(nextState){
                nextState.push(atcion.data);
            }
            return nextState;
        };
        case DELETE_TODO : {
            nextState = nextState.splice(index,1);
            return nextState;
        };
        case CHECK_TODO: {
            if(nextState[index]) nextState[index].ischecked = !nextState[index].ischecked;
            return nextState;
        }
        default: return state;
    }
}

export const reducers = combineReducers({
    todo
});
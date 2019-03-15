"use strict";

import {
    DELETE_TODO,
    ADD_TODO,
    CHECK_TODO,
    ADDING_TODO
} from "../actions/index";
import {combineReducers} from "redux";

function todoList(state = [],action){
    let nextState = state.slice();
    switch(action.type){
        case ADD_TODO: {
            if(nextState){
                let newItem = {
                    id: nextState[nextState.length-1].id+1,
                    ischecked: false,
                    content: action.content
                };
                nextState.push(newItem);
            }
            return nextState;
        };
        case DELETE_TODO : {
            nextState.splice(action.index,1);
            return nextState;
        };
        case CHECK_TODO: {
            if(nextState[action.index]) nextState[action.index].ischecked = !nextState[action.index].ischecked;
            return nextState;
        }
        default: return state;
    }
}

function addingTodo(state = "", action){
    if(action.type == ADDING_TODO){
        return action.content;
    }else{
        return state;
    }
}

const reducers = combineReducers({
    todoList,
    addingTodo
});

export default reducers;
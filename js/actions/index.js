'use strict';

export const ADD_TODO = "addTodo";
export const DELETE_TODO = "deleteTodo";
export const CHECK_TODO = "checkTodo";

export function addTodo(data){
    return {
        type: ADD_TODO,
        data
    }
}

export function deleteTodo(index){
    return {
        type: DELETE_TODO,
        index
    }
}

export function checkTodo(index){
    return {
        type: CHECK_TODO,
        index
    }
}
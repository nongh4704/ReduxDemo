'use strict';

export const ADD_TODO = "addTodo";
export const DELETE_TODO = "deleteTodo";
export const CHECK_TODO = "checkTodo";
export const ADDING_TODO = "addingTodo";

export function addTodo(content){
    return {
        type: ADD_TODO,
        content
    }
}

export function addingTodo(content){
    return {
        type: ADDING_TODO,
        content
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
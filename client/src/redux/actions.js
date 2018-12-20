import {ADD_TODO, GET_TODOS, RECIEVE_TODOS, REQUEST_TODOS, TOGGLE_TODO} from "./actionTypes";
import axios from 'axios';

export const addTodo = (content, id) => ({
    type: ADD_TODO,
    payload: {
        content,
        id
    }


})

export const toggleTodo = () => ({
    type: TOGGLE_TODO
})

export const getTodos = () => ({
    type: GET_TODOS
})

export const receiveTodos = (json) => ({
    type: RECIEVE_TODOS,
    payload: {
        todos: json.data || [],
        recieveAt: Date.now()
    }
})

export const requestTodos = () => ({
    type: REQUEST_TODOS
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(requestTodos())
        const request = axios.get('http://localhost:3000/');
        return request.then(json => dispatch(receiveTodos(json)))
    }
}





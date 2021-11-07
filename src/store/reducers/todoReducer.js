import React from 'react'
import { toast } from "react-toastify"

const todoReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD_TODO':
            toast.success("Added to Todo...",{
                position: toast.POSITION.TOP_RIGHT
            });
            return [action.todo.data, ...state]
        case 'GET_TODO':
            return action.todos.data
        case 'UPDATE_TODO':
            toast.success("Updated...",{
                position: toast.POSITION.TOP_RIGHT
            });
            return state.map((todo) => 
                todo._id === action.todo.data._id ? action.todo.data : todo
            )
        case 'CHECK_TODO':
            toast.success("Status Changed...",{
                position: toast.POSITION.TOP_RIGHT
            });
            return state.map((todo) => 
                todo._id === action.todo.data._id ? action.todo.data : todo
            )   
        case 'DELETE_TODO':
            toast.success("Item Removed successfully...",{
                position: toast.POSITION.TOP_RIGHT
            });
            return state.filter((todo) => 
                todo._id !== action.id
            )              
        default:
            return state    
    }
}

export default todoReducer

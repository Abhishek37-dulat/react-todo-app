import React, { useState, useEffect } from 'react'
import './Todos.css'
import TodoLists from './TodoLists';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Scrollbars} from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getTodos } from '../../store/actions/todoActions'
import AddTodo from './AddTodo'

const Todos = ({ setTodo }) => {
    const trigger = useScrollTrigger();
    const dispatch = useDispatch();
    

    //-----------------------------------------------------
    const todos = useSelector((state) => state.todos)
    // console.log(todos)

    useEffect(()=>{
        dispatch(getTodos())
    },[dispatch])
    //-------------------------------
    

    return (
        <>   
            <div className="itemList">
            <Slide in={!trigger}>
            <div className="TodoLists"> 
                <div className="listtile">{todos.length > 0 ? "All Todos" : "Empty Todos"}</div>
                <Scrollbars style={{width:"100%", height:"100%"}}>
                    {todos && todos.map((todo)=>{
                        return(
                            <TodoLists todo={todo} key={todo._id} setTodo={setTodo} />
                        )
                    })}
               </Scrollbars>            
            </div>
            </Slide>
            </div>
            
        </>
    )
}

export default Todos

import React,{ useState} from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const Todo = () => {
    const auth = useSelector(state=> state.auth)
    const [ todo, setTodo] = useState({
        name: "",
        isComplete: false
    })

    if(!auth._id) return <Redirect to="/signin" />

    return (
        <div className="Todos">
         <AddTodo todo={todo} setTodo={setTodo}/>
         <Todos setTodo={setTodo}/>   
         </div>
    )
}

export default Todo

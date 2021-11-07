import React,{ useState} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../../store/actions/todoActions'

const AddTodo = ({todo, setTodo}) => {

    const dispatch = useDispatch();
    

    const handleSubmit = e => {
        e.preventDefault();

        if(todo._id){
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: "Abhishek",
                uid: todo.uid,
            }
            dispatch(updateTodo(updatedTodo, id));
        }
        else{
            const newTodo = {
                ...todo,
                date: new Date()
            }
            dispatch(addTodo(newTodo));
        }
        
        setTodo({
            name: "",
            isComplete: false
        })
    }

    return (
        <form onSubmit= {handleSubmit} className="inputfieldforitem">
                    <input type="text"  value={todo.name} onChange={(e)=>setTodo({...todo,name:e.target.value})} className="additem" placeholder="Add Todo..." />
                    <div className="addicons">
                        <Fab color="primary"  aria-label="add" onClick={handleSubmit}>
                           <AddIcon />
                        </Fab>
                    </div>
                </form>
    )
}

export default AddTodo

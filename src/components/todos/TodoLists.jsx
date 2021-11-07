import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './TodoLists.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import moment from 'moment';
import { checkTodo, deleteTodo } from '../../store/actions/todoActions'


const TodoLists = ({todo, setTodo}) => {
    const dispatch = useDispatch();
    const handleUpdateClick = () => {
        setTodo(todo);

        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }

    const handleCheck = (id) =>{
        dispatch(checkTodo(id))
    }

    const handleDelete = (id) =>{
        dispatch(deleteTodo(id))
    }


    return (
        <>

        <div className="Listitem"> 
        
        <div className="itemleft">
             <div className="itemname">
             {todo.isComplete ? 
                 (<span style={{textDecoration:"line-through"}}>{todo.name}</span>)
                 
                 :
                 <span style={{textDecoration:"none"}}>{todo.name}</span>
             } 
             </div>
             <div className="itemauthor">
                 <span>Author:</span> <span>Abhishek</span>
             </div>
             <div className="itemdate">
                 <span>Date:</span><span style={{marginLeft: "4%"}}>{moment(todo.date).fromNow()}</span>
             </div>
         </div>
        <div className="itemright">
            <div className="righticons">
                <div className="right1" onClick={()=> handleCheck(todo._id)}>
                {todo.isComplete ? 
                    <CheckCircleIcon className="checkicon" style={{color:`green`,width:"100%",marginTop:"15%", cursor: "pointer", fontSize:"30px"}} />
                    :
                    <CheckCircleIcon className="checkicon" style={{color:`white`,width:"100%",marginTop:"15%", cursor: "pointer", fontSize:"30px"}} />
                }     
                </div>
                <div className="right2">
                    <EditIcon onClick={()=>handleUpdateClick()} className="checkicon" style={{color:"yellow",width:"100%",marginTop:"15%", cursor: "pointer", fontSize:"30px"}} />
                </div>
                <div className="right3">
                    <DeleteForeverIcon onClick={()=>handleDelete(todo._id)} className="checkicon" style={{color:"red",width:"100%",marginTop:"15%", cursor: "pointer", fontSize:"30px"}} />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default TodoLists

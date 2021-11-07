import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css';

import { signOut } from '../../store/actions/authAction';

const NavBar = () => {
  const state = useSelector(state=> state);
  const auth = useSelector(state=> state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleSignOut = () =>{
    dispatch(signOut());
    history.push("/signin");
  }
  console.log(state)
    return (
        <div className="navbar">
         <div className="navTitle">
           <Link className="Titlelink" to="/"> TODO APP</Link>
         </div>
         {/* {auth._id ? (<div className="Todoby">Logged in as {auth.name}</div>): (<></>) } */}
         
         <div className="navLinks">
         {auth._id ? (
           <div className="navLinks0" onClick={handleSignOut}>SignOut </div>
           ):(
            <>
            <Link className="navLinks1" to="/Signin"> SignIn </Link>
            <Link className="navLinks2" to="/Signup">SignUp </Link>
            </> 
           )}   
         </div>
        </div>
    )
}

export default NavBar

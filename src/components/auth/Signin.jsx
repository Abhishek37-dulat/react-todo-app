import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Redirect} from "react-router-dom"

import { signIn } from '../../store/actions/authAction'

import './Signin.css'

const Signin = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [ creds, setCreds ] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(signIn(creds));
        setCreds({
            email: "",
            password: "",
        });
    };

    if(auth._id) return <Redirect to="/" />

    return (
        <div className="signin">
            <div className="signinTitle">Signin</div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <span>Email:</span>
                    <input 
                        type="text" 
                        className="inputemail" 
                        placeholder="Enter Email address"
                        value={creds.email}
                        onChange={(e) => setCreds({...creds, email: e.target.value})}
                        />
                </div>
                <div className="password">
                    <span>Password:</span> 
                    <input 
                        type="text" 
                        className="inputpassword" 
                        placeholder="Enter Password"
                        value={creds.password} 
                        onChange={(e) => setCreds({...creds, password: e.target.value})}
                        />
                    <div className="forgotpassword">forgot password</div>
                </div>
                <button type="submit" className="submitsignin" onClick={() => handleSubmit}>Login</button>                
            </form>            
            <div className="movetosignup">don't an account?</div>
        </div>
    )
}

export default Signin

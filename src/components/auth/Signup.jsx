import React, { useState } from 'react'
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../../store/actions/authAction"
import { Redirect } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state=> state.auth)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({
            name: "",
            email: "",
            password: "",
        })
    }

    if(auth._id) return <Redirect to="/"/>

    return (
        <div className="signup">
            <div className="signupTitle">Signup</div>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <span>Name:</span>
                    <input type="text" 
                           className="inputname" 
                           placeholder="Enter Your Name"
                           value={user.name}
                           onChange={(e) => setUser({...user, name: e.target.value})}
                           />
                </div>
                <div className="email">
                    <span>Email:</span>
                    <input type="text" 
                           className="inputemail" 
                           placeholder="Enter Email address"
                           value={user.email}
                           onChange={(e) => setUser({...user, email: e.target.value})}                           
                           />
                </div>
                <div className="password">
                    <span>Password:</span> 
                    <input type="text" 
                           className="inputpassword" 
                           placeholder="Create Password"
                           value={user.password}
                           onChange={(e) => setUser({...user, password: e.target.value})}
                           />
                </div>
                <button 
                    type="submit" 
                    className="submitsignup"
                    onClick={handleSubmit}
                >
                    Register
                </button>                
            </form>            
            <div className="movetosignin">already have an account?</div>
        </div>
    )
}

export default Signup

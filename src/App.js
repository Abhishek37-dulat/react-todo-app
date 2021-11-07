import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css';
import Todo from './components/todos/Todo';
import NavBar from './components/navBar/NavBar';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import { loadUser } from './store/actions/authAction'

import { ToastContainer, useToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Todo}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/signup" exact component={Signup}/>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;

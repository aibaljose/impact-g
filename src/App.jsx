import Navabar from "./componets/Navbar"
import Task from "./componets/task_list"
import Gitabout from "./pages/gitabout"
import Page from "./pages/Datae"
import "../src/index.css"
import Dashboard from "./pages/dashboard"
import React, { useState } from 'react';
import Signup from './componets/signup';
import Login from './componets/login';
import Jschallenge from "./pages/jschallenge"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from './firebase';
import Winnerdash from "./pages/winnerdash"
import Home from "./pages/home"
import Stylecard from "./pages/stylecard"
import pythonchallenge from "./pages/pythonchallenge"




const App = () => {
  const [loggedIn, setLoggedIn] = useState(true); // State variable to track authentication state

  // Listener for authentication state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      setLoggedIn(true);
    } else {
      // User is signed out
      setLoggedIn(false);
    }
  });

  return (
    <Router>
    <div className="app">
      <Navabar loggedIn={loggedIn} />
      <Routes >
      <Route path="/" exact Component={Home} />
        <Route path="/challenges"  element={<Task loggedIn={loggedIn}/>} />
        <Route path="/git" Component={Gitabout} />
        <Route path="/data" Component={Page} />
        <Route path="/login" Component={Login} />
        <Route path="/stylecard" Component={Stylecard} />
        <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>}  />
        <Route path="/winnerdash" element={<Winnerdash loggedIn={loggedIn}/>} />
        <Route path="/js" Component={Jschallenge} />
        <Route path="/python" Component={pythonchallenge} />
        <Route path="/signup" element={<Signup  />  } />
   
      </Routes>
    
    </div>
    </Router>
  )
}

export default App

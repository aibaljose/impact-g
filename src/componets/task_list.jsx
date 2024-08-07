
import React, { useState, useEffect } from 'react';
import Task from "./task"
import "./CSS/common.css"
import datalist from "../assets/data.json"
import { Link } from "react-router-dom"

const task_list = ({loggedIn}) => {


  console.log(datalist[0].name);

  return (
  


    <div className="header">


{loggedIn && (
<>
<div className="text">
  
        <h2> {loggedIn} A game To learn Skills with <br></br>  challenges <span> powered by impact</span></h2>
        {/* <p>Welcome to SkillQuest, the ultimate game designed to help you learn and master new skills through engaging and impactful challenges.<br></br> Whether you're looking to enhance your coding abilities, develop your artistic talents, or improve your problem-solving techniques.</p> */}
      </div>

      <div className="container">
        <Link to="/git" >
          <Task name="git" no="git & github" dis="Challenge 1" />
        </Link>

        <Link to="/js" >
          <Task name="javascript" no="Advanced JS" dis="Challenge 2" />
        </Link>

        <Link to="/python" >
          <Task name="Python" no="learn.py" dis="Challenge 3" />
        </Link>
        <Link to="/rdbms" >
        <Task name="RDBMS" no="SQL & DB" dis="Challenge 4" />
        </Link>
        
        <Task name="Web Design" no="HTML & CSS" dis="Challenge 5" />
        <Task name="Cyber Security" no="Ethical hacking" dis="Challenge 6" />
      </div>

</>


)}
{loggedIn || (<div className='loginmess'>Please Login</div>)}
    
      




    </div>
  )
}

export default task_list

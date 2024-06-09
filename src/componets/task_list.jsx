
import React, { useState, useEffect } from 'react';
import Task from "./task"
import "./CSS/common.css"
import datalist from "../assets/data.json"
import {Link} from "react-router-dom"

const task_list = () => {
 

  console.log(datalist[0].name);

  return (

    
<div className="header">
<div className="text">
  <h2>A game To learn Skills with <br></br>  challeges <span> powered by impact</span></h2>
  <p>Welcome to SkillQuest, the ultimate game designed to help you learn and master new skills through engaging and impactful challenges.<br></br> Whether you're looking to enhance your coding abilities, develop your artistic talents, or improve your problem-solving techniques.</p>
</div>

<div className="container">
<Link to="/git" >
<Task name="git" no ="git & github" dis="Challange 1" />
</Link>

<Task name="React" no ="0" dis="Challange 2"/>
<Task name="soon" no ="0" dis="Challange 3"/>
<Task name="soon" no ="0" dis="Challange 4"/>
<Task name="soon" no ="0" dis="Challange 5"/>
<Task name="soon" no ="0" dis="Challange 6"/>
  </div>

</div>
  )
}

export default task_list

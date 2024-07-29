import React from 'react'
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { ref, set, push, update } from 'firebase/database';

const rdbms = () => {


    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [tick, settick] = useState(false);

    useEffect(() => {
        let timer;
        if (tick) {
            timer = setTimeout(() => {
                settick(false);
            }, 3000);
        }


        return () => clearTimeout(timer);
    }, [tick]);



    const handleChange = (event) => {
        setInputValue(event.target.value);
    };




    const handleSubmit = (event) => {
        event.preventDefault();
        const user = auth.currentUser;
        const uid = user.uid;
        const databasePath = `users/${uid}/data9`;
        const databaseRef = ref(db, databasePath);
        set(databaseRef, { "RDBMS": inputValue });

        settick(true)

    };

    return (
        <div className='challege_box'>
            {tick && <div className="modal1">
                submitted
            </div>}
            <div className="challege1">
                <h1>Build a Mario Database - RDBMS</h1>
               

            </div>
            <div className="challege1" >
                
            In this  course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.

This course runs in a virtual Linux machine using Gitpod. Follow these instructions to start the course:
<br>
</br>
<br>
</br><div className="challege1"  style={{width:"90%"}}>

    <h1>Learn Relational Databases by Building a Mario Database
    </h1>
    <p>Visit FreeCodeCamp:</p>
<p>Open your web browser and go to <a style={{color:"blue"}} href="https://www.freecodecamp.org/learn/relational-database/learn-relational-databases-by-building-a-mario-database/build-a-mario-database" target="_blank">FreeCodeCamp's Relational Database Course</a>.</p>

<h2>Sign Up / Log In:</h2>
<p>If you don't have a FreeCodeCamp account, sign up for a free account.</p>
<p>If you already have an account, log in using your credentials.</p>

<h2>Navigate to the Course:</h2>
<p>Once logged in, navigate to the "Relational Database" section.</p>
<p>Select the "Build a Mario Database" project from the list of courses.</p>

<h2>Complete the Course:</h2>
<p>Follow the instructions provided in the course to build the Mario database.</p>
<p>Make sure to complete all the steps and tasks outlined in the course.</p>

<h2>Take a Screenshot:</h2>
<p>After completing the course, take a screenshot of your completion certificate or the final project screen.</p>

</div>

                <div className="input_area">

                    <input type="text" className="inp" value={inputValue} onChange={handleChange} placeholder="Paste Here" />


                    <div className="btn" onClick={handleSubmit} >Submit</div>
                </div>
            </div>






        </div>
    )
}

export default rdbms

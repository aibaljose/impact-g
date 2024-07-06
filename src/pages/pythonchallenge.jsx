import React from 'react'
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { ref, set, push, update } from 'firebase/database';
const pythonchallenge = () => {

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
        const databasePath = `users/${uid}/data8`;
        const databaseRef = ref(db, databasePath);
        set(databaseRef, { "python1": inputValue });

        settick(true)

    };

    

    return (
        <div className='challege_box'>
            {tick && <div className="modal1">
                submitted
            </div>}
            <div className="challege1">
                <h1>HackerRank Challenge: Earn a 2-Star Badge in Python</h1>
                <div className="loic">
                <img src="https://www.python.org/static/img/python-logo@2x.png" alt="" />
                <img src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg" alt="" />
                </div>
               
            </div>
            <div className="challege1" >
            <h1>1.Create an Account on HackerRank </h1>
                <ol className='listv'>
                    <li>Once logged in, go to the "Practice" section.</li>
                    <li>
                        Fill in the required details (you can use your email or sign up using Google, Facebook, LinkedIn, or GitHub).
                    </li>
                    <li>Verify your account via the email sent to you.</li>
                </ol>
                
                <h1>2.Navigate to Python Challenges</h1>
                <ol className='listv'>
                    <li>Go to HackerRank.</li>
                    <li>
                        Select "Python" from the list of domains.
                    </li>
                    <li>Start with the "Python Introduction" challenges.</li>
                    Complete the Following Python Introduction Challenges:
                    <br />
                    <br />
                    

                    
                    <ol className='listvv' >
                        <li>Say "Hello, World!" With Python</li>
                        <li>Python If-Else</li>
                        <li>Arithmetic Operators</li>
                        <li>Python: Division</li>
                        <li>Loops</li>
                        <li>Write a Function</li>
                        <li>Print Function</li>
                    </ol>








                </ol>
                <p>Share your profile eg :https://www.hackerrank.com/profile/aibaljosej</p>


                <div className="input_area">

                    <input type="text" className="inp" value={inputValue} onChange={handleChange} placeholder="Paste Here" />


                    <div className="btn" onClick={handleSubmit} >Submit</div>
                </div>
            </div>






        </div>
    )
}

export default pythonchallenge

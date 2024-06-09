import "../pages/gitabout.css"

import React, { useState,useEffect } from 'react';
import { db, auth } from '../firebase'; // Import the Firebase database module
import { ref, set, push, update } from 'firebase/database';
const gitabout = () => {
  // Create a reference to the database path



  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [tick, settick] = useState(false);

  useEffect(() => {
    let timer;
    if (tick) {
      timer = setTimeout(() => {
        settick(false);
      }, 3000); // 5000 milliseconds = 5 seconds
    }// 5000 milliseconds = 5 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [tick]);



  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setInputValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setInputValue5(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data1`; 
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege1": inputValue });
    
    settick(true)
   
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data2`; // Create a path based on the UID
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege2": inputValue2 });
    settick(true)
    // You can perform any further action with the input value
    // For example, you can send it to the server or update the state
  };


  const handleSubmit3 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data3`; // Create a path based on the UID
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege3": inputValue3 });
    settick(true)
    // You can perform any further action with the input value
    // For example, you can send it to the server or update the state
  };

  const handleSubmit4 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data4`; // Create a path based on the UID
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege4": inputValue4 });
    settick(true)
    // You can perform any further action with the input value
    // For example, you can send it to the server or update the state
  };

  const handleSubmit5 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data5`; // Create a path based on the UID
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege5": inputValue5 });
       console.log('Input value:', inputValue5);
       alert("Submitted")
       settick(true)
    // You can perform any further action with the input value
    // For example, you can send it to the server or update the state
  };

  return (

    

    <div className="challege_box">
         {tick && <div className="modal1">
        submitted
      </div> }
      
      <div className="challege1">
        <div className="banner ">
          Beginner Level
        </div>
        <h1 className="header1">Beginner: Introduction to <br></br>GitHub And Git </h1><span><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg></span>
        <p>This learning path provides an overview of github concepts, from the fundamentals</p>
      </div>
      <div className="challege1">
        <h1>Beginner: Create Account <br></br> Github Profile</h1>
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <p>Create a Github profile at <a href="https://github.com/">github</a> Visit GitHub's sign-up page and create an account by providing your username, email address, and password. Enter Profile link Below</p>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue} onChange={handleChange} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit}>Submit</div>
       
         
        </div>

      </div>


      <div className="challege1">
        <h1> Create a GitHub Repository</h1>
        <p>Create a GitHub repository named "impact-tsk" provide link of the repository below</p>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue2} onChange={handleChange2} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit2}>Submit</div>
        </div>

      </div>

      <div className="challege1">
        <h1>Download Git on you Computer</h1>
        <p>install git on your computer and push a simple text file to your repository named "impact-tsk"<br></br> provide link to the repo file</p>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue3} onChange={handleChange3} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit3}>Submit</div>
        </div>

      </div>
      <div className="challege1">
        <h1>Create Portifolio Page</h1>
        <p>Create simple Portifolio page and push it to the repository named "impact-tsk"</p>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue4} onChange={handleChange4} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit4}>Submit</div>
        </div>

      </div>
      <div className="challege1">
        <h1>Publish page</h1>
        <p>
          <ol className="lis">
          <li> open your repository named "impact-tsk"</li>
        <li> open settings from the top tab"</li>
        <li> Select pages from sidebar "</li>
        <li> Under Branch Section Select <b>"main"</b> and click save</li>
          </ol>
        
       
         
        
         </p>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue5} onChange={handleChange5} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit5}>Submit</div>
        </div>

      </div>

    </div>




  )
}

export default gitabout

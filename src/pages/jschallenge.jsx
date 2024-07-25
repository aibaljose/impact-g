import React from 'react'
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { ref, set, push, update } from 'firebase/database';
const jschallenge = () => {

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
  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data6`;
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege6": inputValue });

    settick(true)

  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data7`;
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege7": inputValue1 });

    settick(true)

  };




  return (
    <div className='challege_box'>
      {tick && <div className="modal1">
        submitted
      </div>}
      <div className="challege1" >
        <h1>Palindrome Checker in JavaScript </h1>
        <p>Build A Palindrome Checker in HTML CSS & JavaScript & push it to the repository named "Palindrome-checker" <br></br> (Create the repository)</p>
        <iframe width="" height="400" src="https://www.youtube.com/embed/dLU2wN8P6yY?si=PVVfrFUck5t-tAnL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue} onChange={handleChange} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit} >Submit</div>
        </div>
      </div>



      <div className="challege1" >
        <h1>AI Image Generation Website</h1>
        <p>Build An AI Image Generation Website in HTML CSS and JavaScript | Like Midjourney and DALL-E & push it to the repository named "ai-image" <br></br> (Create the repository)</p>
        <iframe width="" height="400" src="https://www.youtube.com/embed/fA_tWwPMapM?si=M7PpnB4wBPvy0QZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue1} onChange={handleChange1} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit1} >Submit</div>
        </div>
      </div>

    </div>
  )
}

export default jschallenge

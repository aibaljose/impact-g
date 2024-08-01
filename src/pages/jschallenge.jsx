import React from 'react'
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { ref, set, push, update } from 'firebase/database';
const jschallenge = () => {

  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

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
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
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
  const handleSubmit2 = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    const databasePath = `users/${uid}/data8`;
    const databaseRef = ref(db, databasePath);
    set(databaseRef, { "challege8": inputValue2 });

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
        <h1>HTML CSS & JavaScript</h1>
        <p>Detect Pressed Key in HTML CSS & JavaScript | Detect Key Presses in JavaScript& push it to the repository named "js-project" <br></br> (Create the repository)</p>
        <iframe width="" height="400" src="https://www.youtube-nocookie.com/embed/YG7Tsu_ubzo?si=4LV0OztlZRO4NBJy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        <div className="input_area">

          <input type="text" className="inp" value={inputValue1} onChange={handleChange1} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit1} >Submit</div>
        </div>
      </div>

      <div className="challege1" >
        <h1>HTML CSS & JavaScript</h1>
        <p>Create A Todo List App in HTML CSS & JavaScript | Todo App in JavaScript
          & push it to the repository named "js-project" <br></br> (Create the repository)</p>
        <iframe width="" height="400" src="https://www.youtube-nocookie.com/embed/2QIMUBilooc?si=8dfuQZU2CNP53ql3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="input_area">

          <input type="text" className="inp" value={inputValue2} onChange={handleChange2} placeholder="Paste Here" />


          <div className="btn" onClick={handleSubmit2} >Submit</div>
        </div>
      </div>

    </div>
  )
}

export default jschallenge

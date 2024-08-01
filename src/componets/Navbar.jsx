import logo from "../assets/aa.png"
import React, { useState, useEffect } from 'react';
import "./CSS/nav.css"
import Modal from "./modal"
import { auth } from '../firebase';
import Menu from "./menu.png"
import { db } from '../firebase'; // Import the Firebase database module
import { ref, get, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import { Link } from "react-router-dom"
const Navbar = ({ loggedIn }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [userimag, setimg] = useState();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

// Initialize Firebase Auth

  auth.onAuthStateChanged((user) => {
    
    if(user){
      fetchUserData();
    }
  })

  const fetchUserData = async () => {
    const user = auth.currentUser;
    console.log('No data available');
    if (user) {
      const uid = user.uid;
      const databasePath = `scoreboard/${uid}/`;
      const databaseRef = ref(db, databasePath);

      try {
        // Fetch the data from the database
        const snapshot = await get(databaseRef);
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setUserData(fetchedData.linkedin);
          console.log(fetchedData.linkedin)
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);

      }
    } else {
      console.error('No user is signed in.');
      setLoading(false);
    }


}

  useEffect(() => {
    
    if(loggedIn){
  
      fetchUserData();
    };
    
  }, []);





  const change = () => {
    setShowComponent(!showComponent)


  }
  const hide = () => {
    setbar(!bar)


  }

  const [bar, setbar] = useState(false);
  return (
    <div className="nav">




      <div className="logo">
        <h1>IMPACT</h1>
      </div>
      <div className="menu">
        <ul className="menu-list">

          <li><Link to="/" style={{ textDecoration: "none" }} >Home</Link></li>
          <li><Link to="/Challenges" style={{ textDecoration: "none" }} >Challenges</Link></li>


          <li><Link to="/winnerdash" style={{ textDecoration: "none" }} >Dashboard</Link></li>


          <li><Link to="/" style={{ textDecoration: "none" }} >Events</Link></li>
        </ul>

        {loggedIn || (
          <>
            {console.log("allow")}
            {console.log(loggedIn)}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="btn">Login</div>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <div className="btn btn-sen">Sign up</div>
            </Link>
          </>
        )}


        {loggedIn && (
          <>


            <div className="btn-pro"style={{
                backgroundImage: `url('${userData}')`,
                backgroundSize: 'cover',

                backgroundPosition: 'center center',
              }} onClick={change}> {showComponent && <Modal />}

            </div>



          </>
        )}

        {!loggedIn ? (console.log("data")) : (console.log("data2"))}




      </div>
      <div className="humbar">
        <img src={Menu} alt="" onClick={hide} />
        <div className="logbtns">
          {loggedIn || (
            <>
              {console.log("allow")}
              {console.log(loggedIn)}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="btnres">Login</div>
              </Link>

            </>
          )}


          {loggedIn && (
            <>


              <div className="btn-pro" onClick={change} style={{
                backgroundImage: `url('${userData}')`,
                backgroundSize: 'cover',

                backgroundPosition: 'center center',
              }}   >  {showComponent && <Modal />}</div>



            </>
          )}
        </div>

      </div>
      {bar && <div className="sidemenu">
        <li><Link to="/" style={{ textDecoration: "none" }} >Home</Link></li>
        <li><Link to="/Challenges" style={{ textDecoration: "none" }} >Challenges</Link></li>


        <li><Link to="/winnerdash" style={{ textDecoration: "none" }} >Dashboard</Link></li>


        <li><Link to="/" style={{ textDecoration: "none" }} >Events</Link></li>



      </div>}

    </div>
  )
}




export default Navbar

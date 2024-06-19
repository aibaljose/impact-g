import logo from "../assets/aa.png"
import React, { useState } from 'react';
import "./CSS/nav.css"
import Modal from "./modal"
import Menu from "./menu.png"

import { Link } from "react-router-dom"
const Navbar = ({ loggedIn }) => {
  const [showComponent, setShowComponent] = useState(false);

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


          <li><Link to="/dashboard" style={{ textDecoration: "none" }} >Admin</Link></li>
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


            <div className="btn-pro" onClick={change}> {showComponent && <Modal />}</div>



          </>
        )}

        {!loggedIn ? (console.log("data")) : (console.log("data2"))}




      </div>
      <div className="humbar">
        <img src={Menu} alt=""  onClick={hide} />
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


            <div className="btn-pro" onClick={change}> {showComponent && <Modal />}</div>



          </>
        )}
        </div>
        
      </div>
      {bar && <div className="sidemenu">
        <li><Link to="/" style={{ textDecoration: "none" }} >Home</Link></li>
          <li><Link to="/Challenges" style={{ textDecoration: "none" }} >Challenges</Link></li>


          <li><Link to="/winnerdash" style={{ textDecoration: "none" }} >Dashboard</Link></li>


          <li><Link to="/dashboard" style={{ textDecoration: "none" }} >Admin</Link></li>


          
        </div>}

    </div>
  )
}




export default Navbar

import logo from "../assets/aa.png"
import React, { useState } from 'react';
import "./CSS/nav.css"
import Modal from "./modal"

import { Link } from "react-router-dom"
const Navbar = ({loggedIn}) => {
    const [showComponent, setShowComponent] = useState(false);

const change= ()=>{
  setShowComponent(!showComponent)
    

}
    return (
        <div className="nav">
            <div className="logo">
                <h1>IMPACT</h1>
            </div>
            <div className="menu">
                <ul className="menu-list">

                    <li><Link to="/" style={{ textDecoration: "none" }} >Home</Link></li>
                    <li>Challenges</li>
                    
                        <li><Link to="/dashboard" style={{ textDecoration: "none" }} >Dashbord</Link></li>
                    

                    <li>About us</li>
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

{!loggedIn ?(console.log("data")) :(console.log("data2")) }



                 
            </div>

        </div>
    )
}




export default Navbar

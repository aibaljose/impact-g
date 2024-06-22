import React from 'react'
import "../componets/CSS/home.css"
import chat from "./chat3.png"
import { Link } from "react-router-dom"

const home = () => {
    return (
        <div className='home_bar'>
            <div className="hero">
                <div className="left">
                    <div className="round_bar">
                        Impact education
                    </div>
                    <h1>Hey students, your <br></br>tech  war starts here</h1>
                    <p>Open the doors to innovation and growth in the tech world</p>
                   

                    <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="home_btn">
                        Join Impact
                        
                    </div>
            </Link>


                </div>

                <div className="letf">
                    <img src={chat} alt="" />
                </div>

            </div>
        </div>
    )
}

export default home

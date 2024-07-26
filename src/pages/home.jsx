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
            <div className="events" id='events'>
                <div className="eventtext">
                    Events and Workshops
                </div>
                <div className="cardcontainerev">
                    <div className="card1">
                        <div className="bgimg bgimg12">

                        </div>
                        <div className="tiltecon">
                            <h4>No code App development <br /> webinar</h4>
                            <p>
                                Have a game-changing app idea but no coding experience?

                                This webinar is for YOU! Join us on Google Meet for an insightful session on no-code app development. Learn how to turn your ideas into functional apps without writing a single line of code.

                                <br />  <br /> Date: Sunday, July 14, 2024<br /><br /> Time: 9:00 PM IST</p>
                        </div>
                        <div className="btncontev">
                            <a href="https://forms.gle/fTeugm7ZRHmtDvdJ8">
                                <div className="btn">Register now</div></a>
                        </div>

                    </div>

                    <div className="card1">
                        <div className="bgimg bgimg123">

                        </div>
                        <div className="tiltecon">
                            <h4>Mulearn Introduction webinar <br/></h4>
                            <p>
                            µLearn is a synergic philosophy of education, with a culture of mutual learning through micro peer groups. We are here to assist you in breaking through the echo chambers and free you from the shackles you have grounded yourself in.
                            <br />  <br /> Date: Coming soon<br /><br /> Time: soon PM IST</p>
                        </div>
                        <div className="btncontev">
                            <a href="#events">
                                <div className="btn">Register now</div></a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default home

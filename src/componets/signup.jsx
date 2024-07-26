import React, { useState } from 'react';
import { signup, logout } from '../auth';
import "./CSS/signup.css"
import { db, auth } from '../firebase'; // Import the Firebase database module
import { ref, set } from 'firebase/database';
const Signup = () => {

  const handleSignOut = async () => {
    try {
      await logout();
      // Call the signOut function from your auth.js file
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };


  const [email, setEmail] = useState('');
  const [linkedin, setlinkedin] = useState('');
  const [password, setPassword] = useState('');
  const [namev, setNamev] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    const user = auth.currentUser;
    const uid = user.uid;

    const databasePath = `users/${uid}/name`; // Create a path based on the UID
    const databaseRef = ref(db, databasePath);

    const databaseRef2 = ref(db, `scoreboard/${uid}/`);



    set(databaseRef, {

      name: namev + ":: " + email,


    });
    set(databaseRef2, {

      name: namev,
      email: email,
      linkedin:linkedin,
      score: 0,
      rank: 0,

    });
  };

  return (
    <div className="contain">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input placeholder="Enter Name" type="text" value={namev}
            onChange={(e) => setNamev(e.target.value)} required />
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
        </div>

        <div className="input-container">
          <input placeholder="Enter email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input placeholder="Linkedin profile (url)" type="text" value={linkedin}
            onChange={(e) => setlinkedin(e.target.value)} required />
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input placeholder="Enter new password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
        </div>
        <button className="submit" type="submit">Sign in</button>
        <p className="signup-link">click to <a href="" onClick={handleSignOut}>Sign out</a></p>
      </form>

    </div>



    // <form onSubmit={handleSubmit}>
    //   <h2>Signup</h2>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button type="submit">Signup</button>
    // </form>
  );
};

export default Signup;

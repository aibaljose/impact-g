import React, { useState } from 'react';
import { login } from '../auth';
import { Link } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
<div className="contain">
<form className="form" onSubmit={handleSubmit}>
  <p className="form-title">Log In Account</p>
  <div className="input-container">
    <input placeholder="Enter email" type="email" value={email}
         onChange={(e) => setEmail(e.target.value)} />
    <span>
      <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </span>
  </div>
  <div className="input-container">
    <input placeholder="Enter password" type="password" value={password}
       onChange={(e) => setPassword(e.target.value)} />
    <span>
      <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
    </span>
  </div>
  <button className="submit" type="submit">Login</button>
 
  <p className="signup-link">No account? <Link to="/">Request access 
  </Link></p>
</form>

    </div>

    // <form onSubmit={handleSubmit}>
    //   <h2>Login</h2>
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
    //   <button type="submit">Login</button>
    // </form>
  );
};

export default Login;

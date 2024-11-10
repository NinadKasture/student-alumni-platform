import React, { useState,useContext } from 'react';
import './LoginPage.css'; // Make sure to link the CSS file

// import { DataProvider } from '../context/DataContext'; 

// import {useContext} from '../context/useContext'

import { DataContext } from '../context/DataContext';
import {useNavigate} from 'react-router-dom'
// import { naam, setNaam } 

const LoginPage = () => {
  
  const {name,pw,setName,setPw}  = useContext(DataContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  function SignUp(){
    navigate('/interface')
  }

  return (
    
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="button" className="signup-btn" onClick={SignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

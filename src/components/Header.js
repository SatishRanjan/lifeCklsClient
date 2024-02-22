//import React, { useState } from 'react';
import React from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = ({ logOut }) => {
  console.log("header loaded")
  let navigate = useNavigate();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const handleLogin = () => {
    navigate(`/login`);
  };

  const hideButtonStyle = {
    display: 'none',
  };

  const handleReister = () => {
    // Perform the login logic here
    navigate(`/register`);
  };

  const handleLogout = () => {
    // Perform the logout logic here
    logOut();
    //setIsLoggedIn(false);
  };

  const handleHome = () => {
    // Perform the logout logic here
    navigate(`/`);
  };

  const handleProfile = () => {
    // Perform the logout logic here
    navigate(`/profile`);
  };

  return (
    <div className="header">
      <label className="version-label"><b>v1.0.0</b></label>
      <div className="auth-links">
        {localStorage.getItem("user") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
      <div className="auth-links">
        {localStorage.getItem("user") ? (
          <button style={hideButtonStyle} />
        ) : (
          <button onClick={handleReister}>Register</button>
        )}
      </div>
      <div className="register-links">
        {localStorage.getItem("user") ? (
          <button onClick={handleProfile}>Profile</button>
        ) : (
          <button style={hideButtonStyle}>Profile</button>
        )}
      </div>
      <div className="auth-links">
        <button onClick={handleHome}>Home</button>
      </div>
    </div>
  );
};

export default Header;

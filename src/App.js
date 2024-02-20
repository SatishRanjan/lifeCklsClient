//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import LifeCklsHomePage from './components/LifeCklsHomePage';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/Profile';
import "./App.css";
import logo from "./lifeCkls_Logo1.png";
import Header from './components/Header';
//import { useNavigate } from "react-router-dom";

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [username, setUsername] = useState('');
  //const [setUsername] = useState('');

  /*const handleLogin = (loggedInUsername) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };*/

  const loggedIn = () => {
    //return state.username && state.primary_email;
  };

  // Helper to manage what happens when the user logs in
  const logIn = async (user) => {
    console.log("User logged in")
    console.log(JSON.stringify(user))
    localStorage.setItem("user", JSON.stringify(user));
    //setIsLoggedIn(true);
  };

  // Helper for when a user logs out
  const logOut = () => {
    // Wipe localStorage
    localStorage.removeItem("user");
    //setIsLoggedIn(false);
    window.location.href = "/";
  };


  return (
    <BrowserRouter>
      <div>
        <Header logOut={logOut} isLoggedIn={loggedIn} />
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/login"
            element={<LoginForm logIn={logIn} />}
          />
          <Route
            path="/"
            element={<LifeCklsHomePage />}
          />
          <Route
            path="/profile"
            element={
              localStorage.getItem("user") ? (
                <ProfilePage />
              ) : (
                <LoginForm logIn={logIn} />
              )
            }
          />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

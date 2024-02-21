import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import LifeCklsHomePage from './components/LifeCklsHomePage';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/Profile';
import "./App.css";
import logo from "./lifeCkls_Logo1.png";
import Header from './components/Header';

function App() {
  const [user, setData] = useState(localStorage.getItem('user') || null);
  //const [username, setUsername] = useState('');
  //const [setUsername] = useState('');

  const loggedIn = () => {
    //return state.username && state.primary_email;
  };

  // Helper to manage what happens when the user logs in
  const logIn = async (user) => {
    console.log("User logged in")
    console.log(JSON.stringify(user))
    setData(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Helper for when a user logs out
  const logOut = () => {
    // Wipe out localStorage
    localStorage.removeItem("user");
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
              user ? (
                <ProfilePage />
              ) : (
                <LoginForm logIn={logIn} />
              )
            }
          />
          <Route path="/editprofile" element={user ? (<ProfilePage showProfile={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/connect" element={user ? (<ProfilePage showConnect={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/createstory" element={user ? (<ProfilePage showCreateStory={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/sendmessage" element={user ? (<ProfilePage showSendMessage={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/connections" element={user ? (<ProfilePage showConnections={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/stories" element={user ? (<ProfilePage showStories={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/messages" element={user ? (<ProfilePage showMessages={true} />) : (<LoginForm logIn={logIn} />)} />
          <Route path="/connectionrequests" element={user ? (<ProfilePage showConnectionRequests={true} />) : (<LoginForm logIn={logIn} />)} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

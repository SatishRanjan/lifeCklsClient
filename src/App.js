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
          <Route path="/editprofile" element={<ProfilePage showProfile={true} />} />
          <Route path="/connect" element={<ProfilePage showConnect={true} />} />
          <Route path="/createstory" element={<ProfilePage showCreateStory={true} />} />
          <Route path="/sendmessage" element={<ProfilePage showSendMessage={true} />} />
          <Route path="/connections" element={<ProfilePage showConnections={true} />} />
          <Route path="/stories" element={<ProfilePage showStories={true} />} />
          <Route path="/messages" element={<ProfilePage showMessages={true} />} />
          <Route path="/connectionrequests" element={<ProfilePage showConnectionRequests={true} />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

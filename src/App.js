import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import LifeCklsHomePage from './components/LifeCklsHomePage';
import LoginForm from './components/LoginForm';
import "./App.css";
import logo from "./lifeCkls_Logo1.png";
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //const [username, setUsername] = useState('');
  const [setUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };

  /*const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };*/

  return (
    <BrowserRouter>
      <div>
        <Header />
        <img src={logo} alt="Logo" className="logo" />
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/login"
            element={<LoginForm onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <LifeCklsHomePage/>
              ) : (
                <LoginForm onLogin={handleLogin} />
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

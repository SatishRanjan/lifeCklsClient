import React, { useState } from 'react';
import "../App.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform the login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform the logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <div className="auth-links">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;

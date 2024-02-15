import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MessageArea } from "../common/uimessagearea.js";

const config = require('../common/config.js');

const LoginForm = ({ logIn }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(config.loginUrl, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      //credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      //setIsLoggedIn(true);
      var user = await res.json()
      logIn(user)
      console.log(JSON.stringify(user));
      console.log(`${username} logged in successfully.`)
      navigate(`/profile`);
    } else {
      const messageElement = document.getElementById('server_msg');
      messageElement.textContent = await res.text()
      messageElement.style.color = 'red'
    }
  };

  return (
    <div>
      <MessageArea></MessageArea>
      <h1 className="center-text">Login</h1>
      <form onSubmit={handleLoginFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
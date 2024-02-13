import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MessageArea } from "../common/uimessagearea.js";

const config = require('../common/config.js');

const LoginForm = ({ onLogin }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      console.log(await res.json());     
      console.log(`${username} logged in successfully.`)
      const messageElement = document.getElementById('server_msg');
      messageElement.textContent = `User ${username} successfully loggedin`
      messageElement.style.color = 'green'
      navigate(`/`);
    } else {
      const err = await res.json();
      console.log(err)
      //setError(err.error);
    }
  };

  return (
    <div>
       <MessageArea></MessageArea>
      <h2>Login</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
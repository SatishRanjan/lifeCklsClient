import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here (e.g., send a request to a server)

    // For simplicity, let's consider the user as logged in if the username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username);
    }
  };

  return (
    <div>
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
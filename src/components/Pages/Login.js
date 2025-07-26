// src/components/Pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      id: studentID,
      name: studentID || "Guest",
    };

    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    localStorage.setItem('auth', true);
    navigate('/studentportal');
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter any Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        <em>Use any Student ID and any Password to access.</em>
      </p>
    </div>
  );
};

export default Login;

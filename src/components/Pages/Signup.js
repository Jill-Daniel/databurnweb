// ✅ File: src/components/Pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const exists = students.find(s => s.email === formData.email);

    if (exists) return setError('Email already exists.');

    const newStudent = { ...formData, results: [] };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Create Account</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;


// src/components/Pages/Studentportal.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Studentportal = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem('studentName') || 'Student';

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('studentName');
    navigate('/login');
  };

  return (
    <div className="portal-container">
      {/* Sidebar */}
      <div className="portal-sidebar">
        <h2 className="portal-logo">Databurn Portal</h2>
        <nav className="portal-nav">
          <span>👋 {studentName}</span>
          <a href="/studentportal">🏠 Dashboard</a>
          <a href="/calendar">📅 Calendar</a>
          <a href="/transcripts">📄 Transcripts</a>
          <a href="/messages">💬 Messages</a>
          <a href="/profile">👤 Profile</a>
          <button onClick={handleLogout} className="logout-btn">🚪 Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <motion.div
        className="portal-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="portal-header">
          <h1>Welcome back, {studentName} 👋</h1>
          <p>Your academic dashboard</p>
        </header>

        {/* Widgets */}
        <div className="portal-widgets">
          <div className="portal-widget">
            <h3>Current Course</h3>
            <p>Basic Computer Packages</p>
          </div>
          <div className="portal-widget">
            <h3>Total Packages</h3>
            <p>15</p>
          </div>
          <div className="portal-widget">
            <h3>Remaining</h3>
            <p>12</p>
          </div>
        </div>

        {/* Results */}
        <section className="portal-results">
          <h2>📊 Recent Exam Results</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Marks</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Introduction to Computer</td>
                <td>89</td>
                <td>Distinction</td>
              </tr>
              <tr>
                <td>Microsoft Word</td>
                <td>75</td>
                <td>Very Good</td>
              </tr>
              <tr>
                <td>Microsoft Excel</td>
                <td>69</td>
                <td>Great Work</td>
              </tr>
            </tbody>
          </table>
        </section>
      </motion.div>
    </div>
  );
};

export default Studentportal;


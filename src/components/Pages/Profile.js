// src/components/Pages/Profile.js
import React from 'react';
import re from '../images/jill.jpg';


const Profile = () => {
  const studentName = localStorage.getItem('studentName') || 'Student';
  const studentID = localStorage.getItem('studentID') || 'N/A';
  const email = `${studentName.replace(/\s+/g, '').toLowerCase()}@databurn.edu`;

  return (
    <div className="portal-page">
      <h2 className="profile-title">👤 Profile Information</h2>
      <div className="profile-card">
        <div className="profile-avatar">
          <img src={re} alt="Student Avatar" />
        </div>
        <div className="profile-details">
          <p><strong>Full Name:</strong> {studentName}</p>
          <p><strong>Student ID:</strong> {studentID}</p>
          <p><strong>Program:</strong> Web Development</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Status:</strong> ✅ Active</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

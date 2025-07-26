// src/components/Pages/Messages.js
import React, { useState } from 'react';


const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Admin',
      subject: 'Welcome to the Portal!',
      body: 'We’re glad to have you on board. Stay tuned for important announcements.',
      date: 'July 8, 2025'
    },
    {
      id: 2,
      sender: 'Registrar',
      subject: 'Exam Schedule Released',
      body: 'Please check the calendar for updated exam dates.',
      date: 'July 5, 2025'
    }
  ]);

  return (
    <div className="portal-page">
      <h2>📩 Messages</h2>
      <ul className="message-list">
        {messages.map((msg) => (
          <li key={msg.id} className="message-card">
            <div className="message-header">
              <h3>{msg.subject}</h3>
              <span>{msg.date}</span>
            </div>
            <p><strong>From:</strong> {msg.sender}</p>
            <p>{msg.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;

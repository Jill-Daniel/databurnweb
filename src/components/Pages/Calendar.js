// src/components/Pages/Calendar.js
import React from 'react';


const Calendar = () => {
  return (
    <div className="portal-page">
      <h2>📅 Academic Calendar</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semester Begins</td>
            <td>August 5, 2025</td>
            <td>Orientation for new students starts at 9:00 AM</td>
          </tr>
          <tr>
            <td>Mid-Term Exams</td>
            <td>October 14 - October 18</td>
            <td>Mid-semester assessment across all departments</td>
          </tr>
          <tr>
            <td>Final Exams</td>
            <td>December 1 - December 10</td>
            <td>Final exams for all students</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

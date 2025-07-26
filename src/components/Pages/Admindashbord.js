import React, { useState } from 'react';


const initialStudents = [
  {
    name: 'Enter Name',
    email: 'john@example.com',
    grades: { Math: 80, English: 75, Computer: 90 },
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    grades: { Math: 78, English: 82, Computer: 88 },
  },
];

const AdminDashboard = ({ user }) => {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  const handleGradeChange = (email, subject, value) => {
    const updated = students.map((s) => {
      if (s.email === email) {
        return {
          ...s,
          grades: { ...s.grades, [subject]: parseInt(value) },
        };
      }
      return s;
    });
    setStudents(updated);
  };

  const downloadTranscript = (student) => {
    const content = `Transcript for ${student.name}\n\n` +
      Object.entries(student.grades).map(([subject, grade]) => `${subject}: ${grade}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${student.name}_transcript.txt`;
    a.click();
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      <h2>Welcome, {user.name} (Admin)</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Math</th>
            <th>English</th>
            <th>Computer</th>
            <th>Transcript</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((student) => (
            <tr key={student.email}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              {Object.entries(student.grades).map(([subject, grade]) => (
                <td key={subject}>
                  <input
                    type="number"
                    value={grade}
                    onChange={(e) =>
                      handleGradeChange(student.email, subject, e.target.value)
                    }
                  />
                </td>
              ))}
              <td>
                <button onClick={() => downloadTranscript(student)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import db10 from '../images/db4.jpg';
import db1 from '../images/db1.jpg';
import db11 from '../images/db11.jpg';
import db13 from '../images/db13.jpg';
import db17 from '../images/db17.jpg';
import db12 from '../images/db12.jpg';
import db9 from '../images/db7.jpg';
import db7 from '../images/db15.jpg'
const courseData = [
  {
    title: 'Graphic Design',
    image: db10,
    duration: '3 Months',
    level: 'Beginner',
    description: 'Create stunning visual content using Photoshop, Illustrator & Canva.',
  },
  {
    title: 'Web Development',
    image: db1,
    duration: '3 Months',
    level: 'Intermediate',
    description: 'Learn HTML, CSS, JavaScript, React, and build real websites.',
  },
  {
    title: 'Database Management',
    image: db11,
    duration: '4 Months',
    level: 'Intermediate',
    description: 'Master MySQL, MongoDB & PostgreSQL for data-driven systems.',
  },
  {
    title: 'Networking',
    image: db13,
    duration: '3 Months',
    level: 'Beginner',
    description: 'Understand threats of the internet and make its conection.',
  },
  {
    title: 'CCTV Instalation',
    image: db17,
    duration: '3 Month',
    level: 'Beginner',
    description: 'Lets learn on being safe by getting evidence from the cctv.',
  },
  {
    title: 'Computer packages',
    image: db12,
    duration: '3 Months',
    level: 'Beginner',
    description: 'Learn MS Office, typing skills, and internet navigation.',
  },
  {
    title: 'Digital Marketing',
    image: db9,
    duration: '2 Months',
    level: 'Beginner',
    description: 'Learn SEO, Ads, content and social media marketing.',
  },


{
    title: 'Computer Repair',
    image: db7,
    duration: '3 Months',
    level: 'Beginner',
    description: 'Learn computer repair, And make it new.',
  },

];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courseData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="elite-courses-container">
      <h1 className="page-heading">Explore Our Industry-Ready Courses</h1>
      <p className="page-subtitle">Taught by top instructors. Powered by real-world practice.</p>

      <input
        type="text"
        placeholder="Search courses..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="elite-course-grid">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="elite-card">
                <img src={course.image} alt={course.title} className="course-img" />
                <div className="elite-card-content">
                  <h2>{course.title}</h2>
                  <p className="desc">{course.description}</p>
                  <div className="meta">
                    <span className="badge">{course.level}</span>
                    <span className="badge">{course.duration}</span>
                  </div>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;




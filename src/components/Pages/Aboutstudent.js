// === AboutComputerSchool.js (Enhanced) ===
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import ceo from '../images/aboutceo.jpg';
import img1 from '../images/db1.jpg';
import img2 from '../images/db2.jpg';
import img3 from '../images/db3.jpg';
import img4 from '../images/db4.jpg';
import img5 from '../images/db5.jpg';

import BackgroundEffects from '../Backgroundeffect';

const carouselData = [
  { img: img1, desc: "Students learning practical networking with real routers and switches." },
  { img: img2, desc: "Interactive software development training in our digital lab." },
  { img: img3, desc: "Cybersecurity sessions with hands-on simulation tools." },
  { img: img4, desc: "Photography and editing lab with real-world equipment." },
  { img: img5, desc: "Databurn's modern classroom setup encouraging collaboration." }
];

function AboutComputerSchool() {
  const [current, setCurrent] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showIntro && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="intro-title">Welcome to Databurn</h1>
        </motion.div>
      )}

      <main className={`about-container ${darkMode ? "dark-mode" : ""}`}>
        <BackgroundEffects />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-toggle"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Intro Section */}
        <motion.section
          className="section intro"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>About Databurn Computer School</h1>
          <p>
            We empower learners with cutting-edge skills in IT, media, and innovation. Located in <strong>Rongo, Migori</strong>, just opposite <strong>Kamagambo Police Station</strong>, our institution is focused on shaping ethical, competitive professionals.
          </p>
        </motion.section>

        {/* CEO Message */}
        <motion.section
          className="section ceo-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="ceo-wrapper">
            <Tilt>
              <img src={ceo} alt="CEO" className="ceo-img" />
            </Tilt>
            <div className="ceo-text">
              <h2>A Message from Our CEO</h2>
              <p>
                "At Databurn, we transform lives through values-based, hands-on education. Our mission is to equip students with the confidence, competence, and character to lead in the digital era."
              </p>
              <h4>— Pascal Ochieng, CEO</h4>
            </div>
          </div>
        </motion.section>

        {/* Carousel Section */}
        <section className="section carousel-section">
          <h2>Inside Databurn Labs</h2>
          <div className="carousel-frame">
            <Tilt scale={1.02}>
              <motion.img
                key={current}
                src={carouselData[current].img}
                alt={`Lab ${current + 1}`}
                className="carousel-image"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Tilt>
            <p className="carousel-desc">{carouselData[current].desc}</p>
          </div>
        </section>

        {/* Location Map Section */}
        <motion.section
          className="section location-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Location</h2>
          <p className="location-desc">Located in Rongo, Migori County — opposite Kamagambo Police Station.</p>
          <div className="map-frame">
            <iframe
              title="Databurn Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.820476381802!2d34.61576977471698!3d-0.743759035210577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa60c93b0a281%3A0xfcbf1c0c2a6c4460!2sKamagambo%20Police%20Station!5e0!3m2!1sen!2ske!4v1710000000000"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0, borderRadius: '1rem' }}
            ></iframe>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="section testimonials"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              “Databurn gave me the skills and confidence to become a freelance web developer.”
              <span>— Jill Daniel, Alumni</span>
            </div>
            <div className="testimonial-card">
              “The labs are world-class and the teachers are very supportive and passionate.”
              <span>— Jackton Brian., Graduate</span>
            </div>
            <div className="testimonial-card">
              “I learned  Networking  here and  I get a job for CCTV's Installation And Wi-Fi installation.”
              <span>— Brighton Kiplangat., Student</span>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

export default AboutComputerSchool;

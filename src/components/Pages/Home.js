// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import wedding from '../images/wed5.jpg';
import baby from '../images/babyshoot2.jpg';
import corp from '../images/eventcoverage2.jpg';
import livestream from '../images/feneral1.jpg';
import photoshot from '../images/shoot3.jpg';
import rurashio from '../images/Rurashio1.jpg';
import mount from '../images/photomount1.jpg';
import wed from '../images/card.jpg';
import learn from '../images/photographer.jpg';
import wed5 from '../images/wedsav1.jpg';
import wed6 from '../images/wedsav2.jpg';



const services = [
  { image: wedding, title: 'Wedding Videography' },
  { image: baby, title: 'BabyBump Photoshoot' },
  { image: corp, title: 'Corporate Event Coverage' },
  { image: livestream, title: 'Funeral Livestreaming' },
  { image: photoshot, title: 'Studio Photoshoot' },
  { image: rurashio, title: 'Rurashio Coverage' },
  { image: mount, title: 'Photo Mounting' },
  { image: wed, title: 'Wedding Cards Design' },
  { image: learn, title: 'Photography Training' },
  { image: wed5, title: 'Wedding Services' },
  { image: wed6, title: 'Rurashio/Nyombo Services' },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  
  const navigate = useNavigate();



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  const handleExploreClick = () => navigate('/services');

  
  return (
    <div className={`homepage-wrapper ${darkMode ? 'dark' : 'light'}`}>
      
      {/* Carousel Section First */}
      <div className="carousel">
        {services.map((service, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {index === currentIndex && (
              <motion.div
                className="carousel-overlay"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="carousel-title">{service.title}</h2>
                <a href="/contact" className="carousel-btn">Book Now</a>
              </motion.div>
            )}
          </div>
        ))}
        <div className="nav-arrow left" onClick={prevSlide}>&#10094;</div>
        <div className="nav-arrow right" onClick={nextSlide}>&#10095;</div>

        <div className="carousel-dots">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Hero Content Below Carousel */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1 className="brand-title" initial={{ y: -40 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
          DATABURN <span className="highlight">MEDIA</span>
        </motion.h1>

        <motion.p className="slogan" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.4 }}>
          OUR LENS YOUR LEGACY
        </motion.p>

        <motion.p className="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Where every frame tells your story — from creative portraits to unforgettable events, we bring your vision to life.
        </motion.p>

        <motion.button
          className="btn-explore"
          onClick={handleExploreClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Explore All Services
        </motion.button>
      </motion.div>

      <a href="https://wa.me/254704497051" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-whatsapp"></i>
</a>

    </div>
  );
}

export default Home;

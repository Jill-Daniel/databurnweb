import React from 'react';
import { motion } from 'framer-motion';

import ceoImage from '../images/aboutceo.jpg';
import babyShoot from '../images/babyshoot3.jpg';
import ruralShoot from '../images/Rurashio1.jpg';
import weddingShoot from '../images/wedding work2.jpg';
import shoot7 from '../images/shoot7.jpg';
import funeralShoot from '../images/fineral1.jpg';
import photoMount from '../images/photomount1.jpg';


function About() {
  const portfolio = [
    { img: babyShoot, alt: 'Baby Photoshoot', caption: 'Baby Photoshoot' },
    { img: ruralShoot, alt: 'Rurashio Livestreams', caption: 'Rurashio Livestreams' },
    { img: weddingShoot, alt: 'Wedding Photoshoot', caption: 'Wedding Livestreaming & Photoshoot' },
    { img: shoot7, alt: 'Studio Photoshoot', caption: 'Studio Photoshoot' },
    { img: funeralShoot, alt: 'Funeral Photoshoot', caption: 'Funeral Coverage' },
    { img: photoMount, alt: 'Photo Mounting', caption: 'Photo Mounting' },
  ];

  return (
    <main className="about">
      <motion.header
        className="about__header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about__title">About Databurn Media</h1>
        <p className="about__subtitle">
          Capturing authentic moments with creativity and passion.
        </p>
      </motion.header>

      <motion.section
        className="about__ceo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about__ceo-image-wrapper">
          <img
            src={ceoImage}
            alt="CEO of Databurn Media"
            className="about__ceo-image"
            loading="lazy"
          />
        </div>
        <div className="about__ceo-content">
          <h2 className="about__ceo-heading">Message From The CEO</h2>
          <p className="about__ceo-text">
            At Databurn Media, we are dedicated to preserve your most cherished memories with passion and precision.
            From weddings to corporate events, we use cutting-edge technology to bring your stories to life — all while keeping our services affordable and accessible.
            <br /><br />
            Looking for professional livestreaming services? We’ve got you covered with expert setup and seamless execution.
          </p>
          <h4>Pascal Ochieng (C.E.O), Databurn Media</h4>
        </div>
      </motion.section>

      <section className="about__portfolio">
        <motion.h2
          className="about__portfolio-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>

        <div className="portfolio__grid">
          {portfolio.map(({ img, alt, caption }, idx) => (
            <motion.figure
              className="portfolio__item"
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img src={img} alt={alt} className="portfolio__image" loading="lazy" />
              <figcaption className="portfolio__caption">{caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;

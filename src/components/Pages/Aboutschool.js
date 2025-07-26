import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import db1 from '../images/db1.jpg';
import db2 from '../images/db2.jpg';
import db3 from '../images/db15.jpg';
import db4 from '../images/db4.jpg';
import db5 from '../images/db5.jpg';
import db6 from '../images/db10.jpg';
import db7 from '../images/db16.jpg';

const images = [
  { src: db1, caption: 'computer classes' },
  { src: db2, caption: 'Programming in Practice' },
  { src: db3, caption: 'Networking & CCTV Installetion' },
  { src: db4, caption: 'Team Collaboration' },
  { src: db5, caption: 'Creative Designing' },
  { src: db6, caption: 'Tech Talks & Seminars' },
  { src: db7, caption: 'Certification & Graduation' }
];

function Aboutschool() {
  const containerRef = useRef(null);
  const scrollIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex.current = (scrollIndex.current + 1) % images.length;
      const container = containerRef.current;
      const nextSection = container.children[scrollIndex.current];
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }, 5000); // 5 seconds per scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aboutschool-container" ref={containerRef}>
      {images.map((item, index) => (
        <motion.div
          key={index}
          className="full-image-section"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 1 }}
        >
          <img src={item.src} alt={`Slide ${index + 1}`} className="fullscreen-image" />
          <motion.div
            className="caption-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {item.caption}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default Aboutschool;

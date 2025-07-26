// src/pages/Certification.js
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Basic Computer Packages',
    description: 'Covers Microsoft Office (Word, Excel, PowerPoint), file management, and computer basics.',
    issuedBy: 'Databurn Computer School',
    date: 'June 2025',
  },
  {
    title: 'Graphic Design & Editing',
    description: 'Adobe Photoshop, Illustrator, CorelDRAW and Canva essentials for creatives.',
    issuedBy: 'Databurn Media',
    date: 'May 2025',
  },
  {
    title: 'Web Design & Development',
    description: 'HTML, CSS, JavaScript, and responsive design with React.js & hosting essentials.',
    issuedBy: 'Databurn Institute',
    date: 'April 2025',
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Covers security principles, online privacy, threat protection, and ethical usage.',
    issuedBy: 'Databurn Tech',
    date: 'March 2025',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, social media strategy, Google Ads, and email marketing fundamentals.',
    issuedBy: 'Databurn Business School',
    date: 'February 2025',
  }
];

const Certification = () => {
  return (
    <motion.div
      className="certification-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="certification-header">
        <h1>🎓 Our Prestigious Certifications</h1>
        <p>Empowering students with world-class digital skills and official certifications from Databurn.</p>
      </header>

      <section className="certification-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <div className="cert-meta">
              <span>🧾 {cert.issuedBy}</span>
              <span>📅 {cert.date}</span>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="certification-footer">
        <p>✅ All certifications are verifiable with Databurn Institute. Contact us for transcript services or certificate downloads.</p>
      </footer>
    </motion.div>
  );
};

export default Certification;

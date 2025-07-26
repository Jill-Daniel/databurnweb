import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import wedding from '../images/wedding work2.jpg';
import baby from '../images/babyshoot1.jpg';
import corp from '../images/eventcoverage3.jpg';
import livestream from '../images/feneral1.jpg';
import photoshot from '../images/shoot3.jpg';
import rurashio from '../images/Rurashio1.jpg';
import mount from '../images/photomount1.jpg';
import wed from '../images/card.jpg';
import learn from '../images/photographer.jpg';
import wed5 from '../images/wedsav1.jpg';
import wed6 from '../images/wedsav2.jpg';


function Services() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewDesc, setPreviewDesc] = useState('');

  const handleOrderClick = () => {
    navigate('/contact');
  };

  const openPreview = (img, title, desc) => {
    setPreviewImg(img);
    setPreviewTitle(title);
    setPreviewDesc(desc);
    setIsPreviewOpen(true);
  };

  const services = [
    {
      img: wedding,
      title: 'Wedding Photoshoots / Wedding Livestreaming',
      desc: 'Capture your big day with cinematic quality and joy.',
      tags: ['wedding', 'livestream', 'events']
    },
    {
      img: baby,
      title: 'Baby Bump Shoots',
      desc: 'Maternity and baby moments in warm, elegant tones.',
      tags: ['baby', 'maternity', 'studio']
    },
    {
      img: corp,
      title: 'Event & Corporate Coverage',
      desc: 'High-quality media coverage for formal events.',
      tags: ['corporate', 'events', 'photo']
    },
    {
      img: livestream,
      title: 'Funeral Coverage Services',
      desc: 'Respectful, smooth livestream and photo coverage.',
      tags: ['funeral', 'livestream', 'events']
    },
    {
      img: photoshot,
      title: 'Photoshoot',
      desc: 'Professional, clean, and vibrant photoshoots.',
      tags: ['studio', 'photo']
    },
    {
      img: rurashio,
      title: 'Rurashio / Nyombo Coverage',
      desc: 'Authentic traditional ceremonies captured beautifully.',
      tags: ['traditional', 'events']
    },
    {
      img: mount,
      title: 'Photo Mounting',
      desc: 'Top-tier photo framing and mounting services.',
      tags: ['mount', 'framing']
    },
    {
      img: wed,
      title: 'Photo Book & Cards',
      desc: 'Customized albums and creative memory cards.',
      tags: ['album', 'cards']
    },
    {
      img: learn,
      title: 'Photography & Videography Training',
      desc: 'Practical training with real-world studio experience.',
      tags: ['training', 'learning']
    },
     {
      img: wed5,
      title: 'Wedding services',
      desc: 'Get your unforgetable weddings and happy moments covered with a lot of rememberence.',
      tags: ['wedding', 'livestream',"events"]
    },
    {
      img: wed6,
      title: 'Rurashio/Nyombo  Services',
      desc: 'Make you local and traditional wedding rememberable through our Rurashio services',
      tags: ['wedding', 'livestream',"events"]
    },
  ];

  const filteredServices = services.filter(service =>
    (selectedTag === 'all' || service.tags.includes(selectedTag)) &&
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        Search and discover all we offer — crafted with creativity and precision.
      </p>

      <input
        type="text"
        placeholder="Search for a service..."
        className="service-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="tag-filters">
        {['all', 'wedding', 'events', 'training', 'livestream', 'studio', 'corporate', 'baby', 'photo', 'cards'].map(tag => (
          <button
            key={tag}
            className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.length === 0 ? (
          <p className="no-results">No service found for "{searchTerm}"</p>
        ) : (
          filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.03}
                transitionSpeed={1000}
                className="tilt-wrapper fade-in"
              >
                <div className="service-card">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-image"
                    onClick={() => openPreview(service.img, service.title, service.desc)}
                    style={{ cursor: 'zoom-in' }}
                  />
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <button className="order-button" onClick={handleOrderClick}>
                    Choose This Service
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))
        )}
      </div>

      {isPreviewOpen && (
        <div className="preview-overlay" onClick={() => setIsPreviewOpen(false)}>
          <div className="preview-content">
            <img src={previewImg} alt="preview" />
            <h2>{previewTitle}</h2>
            <p>{previewDesc}</p>
            <button onClick={() => setIsPreviewOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;

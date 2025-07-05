import React from 'react';
import { useNavigate } from 'react-router-dom';
import wedding from '../images/wedding work2.jpg';
import baby from '../images/babyshoot1.jpg';
import corp from '../images/eventcoverage3.jpg';
import livestream from '../images/feneral1.jpg';
import photoshot from '../images/shoot3.jpg';
import rurashio from '../images/Rurashio1.jpg';
import mount from '../images/photomount1.jpg';
import wed from '../images/wed cards1.jpg';
import learn from '../images/photographer.jpg';

function Services() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/contact');
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        We offer a wide range of media services to help you capture and share your most important moments.
      </p>

      <div className="services-grid fade-in">
        {[
          {
            img: wedding,
            title: 'Wedding Photography',
            desc: 'Capture your big day with beautiful, cinematic images and video. We offer packages to suit every budget.'
          },
          {
            img: baby,
            title: 'Baby Bump shoots',
            desc: 'From newborns to family portraits, we create lasting memories in a comfortable studio setting.'
          },
          {
            img: corp,
            title: 'Event & Corporate Coverage',
            desc: 'Whether it’s a conference or a community event, we provide professional photo and video coverage.'
          },
          {
            img: livestream,
            title: 'Funeral Coverage Services',
            desc: 'Share your events in real-time with high-quality livestreaming, including multi-angle camera setups.'
          },
          {
            img: photoshot,
            title: 'Photoshoot',
            desc: 'Looking for a high-quality photoshoot? Databurn provides professional, stunning imagery tailored to your needs.'
          },
          {
            img: rurashio,
            title: 'Rurashio/ Nyombo Coverage',
            desc: 'Relive your traditional moments with captivating visuals and storytelling from Databurn Media.'
          },
          {
            img: mount,
            title: 'Photo Mounting',
            desc: 'Turn your favorite memories into timeless framed photos with our premium mounting service.'
          },
          {
            img: wed,
            title: 'Photo Book & Cards',
            desc: 'Preserve your memories in beautiful photo books and creative cards made with care and precision.'
          },
          {
            img: learn,
            title: 'Photography & Videography Training',
            desc: 'Learn the art of photography and videography from professionals with hands-on sessions.'
          },
        ].map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-image" />
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.desc}</p>
            <button className="order-button" onClick={handleOrderClick}>
              Choose  The Service 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

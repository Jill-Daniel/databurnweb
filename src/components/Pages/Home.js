import React, { useEffect, useState } from 'react';
import photographer from '../images/ceo databurn.jpg';
import ca from '../images/eventcoverage2.jpg';
import sa from '../images/eventcoverage3.jpg';
import v from '../images/wedding work2.jpg';
import d from '../images/charity1.jpg';

const images = [ca, sa, v, d];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div className="header-section">
        <h1 className="site-title">
          DATABURN <span className="media-highlight">MEDIA</span>
        </h1>
        <p className="tagline">OUR LENS YOUR LEGACY</p>
        <p className="subtext">
          Where every frame tells your story — from creative portraits to unforgettable events, we bring your vision to life.
        </p>
      </div>

      <div className="carousel-section">
        <img
          src={images[currentIndex]}
          alt={`Studio ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="welcome-section">
        <img
          src={photographer}
          alt="Photographer"
          className="photographer-image"
        />
        <h4 className="welcome-message">
          Step into a space where creativity meets craftsmanship.
          <br />
          Welcome to <strong>Databurn Studio</strong> — your story, beautifully captured.
        </h4>
      </div>
    </div>
  );
}

export default Home;

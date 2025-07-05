import React from 'react';
import ceoImage from '../images/aboutceo.jpg';
import babyShoot from '../images/babyshoot3.jpg';
import ruralShoot from '../images/Rurashio1.jpg';
import weddingShoot from '../images/wedding work2.jpg';
import shoot7 from '../images/shoot7.jpg';
import funeralShoot from '../images/fineral1.jpg';
import photoMount from '../images/photomount1.jpg';

function About() {
  return (
    <main className="about">
      <header className="about__header">
        <h1 className="about__title">About Databurn Media</h1>
        <p className="about__subtitle">
          Capturing authentic moments with creativity and passion.
        </p>
      </header>

      <section className="about__ceo">
        <div className="about__ceo-image-wrapper">
          <img
            src={ceoImage}
            alt="CEO of Databurn Media"
            className="about__ceo-image"
            loading="lazy"
          />
          
        </div>
        <div className="about__ceo-content">
          <h2 className="about__ceo-heading"> Message From  The CEO</h2>
          <p className="about__ceo-text">
            At Databurn Media, we are dedicated to preserve your most cherished memories with passion and precision.
            From weddings to corporate events, we use cutting-edge technology to bring your stories to life — all while keeping our services affordable and accessible.
            <br /><br />
            Looking for professional livestreaming services? We’ve got you covered with expert setup and seamless execution.
          </p>

          <h4>Pascal Ochieng (C.E.O),  Databurn Media</h4>
        </div>
      </section>

      <section className="about__portfolio">
        <h2 className="about__portfolio-title">Our Portfolio</h2>
        <div className="portfolio__grid">
          {[ 
            { img: babyShoot, alt: 'Baby Photoshoot', caption: 'Baby Photoshoot' },
            { img: ruralShoot, alt: 'Rurashio Livestreams', caption: 'Rural Photoshoot' },
            { img: weddingShoot, alt: 'Wedding Photoshoot', caption: 'Wedding Photoshoot' },
            { img: shoot7, alt: 'Studio Photoshoot', caption: 'Studio Photoshoot' },
            { img: funeralShoot, alt: 'Funeral Photoshoot', caption: 'Funeral Photoshoot' },
            { img: photoMount, alt: 'Photo Mounting', caption: 'Photo Mounting' }
          ].map(({ img, alt, caption }, idx) => (
            <figure className="portfolio__item" key={idx}>
              <img src={img} alt={alt} loading="lazy" className="portfolio__image" />
              <figcaption className="portfolio__caption">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;

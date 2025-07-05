import React, { useEffect, useState } from 'react';

function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/footer-data.json');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Footer fetch error:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <footer className="footer">
      <div className="footer-flex-container">
        {/* Company Info */}
        <div className="footer-col">
          <h2 className="footer-title">{data.companyName}</h2>
          <p>{data.description}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/Home">Home</a></li>
          
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>{data.address}</p>
          <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p><a href={`tel:${data.phone}`}>{data.phone}</a></p>
        </div>

        {/* Social Media */}
<div className="footer-col">
  <h4>Follow Us</h4>
  <div className="social-icons">
    <a href={data.social?.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
    <a href={data.social?.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
    <a href={data.social?.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
    <a href={data.social?.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
    <a href={data.social?.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {data.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

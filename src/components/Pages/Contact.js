import React, { useState } from "react";
import lg from "../images/databurn logo.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showChoice, setShowChoice] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getEncodedMessage = () => {
    const { name, phone, service, message } = formData;
    const textMessage = `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    return encodeURIComponent(textMessage);
  };

  const sendWhatsApp = () => {
    const whatsappNumber = "254704497051"; 
    const url = `https://wa.me/${whatsappNumber}?text=${getEncodedMessage()}`;
    window.open(url, "_blank");
    resetForm();
  };

  const sendSMS = () => {
    const smsNumber = "+254704497051"; 
    const url = `sms:${smsNumber}?body=${getEncodedMessage()}`;
    window.open(url);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", service: "", message: "" });
    setShowChoice(false);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowChoice(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <img src={lg} alt="Databurn Media Logo" className="contact-logo" />
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p>
            <i className="fas fa-envelope"></i> info@databurnmedia.co.ke
          </p>
          <p>
            <i className="fas fa-phone"></i> +254 704 497051
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Rongo, Migori, Kenya
          </p>
        </div>
        <a
          href={`https://wa.me/254704497051`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp Us
        </a>
      </div>

      <div className="contact-form">
        <h2>Request a Service</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder="Service You Need"
            required
            value={formData.service}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Choose..." : "Send Message"}
          </button>
        </form>

        {showChoice && (
          <div className="send-choice">
            <p>Please choose how you want to send your message:</p>
            <button onClick={sendWhatsApp} className="btn-whatsapp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
            <button onClick={sendSMS} className="btn-sms">
              <i className="fas fa-sms"></i> SMS
            </button>
            <button onClick={() => setShowChoice(false)} className="btn-cancel">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

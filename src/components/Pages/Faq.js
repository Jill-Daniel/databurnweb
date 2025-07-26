// File: FAQ.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const faqs = [
  {
    question: "What services do you offer in your studio?",
    answer: "We offer professional photography, videography, event coverage, editing, and content production services including green screen and studio lighting setups.",
  },
  {
    question: "Do you offer training in computer skills?",
    answer: "Yes, we offer beginner to advanced computer training including courses in basic computer packages, graphic design, coding, data science, and digital marketing.",
  },
  {
    question: "How long does a computer course take?",
    answer: "Our short courses range from 1 to 3 months depending on the level and complexity. Certificate and diploma programs may take 6 to 12 months.",
  },
  {
    question: "Can I book the studio online?",
    answer: "Absolutely! Use our online booking form on the studio page or contact us via WhatsApp or call for urgent bookings.",
  },
  {
    question: "Are your trainers certified?",
    answer: "Yes, all our trainers are certified professionals with industry experience and up-to-date knowledge in their respective fields.",
  },
  {
    question: "Do you offer certificates after training?",
    answer: "Yes, we provide both internal certificates and support for external certification depending on the course enrolled.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;

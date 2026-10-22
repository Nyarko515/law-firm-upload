import React, { useState } from 'react';
import './Contact.css';
import LegalIcon from './LegalIcon';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us. A member of our team will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };
  const details = [
    ['pin', 'Location', <>United Kingdom<br />Meetings by appointment</>],
    ['phone', 'Client line', <>+1 (854) 240-7455<br />Monday–Friday, 9:00–18:00</>],
    ['mail', 'Email', <>info@harrisonstewardslawfirm.com<br />We aim to reply within one working day</>],
    ['clock', 'Availability', <>Urgent enquiries are reviewed promptly.<br />Please include a safe contact method.</>]
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="section-kicker">Start a conversation</p>
          <h2 className="section-title">Tell us what you need</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A confidential first conversation can make the way forward much clearer.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-label">Speak with our team</p>
            <h3>Direct, discreet and without obligation.</h3>
            <p className="contact-description">Share a brief outline of your matter and the best way to reach you. We will connect you with the right member of our team.</p>
            <div className="info-items">
              {details.map(([icon, title, content]) => <div className="info-item" key={title}><div className="info-icon"><LegalIcon name={icon} /></div><div className="info-text"><h4>{title}</h4><p>{content}</p></div></div>)}
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>Confidential enquiry</span><h3>Request a consultation</h3></div>
              <div className="form-group"><label htmlFor="name">Full name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder="Your full name" /></div>
              <div className="form-row">
                <div className="form-group"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" placeholder="you@example.com" /></div>
                <div className="form-group"><label htmlFor="phone">Phone number</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required autoComplete="tel" placeholder="Your phone number" /></div>
              </div>
              <div className="form-group"><label htmlFor="service">Area of enquiry</label><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="">Please select</option><option value="family">Family law</option><option value="corporate">Corporate law</option><option value="realestate">Real estate</option><option value="criminal">Criminal defence</option><option value="injury">Personal injury</option><option value="estate">Private client</option><option value="investment">Investment law</option><option value="other">Other</option></select></div>
              <div className="form-group"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="A short outline of your matter"></textarea></div>
              <button type="submit" className="submit-btn">Send confidential enquiry <LegalIcon name="arrow" size={18} /></button>
              <p className="form-note">Please do not include highly sensitive information at this stage. Sending this form does not create a solicitor-client relationship.</p>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand"><span className="logo-mark">HS</span><div><h4>Harrison Stewards</h4><p>Solicitors &amp; Legal Counsel</p></div></div>
          <div className="footer-section"><h4>Explore</h4><a href="#about">The firm</a><a href="#services">Expertise</a><a href="#attorneys">Our people</a><a href="#contact">Contact</a></div>
          <div className="footer-section"><h4>Contact</h4><a href="tel:+18542407455">+1 (854) 240-7455</a><a href="mailto:info@harrisonstewardslawfirm.com">info@harrisonstewardslawfirm.com</a><p>United Kingdom</p></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Harrison Stewards. All rights reserved.</p><p>Professional, confidential legal counsel.</p></div>
      </footer>
    </section>
  );
};

export default Contact;

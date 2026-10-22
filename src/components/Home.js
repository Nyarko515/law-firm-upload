import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="home">
      <div className="home-overlay"></div>
      <div className="home-content">
        <p className="home-eyebrow">Harrison Stewards · Established legal counsel</p>
        <h1 className="home-title">Clear advice.<br />Resolute representation.</h1>
        <p className="home-description">Strategic legal counsel for individuals, families and businesses—delivered with discretion, clarity and care.</p>
        <div className="home-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>Request a consultation</button>
          <button className="btn-secondary" onClick={() => scrollToSection('services')}>Explore our expertise</button>
        </div>
        <div className="home-stats" aria-label="Firm highlights">
          <div className="stat-item"><h3>30+</h3><p>Years of combined experience</p></div>
          <div className="stat-item"><h3>7</h3><p>Core practice areas</p></div>
          <div className="stat-item"><h3>1:1</h3><p>Partner-led attention</p></div>
        </div>
      </div>
      <button className="scroll-indicator" onClick={() => scrollToSection('about')}><span>Discover the firm</span><span className="arrow-down"></span></button>
    </section>
  );
};

export default Home;

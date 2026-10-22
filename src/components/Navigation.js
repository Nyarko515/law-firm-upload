import React, { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [['home', 'Home'], ['about', 'The firm'], ['services', 'Expertise'], ['attorneys', 'People'], ['testimonials', 'Clients']];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-container">
        <button className="nav-logo" onClick={() => scrollToSection('home')} aria-label="Harrison Stewards home">
          <span className="logo-mark" aria-hidden="true">HS</span>
          <span className="logo-text"><strong>Harrison Stewards</strong><small>Solicitors &amp; Legal Counsel</small></span>
        </button>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>{label}</a>)}
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="contact-btn">Contact</a>
        </div>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

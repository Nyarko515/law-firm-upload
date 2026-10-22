import React from 'react';
import './About.css';
import lawFirmTeam from '../assets/law-firm-team.png';
import LegalIcon from './LegalIcon';

const values = [
  ['target', 'Client-led strategy', 'Advice shaped around your priorities and the outcome that matters to you.'],
  ['people', 'Senior attention', 'Experienced lawyers remain closely involved throughout your matter.'],
  ['award', 'Measured advocacy', 'Thorough preparation and decisive action, without needless theatre.'],
  ['integrity', 'Absolute discretion', 'Your confidence is respected at every stage of our relationship.']
];

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <div className="about-header">
        <p className="section-kicker">The firm</p>
        <h2 className="section-title">Judgement built on experience</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Trusted counsel for consequential moments.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={lawFirmTeam} alt="Attorneys collaborating in a law firm office" />
          <div className="image-overlay"><div className="overlay-content"><h3>30+ years</h3><p>of combined legal experience</p></div></div>
        </div>
        <div className="about-text">
          <p className="about-kicker">Harrison Stewards</p>
          <h3>Practical counsel, personal commitment.</h3>
          <p>We advise individuals, families and organisations on the matters that shape their future. Our work combines rigorous legal thinking with a clear understanding of what is at stake for every client.</p>
          <p>From the first conversation to final resolution, you can expect direct communication, considered strategy and advice you can act on with confidence.</p>
          <div className="about-features">
            {values.map(([icon, title, text]) => <div className="feature" key={title}><div className="feature-icon"><LegalIcon name={icon} /></div><div><h4>{title}</h4><p>{text}</p></div></div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

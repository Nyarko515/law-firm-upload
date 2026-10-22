import React from 'react';
import './Services.css';
import LegalIcon from './LegalIcon';

const services = [
  { icon: 'family', title: 'Family Law', description: 'Sensitive, pragmatic guidance through family change and complex personal decisions.', items: ['Divorce & separation', 'Child arrangements', 'Adoption', 'Pre-nuptial agreements'] },
  { icon: 'briefcase', title: 'Corporate Law', description: 'Commercially grounded support for businesses, founders, boards and investors.', items: ['Business formation', 'Commercial contracts', 'Mergers & acquisitions', 'Corporate governance'] },
  { icon: 'building', title: 'Real Estate', description: 'Clear advice across property transactions, development, ownership and disputes.', items: ['Property transactions', 'Title disputes', 'Landlord & tenant', 'Property litigation'] },
  { icon: 'scales', title: 'Criminal Defence', description: 'Calm, robust representation focused on protecting your rights and reputation.', items: ['Police investigations', 'Serious allegations', 'Financial crime', 'Appeals'] },
  { icon: 'shield', title: 'Personal Injury', description: 'Thoughtful representation for people whose lives have been altered by negligence.', items: ['Road accidents', 'Clinical negligence', 'Workplace injury', 'Fatal claims'] },
  { icon: 'document', title: 'Private Client', description: 'Careful planning to protect your family, assets and wishes across generations.', items: ['Wills & trusts', 'Probate', 'Powers of attorney', 'Estate planning'] },
  { icon: 'chart', title: 'Investment Law', description: 'Sophisticated advice on investment structures, regulation and financial disputes.', items: ['Regulatory compliance', 'Investment disputes', 'Fund structures', 'Financial regulation'] }
];

const Services = () => {
  const goToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <p className="section-kicker">Our expertise</p>
          <h2 className="section-title">Focused legal expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Clear, commercially minded advice across the moments that matter.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <div className="service-card-top"><div className="service-icon"><LegalIcon name={service.icon} /></div><span>0{index + 1}</span></div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-items">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <button className="service-btn" onClick={goToContact}>Discuss your matter <LegalIcon name="arrow" size={18} /></button>
            </article>
          ))}
        </div>
        <div className="services-cta">
          <div><p className="cta-kicker">Not sure where to begin?</p><h3>Let’s make the next step clear.</h3></div>
          <button className="cta-button" onClick={goToContact}>Speak with our team <LegalIcon name="arrow" size={18} /></button>
        </div>
      </div>
    </section>
  );
};

export default Services;

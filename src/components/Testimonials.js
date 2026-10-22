import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'James A.', role: 'Business owner', text: 'The team brought clarity to a complex transaction and kept us focused on the decisions that genuinely mattered. Their advice was commercial, precise and reassuring.', case: 'Corporate law' },
  { name: 'Maria G.', role: 'Private client', text: 'I felt listened to from the outset. Every option was explained plainly, and the team handled a difficult family matter with both strength and sensitivity.', case: 'Family law' },
  { name: 'Robert T.', role: 'Property client', text: 'Responsive, thorough and refreshingly straightforward. Harrison Stewards anticipated issues early and made the entire process feel controlled.', case: 'Real estate' },
  { name: 'Lisa C.', role: 'Private client', text: 'Their preparation was meticulous, but their manner was always human. I knew where I stood at every stage and felt properly represented.', case: 'Dispute resolution' }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const select = (offset) => setActiveIndex((activeIndex + offset + testimonials.length) % testimonials.length);
  const active = testimonials[activeIndex];
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <p className="section-kicker">Client perspective</p>
          <h2 className="section-title">Trusted when it matters</h2>
          <div className="title-underline"></div>
        </div>
        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={() => select(-1)} aria-label="Previous testimonial">←</button>
          <div className="testimonial-content">
            <article className="testimonial-card" key={activeIndex}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <p className="testimonial-text">{active.text}</p>
              <div className="testimonial-person"><span className="client-initials">{active.name.split(' ').map((part) => part[0]).join('')}</span><div><h4>{active.name}</h4><p>{active.role} · {active.case}</p></div></div>
            </article>
          </div>
          <button className="slider-btn next" onClick={() => select(1)} aria-label="Next testimonial">→</button>
        </div>
        <div className="testimonials-dots">{testimonials.map((item, index) => <button key={item.name} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)} aria-label={`View testimonial ${index + 1}`}></button>)}</div>
        <div className="testimonials-note"><span>Discretion is foundational to our practice.</span><p>Client names are abbreviated to respect privacy.</p></div>
      </div>
    </section>
  );
};

export default Testimonials;

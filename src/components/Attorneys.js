import React from 'react';
import './Attorneys.css';

const Attorneys = () => {
  const attorneys = [
    {
      name: 'James Alexander Thornton',
      title: 'Senior Partner',
      specialization: 'Corporate & Investment Law',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80',
      experience: '20+ years',
      education: 'Oxford Law School, J.D.',
      bio: 'Specializes in complex corporate transactions, investment law, and business litigation with a proven track record.',
      email: 'james.thornton@harrisonstewardslawfirm.com'
    },
    {
      name: 'William Henry Clarke',
      title: 'Senior Partner',
      specialization: 'Criminal Defense & Litigation',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      experience: '18+ years',
      education: 'Cambridge Law School, J.D.',
      bio: 'Renowned for aggressive defense strategies and exceptional courtroom advocacy skills.',
      email: 'william.clarke@harrisonstewardslawfirm.com'
    },
    {
      name: 'Cory Jacob Brown',
      title: 'Partner',
      specialization: 'Real Estate & Family Law',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      experience: '15+ years',
      education: 'London School of Economics, J.D.',
      bio: 'Expert in property law and family matters, providing compassionate yet effective legal representation.',
      email: 'cory.brown@harrisonstewardslawfirm.com'
    }
  ];

  return (
    <section id="attorneys" className="attorneys">
      <div className="attorneys-container">
        <div className="attorneys-header">
          <p className="section-kicker">Our people</p>
          <h2 className="section-title">Meet Our Attorneys</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Experienced lawyers. Considered advice. Personal responsibility.
          </p>
        </div>

        <div className="attorneys-grid">
          {attorneys.map((attorney, index) => (
            <div key={index} className="attorney-card">
              <div className="attorney-image-wrapper">
                <img src={attorney.image} alt={attorney.name} />
                <div className="attorney-overlay">
                  <a href={`mailto:${attorney.email}`} className="attorney-contact-btn">
                    Contact
                  </a>
                </div>
              </div>
              <div className="attorney-info">
                <h3>{attorney.name}</h3>
                <p className="attorney-title">{attorney.title}</p>
                <p className="attorney-specialization">{attorney.specialization}</p>
                <div className="attorney-details">
                  <p><strong>Experience:</strong> {attorney.experience}</p>
                  <p><strong>Education:</strong> {attorney.education}</p>
                </div>
                <p className="attorney-bio">{attorney.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="attorneys-join"><div><span>Work with us</span><h3>Ambitious about the law. Grounded with people.</h3></div><a className="join-btn" href="mailto:info@harrisonstewardslawfirm.com?subject=Careers at Harrison Stewards">Explore careers</a></div>
      </div>
    </section>
  );
};

export default Attorneys;

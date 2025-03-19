import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'SEO Services',
      description: 'Improve your website\'s visibility on search engines and drive organic traffic.',
      icon: 'fa-solid fa-magnifying-glass-chart'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand on platforms like TikTok, Instagram, and Facebook.',
      icon: 'fa-solid fa-share-nodes'
    },
    {
      title: 'PPC Advertising',
      description: 'Run targeted ad campaigns to reach your ideal customers and maximize ROI.',
      icon: 'fa-solid fa-bullhorn'
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your audience.',
      icon: 'fa-solid fa-pen-fancy'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 
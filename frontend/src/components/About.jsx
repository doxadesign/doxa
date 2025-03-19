import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At Doxa Digital Ventures, we're passionate about helping businesses thrive in the digital age. 
          Our team of experts combines creativity with technical expertise to deliver exceptional results 
          that drive growth and success for our clients.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <FontAwesomeIcon icon={faLightbulb} />
            <h3>Innovation</h3>
            <p>We stay ahead of digital trends to provide cutting-edge solutions that set you apart from the competition.</p>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Results-Driven</h3>
            <p>Our strategies are designed to deliver measurable results and help you achieve your business goals.</p>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faUsers} />
            <h3>Client-Focused</h3>
            <p>We work closely with you to understand your unique needs and deliver personalized solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
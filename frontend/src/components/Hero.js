import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Your partner in Digital Success</h1>
        <p className="hero-subtitle">
          We help businesses thrive in the digital age with innovative solutions and expert guidance.
        </p>
        <Link to="/contact" className="hero-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero; 
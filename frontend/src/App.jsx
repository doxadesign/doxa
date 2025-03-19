import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import About from './components/About';
import './App.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Services />
    </div>
  );
}

function Pricing() {
  return <h1>Our Pricing Plans</h1>;
}

function Contact() {
  return (
    <div className="contact-page">
      <ContactForm />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import AboutSection from './Component/AboutSection';
import PricingSection from './Component/PricingSection';
import ServicesSection from './Component/ServicesSection';
import TestimonialsSection from './Component/TestimonialsSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

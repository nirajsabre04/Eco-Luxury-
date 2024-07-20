// src/Component/Home.js
import React from 'react';
import HeroSection from '../Component/HeroSection';
import AboutSection from '../Component/AboutSection';
import PricingSection from '../Component/PricingSection';
import ServicesSection from '../Component/ServicesSection';
import TestimonialsSection from '../Component/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;

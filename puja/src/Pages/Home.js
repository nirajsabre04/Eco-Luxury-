// src/Component/Home.js
import React from 'react';
import HeroSection from '../Component/HeroSection';
import AboutSection from '../Component/AboutSection';
import PricingSection from '../Component/PricingSection';
import ServicesSection from '../Component/ServicesSection';
import TestimonialsSection from '../Component/TestimonialsSection';
import ContactForm from '../Component/ContactForm';


import '../CSS/Home.css'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm/>
    </div>
  );
};

export default Home;

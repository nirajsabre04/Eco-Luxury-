// src/Component/Home.js
import React from 'react';
import HeroSection from '../Component/HeroSection';
import AboutSection from '../Component/AboutSection';
import PricingSection from '../Component/PricingSection';
import InfoSection from '../Component/InfoSection';
import ServicesSection from '../Component/ServicesSection';
import TestimonialsSection from '../Component/TestimonialsSection';
import ContactForm from '../Component/ContactForm';
import AvailableBrands from '../Component/Available';

import '../CSS/Home.css'
import ProductCards from '../Component/ProductCards';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <PricingSection />
      <ProductCards/>
      <AboutSection />
      <ServicesSection />
      <AvailableBrands />
      <InfoSection />
      <TestimonialsSection />
      <ContactForm/>
    </div>
  );
};

export default Home;

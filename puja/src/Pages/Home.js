// src/Component/Home.js
import React from 'react';
import HeroSection from '../Component/HeroSection';
import AboutSection from '../Component/AboutSection';
import PricingSection from '../Component/PricingSection';
import ServicesSection from '../Component/ServicesSection';
import TestimonialsSection from '../Component/TestimonialsSection';
import ContactForm from '../Component/ContactForm';
import BenefitsSlider from '../Component/BenefitsSlider';
import OurProduct from '../Component/OurProduct';
import '../CSS/Home.css'


const Home = () => {
  return (
    <div>
         <div className='whatsapp_float'>
        <a href='https://wa.me/1234567890'>
        <img src='https://nareshit.com/images/whatsapp.svg' alt='WhatsApp' />
        </a>
      </div>
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <BenefitsSlider/>
      <OurProduct/>
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm/>
    </div>
  );
};

export default Home;

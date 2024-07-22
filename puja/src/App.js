import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import AboutSection from './Component/AboutSection';
import PricingSection from './Component/PricingSection';
import ServicesSection from './Component/ServicesSection';
import TestimonialsSection from './Component/TestimonialsSection';
import ContactForm  from './Component/ContactForm';

import Footer from './Component/Footer';  // Import the Footer component
import TermsOfService from './Component/TermsOfService';
import PrivacyPolicy from './Component/PrivacyPolicy';
import ShippingPolicy from './Component/ShippingPolicy';
import PolicyPage from './Component//PolicyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { CartProvider } from './Context/Context';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/herosection" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="policypage" element={<PolicyPage />} />
          </Routes>
          <Footer />
          {/* Add the Footer component here */}
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;

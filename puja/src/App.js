import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import AboutSection from './Component/AboutSection';
import PricingSection from './Component/PricingSection';
import ServicesSection from './Component/ServicesSection';
import TestimonialsSection from './Component/TestimonialsSection';
import ContactForm  from './Component/ContactForm';
import PaymentForm from './Component/PaymentForm'; // Update import
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
import Payment from './Component/PaymentForm';
import CodPaymentPage from './Component/CodPaymentPage'; // Import the new component
import ContactDialog from './Component/ContactDialog';


function App() {
  return (
    <CartProvider>
      <div className="App">
      <div className='whatsapp_float'>
        <a href='https://wa.me/1234567890'>
        <img src='https://nareshit.com/images/whatsapp.svg' alt='WhatsApp' />
        </a>
      </div>
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
            <Route path="/payment" element={<PaymentForm />} /> {/* Update path */}
            <Route path="/cod-payment" element={<CodPaymentPage />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="policypage" element={<PolicyPage />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
          {/* Add the Footer component here */}
        </Router>
        <ContactDialog />
      </div>
    </CartProvider>
  );
}

export default App;

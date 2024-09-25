import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import AboutSection from './Component/AboutSection';
import InfoSection from './Component/InfoSection';
import AvailableBrands from './Component/Available';
import PricingSection from './Component/PricingSection';
import ServicesSection from './Component/ServicesSection';
import TestimonialsSection from './Component/TestimonialsSection';
import ContactForm from './Component/ContactForm';
import PaymentForm from './Component/PaymentForm'; 
import Footer from './Component/Footer'; 
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import PolicyPage from './Pages//PolicyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { CartProvider } from './Context/Context';
import Payment from './Component/PaymentForm';
import CodPaymentPage from './Component/CodPaymentPage'; 
import ContactDialog from './Component/ContactDialog';
import OrderConfirmation from './Pages/OrderConfirm';
import OrderFailed from './Pages/OrderFailed';
import ProductDetail from './Component/ProductDetails';
import CarouselComponent from './Component/CarouselComponent';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className='whatsapp_float'>
          <a href='https://wa.me/7972849125'>
            <img src='https://nareshit.com/images/whatsapp.svg' alt='WhatsApp' />
          </a>
        </div>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/herosection" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/infosection" element={<InfoSection />} />
            <Route path="/carouselcomponent" element={<CarouselComponent />} />
            <Route path="/available" element={<AvailableBrands />} />
            <Route path="/products" element={<PricingSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentForm />} /> 
            <Route path="/cod-payment" element={<CodPaymentPage />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="policypage" element={<PolicyPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<OrderConfirmation />} />
            <Route path="/failed" element={<OrderFailed />} />
            <Route path="/product/:id/:subId" element={<ProductDetail />} />
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
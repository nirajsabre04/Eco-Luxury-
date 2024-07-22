
import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Puja Samagari</p>
        <p>#52, 4th Main, Sun City Layout,</p>
        <p>JP Nagar, 7th Phase, Bangalore. 560078</p>
        <p>Customer Care: +91 7892997597 / +91 8088835805</p>
        <p>Only WhatsApp: +91 96862 65715</p>
        <p>Email: <a href="mailto:customercare@greendna.in">customercare@greendna.in</a></p>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li><a href="/termsofservice">Terms of Service</a></li>
          <li><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/shippingpolicy">Shipping Policy</a></li>

        </ul>
      </div>
      <div className="footer-section">
        <h4>Information</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
       
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
};

export default Footer;

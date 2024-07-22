import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Puja Samagri</p>
        <p>Address - 607, 608 B-wing,</p>
        <p>Lokmat Bhavan, Lokmat Square,</p>
        <p>Ramdaspeth, Nagpur, Maharashtra</p>
        <p>Only WhatsApp: +91 7972849125</p>
        <p>Email: <a href="mailto:shop@pujasamagri.online">shop@pujasamagri.online</a></p>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li><a href="/termsofservice">Terms of Service</a></li>
          <li><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/shippingpolicy">Shipping Policy</a></li>
          <li><a href="/policypage">No Return Refund Cancellation Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Information</h4>
        <ul>
          <li><a href="/about">About Us</a></li> 
          <li><a href="/contactform">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Puja Samagari. All rights reserved.</p>
        <p>Powered by <a href="https://www.greendna.in" target="_blank" rel="noopener noreferrer">GreenDNA</a></p>
      </div>
    </footer>
  );
};

export default Footer;

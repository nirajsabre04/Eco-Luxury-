import React from 'react';
import '../CSS/Footer.css';
import Logo from '../assets/EL.png';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <div className='footer-logo'>
          <img className='logo'
            style={{ width: '65px', height: '65px', marginRight: '10px' }}
            src={Logo}
            alt="Puja Samagri Logo"
          />
          <span className="footer-logo-text" style={{ color: '#EAC65E', fontWeight: 'bold', marginTop: '5px' }}>
            ECO LUXURY
            <span className='footer-logo-mini'>FOR YOU</span>
          </span>
        </div>
        <p>Address - 607, 608 B-wing,</p>
        <p>Lokmat Bhavan, Lokmat Square,</p>
        <p>Ramdaspeth, Nagpur, Maharashtra</p>
        <p>Only WhatsApp: +91 7972849125 </p>
        <p>Email: <a href="mailto:shop@pujasamagri.online">shop@ecoluxury.in</a></p>
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
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/profile.php?id=61564005724363&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/ecoluxury._/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eco Luxury. All rights reserved.</p>
        <p>Powered by <a href="mailto:paragkosurkarindustries@gmail.com" target="_blank" rel="noopener noreferrer">ParagKosurkarIndustries</a></p>
      </div>
    </footer>
  );
};

export default Footer;

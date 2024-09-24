import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import Logo from '../assets/EL.png';
import '../CSS/Navbar.css';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Import close icon

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Track if nav is open

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand className="d-flex align-items-center">
            <img className='logo'
              style={{ width: '65px', height: '65px', marginRight: '10px' }}
              src={Logo}
              alt="Puja Samagri Logo"
            />
            <span className="navbar-logo-text" style={{ color: '#ff6600', fontWeight: 'bold', marginTop: '5px' }}>
              Eco Luxury
              <span className='navbar-logo-mini'>For You</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" onClick={toggleNavbar}>
            {isNavOpen ? <HiX /> : <HiMenuAlt3 />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="ml-auto" style={{ fontWeight: 'bold', gap: '20px' }}>
            {['home', 'about', 'products', 'services', 'testimonials', 'cart'].map((section, index) => (
              <ScrollLink
                key={index}
                to={section} // The ID of the section to scroll to
                smooth={true}
                duration={100}
                onClick={toggleNavbar} // Close the navbar on mobile when a link is clicked
                className="nav-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );  
};

export default NavigationBar;

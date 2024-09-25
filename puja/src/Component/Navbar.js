import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/EL.png';
import '../CSS/Navbar.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiX } from 'react-icons/hi'; // Import close icon

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isNavOpen, setIsNavOpen] = useState(false); // Track if nav is open

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" className="custom-navbar">
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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
            {isNavOpen ? <HiX /> : <HiMenuAlt3 />} {/* Change icon based on state */}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="ml-auto" style={{ fontWeight: 'bold', gap: '20px' }}>
            {['/', '/about', '/products', '/services', '/testimonials', '/cart','/contact'].map((path, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={path}
                onClick={() => handleNavLinkClick(path)}
                className={activeLink === path ? 'active nav-link' : 'nav-link'} // Added nav-link class
              >
                {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/pujasamagri.online.png';
import '../CSS/Navbar.css'

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            style={{
              width: '65px', // Adjust size as needed
              height: '65px', // Adjust size as needed
              marginRight: '10px' // Space between logo and text
            }}
            src={Logo}
            alt="Puja Samagri Logo"
          />
          <span style={{ color: '#ff6600', fontWeight: 'bold', marginTop: '5px' }}>PUJA SAMAGRI</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontWeight: 'bold', gap: '30px', marginLeft: '500px' }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

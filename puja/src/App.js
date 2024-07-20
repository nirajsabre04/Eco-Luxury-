// src/App.js
import React from 'react';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hero from '../src/assets/Hero.mp4'
import aboutImage from '../src/assets/about.png'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <section id="home">
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={Hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-text">
            <h1>Natural Fuel for a Greener Tomorrow</h1>
            <p>Eco-friendly Cow Dung Cakes for Sustainable Living</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <img src={aboutImage} alt="About Us" />
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Our mission is to provide sustainable and eco-friendly alternatives
            to traditional fuels. We specialize in high-quality cow dung cakes
            made from natural and organic materials, ensuring a clean and green
            environment for your everyday needs.
          </p>
        </div>
      </section>
  
    </div>
  );
}

export default App;

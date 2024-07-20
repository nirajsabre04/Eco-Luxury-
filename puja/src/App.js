// src/App.js
import React from 'react';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hero from '../src/assets/Hero.mp4'

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
  
    </div>
  );
}

export default App;

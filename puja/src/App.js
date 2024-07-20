import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Hero from '../src/assets/Hero.mp4';
import aboutImage from '../src/assets/about.png';
import S1 from '../src/assets/S1.webp';
import S2 from '../src/assets/S2.webp';
import S3 from '../src/assets/S3.gif';
import T1 from '../src/assets/T1.png'; 
import T2 from '../src/assets/T2.png';
import T3 from '../src/assets/T2.png';
import T4 from '../src/assets/T1.png';
import T5 from '../src/assets/T2.png';
import Cart from './Cart';

function Home() {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="Home">
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


      <section id="pricing" className="pricing-section">
        <h1 className="text-center my-5">Pricing</h1>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center pricing-card">
                <div className="card-body">
                  <h2 className="card-title">Basic</h2>
                  <h1 className="card-price">₹5/Month</h1>
                  <p className="card-text">Access to basic features</p>
                  <p className="card-text">Email support</p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-center pricing-card">
                <div className="card-body">
                  <h2 className="card-title">Advanced</h2>
                  <h1 className="card-price">₹10/Month</h1>
                  <p className="card-text">Access to all features</p>
                  <p className="card-text">Priority support</p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section id="services" className="services-section">
        <div className="service-card">
          <img src={S1} alt="Service 1" />
          <h3>High-Quality</h3>
          <p>High-quality cow dung cakes for a sustainable living.</p>
        </div>
        <div className="service-card">
          <img src={S3} alt="Service 2" />
          <h3>Eco-Friendly</h3>
          <p>Eco-friendly and natural materials for your everyday needs.</p>
        </div>
        <div className="service-card">
          <img src={S2} alt="Service 3" />
          <h3>Sustainable</h3>
          <p>Clean and green environment with our sustainable products.</p>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h1>Testimonials</h1>
        <Slider {...testimonialSettings}>
          <div className="testimonial-card">
            <img src={T1} alt="Testimonial 1" />
            <p>"This product has transformed our way of living. Highly recommend!"</p>
            <h3>John Doe</h3>
          </div>
          <div className="testimonial-card">
            <img src={T2} alt="Testimonial 2" />
            <p>"Eco-friendly and effective. A must-have for every household."</p>
            <h3>Jane Smith</h3>
          </div>
          <div className="testimonial-card">
            <img src={T3} alt="Testimonial 3" />
            <p>"Great quality and sustainability. I am very satisfied with the product."</p>
            <h3>Emily Johnson</h3>
          </div>
          <div className="testimonial-card">
            <img src={T4} alt="Testimonial 4" />
            <p>"Fantastic product that delivers on its promises."</p>
            <h3>Michael Brown</h3>
          </div>
          <div className="testimonial-card">
            <img src={T5} alt="Testimonial 5" />
            <p>"Eco-friendly and reliable. Highly recommended for a greener tomorrow."</p>
            <h3>Sarah Davis</h3>
          </div>
        </Slider>
      </section>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

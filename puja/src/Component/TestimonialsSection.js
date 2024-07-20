// src/Component/TestimonialsSection.js
import React from 'react';
import Slider from 'react-slick';
import T1 from '../assets/T1.png';
import T2 from '../assets/T2.png';
import T3 from '../assets/T2.png';
import T4 from '../assets/T1.png';
import T5 from '../assets/T2.png';
import '../CSS/TestimonialsSection.css';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;

// src/Component/TestimonialsSection.js
import React from 'react';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';
// import T1 from '../assets/T1.webp';
// import T2 from '../assets/T2.webp';
// import T3 from '../assets/T3.webp';
// import T4 from '../assets/T4.webp';
// import T5 from '../assets/T5.webp';
// import T6 from '../assets/T6.webp';
// import T7 from '../assets/T7.webp';
// import T8 from '../assets/T8.webp';
import '../CSS/TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="testimonials-section">
       <div className="testimonials-text">
       <h1>Testimonials</h1></div>
      <Slider {...testimonialSettings}>
        <div className="testimonial-card">
          {/* <img src={T1} alt="Testimonial 1" /> */}
          <p>"This cow dung product is fantastic for enriching soil fertility in our garden."</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>Varsha Belekar</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T2} alt="Testimonial 2" /> */}
          <p>"Eco-friendly and effective. A must-have for every household."</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>Ramesh More</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T3} alt="Testimonial 3" /> */}
          <p>"इस गोबर उत्पाद ने हमारे घर में सकारात्मक ऊर्जा का संचार किया है।"</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>शांता शर्मा</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T4} alt="Testimonial 4" /> */}
          <p>"These Sambrani Cups have a calming, long-lasting scent. Perfect for relaxation."</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>Avani Hatwar</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T5} alt="Testimonial 5" /> */}
          <p>"This cow dung has created an atmosphere of positive energy in our home."</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>Niraj Singh</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T6} alt="Testimonial 6" /> */}
          <p>"हमारे द्वारा उपयोग किए गए गोबर के उत्पादन से मैं पूरी तरह से संतुष्ट हूं। यह उत्पाद वास्तव में अद्वितीय है और हमारी खेती के लिए एक महत्वपूर्ण स्रोत है।"</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>विद्या साखरे  </h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T7} alt="Testimonial 7" /> */}
          <p>"इन सांबरानी कप्स की सुगंध बहुत ही शांति देने वाली है।"</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>राम बेळे</h3>
        </div>
        <div className="testimonial-card">
          {/* <img src={T8} alt="Testimonial 8" /> */}
          <p>"An excellent natural fertilizer, this cow dung has boosted our crop yield."</p>
          <StarRatings
            rating={5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <h3>Ayush Kumar</h3>
        </div>
      </Slider>
    </section>
  );
};

export default TestimonialsSection;

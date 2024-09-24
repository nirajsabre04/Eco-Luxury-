import React from 'react';
import Slider from 'react-slick';
import '../CSS/Carousel.css'; // Optional: Add styles for custom look
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
      }} // Position the left arrow
      onClick={onClick}
    >
      <img src="left-arrow.png" alt="prev" className="custom-arrow" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
      }} // Position the right arrow
      onClick={onClick}
    >
      <img src="right-arrow.png" alt="next" className="custom-arrow" />
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Disable arrows for tablet view
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows for mobile view
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Follow Us On Instagram</h2>
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div>
          <video className="reel-video" controls>
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Slider>
      <div className="social-buttons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <button className="instagram-button">View on Instagram</button>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <button className="facebook-button">View on Facebook</button>
        </a>
      </div>
    </div>
  );
};

export default CarouselComponent;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.png';
import Hero3 from '../assets/Hero3.png';
import Hero4 from '../assets/Hero4.png';
import '../CSS/HeroSection.css';

const HeroSection = () => {
  const images = [Hero1, Hero2, Hero3, Hero4];

  return (
    <section id="home">
      <div className="video-container">
        <Swiper
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className="slider-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overlay-text">
          <h1>Quality Upla/Kande Crafted from Pure and Fresh 100% Desi Cow's Dung (Gobar)</h1>
          <p>Due to its freshness burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

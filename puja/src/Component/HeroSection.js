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

  return (
    <section id="home">
      <div className="video-container">
        <Swiper
        className='mySwiper'
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,//most IMP
          }}
        >
          <SwiperSlide >
            <img src={Hero1} className="flex justify-center items-center" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img className="flex justify-center items-center" src={Hero2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero3} className="flex justify-center items-center" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero4} className="flex justify-center items-center" alt="" />
          </SwiperSlide>
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

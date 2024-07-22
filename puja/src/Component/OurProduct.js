import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../CSS/AboutSection.css"
import { final } from "../assets/Final";

// Swiper Styles
import "swiper/css";
import "swiper/css/autoplay";

const MySwiper = () => {
  return (
    <div className="img-container">
      <Swiper
        className="swiper-container"
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={final.Img1} className="" alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img2} className="" alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img3} className="" alt="Product 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img4} className="" alt="Product 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;

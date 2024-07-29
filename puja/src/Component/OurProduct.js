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
    <>
    <div className="product-text">
    <h1>Our Product</h1></div>
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
          <p id="desc">Embrace the ancient traditions of India with these organic pure cow dung gobar upla/uplay cakes</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img2} className="" alt="Product 2" />
          <p id="desc">Made from 100% pure and natural Indian cow dung, these cakes are meticulously handcrafted with due care and process</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img3} className="" alt="Product 3" />
          <p id="desc">Completely dried and moisture-free, they burn properly, making them ideal for hawan, puja, and other religious purposes</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img4} className="" alt="Product 4" />
          <p id="desc"> Embrace the purity and authenticity of these organic cow dung cakes and elevate your religious ceremonies with their sacred essence.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={final.Img5} className="" alt="Product 4" />
          <p id="desc">Embrace the ancient traditions of India with these organic pure cow dung gobar upla/uplay cakes</p>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default MySwiper;

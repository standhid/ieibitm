import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";

function AboutCard({id, image}) {
    return (
      <div className="h-full bg-[#333] text-center  overflow-hidden">
        <div className="flex justify-center overflow-hidden relative  mx-auto ">
          <img
            className="w-full object-cover object-center"
            src={image}
            alt="blog"
          />
        </div>
      </div>
    );
  }


const AboutSlider = () => {
    return (
      <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={false}
        loop={false}
        pagination={true}
        autoplay={{
          delay: 1000,
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AboutCard
            id="1"
            image="/about.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
        <AboutCard
            id="1"
            image="/about.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
        <AboutCard
            id="1"
            image="/about.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
        <AboutCard
            id="1"
            image="/about.webp"
          />
        </SwiperSlide>
      </Swiper>
      </>
    );
}

export default AboutSlider;

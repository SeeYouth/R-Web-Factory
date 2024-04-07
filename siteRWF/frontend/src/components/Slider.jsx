// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import React from 'react';

// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { slider } from '../assets/utils/variable';

const Slider = () => {
  return (
    <section className="containerSlider">
      <Swiper
        className="swiperContainer"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={"slider" + index}>
            <div className="swiperSlideText">
              <h2> {slide.h2} </h2>
              <h3> {slide.h3} </h3>
              <button> {slide.button} </button>
            </div>
            <img src={slide.imgSrc} alt={slide.alt} srcSet={slide.imgSrcSet} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

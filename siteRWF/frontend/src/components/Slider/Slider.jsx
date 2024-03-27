// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      className="swiperContainer"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="swiperSlideText">
          <h2>Agence de Communication Digital</h2>
          <h3>Développons votre business digital</h3>
          <button>Création de site</button>
        </div>
        <img
          src="/src/assets/img/webp/loungeRWF/lounge_rural_web_factory_0_5x.webp"
          alt="Photo du salon de Rural Web Factory"
          srcset="/src/assets/img/jpg/loungeRWF/lounge_rural_web_factory_0,5x.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/img/webp/brief_Rural_Web_Factory.webp"
          alt="Photo d'une réunion faites avec un client de Rural Web Factory"
          srcset="/src/assets/img/jpg/brief_Rural_Web_Factory.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/img/webp/coworkingSpaceRWF/coworkingSpace-RWF-1.webp"
          alt="Photo de l'espace de coworking de Rural Web Factory"
          srcset="/src/assets/img/jpg/coworkingSpaceRWF/coworkingSpace-RWF-1.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

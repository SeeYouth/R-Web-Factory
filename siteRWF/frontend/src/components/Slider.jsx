// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import React from "react";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiperSlideText">
            <h2>Agence de Communication Digital</h2>
            <h3>Développons votre business digital</h3>
            <button>Créons votre site ensemble</button>
          </div>
          <img
            src="/src/assets/img/webp/loungeRWF/lounge_rural_web_factory_0_5x.webp"
            alt="Photo du salon de Rural Web Factory"
            srcSet="/src/assets/img/jpg/loungeRWF/lounge_rural_web_factory_0,5x.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlideText">
            <h2>Agence de Conseil aux Entreprises</h2>
            <h3>Nous serons toujours à votre écoute</h3>
            <button>Prenons rendez-vous</button>
          </div>

          <img
            src="/src/assets/img/webp/briefRuralWebFactory/brief_Rural_Web_Factory.webp"
            alt="Photo d'une réunion faites avec un client de Rural Web Factory"
            srcSet="/src/assets/img/jpg/briefRuralWebFactory/brief_Rural_Web_Factory.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlideText">
            <h2>Espace de coWorking</h2>
            <h3>Présent même dans les échanges</h3>
            <button>Prenons rendez-vous</button>
          </div>

          <img
            src="/src/assets/img/webp/coworkingSpaceRWF/coworkingSpace-RWF-1.webp"
            alt="Photo de l'espace de coworking de Rural Web Factory"
            srcSet="/src/assets/img/jpg/coworkingSpaceRWF/coworkingSpace-RWF-1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;

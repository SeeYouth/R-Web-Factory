// Import Swiper styles
import "swiper/css";

import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section className="containerSlider">
          <Slider />
        </section>
        <section>
          <p>
            <span>Vos projet web</span>
            sur mesure et 100% français !
          </p>
        </section>
        <section>
          <h2>Notre expérience au service de vos projets web</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

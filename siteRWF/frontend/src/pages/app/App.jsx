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
        <div className="containerSlider">
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default App;

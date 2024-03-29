// Import Swiper styles
import "swiper/css";

import React from "react";

import Footer from "../components/Footer";
import InfoRwf from "../components/InfoRwf";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import TextProject from "../components/TextProject";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Slider />
        <TextProject />
        <InfoRwf />
      </main>
      <Footer />
    </>
  );
};

export default App;

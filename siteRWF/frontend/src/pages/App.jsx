// Import Swiper styles
import "swiper/css";

import React from "react";

import { dataIcon } from "../assets/img/svg/dataIcon";
import Gear from "../assets/img/svg/gear";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Slider />
        <section>
          <p>
            <span>Vos projet web</span>
            sur mesure et 100% français !
          </p>
        </section>
        <section className="infoRwf">
          <h2>Notre expérience au service de vos projets web</h2>
          <ul className="skillContainer">
            <li className="skill">
              {dataIcon}
              <h4>hébergement</h4>
              <p>
                Notre savoir-faire en hébergement nous permet de conseiller nos
                clients et concevoir des projets à fort trafic.
              </p>
            </li>
            <li className="skill">
              <Gear />
              <h4>hébergement</h4>
              <p>
                Notre savoir-faire en hébergement nous permet de conseiller nos
                clients et concevoir des projets à fort trafic.
              </p>
            </li>
            <li className="skill">
              {dataIcon}
              <h4>hébergement</h4>
              <p>
                Notre savoir-faire en hébergement nous permet de conseiller nos
                clients et concevoir des projets à fort trafic.
              </p>
            </li>
            <li className="skill">
              {dataIcon}
              <h4>hébergement</h4>
              <p>
                Notre savoir-faire en hébergement nous permet de conseiller nos
                clients et concevoir des projets à fort trafic.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

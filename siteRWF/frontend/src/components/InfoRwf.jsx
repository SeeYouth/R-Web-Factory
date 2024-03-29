import React from "react";

import Gear from "../assets/img/svg/gear";
import SvgDataIcon from "../assets/img/svg/SvgDataIcon";
import SvgPenTools from "../assets/img/svg/SvgPenTools";

const InfoRwf = () => {
  return (
    <section className="infoRwf">
      <h2>Notre expérience au service de vos projets web</h2>
      <ul className="skillContainer">
        <li className="skill">
          <div className="containerSvg">
            <SvgDataIcon />
          </div>
          <h4>hébergement</h4>
          <p>
            Notre savoir-faire en hébergement nous permet de vous conseiller et
            ainsi concevoir des projets à fort trafic.
          </p>
          <button>En savoir plus</button>
        </li>
        <li className="skill">
          <div className="containerSvg">
            <Gear />
          </div>
          <h4>développement web</h4>
          <p>
            Méthodes, rigueur et réactivité pour réaliser et suivre votre projet
            de site internet.
          </p>
          <button>En savoir plus</button>
        </li>
        <li className="skill">
          <div className="containerSvg">
            <SvgPenTools />
          </div>
          <h4>création graphique</h4>
          <p>
            Création online ou offline, nous réalisons les projets graphiques
            qui reflètent votre image.
          </p>
          <button>En savoir plus</button>
        </li>
        <li className="skill">
          <div className="containerSvg">
            <SvgDataIcon />
          </div>
          <h4>web marketing</h4>
          <p>
            Rentabilisez votre site web grâce au référencement naturel, à
            l'emailing ou d'autre actions de création de trafic.
          </p>
          <button>En savoir plus</button>
        </li>
      </ul>
    </section>
  );
};

export default InfoRwf;

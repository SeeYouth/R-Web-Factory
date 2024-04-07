import React from 'react';

import { infoRwf } from '../assets/utils/variable';

const InfoRwf = () => {
  return (
    <section className="infoRwf">
      <h2>Notre expérience au service de vos projets web</h2>
      <ul className="skillContainer">
        {infoRwf.map((skill, index) => (
          <li key={"skillInfoRwf" + index} className="skill">
            <div className="containerSvg">{skill.svg}</div>
            <h4> {skill.h2} </h4>
            <p>{skill.p}</p>
            <button>En savoir plus</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoRwf;

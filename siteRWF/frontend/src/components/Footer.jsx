import React from "react";

import {
  arrayInterest,
  numberContactDevelopment,
  numberContactWebDesign,
  tagRwfEmail,
  textContactDevelopment,
  textContactWebDesign,
  textRwf,
  textRwfAgenceCom,
} from "../assets/utils/variable";

const Footer = () => {
  console.log(arrayInterest);
  return (
    <footer>
      <div className="containerFooter">
        <div>
          <h2>{textRwf}</h2>
          <ul className="listLinkFooter">
            <li>{textRwfAgenceCom}</li>
            <li> {tagRwfEmail} </li>
            <li>
              <div>
                <p> {textContactWebDesign} </p>
                <p>
                  <a href={`tel:${numberContactWebDesign}`}>
                    {" "}
                    {numberContactWebDesign}{" "}
                  </a>
                </p>
              </div>
            </li>
            <li>
              <div>
                <p> {textContactDevelopment} </p>
                <p>
                  {" "}
                  <a href={`tel:${numberContactDevelopment}`}>
                    {" "}
                    {numberContactDevelopment}{" "}
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        {arrayInterest.map((section, index) => (
          <div key={section.title + index}>
            <h2>{section.title}</h2>
            <ul className="listLinkFooter">
              {section.array.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

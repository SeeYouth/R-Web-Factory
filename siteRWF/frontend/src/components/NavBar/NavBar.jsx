import React from "react";

import { FacebookLogo } from "../../assets/img/svg/logoSvg-facebook.jsx";
import { LinkedInLogo } from "../../assets/img/svg/LinkedIn_icon.jsx";
import { logoRwf } from "../logoRwf/logoRwf";
import { Xlogo } from "../../assets/img/svg/X_logo.jsx";
import { YtLogo } from "../../assets/img/svg/YtLogo.jsx";

const NavBar = () => {
  return (
    <nav>
      {logoRwf}
      <ul className="socialBar">
        <li>
          <p className="svgBtn">Vous avez un projet ?</p>
        </li>
        <li>{Xlogo}</li>
        <li>{FacebookLogo}</li>
        <li>{LinkedInLogo}</li>
        <li>{YtLogo}</li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;

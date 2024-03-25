import React from "react";

import { FacebookLogo } from "../../assets/img/svg/logoSvg-facebook.jsx";
import { LinkedInLogo } from "../../assets/img/svg/LinkedIn_icon.jsx";
import { logoRwf } from "../logoRwf/logoRwf";
import { LogoYt } from "../../assets/img/svg/IconYoutube.jsx";
import { Xlogo } from "../../assets/img/svg/X_logo.jsx";

const NavBar = () => {
  return (
    <nav>
      {logoRwf}
      <ul className="socialBar">
        <li>
          <p>Vous avez un projet ?</p>
        </li>
        <li>{Xlogo}</li>
        <li>{FacebookLogo}</li>
        <li>{LinkedInLogo}</li>
        <li>{LogoYt}</li>
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

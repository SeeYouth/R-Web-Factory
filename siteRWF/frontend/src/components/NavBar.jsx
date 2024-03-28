import React from "react";

import { Link } from "react-router-dom";

import { FacebookLogo } from "../assets/img/svg/logoSvg-facebook.jsx";
import { LinkedInLogo } from "../assets/img/svg/LinkedIn_icon.jsx";
import { logoRwf } from "./logoRwf.jsx";
import { Xlogo } from "../assets/img/svg/X_logo.jsx";
import { YtLogo } from "../assets/img/svg/YtLogo.jsx";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">{logoRwf}</Link>

      <ul className="socialBar">
        <li>
          <p className="svgBtn">Vous avez un projet ?</p>
        </li>
        <li>{Xlogo}</li>
        <li>{FacebookLogo}</li>
        <li>{LinkedInLogo}</li>
        <li>{YtLogo}</li>
      </ul>
      <ul className="navLink">
        <li></li>
        <li>Nos réalisations</li>
        <li>Agenda</li>
        <li>Formations</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

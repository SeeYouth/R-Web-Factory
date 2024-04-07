import React from 'react';

import { Link } from 'react-router-dom';

import { FacebookLogo } from '../assets/img/svg/logoSvg-facebook.jsx';
import { LinkedInLogo } from '../assets/img/svg/LinkedIn_icon.jsx';
import { logoRwf } from './logoRwf.jsx';
import { Xlogo } from '../assets/img/svg/X_logo.jsx';
import { YtLogo } from '../assets/img/svg/YtLogo.jsx';

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
        <li>{YtLogo}</li>
        <li>{LinkedInLogo}</li>
      </ul>
      <ul className="navLink">
        <Link to="/realization">
          <li className="navLinkMenu">
            Nos réalisations
            <div className="bgMenuAnimation"></div>
          </li>
        </Link>
        <Link to="">
          <li className="navLinkMenu">
            Agenda
            <div className="bgMenuAnimation"></div>
          </li>
        </Link>
        <Link to="">
          <li className="navLinkMenu">
            Formations
            <div className="bgMenuAnimation"></div>
          </li>
        </Link>
        <Link to="">
          <li className="navLinkMenu">
            Blog
            <div className="bgMenuAnimation"></div>
          </li>
        </Link>
        <Link to="">
          <li className="navLinkMenu">
            Contact
            <div className="bgMenuAnimation"></div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

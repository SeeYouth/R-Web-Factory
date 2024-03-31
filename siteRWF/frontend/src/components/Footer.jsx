import React from "react";

import {
  numberContactDevelopment,
  numberContactWebDesign,
  tagRwfEmail,
  textContactDevelopment,
  textContactWebDesign,
  textRwf,
  textRwfAgenceCom,
} from "../assets/utils/variable";

const Footer = () => {
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
        <div>
          <h2>La création de site internet</h2>
          <ul className="listLinkFooter">
            <li>Gestion de projet</li>
            <li>Webdesign</li>
            <li>Identité visuelle</li>
            <li>Développement</li>
            <li>Intégration</li>
            <li>Hébergement</li>
            <li>Webmarketing</li>
            <li>Référencement naturel</li>
            <li>E-Mailing</li>
            <li>Infogérance</li>
          </ul>
        </div>
        <div>
          <h2>domaines d'activité</h2>
          <ul className="listLinkFooter">
            <li>Création de site e.commerce</li>
            <li>Création de site institutionnel</li>
            <li>Création de site vitrine</li>
            <li>Création de site catalogue</li>
            <li>Refonte de site</li>
            <li>Responsive design</li>
            <li>Création de site avec CMS</li>
            <li>Paiement en ligne</li>
            <li>Interfaçage</li>
          </ul>
        </div>
        <div>
          <h2>Information complémentaire</h2>
          <ul className="listLinkFooter">
            <li>Devis en ligne</li>
            <li>Contact</li>
            <li>Mentions légales</li>
            <li>Condition générales d'utilisation</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

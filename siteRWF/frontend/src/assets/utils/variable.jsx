import { Link } from 'react-router-dom';

//------------------------//
//-------- FOOTER --------//
//------------------------//

//---- EMAIL ----//
export const textRwfEmail             = "contact@agence-rwf.fr"

//---- TEL ----//
export const numberContactWebDesign   = "06 81 78 50 86";
export const numberContactDevelopment = "06 82 79 51 87";

//---- LI ----//
export const textRwfAgenceCom         = "Agence de communication digital"
export const tagRwfEmail              = <a href={`mailto:${textRwfEmail}`}>{textRwfEmail}</a>

export const textContactWebDesign     = "Contact webdesign";
export const textContactDevelopment   = "Contact développement";

//---- H2 ----//
export const textRwf                  = "Rural Web Factory"
export const createWebsite            = "La création de site internet";
export const fieldActivity            = "Domaines d'activité";
export const additionalInformation    = "Information complémentaire";

//---- CREATE WEBSITE ----//

export const arrayLiCreateWebsite     = [
                                          "Gestion de projet",
                                          "Webdesign",
                                          "Identité Visuelle",
                                          "Développement",
                                          "Intégration",
                                          "Hébergement",
                                          "Webmarketing",
                                          "Référencement naturel",
                                          "E-Mailing",
                                          "Infogérance"
                                        ]

//---- FIELD ACTIVITY ----//

export const arrayFieldActivity       = [
                                          "Création de site e-commerce",
                                          "Création de site institutionnel",
                                          "Création de site vitrine",
                                          "Création de site catalogue",
                                          "Refonte de site",
                                          "Responsive design",
                                          "création de site avec CMS",
                                          "Interfaçage"
                                        ]

//---- ADDITIONAL INFORMATION ----//

export const arrayAddInfo              = [
                                          <Link to="/contact">Contact</Link>,
                                          "Mentions légales",
                                          "Conditions générales d'utilisation",
                                          "Politique de confidentialité"
                                        ]

//---- ARRAY LIST LI AND LINK ----//

export const arrayInterest             = [
                                          {
                                            title: createWebsite,
                                            array: arrayLiCreateWebsite
                                          },
                                          {
                                            title: fieldActivity,
                                            array: arrayFieldActivity
                                          },
                                          {
                                            title: additionalInformation,
                                            array: arrayAddInfo
                                          }
                                        ]

export const category                 = [
                                          "Blog",
                                          "E-commerce",
                                          "Institutionnel",
                                          "Site Catalogue",
                                          "Site Vitrine",
                                        ];

export const slider = [
  {
    h2: "Agence de Communication Digital",
    h3: "Développons votre business digital",
    button: "Créons votre site ensemble",
    imgSrc: "/img/webp/loungeRWF/lounge_rural_web_factory_0_5x.webp",
    imgSrcSet: "/img/jpg/loungeRWF/lounge_rural_web_factory_0,5x.jpg",
    alt: "Photo du salon de Rural Web Factory"
  },
  {
    h2: "Agence de Conseil aux Entreprises",
    h3: "Nous serons toujours à votre écoute",
    button: "Prenons rendez-vous",
    imgSrc: "/img/webp/briefRuralWebFactory/brief_Rural_Web_Factory.webp",
    imgSrcSet: "/img/jpg/briefRuralWebFactory/brief_Rural_Web_Factory.jpg",
    alt: "Photo d'une réunion faites avec un client de Rural Web Factory"
  },
  {
    h2: "Espace de coWorking",
    h3: "Présent même dans les échanges",
    button: "Prenons rendez-vous",
    imgSrc: "/img/webp/coworkingSpaceRWF/coworkingSpace-RWF-1.webp",
    imgSrcSet: "/img/jpg/coworkingSpaceRWF/coworkingSpace-RWF-1.jpg",
    alt: "Photo de l'espace de coworking de Rural Web Factory"
  }
]
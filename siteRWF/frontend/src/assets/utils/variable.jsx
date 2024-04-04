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



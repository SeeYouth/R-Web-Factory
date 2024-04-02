import React, { useState } from "react";

import { arrayWebSiteRealization } from "../assets/utils/variableRealization";

const ListRealization = () => {
  const [selectedCategoryRadio, setSelectedCategoryRadio] = useState("");
  const category = [
    "Blog",
    "E-commerce",
    "Institutionnel",
    "Site Catalogue",
    "Site Vitrine",
  ];

  const checkboxChange = (checkboxId) => {
    setSelectedCategoryRadio((selected) =>
      selected === checkboxId ? "" : checkboxId
    );
  };

  return (
    <>
      <ul className="containerCategoryRadio">
        {category.map((item, index) => (
          <li className="itemCategoryRadio" key={"cat" + item + index}>
            <input
              type="checkbox"
              name="categoryRadio"
              id={item}
              checked={item === selectedCategoryRadio}
              onChange={() => checkboxChange(item)}
            />
            <label htmlFor={item}> {item} </label>
            <div className="bgMenuAnimation"></div>
          </li>
        ))}
      </ul>
      <div className="containerRealization">
        {arrayWebSiteRealization
          .filter(
            (item) =>
              selectedCategoryRadio === "" ||
              item.category.includes(selectedCategoryRadio)
          )
          .map((realization) => (
            <div className="listContainerItemReal" key={realization.id}>
              <div className="textItemReal">
                <h3> {realization.title} </h3>
                <a
                  className="btnRealization"
                  href={realization.webSite}
                  target="_bank"
                >
                  Visiter le site
                </a>
              </div>
              <img src={realization.imgSrc} alt={realization.alt} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ListRealization;

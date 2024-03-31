import React from "react";

import { arrayWebSiteRealization } from "../assets/utils/variableRealization";

const ListRealization = () => {
  return (
    <div>
      {arrayWebSiteRealization.map((realization) => (
        <div className="containerRealization" key={realization.id}>
          <div className="containerTextItemRealization">
            <h3> {realization.title} </h3>
            <p> {realization.description} </p>
            <a className="btnRealization" href={realization.webSite}>
              Visiter le site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListRealization;

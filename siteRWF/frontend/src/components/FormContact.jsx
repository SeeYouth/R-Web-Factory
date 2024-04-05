import React, { useState } from "react";

import ReactSlider from "react-slider";

import {
  arrayInpRadio,
  arrayInpText,
} from "../assets/utils/VariableFormContact";
import { category } from "../assets/utils/variable";

const FormContact = () => {
  const [value, setValue] = useState([500, 30000]);
  const handleChange = (value) => {
    setValue(value);
  };
  function formatBudget(value) {
    return value.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  console.log("log useState value", value);

  return (
    <main className="containerFormContact">
      <h2>
        Pour votre avenir numérique <br />
        C'est ici
      </h2>
      <form method="post">
        <fieldset className="styleForm">
          {arrayInpText[0].map((company) => (
            <React.Fragment key={company.id}>
              {company.inputText}
            </React.Fragment>
          ))}
          {arrayInpRadio[0].map((civility, index) => (
            <React.Fragment key={"civility" + civility + index}>
              <input type="radio" name="civility" id={civility} />
              <label htmlFor={civility}>{civility}</label>
            </React.Fragment>
          ))}
        </fieldset>
        <fieldset className="styleForm">
          <h3>Quel style de projet avez-vous imaginé ?</h3>
          {category.map((item, index) => (
            <React.Fragment key={"InpRadio" + item + index}>
              <input type="radio" name="category" id={item} />
              <label htmlFor={item}> {item} </label>
            </React.Fragment>
          ))}
          <ReactSlider
            className="horizontalSlider"
            thumbClassName="budgetThumb"
            trackClassName="budgetTrack"
            defaultValue={value}
            onChange={handleChange}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{formatBudget(state.valueNow)}</div>
            )}
            pearling
            step={100}
            minDistance={2500}
            min={500}
            max={30000}
          />
        </fieldset>
        <fieldset className="styleForm">
          <h3>Avez-vous déjà votre cahier des charges ?</h3>
          {arrayInpRadio[1].map((item, index) => (
            <React.Fragment key={"cdc" + item + index}>
              <input type="radio" name="cdc" id={item} />
              <label htmlFor={item}>{item}</label>
            </React.Fragment>
          ))}
          <textarea
            name="explicationProject"
            id="explicationProject"
            cols="30"
            rows="10"
            placeholder="Expliquez-nous en quelques lignes votre rêve"
          ></textarea>
        </fieldset>
      </form>
    </main>
  );
};

export default FormContact;

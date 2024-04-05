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
        {arrayInpText[0].map((company) => (
          <div key={company.id}>
            {company.labelText}
            {company.inputText}
          </div>
        ))}
        {arrayInpRadio[0].map((civility, index) => (
          <div key={"civility" + civility + index}>
            <label htmlFor={civility}>{civility}</label>
            <input type="radio" name="civility" id={civility} />
          </div>
        ))}
        <h3>Quel style de projet avez-vous imaginé ?</h3>
        {category.map((item, index) => (
          <div key={"InpRadio" + item + index}>
            <label htmlFor={item}> {item} </label>
            <input type="radio" name="category" id={item} />
          </div>
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
        <h3>Avez-vous déjà votre cahier des charges ?</h3>
        {arrayInpRadio[1].map((item, index) => (
          <div key={"cdc" + item + index}>
            <label htmlFor={item}>{item}</label>
            <input type="radio" name="cdc" id={item} />
          </div>
        ))}
        <textarea
          name="explicationProject"
          id="explicationProject"
          cols="30"
          rows="10"
          placeholder="Expliquez-nous en quelques lignes votre rêve"
        ></textarea>
      </form>
    </main>
  );
};

export default FormContact;

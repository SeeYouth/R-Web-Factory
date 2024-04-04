import React, { useState } from "react";

import ReactSlider from "react-slider";

import {
  arrayInpRadio,
  arrayInpText,
} from "../assets/utils/VariableFormContact";

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

  // console.log(formatBudget());

  return (
    <main className="containerFormContact">
      <h2>Vous avez un projet de création de site internet ?</h2>
      <p>Contactez-nous !</p>
      <form method="post">
        {arrayInpText[0].map((company) => (
          <div key={company.id}>
            {company.labelText}
            {company.inputText}
          </div>
        ))}
        {arrayInpRadio[0].map((civility) => (
          <div key={civility.id}>
            <label htmlFor={civility.textInputRadio}>
              {civility.textInputRadio}
            </label>
            <input type="radio" name="civility" id={civility.textInputRadio} />
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
      </form>
    </main>
  );
};

export default FormContact;

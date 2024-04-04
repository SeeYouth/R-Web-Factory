import React from "react";

import ReactSlider from "react-slider";

import {
  arrayInpRadio,
  arrayInpText,
} from "../assets/utils/VariableFormContact";

const FormContact = () => {
  // const [value, setValue] = useState([0, 100]);
  // const handleChange = (value) => {
  //   setValue(value);
  // };
  return (
    <main>
      <h2>Vous avez un projet de création de site internet ?</h2>
      <p>Contactez-nous !</p>
      <form method="post">
        {arrayInpText[0].map((compagny) => (
          <>
            {compagny.labelText}
            {compagny.inputText}
          </>
        ))}
        {arrayInpRadio[0].map((civility) => (
          <>
            <label htmlFor={civility}>{civility}</label>
            <input type="radio" name={civility} id={civility} />
          </>
        ))}
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </form>
    </main>
  );
};

export default FormContact;

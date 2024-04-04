import React from 'react';

import ReactSlider from 'react-slider';

import {
  arrayInpRadio,
  arrayInpText,
} from '../assets/utils/VariableFormContact';

const FormContact = () => {
  // const [value, setValue] = useState([0, 100]);
  // const handleChange = (value) => {
  //   setValue(value);
  // };
  console.log(arrayInpText[0].labelText);
  return (
    <main>
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
        {/* <ReactSlider
          className="horizontal-slider"
          marks
          markClassName="example-mark"
          min={0}
          max={9}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        /> */}
      </form>
    </main>
  );
};

export default FormContact;

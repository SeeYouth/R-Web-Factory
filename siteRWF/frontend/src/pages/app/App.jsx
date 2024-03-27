import React from "react";

import NavBar from "../../components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="containerSlider">
          <img
            src="/src/assets/img/webp/lounge_rural_web_factory.webp"
            alt="Photo du salon de Rural Web Factory"
          />
        </div>
      </main>
    </div>
  );
};

export default App;

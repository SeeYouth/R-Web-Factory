import React from "react";

import Footer from "../components/Footer";
import ListRealization from "../components/ListRealization";
import NavBar from "../components/NavBar";

const Realization = () => {
  return (
    <>
      <NavBar />
      <main className="titleRealization">
        <h2>nos réalisations</h2>
        <p>
          Communiquer, c'est plaire, orienter l'information, être concis et
          compréhensible.
        </p>
        <p>Laissez nous vous propulser sur la toile !</p>
        <ListRealization />
      </main>
      <Footer />
    </>
  );
};

export default Realization;

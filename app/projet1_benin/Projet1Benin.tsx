"use client";

import Projet1Intro from "../projet1/Projet1Intro";
import Projet1Partenaire from "../projet1/Projet1Partenaire";
import Projet1Probleme from "../projet1/Projet1Probleme";
import Projet1Solution from "../projet1/Projet1Solution";

const Projet1Benin = () => {
  return (
    <>
      <div>
        <Projet1Intro />
        <br />
        <Projet1Probleme />
        <Projet1Solution />
        <Projet1Partenaire />
      </div>
    </>
  );
};

export default Projet1Benin;

"use client";

import Projet1Intro from "./Projet1Intro";
import Projet1Partenaire from "./Projet1Partenaire";
import Projet1Probleme from "./Projet1Probleme";
import Projet1Solution from "./Projet1Solution";


export default function Projet1() {
  return (
    <>
      <div>
        <Projet1Intro />
        <br />
        <Projet1Probleme/>
        <Projet1Solution />
        <Projet1Partenaire/>

      </div>
    </>
  );
}

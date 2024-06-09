"use client";

import Projet2Intro from "./Projet2Intro";
import Projet1Intro from "./Projet2Intro";
import Projet2Partenaires from "./Projet2Partenaires";
import Projet1Partenaire from "./Projet2Partenaires";
import Projet2Probleme from "./Projet2Probleme";
import Projet1Probleme from "./Projet2Probleme";
import Projet2Solution from "./Projet2Solution";


export default function Projet1() {
  return (
      <div>
        <Projet2Intro />
        <Projet2Probleme />
        <Projet2Solution />
        <Projet2Partenaires />
      </div>
  );
}

"use client";

import Projet4Intro from "./Projet4Intro";
import Projet4Partenaire from "./Projet4Partenaire";
import Projet4Probleme from "./Projet4Probleme";
import Projet4Solution from "./Projet4Solution";


export default function Projet1() {
  return (
      <div>
        <Projet4Intro />
        <Projet4Probleme />
        <Projet4Solution />
        <Projet4Partenaire />
      </div>
  );
}

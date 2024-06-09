"use client";

import ProjetIntro from "./ProjetIntro"
import ProjetListe from "./ProjetListe"
import ProjetProbleme from "./ProjetProbleme"
import ProjetPartenaire from "./ProjetPartenaire"
import ProjetRapport from "./ProjetRapport"


export default function APropos() {
  return (
    <>
      <div>
        <ProjetIntro />
        <ProjetListe />
        <ProjetPartenaire />
        <ProjetRapport />
      </div>
    </>
  );
}

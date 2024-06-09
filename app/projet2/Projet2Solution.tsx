"use client";

import React from "react";
import Image from "next/image";

const Projet1Solution1 = () => {
  return (
    <div className="h-1/2 grid grid-cols-12">
      <div className="col-span-12">
        <h1>TEST</h1>
        <h1>FORMATION DES RESPONSABLES</h1>
      </div>

      <div
        className="col-span-5 m-10 p-5 border-32"
        style={{ position: "relative", width: 500, height: 400 }}
      >
        <Image
          src="/projets/projet2/projet2_solution.jpeg"
          layout="fill"
          alt="Bonne maman"
        />
      </div>
      <div className="col-span-5 m-5 p-5 leading-loose">
        <p>
          A la fin de la mise en œuvre de ces activités : - 06 cabines de
          latrines à raison de 03 par école sont réfectionnées - 04 urinoirs
          sont réfectionnés à raison de 02 par école - 16 séances
          d’Informations, d’Education et de Communication (IEC) sont organisées
          dans les écoles bénéficiaires du projet (08 par école) et permettent
          au profit des apprenants. Ces activités se poursuivent jusqu’en 2018.
        </p>
      </div>
    </div>
  );
};

export default Projet1Solution1;

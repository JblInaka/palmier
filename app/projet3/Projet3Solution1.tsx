"use client";

import React from "react";
import Image from "next/image";

const Projet3Solution1 = () => {
  return (
    <div className="h-1/2 grid grid-cols-12">
      <div className="col-span-12">
        <h1>PROJET 3</h1>
      </div>

      <div
        className="col-span-5 m-10 p-5 border-32"
        style={{ position: "relative", width: 500, height: 400 }}
      >
        <Image src="/projet3Solution.jpeg" layout="fill" alt="Bonne maman" />
      </div>
      <div className="col-span-5 m-5 p-5 leading-loose">
        <p>
          La commune de Vernier a soutenu financièrement en 2017 l’association
          Palmier au travers du projet Piplette. Le soutien matériel de la
          commune de Vernier s’est poursuivi par la mise à disposition d’un
          local gratuitement au sein de la Ferme Golay. L’association Palmier a
          entrepris des contacts avec les responsables du Foyer Les Tattes afin
          de discuter de la possibilité d’ouverture d’une cellule de Piplette
          sur deux jours. Les autorités du Foyer nous ont promis de mettre à
          disposition une salle de travail pour ces activités. Tous les deux
          partenaires sommes à la recherche de financement pour débuter ce
          projet.
        </p>
      </div>
    </div>
  );
};

export default Projet3Solution1;

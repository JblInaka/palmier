"use client";

import React from "react";
import Image from "next/image";

const Projet1Solution2 = () => {
  return (
    <div className="h-1/2 grid grid-cols-12">
      <div className="col-span-12">
        <h1>
          FORMATION ET LANCEMENT DES ACTIVITES DE SENSIBILISATION DES STRUCTURES
          DE PRECOLLECTE DE LA COMMUNE DE PARAKOU
        </h1>
      </div>

      <div
        className="col-span-5 m-10 p-5 border-32"
        style={{ position: "relative", width: 500, height: 400 }}
      >
        <Image
          src="/projets/projet1/projet1.4.png"
          layout="fill"
          alt="Bonne maman"
        />
      </div>
      <div className="col-span-5 m-5 p-5 leading-loose">
        <p>
          En date du mercredi 29 novembre 2017, une séance de formation s’est
          tenue au siège de CCAROM dans le but de sensibilisation des structures
          de pré collecte de la ville de Parakou sur la gestion des déchets et
          la sensibilisation de la population. Après le mot de bienvenu par le
          Président du Comité de Concertation des Associations et ONG de
          Ramassage des Ordures Ménagères (CCAROM), cette séance de formation a
          été animée par Monsieur SINAGOURIGUI Sanni Fidèle, Directeur de la
          Prospective, de la Programmation, du Développement et des Relations
          Extérieures (DPPDRE) de la Mairie de Parakou et elle a connu la
          participation de 34 participants. Les participants ont été formés sur
          les enjeux de la sensibilisation, la Constitution et répartition des
          équipes de sensibilisation en vue des opérations de la sensibilisation
          de la population de Parakou.
        </p>
      </div>
    </div>
  );
};

export default Projet1Solution2;

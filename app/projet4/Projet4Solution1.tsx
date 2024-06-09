"use client";

import React from "react";
import Image from "next/image";

const Projet4Solution1 = () => {
  return (
    <div className="h-1/2 grid grid-cols-12">
      <div className="col-span-12">
        <h1>PROJET 4</h1>
      </div>

      <div
        className="col-span-5 m-10 p-5 border-32"
        style={{ position: "relative", width: 500, height: 400 }}
      >
        <Image src="/Projet4Solution1.jpeg" layout="fill" alt="Bonne maman" />
      </div>
      <div className="col-span-5 m-5 p-5 leading-loose">
        <p>
          Notre projet de soutien à notre partenaire local se concentre sur la
          réfection des bâtiments scolaires et la sensibilisation des élèves,
          offrant ainsi une solution efficace face au problème de
          l'infrastructure inadéquate. En réhabilitant les bâtiments existants
          et en construisant de nouvelles salles de classe, nous créons des
          environnements d'apprentissage sûrs et stimulants. Parallèlement, nous
          menons des campagnes de sensibilisation auprès des élèves pour les
          éduquer sur l'importance de maintenir des infrastructures propres et
          en bon état. Ce projet vise non seulement à améliorer les conditions
          physiques des écoles, mais aussi à instaurer une culture de
          responsabilité et de respect pour les installations. En fournissant
          des infrastructures de qualité et en sensibilisant les élèves, nous
          contribuons de manière significative à leur éducation et à leur
          bien-être, tout en renforçant les capacités de notre partenaire local
          à gérer durablement ces améliorations.
        </p>
      </div>
    </div>
  );
};

export default Projet4Solution1;



import React from "react";
import Image from "next/image";

const Projet1Solution = () => {

  const projet1Solution = require("../../public//projets/projet1/projet1.3.png");

  return (
<section className="mx-3 md:mx-24  md:min-h-screen mt-12 gap-2 " >
  <div className="row-1 pt-8  mb-12 ">
    <h2 className="col-span-12 pr-4 text-3xl md:text-5xl text-end font-bold text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
      Solution par la sensibilisation
    </h2>
  </div>  
  <div className="row-2 bg-cover w-full">
    <div className="col-span-12 grid grid-cols-12 mt-6 gap-5">
      <div className="col-span-12 order-0 md:col-span-6 md:order-1">
        <div className="w-full h-auto">
          <Image
            src={projet1Solution}
            layout="responsive"
            className="rounded-3xl w-full"
            alt="solution1"
          />
        </div>
      </div>
      <div className="col-span-12 order-1 md:col-start-7 md:col-span-6 md:order-0">
        <div className="mr-2 mb-4">
          <h3 className="text-xl font-bold text-green-700/55 mb-2">I. Formation des responsables</h3>
          <p className="text-black">
            En 2016, le collectif des Associations de Ramassage des ordures ménagères (CCAROM) a organisé un atelier à Parakou dont
            <span><b> l’objectif était de fournir aux responsables d’ONG de précollecte des connaissances fondamentales, les rudiments utiles pour l’élaboration d’un projet et la recherche de financements et de les amener à comprendre les différents types de données produites et leur gestion.</b></span>
          </p>
        </div>
        <div className="mr-2 mb-4">
          <h3 className="text-xl font-bold text-green-700/55 mb-2">II. Formation et activités de sensibilisation</h3>
          <p className="text-black">
            En 2017, une séance de formation s’est tenue au siège de CCAROM dans le but de <span><b>sensibilisation des structures de pré collecte de la ville de Parakou sur la gestion des déchets et la sensibilisation de la population.</b></span>. 
            Les participants ont été formés sur les enjeux de la sensibilisation, la Constitution et répartition des équipes de sensibilisation en vue des opérations de la sensibilisation de la population de Parakou.
          </p>
        </div>
        <div className="mr-2">
          <h3 className="text-xl font-bold text-green-700/55 mb-2">III. Formation sur l'impact des dechets sur la santé</h3>
          <p className="text-black">
            En 2017, une séance d’information s’est tenue en faveur des chefs quartiers sur l’impact des déchets sur la santé des populations. <span><b>Cette séance a permis aux différents acteurs d’échanger autour des points ci-après : <br /> 1. Echange sur l’impact des déchets sur la santé des populations <br /> 2. Echange sur l’abonnement à la pré-collecte des Déchets Solides Ménagers (DSM)</b></span>
          </p>
        </div>
      </div>
    </div>
  </div>


</section>


  );
};

export default Projet1Solution;

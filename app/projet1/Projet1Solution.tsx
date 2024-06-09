"use client";

import React from "react";
import Image from "next/image";

const Projet1Solution = () => {

  const projet1Solution = require("../../public//projets/projet1/projet1.3.png");

  return (
<section className="mx-24  min-h-screen mt-12 gap-2 " >
  <div className="row-1 pt-8  mb-12 ">
    <h2 className="col-span-12 pr-4 text-5xl text-end font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
      Solution par la sensibilisation
    </h2>
  </div>  
  <div className="row-2 bg-cover w-full">
    <div className="col-span-12 grid grid-cols-12 mt-6 ">
      <div className="col-span-6">
        <div className=" mr-2 mb-4">
          <h3 className=" text-xl font-bold text-green-700/55 mb-2">
            I. Formation des responsables
          </h3>
          <p>
            En 2016, le collectif des Associations de Ramassage des ordures ménagères (CCAROM) a organisé un atelier à Parakou dont
            <span><b> l’objectif était de fournir aux responsables d’ONG de précollecte des connaissances fondamentales, 
              les rudiments utiles pour l’élaboration 
              d’un projet et la recherche de financements et de les amener à comprendre les différents types de données 
              produites et leur gestion.</b></span>
          </p>
        </div>
        <div className="mr-2 mb-4">
          <h3 className=" text-xl font-bold text-green-700/55 mb-2">
            II. Formation et activités de sensibilisation
          </h3>
          <p>
              En 2017, une séance de formation s’est tenue au siège de CCAROM dans 
              le but de <span><b>sensibilisation des structures de pré collecte de la ville de Parakou sur la gestion des déchets et 
              la sensibilisation de la population.</b></span>. 
              Les participants ont été formés sur les enjeux de la sensibilisation, la Constitution et répartition des équipes 
              de sensibilisation en vue des opérations de la sensibilisation de la population de Parakou.
          </p>
        </div>
        <div className="mr-2 ">
          <h3 className=" text-xl font-bold text-green-700/55 mb-2">
            III. Formation sur l'impact des dechets sur la santé 
          </h3>
          <p>
            En 2017, une séance d’information s’est
            tenue en faveur des chefs quartiers sur l’impact des déchets sur la santé des
            populations. <span><b>Cette séance a permis aux différents acteurs d’échanger
            autour des points ci-après : <br /> 1. Echange sur l’impact des
            déchets sur la santé des populations <br /> 2. Echange sur l’abonnement à la
            pré-collecte des Déchets Solides Ménagers (DSM)</b></span>
          </p>
        </div>
      </div>
      <div className="col-start-7 col-span-6 p-2 bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('/sol-1Backgd.png')"}}>
        <Image
          src={projet1Solution}
          className=" w-[96%] h-[88%] rounded-3xl"
          alt="solution1"
        />
      </div>
    </div>
  </div>
  {/*<div className="row-start-2 pt-8 col-span-12 grid grid-cols-12 ">
      <h3 className="col-span-12 text-xl text-center font-bold mb-4">
        II. Formation et lancement des activités de sensibilisation
      </h3>
      <div className="col-span-6 mr-2 ml-4">
        <Image
          src="/projets/projet1/projet1.4.png"
          layout="responsive"
          className="rounded-3xl"
          width={1600}
          height={900}
          alt="solution1"
        />
      </div>
      <div className="col-start-7 col-end-13 mx-3 pl-4">
        En date du mercredi 29 novembre 2017, une séance de formation s’est tenue au siège de CCAROM dans 
        le but de <span><b>sensibilisation des structures de pré collecte de la ville de Parakou sur la gestion des déchets et 
        la sensibilisation de la population</b></span>. Après le mot de bienvenu par le Président du Comité de Concertation des Associations 
        et ONG de Ramassage des Ordures Ménagères (CCAROM), cette séance de formation a été animée 
        par Monsieur SINAGOURIGUI Sanni Fidèle, Directeur de la Prospective, de la Programmation, du Développement et 
        des Relations Extérieures (DPPDRE) de la Mairie de Parakou et elle a connu la participation de 34 participants. 
        Les participants ont été formés sur les enjeux de la sensibilisation, la Constitution et répartition des équipes 
        de sensibilisation en vue des opérations de la sensibilisation de la population de Parakou.
      </div>
  </div>
  <div className="row-start-3 py-8 col-span-12 grid grid-cols-12 ">
      <h3 className="col-span-12 text-xl text-center font-bold  mb-4">
        III. Formation sur l'impact des dechets sur la santé des populations
      </h3>
      <div className="col-span-6 mr-2 ml-4">
        <p>
          En date du jeudi 23 novembre 2017, une séance d’information s’est
          tenue au sein de la salle des fêtes de la mairie de Parakou en faveur
          des chefs quartiers sur l’impact des déchets sur la santé des
          populations. Cette séance a été présidée par le Maire et co-dirigée
          par le Président du Comité de Concertation des Associations et ONG de
          Ramassage des Ordures Ménagères (CCAROM) avec une participation de 38
          participants. <span><b>Cette séance a permis aux différents acteurs d’échanger
          autour des principaux points ci-après : <br /> 1-Echange sur l’impact des
          déchets sur la santé des populations <br /> 2-Echange sur l’abonnement à la
          pré-collecte des Déchets Solides Ménagers (DSM)</b></span>
        </p>
      </div>
      <div className="col-start-7 col-end-13 mx-3 pl-4">
        <Image
          src="/projets/projet1/projet1.5.png"
          layout="responsive"
          className="rounded-3xl"
          width={12}
          height={4}
          alt="solution1"
        />
      </div>
  </div>*/}

</section>


  );
};

export default Projet1Solution;

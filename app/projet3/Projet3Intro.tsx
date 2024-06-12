"use client";

import React from "react";
import Image from "next/image";

const Projet3Intro = () => {
  const intro = require("../../public/projets/projet3/projet3_intro.jpeg");

  return (
    <section className=" mx-24 mb-10 min-h-screen bg-cover grid grid-rows-3 " >
      <div className="col-span-12 row-span-2 flex justify-center items-end bg-cover object-cover bg-no-repeat " style={{ backgroundImage: "url('/projet3IntroBckgd.png')"}} >
        <div className="  ">
          <Image
            src={intro}
            className=" w-[100%] rounded-tl-full	rounded-tr-full"
            alt="projet3"
          />  
        </div>
      </div>

      <div className="col-span-12 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-5 col-span-12 border-red-600 border">
          <div className="relative h-6 flex items-center justify-start ">
            <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[30%] bg-red-600"></div>
            <div className="relative text-white font-medium text-sm pl-20 ml-20">30% - réalisé</div>
          </div>
        </div>
        <h2 className="mt-3 font-bold text-center text-4xl " style={{fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Permanence de soutien scolaire aux enfants de Vernier en difficulté scolaire        </h2>
        <p className="mt-4  ">
          Depuis sa mise en place en 2016, l’association Palmier continue au
          travers du projet Piplette sa permanence de soutien scolaire pour
          venir en aide aux enfants de Vernier en difficulté scolaire.
          L’association « Palmier » a poursuivi cette année 2017 les échanges
          multiculturels et intergénérationnels mettant en place une permanence
          gratuite de soutien scolaire à Vernier, pour les élèves des écoles de
          l’établissement : Châtelaine - Balexert - Bourquin. Sous la
          responsabilité de Madame Sara Offner, l’équipe d’encadrants a continué
          son aide gratuitement aux élèves de primaire dans toutes les matières
          et pour les élèves du cycle d’orientation en mathématiques, français
          et allemand.
        </p>
      </div>
    </section>
  );
};

export default Projet3Intro;

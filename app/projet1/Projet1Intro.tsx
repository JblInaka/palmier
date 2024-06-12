"use client";

import React from "react";
import Image from "next/image";

const Projet1Intro = () => {
  const intro = require("../../public/projets/projet1/projet1.1.png");

  return (
    <section className=" mt-10 mx-24 mb-10 min-h-screen bg-cover grid grid-rows-3 " >
      <div className="col-span-12 row-span-2 flex justify-center bg-cover object-cover bg-no-repeat " style={{ backgroundImage: "url('/projets/projet1/Projt1bcgdIntro.png')"}} >
        <div className=" w-[70%] pt-12">
          <Image
          src={intro}
          className=" rounded-tl-full	rounded-tr-full"
   
          alt="projet1"
          />  
        </div>
      </div>

      <div className="col-span-12 px-4 ">
        <div className=" bg-white rounded-xl shadow-sm overflow-hidden mt-5 col-span-12 border-green-700 border ">
          <div className="relative h-6 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[100%] bg-green-700 "></div>
            <div className="relative text-white font-medium text-sm">100% - réalisé</div>
          </div>
        </div>
        <h2 className="mt-3 font-bold text-center text-4xl " style={{fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Gestion des déchets ménagers au Bénin         
        </h2>
        <p className="mt-4  ">
          Grâce au soutien de la ville de Genève, la commune de Plan-les-Ouates, la commune de Meyrin et la commune de Parakou,
          le collectif des Associations de Ramassage des ordures ménagères de Parakou (CCAROM) Parakou a organisé des activités 
          de sensibilisation , formation et   seance d’information des chef contumier :
        </p>
        <p className="mb-5">
          <span><b>
            "Soutien au Plan de la gestion des déchets ménagers dans la ville de Parakou au Bénin. 
            Appui au collectif des associations de ramassage des ordures et sensibilisation de la population." 
          </b></span>
        </p>
      </div>
    </section>
  );
};

export default Projet1Intro;

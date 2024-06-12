"use client";

import React from "react";
import Image from "next/image";

const Projet3Intro = () => {
  const intro = require("../../public/projets/projet4/projet4_intro.png");

  return (
    <section className=" mx-24 mb-10 min-h-screen bg-cover grid grid-rows-3 " >
      <div className="col-span-12 row-span-2 flex justify-end items-end bg-cover object-cover bg-no-repeat " style={{ backgroundImage: "url('/projet4IntroBckgd.png')"}} >
        <div className="  ">
          <Image
            src={intro}
            className=" w-[100%] rounded-tl-full	"
            alt="projet3"
          />  
        </div>
      </div>

      <div className="col-span-12 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-5 col-span-12 border-amber-500 border">
          <div className="relative h-6 flex items-center justify-center ">
            <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[80%] bg-amber-500"></div>
            <div className="relative text-white font-medium text-sm pl-20 ml-20">80% - réalisé</div>
          </div>
        </div>
        <h2 className="mt-3 font-bold text-center text-4xl " style={{fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Réfection des bâtiments d'école et sensibilisation des élèves
        </h2>  
        <p className="mt-4  ">
          Suite à notre partenariat avec l’Association chrétienne pour
          la promotion du développement intégré (A.C.P.D.I), asbl, nous avons
          entrepris, grâce à la commune de Lancy, un projet de soutien à notre
          partenaire local dans le domaine de la réfection des bâtiments et
          sensibilisation des élèves. La cité de Nganda-Tsundi regroupe 10
          villages et 8 groupements avec une population de 30.000 habitants avec
          diverses activités économiques et sociales. Le nombre d’élèves de
          l’école de Nganda – Nsundi avoisine à environ 1.150 élèves, répartis
          entre l’école primaire, l’école secondaire et l’école humanité. Cette
          école regorge 1 directeur général, 3 directeurs adjoints, 25
          enseignants et 3 surveillants. Ce projet de soutien va se poursuivre
          cette année 2018 et nous poursuivons notre partenariat avec
          l’Association chrétienne pour la promotion du développement intégré
          (A.C.P.D.I).asbl.        
        </p>
      </div>
    </section>
  );
};

export default Projet3Intro;

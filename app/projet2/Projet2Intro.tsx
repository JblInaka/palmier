"use client";

import React from "react";
import Image from "next/image";

const Projet2Intro = () => {
  const intro = require("../../public/projets/projet2/projet2_intro.jpg");

  return (
    <section className=" mt-10 mx-24 mb-10 min-h-screen bg-cover grid grid-rows-3 " >
      <div className="col-span-12 row-span-2 flex justify-center items-end bg-cover object-cover bg-no-repeat " style={{ backgroundImage: "url('/projet2Introbckgd.png')"}} >
        <div className=" w-[37%] ">
          <Image
          src={intro}
          className=" rounded-tl-full	rounded-tr-full"
   
          alt="projet1"
          />  
        </div>
      </div>

      <div className="col-span-12 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-5 col-span-12 border-amber-500 border">
          <div className="relative h-6 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[70%] bg-amber-500"></div>
            <div className="relative text-white font-medium text-sm">70% - réalisé</div>
          </div>
        </div>
        <h2 className="mt-3 font-bold text-center text-4xl " style={{fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Renforcement des capacités en hygiène et assainissement des écoles primaires </h2>
        <p className="mt-4  ">
          Débuté en 2017 sous la direction de l’association APEENOSA – ONG,
          membre de CCAROM, <span><b>plusieurs activités sont encours de réalisation dans
          le but d’amélioration des conditions d’hygiène et d’assainissement
          dans 02 écoles primaires de la commune de Parakou et à la maîtrise des
          bonnes pratiques pour un changement de comportement par les
          apprenants.</b></span> Afin de concrétiser ces activités, deux écoles ont été
          choisies dans la ville de Parakou et il s’agit de l’EPP/Tourou –
          Centre avec 1067 nombre d’élèves (1er Arrondissement) et de l’EPP/
          Banikanni avec 3396 nombre d’élèves (2er Arrondissement).
          L’association APEENOSA – ONG va s’atteler au travers de ces activités
          : <br /> • Réfectionner les infrastructures d’assainissement de base
          (latrines et urinoirs) existant <br /> • Sensibiliser les apprenants sur les
          règles élémentaires d’hygiène et d’assainissement.
        </p>
      </div>
    </section>
  );
};

export default Projet2Intro;

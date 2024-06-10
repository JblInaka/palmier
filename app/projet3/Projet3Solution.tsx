"use client";

import React from "react";
import Image from "next/image";

const Projet3Solution = () => {

  const projet3Solution = require("../../public/projet3Solution.png");

  return (
<section className="mx-24  min-h-screen mt-12 gap-2 " >
  <div className="row-1 pt-8  mb-12 ">
    <h2 className="col-span-12 pr-4 text-5xl text-end font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
      Ouverture d’une cellule de Piplette 
    </h2>
  </div>  
  <div className="row-2 bg-cover w-full">
    <div className="col-span-12 grid grid-cols-12 mt-6 ">
      <div className="col-span-6">
        <div className=" mr-2 mb-4">
          <h3 className=" text-xl font-bold text-green-700/55 mb-2">
            Mise à disposition d’un local          
          </h3>
          <p className="my-9">
            La commune de Vernier a soutenu financièrement en 2017 l’association
            Palmier au travers du projet Piplette. Le soutien matériel de la
            commune de Vernier s’est poursuivi par la mise à disposition d’un
            local gratuitement au sein de la Ferme Golay. <br /><br />
            L’association Palmier a
            entrepris des contacts avec les responsables du Foyer Les Tattes afin
            de discuter de la possibilité d’ouverture d’une cellule de Piplette
            sur deux jours. Les autorités du Foyer nous ont promis de mettre à
            disposition une salle de travail pour ces activités. Tous les deux
            partenaires <span><b>sommes à la recherche de financement pour débuter ce
            projet.</b></span>
          </p>
        </div>
      </div>
      <div className="col-start-7 col-span-6 p-1 bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('/solBackgd3.png')", backgroundSize:"100% 100%"}}>
        <Image
          src={projet3Solution}
          className=" w-[87%] h-[85%] rounded-3xl"
          alt="solution1"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Projet3Solution;

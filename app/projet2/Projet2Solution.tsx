"use client";

import React from "react";
import Image from "next/image";

const Projet2Solution = () => {

  const projet2Solution = require("../../public//projets/projet2/projet2_solution.jpeg");

  return (
<section className="mx-3 md:mx-24  md:min-h-screen md:mt-12 gap-2 " >
  <div className="row-1 pt-8  md:mb-12 ">
    <h2 className="col-span-12 pr-4 text-3xl md:text-5xl text-end font-bold text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
      Mise en œuvre
    </h2>
  </div>  
  <div className="row-2 bg-cover w-full">
    <div className="col-span-12 grid grid-cols-12 mt-6 gap-5">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center order-1 md:order-0">
        <div className="mr-2 md:mb-4">
          <h3 className="text-xl font-bold text-green-700/55 mb-2">Impact visible</h3>
          <p className="my-9">
            A la fin de la mise en œuvre de ces activités : <br /><br />
            - 06 cabines de latrines à raison de 03 par école sont réfectionnées <br />
            - 04 urinoirs sont réfectionnés à raison de 02 par école <br />
            - 16 séances d’Informations, d’Education et de Communication (IEC) <br />
            sont organisées dans les écoles bénéficiaires du projet (08 par école) <br />
            et permettent au profit des apprenants. Ces activités se poursuivent jusqu’en 2018.
          </p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 p-1 bg-cover bg-center flex justify-center items-center order-0 md:order-1" style={{ backgroundImage: "url('/solBackgd2.png')", backgroundSize:"100% 140%"}}>
        <Image
          src={projet2Solution}
          className="w-[90%] h-[90%] rounded-3xl"
          alt="solution1"
        />
      </div>
    </div>

  </div>
</section>

  );
};

export default Projet2Solution;

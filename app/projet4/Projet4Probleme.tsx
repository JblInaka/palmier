import React from "react";
import Image from "next/image";

const Projet3Probleme = () => {

  const problematik = require("../../public/projet4_problematik.jpeg");

  return (
    <section className=" mx-24 mt-8 grid grid-rows-4 grid-cols-12 min-h-screen bg-cover bg-[#EDEDCB]/55 rounded-3xl">
      <div className=" row-span-1 col-span-12 pt-10">
        <h2 className=" text-5xl text-center font-bold" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Problématique
        </h2>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 px-3 mb-4 ">
        <div className=" col-span-7 mr-2 w-[60] h-[60] ">
          <Image
            src={problematik}
            layout="responsive"
            className="rounded-3xl w-[60%] h-[40%]"
            alt="Pollution"
          />
        </div>
        <div className="col-start-8 col-end-13 mx-2 pl-3">
          <h2 className=" text-xl font-bold text-green-700/55 ">
            État de délabrement très avancé, manque de sanitaire et manque de formateurs
          </h2>
          <div className="mt-12 pt-4">
            <p>
              Depuis sa création par les comités des parents des élèves, l’école
              de Nganda – Nsundi est dans un état de délabrement très avancé
              (manque de peinture, fenêtres, portes cassées, manque des manuels
              scolaires, des tableaux, de bureau et autres) et manque de
              sanitaire (w.c et urinoirs). Il sied aussi de signaler un manque
              de formateurs, un manque de formation et de sensibilisation de la
              population. <br /><br />
              Face à cette situation, si rien n’est fait, plusieurs
              conséquences peuvent servir dans cette cité : <br /> <br />
              - de favoriser l’exode rural, <br />
              - Augmentation de la déscolarisation de la
              population, <br />
              - Pauvreté de la population et augmentation des
              maladies.
            </p>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Projet3Probleme;

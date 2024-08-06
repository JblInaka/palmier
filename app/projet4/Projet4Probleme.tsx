import React from "react";
import Image from "next/image";

const Projet3Probleme = () => {

  const problematik = require("../../public/projet4_problematik.jpeg");

  return (
    <section className=" mx-3 md:mx-24 mt-8 grid md:grid-rows-4 grid-cols-12 md:min-h-screen bg-cover bg-[#EDEDCB]/55 rounded-3xl">
      <div className=" row-span-1 col-span-12 pt-10">
        <h2 className=" text-4xl md:text-5xl text-center font-bold" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Problématique
        </h2>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 px-3 mb-4 ">
        <div className=" mt-2 col-span-12 md:col-span-7 md:mr-2 order-0 md:order-0 mr-2 md:w-[60] md:h-[60] ">
          <Image
            src={problematik}
            layout="responsive"
            className="rounded-3xl w-[60%] h-[40%]"
            alt="Pollution"
          />
        </div>
        <div className="md:col-start-8 md:col-end-13 md:mx-2 md:pl-3 col-span-12  order-0 ">
          <h2 className=" text-lg md:text-xl font-bold text-green-700/55 ">
            État de délabrement très avancé, manque de sanitaire et manque de formateurs
          </h2>
          <div className="md:mt-12 pt-4">
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

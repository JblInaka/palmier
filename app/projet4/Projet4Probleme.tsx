import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet4Probleme = () => {
  return (
    <section className="mt-10 mx-24 grid grid-rows-4 grid-cols-12 min-h-screen bg-cover">
      <div className=" row-span-1 col-span-12">
        <h2
          className=" text-5xl text-center font-bold mb-8"
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Problématique
        </h2>
        <p className="text-center">Pollution des rivières</p>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 ">
        <div className=" col-span-7 mx-5 ">
          <Image
            src="/pollution.png"
            layout="responsive"
            width={1600}
            height={900}
            alt="Pollution"
          />
        </div>
        <div className="col-start-8 col-end-13 mx-2 ">
          <h2 className="mt-2">Pollution</h2>
          <div className="mt-10 ">
            <p>
              Depuis sa création par les comités des parents des élèves, l’école
              de Nganda – Nsundi est dans un état de délabrement très avancé
              (manque de peinture, fenêtres, portes cassées, manque des manuels
              scolaires, des tableaux, de bureau et autres) et manque de
              sanitaire (w.c et urinoirs). Il sied aussi de signaler un manque
              de formateurs, un manque de formation et de sensibilisation de la
              population. Face à cette situation, si rien n’est fait, plusieurs
              conséquences peuvent servir dans cette cité : - de favoriser
              l’exode rural, Augmentation de la déscolarisation de la
              population, Pauvreté de la population et augmentation des
              maladies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet4Probleme;

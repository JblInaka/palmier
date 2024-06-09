import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet2Probleme = () => {
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
            src="/projets/projet2/projet2_problematique.jpeg"
            layout="responsive"
            width={1600}
            height={900}
            alt="Pollution"
          />
        </div>
        <div className="col-start-8 col-end-13 mx-2 ">
          <h2 className="mt-2">Problématique</h2>
          <div className="mt-10 ">
            <p>
              Dans de nombreuses écoles primaires en Afrique, les problèmes liés
              aux latrines sont courants et ont des conséquences graves. Le
              manque d'accès à des installations sanitaires adéquates entraîne
              une insalubrité, favorise la propagation de maladies telles que la
              diarrhée et compromet la dignité des élèves, en particulier des
              filles. Ces conditions peuvent également entraîner des absences
              scolaires, des accidents et une baisse de l'estime de soi chez les
              élèves. Pour améliorer la situation, il est crucial de construire
              et de maintenir des latrines modernes dans les écoles primaires,
              offrant ainsi un environnement sûr et hygiénique qui favorise la
              santé, la dignité et l'apprentissage des élèves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet2Probleme;

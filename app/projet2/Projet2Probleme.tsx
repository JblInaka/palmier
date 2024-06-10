import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet1Probleme = () => {
  const problematik = require("../../public/projets/projet2/projet2_problematique.jpeg");

  return (
    <section className=" mx-24 mt-8 grid grid-rows-4 grid-cols-12 min-h-screen bg-cover bg-[#EDEDCB]/55 rounded-3xl">
      <div className=" row-span-1 col-span-12 pt-10">
        <h2
          className=" text-5xl text-center font-bold "
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Problématique
        </h2>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 px-3 py-3 ">
        <div className=" col-span-7 mr-2 ">
          <Image
            src={problematik}
            layout="responsive"
            className="rounded-3xl"
            width={1200}
            height={500}
            alt="Pollution"
          />
        </div>
        <div className="col-start-8 col-end-13 mx-2 pl-3">
          <h2 className=" text-xl font-bold text-green-700/55 ">Manque d'installations sanitaires adéquates</h2>
          <div className="mt-12 pt-4">
            <p>
              Dans de nombreuses écoles primaires en Afrique, les problèmes liés
              aux latrines sont courants et ont des conséquences graves. <span><b>Le
              manque d'accès à des installations sanitaires adéquates entraîne
              une insalubrité, favorise la propagation de maladies telles que la
              diarrhée et compromet la dignité des élèves, en particulier des
              filles</b></span>. Ces conditions peuvent également entraîner des absences
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

export default Projet1Probleme;

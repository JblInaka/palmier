
import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet1Probleme = () => {
  return (
    <section className=" mx-3 md:mx-24 mt-8 grid md:grid-rows-4 grid-cols-12 md:min-h-screen bg-cover bg-[#EDEDCB]/55 rounded-3xl">
      <div className=" row-span-1 col-span-12 pt-10">
        <h2
          className=" text-3xl md:text-5xl text-center font-bold text-black"
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Problématique
        </h2>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 px-3 py-4 ">
        <div className=" col-span-12 md:col-span-7 md:mr-2 order-0 md:order-0 ">
          <Image
            src="/projet1_pollution.jpg"
            layout="responsive"
            className="rounded-3xl w-full"
            width={1600}
            height={900}
            alt="Pollution"
          />
        </div>
        <div className="md:col-start-8 md:col-end-13 md:mx-2 md:pl-3 col-span-12  order-0 ">
          <h2 className=" text-xl font-bold text-green-700/55 ">Pollution des rivières</h2>
          <div className="mt-2 pt-4">
            <p className="text-black">
              En Afrique, la pollution des rivières est un problème
              grave, principalement dû au manque d'assainissement adéquat. 
            </p>  <br />
            <p className="text-black">Voici
              un résumé de la situation : <br />
              <span><b>
              1. Infrastructures d'assainissement
              insuffisantes : </b></span> 
              Beaucoup de villes africaines manquent de systèmes
              efficaces pour traiter les eaux usées domestiques et
              industrielles, ce qui entraîne le déversement direct de ces eaux
              polluées dans les rivières. <br />
              <span><b>2. Déchets industriels et miniers : </b></span> 
              Les
              industries et les mines rejettent souvent des déchets toxiques,
              tels que des métaux lourds, sans traitement approprié, contaminant
              les cours d'eau. <br />
              <span><b>3. Pollution agricole :</b></span> L'utilisation excessive de
              pesticides et de fertilisants en agriculture provoque un
              ruissellement de produits chimiques dans les rivières. <br />

              <span><b>4. Déforestation et érosion :</b></span> La déforestation pour l'agriculture ou
              l'exploitation du bois entraîne l'érosion des sols, augmentant la
              turbidité et perturbant les écosystèmes aquatiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet1Probleme;

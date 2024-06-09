import React from "react";

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";



const ProjetProbleme= () => {

    return (
      <section className="mt-10 mx-24 grid grid-rows-4 grid-cols-12 min-h-screen bg-cover" >
        <div className=" row-span-1 col-span-12">
          <h2 className=" text-5xl text-center font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
            Problématique
          </h2>
          <p className="text-center">
            Pollution des rivières
          </p>
        </div>
        <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 ">
          <div className=" col-span-7 mx-5 ">
            <Image src="/pollution.png" layout="responsive" width={1600} height={900} alt="Pollution"/>
          </div>
          <div className="col-start-8 col-end-13 mx-2 ">
            <h2 className="mt-2">Pollution</h2>
            <div className="mt-10 ">
              <p>
                Pollution En Afrique, la pollution des rivières est un problème grave, 
                principalement dû au manque d'assainissement adéquat. Voici un résumé de 
                la situation : Infrastructures d'assainissement insuffisantes : 
                Beaucoup de villes africaines manquent de systèmes efficaces pour traiter 
                les eaux usées domestiques et industrielles, ce qui entraîne le déversement direct 
                de ces eaux polluées dans les rivières. Déchets industriels et miniers : 
                Les industries et les mines rejettent souvent des déchets toxiques, 
                tels que des métaux lourds, sans traitement approprié, contaminant 
                les cours d'eau. Pollution agricole : L'utilisation excessive de pesticides 
                et de fertilisants en agriculture provoque un ruissellement de produits chimiques dans les rivières.
                 Déforestation et érosion : La déforestation pour l'agriculture ou l'exploitation du bois 
                 entraîne l'érosion des sols, augmentant la turbidité et perturbant les écosystèmes aquatiques.
              </p>
            </div>
          </div>
        </div>  
      </section>
  );
};

export default ProjetProbleme;

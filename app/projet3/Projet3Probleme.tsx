import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet3Probleme = () => {

  const problematik = require("../../public//projets/projet3/projet3_probleme.jpeg");

  return (
    <section className=" mx-3 md:mx-24 mt-8 grid md:grid-rows-4 grid-cols-12 md:min-h-screen bg-cover bg-[#EDEDCB]/55 rounded-3xl">
      <div className=" row-span-1 col-span-12 pt-10">
        <h2
          className=" text-3xl md:text-5xl text-center font-bold text-black"
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Problématique
        </h2>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 px-3 py-4 ">
        <div className=" col-span-12 md:col-span-7 md:mr-2 order-0 md:order-0 ">
          <Image
            src={problematik}
            layout="responsive"
            className="rounded-3xl"
            width={1600}
            height={900}
            alt="Pollution"
          />
        </div>
        <div className="md:col-start-8 md:col-end-13 md:mx-2 md:pl-3 col-span-12  order-0 ">
          <h2 className=" text-xl font-bold text-green-700/55 ">Inefficacité de l'accompagnement dans
              l'enseignement
          </h2>
          <div className="md:mt-12 pt-4">
            <p>
              Le problème de <span><b>l'inefficacité de l'accompagnement dans
              l'enseignement chez les jeunes élèves pose plusieurs défis,
              notamment le manque de ressources, les classes surchargées, la
              formation des enseignants et l'approche unique d'enseignement. </b></span> 
              Pour résoudre ces problèmes, il est essentiel de mettre en place
              des mesures telles que la réduction des effectifs dans les
              classes, la formation continue des enseignants, l'utilisation de
              ressources supplémentaires et la promotion de la collaboration
              entre les différents acteurs impliqués dans l'éducation des
              élèves. En renforçant l'accompagnement, les écoles peuvent mieux
              répondre aux besoins individuels des élèves et favoriser leur
              réussite académique et personnelle.
            </p>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Projet3Probleme;

import React from "react";

import Image from "next/image";
//import ImageSlider from "@/components/ImageSlider";

const Projet3Probleme = () => {
  return (
    <section className="mt-10 mx-24 grid grid-rows-4 grid-cols-12 min-h-screen bg-cover">
      <div className=" row-span-1 col-span-12">
        <h2
          className=" text-5xl text-center font-bold mb-8"
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Problématique
        </h2>
        <p className="text-center">School girl</p>
      </div>
      <div className=" row-start-2 row-span-3 col-span-12 grid grid-cols-12 ">
        <div className=" col-span-7 mx-5 ">
          <Image
            src="/projets/projet3/projet3_probleme.jpeg"
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
              Le problème de l'inefficacité de l'accompagnement dans
              l'enseignement chez les jeunes élèves pose plusieurs défis,
              notamment le manque de ressources, les classes surchargées, la
              formation des enseignants et l'approche unique d'enseignement.
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

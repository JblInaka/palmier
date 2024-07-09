"use client";

import React from "react";
import Image from "next/image";

const Projet4Solution = () => {
  const projet4Solution = require("../../public/Projet4Solution.jpeg");

  return (
    <section className="mx-24  min-h-screen mt-12 gap-2 ">
      <div className="row-1 pt-8  mb-12 ">
        <h2
          className="col-span-12 pr-4 text-5xl text-end font-bold "
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Solution efficace au problème d'infrastructure
        </h2>
      </div>
      <div className="row-2 bg-cover w-full">
        <div className="col-span-12 grid grid-cols-12 mt-6 ">
          <div className="col-span-6">
            <div className=" mr-2 mb-4">
              <h3 className=" text-xl font-bold text-green-700/55 mb-2">
                Contribution significative à l'éducation et au bien-être
              </h3>
              <p className="my-9">
                Notre projet de soutien à notre partenaire local se concentre
                sur la réfection des bâtiments scolaires et la sensibilisation
                des élèves, offrant ainsi une solution efficace face au problème
                de l'infrastructure inadéquate. En réhabilitant les bâtiments
                existants et en construisant de nouvelles salles de classe, nous
                créons des environnements d'apprentissage sûrs et stimulants.
                Parallèlement, nous menons des campagnes de sensibilisation
                auprès des élèves pour les éduquer sur l'importance de maintenir
                des infrastructures propres et en bon état. Ce projet vise non
                seulement à améliorer les conditions physiques des écoles, mais
                aussi à instaurer une culture de responsabilité et de respect
                pour les installations. En fournissant des infrastructures de
                qualité et en sensibilisant les élèves, nous contribuons de
                manière significative à leur éducation et à leur bien-être, tout
                en renforçant les capacités de notre partenaire local à gérer
                durablement ces améliorations.
              </p>
            </div>
          </div>
          <div
            className="col-start-7 col-span-6 p-1 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: "url('/solBckgd4.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <Image
              src={projet4Solution}
              className=" w-[87%] h-[85%] rounded-3xl"
              alt="solution1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet4Solution;

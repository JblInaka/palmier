import React from "react";

import Image from "next/image";

const Projet1Partenaire = () => {
  const partenaire = require("../../public/partenaire1Proj.png");

  return (
    <section className="mt-10 pt-9 mx-24 grid grid-cols-12 min-h-screen bg-cover rounded-3xl" style={{backgroundImage: "url('./BAD.png')", backgroundSize: "100% 100%"}}>
      <h2 className="row-1 col-span-12 text-5xl text-justify font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}    >
        Partenaires locaux
      </h2>
      <div className=" row-2 row-span-2 col-span-12 grid grid-cols-12 py-2 ">
        <div className=" col-span-8 rounded-r-3xl">
          <div className=" flex justify-center items-center  bg-cover bg-center " style={{ backgroundImage: "url('/partenaire1Projet.png')"}}>
            <Image
              className=" w-[90%] "
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="mt-10 mb-10">
            <h3 className="font-bold pb-4 text-center text-green-700/55">
              SYNTHESE DES ACTIVITES DE SENSIBILISATION DES STRUCTURES DE
              PRECOLLECTE
            </h3>
            <p className="mt-1">
              Le samedi 02 novembre 2017 s’est tenue au siège de CCAROM, une
              séance de synthèse des activités de sensibilisation des structures
              de pré-collecte de la commune de Parakou animé par Marc Aurel
              AMOUSSOU, Président du Comité de Concertation des Associations et
              ONG de Ramassage des Ordures Ménagères (CCAROM) en présence de 34
              personnes. En effet, à partir du mercredi 30 novembre 2017 et
              durant 3 jours, les équipes ont parcouru toute la ville de Parakou
              pour sensibiliser la population sur les impacts des déchets sur la
              santé de la population et sur l’importance des abonnements.
              Chacune des équipes constituées des agents de sensibilisation et
              de crieurs publics, munie d’une bâche, a fait le tour des ménages
              en leur passant l’information sur l’impact des déchets
              solides ménagers sur la santé des ménages et de la nécessité de
              s’abonner à une structure de pré-collecte. des ordures.
            </p>
          </div>
          <div className="mt-12 pt-4">
            <Image 
                src="/LOGO.png"
                className="mt-12"
                width={1200}
                height={980}
                alt="logo sponsors"              
              />
          </div>
        </div>
        <aside className="col-end-13 col-span-3 bg-[#EDEDCB]/25 rounded-3xl">
          <h2 className="text-center text-xl font-bold ">Temoignages</h2>
          <div className=" h-[90%] carousel carousel-vertical max-w-md mt-4 p-4 ml-4 space-x-4 flex items-justify items-center bg-hero-pattern">
            <div className="mb-5 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet1/projet1_temoignage1.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full  px-1 py-1 border-[1px] border-amber-500"
                />
              </div>
              <p className="italic">
                Grâce aux techniques apprises, <span><b>j'ai pu créer un environnement plus sain </b></span>pour ma famille. - Barako
              </p>
            </div>
            <div className="mb-4 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet1/projet1_temoignage2.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full px-1 py-1 border-[1px] border-amber-500"
                />
              </div>
              <p className="italic">Je suis <span><b>désormais capable de trier mes déchets</b></span>, 
              alors qu'auparavant, je les brûlais et les débris m'asphyxiaient. - Banik</p>
            </div>
            <div className="divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet1/projet1_temoignage3.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full px-1 py-1 border-[1px] border-amber-500"
                />
              </div>
              <p className="italic">
                Nettoyer régulièrement les toilettes et les points d'eau a <span><b>considérablement réduit les infections dans notre communauté.</b></span>- Koro
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Projet1Partenaire;

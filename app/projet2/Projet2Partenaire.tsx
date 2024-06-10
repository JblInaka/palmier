import React from "react";

import Image from "next/image";

const Projet1Partenaire = () => {
  const partenaire = require("../../public/projets/projet2/projet2partneraire.png");

  return (
    <section className="mt-10 pt-9 mx-24 grid grid-cols-12 min-h-screen bg-cover rounded-3xl" style={{backgroundImage: "url('./BAD.png')", backgroundSize: "100% 100%"}}>
      <h2 className="row-1 col-span-12 text-5xl text-justify font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}    >
        Partenaires locaux
      </h2>
      <div className=" row-2 row-span-2 col-span-12 grid grid-cols-12 py-2 ">
        <div className=" col-span-8 rounded-r-3xl">
          <div className=" flex justify-center items-center  bg-cover bg-center " style={{ backgroundImage: "url('/partenaire2Projet.png')"}}>
            <Image
              className=" w-[90%] h-[70%]"
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="mt-10 mb-10">
            <h3 className="font-bold text-xl pb-4 text-center text-green-700/55">
              Association
              APEENOSA – ONG
            </h3>
            <p className="mt-1">
              Nous sommes un groupe d'organisations locales engagées dans le
              développement de Parakou l’’association APEENOSA – ONG. Ensemble,
              nous travaillons pour améliorer les conditions de vie dans notre
              communauté. Nous tenons à exprimer notre profonde gratitude pour
              les améliorations apportées aux conditions d'hygiène et
              d'assainissement dans deux écoles primaires de Parakou. Ces
              efforts ont considérablement amélioré la santé et le bien-être des
              élèves, en leur fournissant des installations sanitaires modernes
              et en les éduquant sur les bonnes pratiques d'hygiène. Nous
              remercions tous ceux qui ont contribué à ce projet. Votre soutien
              a été essentiel pour transformer les écoles en environnements plus
              sûrs et plus propices à l'apprentissage. --- L’association
              APEENOSA – ONG

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
        <aside className="col-end-13 col-span-3 bg-[#EDEDCB]/25">
          <h2 className="text-center text-xl font-bold">Temoignages</h2>
          <div className=" h-[90%] w-[90%] carousel carousel-vertical max-w-md mt-4 p-4 ml-4 space-x-4 flex items-justify items-center ">
            <div className="mb-5 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet2/projet2_temoignage1.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Avant, les toilettes étaient sales et ça sentait mauvais. Maintenant, elles sont très propres " - Jean Biikolo
              </p>
            </div>
            <div className="mb-4 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet2/projet2_temoignage2.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">" Grâce aux nouvelles installations et à l'entretien régulier, nos élèves sont en meilleure santé et plus heureux." - Kodjo</p>
            </div>
            <div className="divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet2/projet2_temoignage3.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                " Je tiens à remercier tous ceux qui ont amélioré les conditions d'hygiène à l'École Primaire de Parakou Centre. " - Amadou
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Projet1Partenaire;

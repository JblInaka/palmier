import React from "react";
import Image from "next/image";

const Projet1Partenaire = () => {
  const partenaire = require("../../public/projets/projet3/projet3_partenaire.png");

  return (
    <section className=" mx-24 grid grid-cols-12 min-h-screen bg-cover rounded-3xl" style={{backgroundImage: "url('./BAD.png')", backgroundSize: "100% 100%"}}>
      <h2 className="row-1 col-span-12 text-5xl text-justify font-bold mb-14" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }} >
        Partenaires locaux
      </h2>
      <div className="row-2 row-span-2 col-span-12 grid grid-cols-12  ">
        <div className=" col-span-8 rounded-r-3xl">
          <div className=" flex justify-center items-center  bg-cover bg-center " style={{ backgroundImage: "url('/partenaire3Projet.png')"}}>
            <Image
              className=" w-[80%] rounded-3xl	 p-4"
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="mt-10 mb-10">
            <h3 className="font-bold text-xl pb-4 text-center text-green-700/55">
              Association
              Éducation pour Tous      
            </h3>
            <p className="mt-1">
              Nous sommes l'association "Éducation pour Tous", composée d'enseignants bénévoles,
              de membres de la communauté et de parents, travaillant en partenariat avec 
              les écoles de Vernier pour offrir un soutien scolaire aux élèves. 
              Notre objectif est d'aider les élèves à surmonter leurs difficultés académiques 
              en leur fournissant un soutien personnalisé. Nous organisons des séances 
              de tutorat régulières et travaillons en étroite collaboration avec les écoles 
              pour identifier les besoins des élèves. Notre engagement est de créer 
              un environnement accueillant où chaque enfant se sent soutenu et valorisé, 
              afin de leur offrir des opportunités d'apprentissage équitables et les aider 
              à atteindre leur plein potentiel académique.
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
                  src="/projets/projet3/projet3_temoignage1.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Je suis reconnaissante envers les enseignants et les organisateurs du programme pour leur aide et leur soutien" - Malik             
              </p>
            </div>
            <div className="mb-4 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet3/projet3_temoignage2.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Grâce aux enseignants du programme, j'ai commencé à voir des progrès dans mes résultats." - Sabrina              
              </p>
            </div>
            <div className="divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet3/projet3_temoignage3.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Rencontrer d'autres enfants dans la même situation que moi m'a également permis de me sentir soutenu et encouragé. Grâce à ce programme, je crois en mes capacités et je suis déterminé à réussir à l'école pour pouvoir réaliser mes rêves pour l'avenir” - Marco
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Projet1Partenaire;

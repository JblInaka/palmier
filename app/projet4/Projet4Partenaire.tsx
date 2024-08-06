import React from "react";
import Image from "next/image";

const Projet4Partenaire = () => {
  const partenaire = require("../../public/projets/projet4/projet4_partenaires.jpeg");

  return (
    <section className=" md:pt-9 mx-3 md:mx-24 grid grid-cols-12 md:min-h-screen bg-cover rounded-3xl" style={{backgroundImage: "url('./BAD.png')", backgroundSize: "100% 100%"}}>
      <h2 className="row-1 col-span-12 text-4xl md:text-5xl text-justify font-bold mb-3 md:mb-14" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }} >
        Partenaires locaux
      </h2>
      <div className="row-2 row-span-2 col-span-12 grid grid-cols-12  ">
        <div className=" col-span-12 md:col-span-8 rounded-r-3xl">
          <div className=" flex justify-center items-center rounded-3xl bg-cover bg-center " style={{ backgroundImage: "url('/partenaire4Projet.png')"}}>
            <Image
              className=" w-[80%] rounded-3xl	 p-4"
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="md:mt-10 md:mb-10">
            <h3 className="font-bold text-xl pb-4 text-center text-green-700/55">
              Association chrétienne pour la promotion du développement intégré 
            </h3>
            <p className="md:mt-1">
              Ce projet de réfection des bâtiments et de sensibilisation des
              élèves est une véritable bouffée d'air frais pour notre
              communauté. En travaillant main dans la main avec nos partenaires
              internationaux, nous avons pu voir nos écoles se transformer
              littéralement sous nos yeux. Les salles de classe rénovées offrent
              un environnement propice à l'apprentissage, tandis que les
              nouvelles constructions répondent enfin à nos besoins croissants
              en matière d'éducation. De plus, la sensibilisation des élèves à
              l'importance de préserver ces infrastructures est une leçon
              précieuse qui transcende les murs de l'école. Nous sommes
              reconnaissants pour cette collaboration fructueuse qui renforce
              notre communauté et ouvre de nouvelles perspectives pour nos
              enfants.
            </p>
          </div>
          <div className="mt-12 pt-4">
            <Image 
                src="/LOGO.png"
                className="md:mt-12"
                width={1200}
                height={980}
                alt="logo sponsors"              
              />
          </div>
        </div>
        <aside className="col-end-13 col-span-3 bg-[#EDEDCB]/25 hidden md:block">
          <h2 className="text-center text-xl font-bold">Temoignages</h2>
          <div className=" h-[90%] w-[90%] carousel carousel-vertical max-w-md mt-4 p-4 ml-4 space-x-4 flex items-justify items-center ">
            <div className="mb-5 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet4/projet4_temoignage1.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                " Avant, nos salles de classe étaient délabrées et tristes, mais maintenant, 
                grâce à vous, tout est différent. 
                Merci d'avoir pris soin de notre école et de nous avoir donné un endroit 
                si merveilleux pour grandir, apprendre et rêver. " - Bébé Thiki
              </p>
            </div>
            <div className="mb-4 divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet4/projet4_temoignage2.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Avant, notre école était vieille et sombre. Mais maintenant, c'est comme si 
                nous avions une toute nouvelle école ! Les salles de classe sont lumineuses et 
                colorées, et il y a tellement d'espace pour jouer et apprendre." - Bébé Kirika              
              </p>
            </div>
            <div className="divide-y-4">
              <div className="carousel-item  ">
                <Image
                  src="/projets/projet4/projet4_temoignage3.jpeg"
                  width={200}
                  height={8}
                  alt=""
                  className="mb-3 rounded-full"
                />
              </div>
              <p className="italic">
                "Notre nouvelle école est incroyable ! J'adore les salles de classe modernes et 
                les équipements que nous avons maintenant. Un grand merci à ceux qui ont travaillé 
                si dur pour rendre notre école aussi spéciale." - Bébé Emi             
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Projet4Partenaire;

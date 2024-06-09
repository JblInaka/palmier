import React from "react";

import Image from "next/image";

const Projet4Partenaires = () => {
  const partenaire = require("../../../public/projets/projet4/projet4_partenaires.jpeg");

  return (
    <section
      className="mt-10 mx-24 grid grid-rows-6 grid-cols-12 min-h-screen bg-cover"
      style={{
        backgroundImage: "url('./BAD.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="row-end-1 col-span-12 ">
        <h2
          className=" text-5xl text-justify pl-5 ml-12 font-bold mb-3"
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Partenaires locaux
        </h2>
      </div>
      <div className=" row-start-1 row-span-5 col-span-12 grid grid-cols-12 ">
        <div className="grid grid-rows-3 col-span-8">
          <div
            className="row-start-1 row-span-2 bg-cover bg-center flex justify-center items-center rounded-r-3xl"
            style={{ backgroundImage: "url('./partenaire.png')" }}
          >
            <Image
              className="h-[100%]"
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="row-start-3 row-span-2 pb-4 ">
            <h3 className="font-bold">
              SYNTHESE DES ACTIVITES DE SENSIBILISATION DES STRUCTURES DE
              PRECOLLECTE{" "}
            </h3>
            <p className="mt-2">
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
        </div>
        <aside className="col-end-13 col-span-3 bg-[#EDEDCB]/25">
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
                " Maintenant, je prends beaucoup mieux soin de mon environnement
                "
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
              <p className="italic">" J'ai appris à trier mes déchets "</p>
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
                " Je suis contente d'avoir participé, je suis plus
                consciencieuse. "
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Projet4Partenaires;

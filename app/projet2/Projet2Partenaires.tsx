import React from "react";

import Image from "next/image";

const Projet2Partenaires = () => {
  const partenaire = require("../../public/projets/projet2/projet2_partenaires_locaux.jpeg");

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
          <div className="row-start-1 row-span-2 bg-cover bg-center flex justify-center items-center rounded-r-3xl"
            style={{ backgroundImage: "url('./partenaire.png')" }}
          >
            <Image
              className="h-[100%]"
              src={partenaire}
              alt="video fille souriante"
            />
          </div>
          <div className="row-start-3 row-span-2 pb-4 ">
            <h3 className="font-bold">Partenaire Locaux</h3>
            <p className="mt-2">
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
                " Maintenant, je prends beaucoup mieux soin de mon environnement
                "
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
              <p className="italic">" J'ai appris à trier mes déchets "</p>
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

export default Projet2Partenaires;

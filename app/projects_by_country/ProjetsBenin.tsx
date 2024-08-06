import React from "react";
import Link from "next/link";

import Image from "next/image";

const ProjectsByDate = () => {
  return (
<section className="mt-10 mx-2 md:mx-24 grid md:grid-rows-4 grid-cols-12 md:min-h-screen bg-cover" style={{ backgroundImage: "url('./bckgd_Valeurs.png')", backgroundSize: "100% 100%" }}>
  <div className="md:row-end-1 md:row-span-3 col-span-12 md:col-start-2 md:col-span-10">
    <div className=" col-span-12 md:col-start-6 md:col-span-5 text-center md:text-right">
      <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }} >
        Nos Projets
      </h2>
      <p>Depuis 2016 Palmier compte à son actif une vingtaine de projets réalisés.</p>
    </div>
    <div className="flex flex-wrap justify-evenly py-14 ">
      <div className="max-w-sm m-2 pb-4 rounded-full shadow-lg bg-[#B9DEC3]">
        <Link href="/projet2">
          <figure className="cursor-pointer">
            <div>
              <Image
                src="/fille_souriante1.png"
                layout="responsive"
                className="hover:scale-105"
                width={100}
                height={1}
                alt="projet phare"
              />
            </div>
            <div className="bg-amber-500 text-white text-center text-bold text-[17px] font-medium px-[8px] ml-4 mr-4 mt-4 pt-[5px] flex items-center">
              <p className="px-5">Réfection latrines</p>
            </div>
          </figure>
          <figcaption>
            <div className="mt-3 ml-2 text-center">
              <p className="text-base text-gray-700">Début : 2017</p>
              <p className="text-base text-gray-700">Lieu : Parakou, Bénin</p>
            </div>
            <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
              Lire plus
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </figcaption>
        </Link>
      </div>
    </div>
  </div>
  <div className="md:row-start-5 col-span-12 md:col-start-6 flex justify-center md:justify-start">
    <div className="join">
      <button className="bg-amber-500 hover:bg-amber-500 join-item btn btn-active">1</button>
      <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn">2</button>
      <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn">3</button>
      <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn">4</button>
    </div>
  </div>
</section>
  );
};

export default ProjectsByDate;

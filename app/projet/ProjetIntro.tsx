

import React from "react";

const ProjetIntro = () => {
  return (
    <section className="grid grid-cols-12 md:min-h-screen bg-cover mx-0 my-0 md:mx-24 md:mt-4 mb-5 p-3" style={{backgroundImage: "url('/badr.jpg')", backgroundSize: "100% 100%"}}>
        <div className="col-span-12 text-center  py-1.5 mt-32 font-bold mb-8 text-5xl flex justify-center items-center" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          <h2 className="text-[#EDEDCB]">
            Des projets à long terme pour un avenir durable
          </h2>
        </div>
        <div className="col-span-12 text-center text-xl py-1.5 flex items-center justify-center w-full px-5 md:px-24 leading-loose mt-12 md:mt-8">
          <p className="text-black w-full">
            Nous développons des projets transformateurs pour les communautés dans le besoin à travers l’Afrique. 
            Grâce à votre soutien, nous pouvons améliorer la future génération. 
            Rejoignez-nous et participez à la création d'un avenir meilleur !
          </p>
        </div>
    </section>
  );
};

export default ProjetIntro;


import React from "react";

import Image from "next/image";

const ProjetPartenaire= () => {

  const partenaire = require("../../public/partenaire1.png");
  const partenaireLogo = require("../../public/partenairelogo.png");


    return (
      <section className="mt-12  mx-0 md:mx-24 mb-4 pt-8 grid grid-cols-12 md:min-h-screen bg-cover" >
        <div className=" row-start-1 row-span-5 col-span-12 grid grid-cols-12 ">
          <h2 className=" text-4xl md:text-5xl text-center md:text-justify md:pl-5 md:ml-12 font-bold  mb-0 md:mb-8 text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
            Nos Partenaires
          </h2>
          <div className=" col-span-12">
            <div className=" bg-cover bg-center flex justify-center items-center h-full rounded-r-3xl" style={{ backgroundImage: "url('./partenaire.png')" }}>
              <Image 
                className=" h-[92%] w-[80%] md:w-[40%]"
                src={partenaire}
                alt="video fille souriante"
              />       
            </div>
          </div>
        </div>
        <div className=" row-start-6 col-span-12 mt-0 md:mt-10  ">
          <Image 
            src="/LOGO.png"
            width={1200}
            height={980}
            alt="logo sponsors"              
          />
        </div>
      </section>
  );
};

export default ProjetPartenaire;

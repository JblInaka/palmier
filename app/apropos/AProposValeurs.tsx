import React from "react";
import Image from "next/image";


const AProposValeurs: React.FC = () => {
  const mbonda = require("../../public/mbonda.png");
  const likonga = require("../../public/likonga.png");
  const ekeko = require("../../public/ekeko.png");
  return (
    <section className="grid grid-rows-7 gap-4 mx-24 min-h-screen bg-cover"
      style={{ backgroundImage: "url('./motif_background.png')" }}>
      <div className="row-span-2 text-center" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
        <h2 className=" text-5xl  font-bold " > 
          Les valeurs
        </h2>
        <p>africaines nous caractérisent  </p>
      </div>
      <div className="row-span-5  grid grid-cols-12 gap-4" style={{ backgroundImage: "url('./bckgd_Valeurs.png')" }}>
        <div className="col-span-4 ">
          <div className="flex justify-center">
            <div className="px-1 py-1 bg-white mt-4 ml-6 mr-6 rounded-full border-[1px] w-[50%] border-[#B9DEC3]">
              <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                <p>Solidarité </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <Image 
              src={mbonda}
              height={178}
              width={235}
              alt="video fille souriante"
            />
          </div>
          <div className="text-center ">
            <p>Palmier, pour le bien-être</p>
          </div>
        </div>
        <div className="col-span-4 ">
        <div className="flex justify-center">
            <div className="px-1 py-1 bg-white mt-4 ml-5 mr-6 rounded-full border-[1px] w-[50%] border-[#B9DEC3]">
              <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                <p>Engagement </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <Image 
                src={likonga}
                height={167}
                width={246}
                alt="video fille souriante"
              />
          </div>
          <div className="flex justify-center text-center ">
            <p>Palmier, pour le développement  </p>
          </div>
        </div>
        <div className=" col-span-4">
        <div className="flex justify-center">
            <div className="px-1 py-1 bg-white mt-4 ml-6 mr-9 rounded-full border-[1px] w-[50%] border-[#B9DEC3]">
              <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                <p>Authenticité </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <Image 
              src={ekeko}
              height={120}
              width={225}
              alt="video fille souriante"
            />
          </div>
          <div className="text-center ">
            <p>Palmier, pour la médiation </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AProposValeurs;

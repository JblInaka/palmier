import React from "react";
import Image from "next/image";


const AProposValeurs: React.FC = () => {
  const mbonda = require("../../public/mbonda.png");
  const likonga = require("../../public/likonga.png");
  const ekeko = require("../../public/ekeko.png");
  return (
    <section className="grid md:grid-rows-7 gap-4 mt-28 md:mt-2 mx-4 md:mx-24 md:min-h-screen bg-cover" style={{ backgroundImage: "url('./motif_background.png')" }}>
      <div className="md:row-span-2 mt-14 md:mt-0 text-center" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
        <h2 className=" text-5xl  font-bold text-black" > 
          Les valeurs
        </h2>
        <p className="text-black">africaines nous caractérisent  </p>
      </div>
      <div className="row-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ backgroundImage: "url('./bckgd_Valeurs.png')" }}>
  <div className="col-span-1 md:col-span-1 lg:col-span-1">
    <div className="flex justify-center">
      <div className="px-1 py-1 bg-white mt-4 ml-6 mr-6 rounded-full border-[1px] w-full border-[#B9DEC3]">
        <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-full h-full">
          <p className="text-black">Solidarité </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Image 
        src={mbonda}
        height={178}
        width={235}
        alt="video fille souriante"
      />
    </div>
    <div className="text-center">
      <p className="text-black">Palmier, pour le bien-être</p>
    </div>
  </div>
  <div className="col-span-1 md:col-span-1 lg:col-span-1">
    <div className="flex justify-center">
      <div className="px-1 py-1 bg-white mt-4 ml-5 mr-6 rounded-full border-[1px] w-full border-[#B9DEC3]">
        <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-full h-full">
          <p className="text-black">Engagement </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Image 
        src={likonga}
        height={167}
        width={246}
        alt="video fille souriante"
      />
    </div>
    <div className="text-center">
      <p className="text-black">Palmier, pour le développement</p>
    </div>
  </div>
  <div className="col-span-1 md:col-span-1 lg:col-span-1">
    <div className="flex justify-center">
      <div className="px-1 py-1 bg-white mt-4 ml-6 mr-9 rounded-full border-[1px] w-full border-[#B9DEC3]">
        <div className="px-3 py-0.5 text-center rounded-full bg-[#B9DEC3] w-full h-full">
          <p className="text-black">Authenticité </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Image 
        src={ekeko}
        height={120}
        width={225}
        alt="video fille souriante"
      />
    </div>
    <div className="text-center">
      <p className="text-black">Palmier, pour la médiation</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default AProposValeurs;

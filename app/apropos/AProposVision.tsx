"use client";

import React from "react";
import Image from "next/image";

const AProposVision: React.FC = () => {
  const vision = require("../../public/Vision.png");
  const mission = require("../../public/Mission.png");

  return (
<section className="grid grid-rows-4 mx-4 md:mx-24 my-8 md:my-20 min-h-screen">
  <div className="row-span-2 grid grid-cols-12 py-5 gap-4">
    <div className="col-span-12 md:col-span-8 flex flex-col md:grid md:grid-cols-6 md:grid-rows-3 order-2 md:order-1">
      <div className="col-span-6 md:col-start-3 flex justify-center md:justify-start items-center">
        <h2 className="text-3xl md:text-5xl text-center md:text-left font-bold" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          La vision
        </h2>
      </div>
      <p className="col-span-6 row-start-2 text-base md:text-lg text-center md:text-justify px-2 py-1">
        <i>"Nous nous engageons à promouvoir la transparence, l'efficacité et l'impact durable dans toutes nos initiatives, tout en favorisant des partenariats solides et inclusifs."</i>
      </p>
    </div>
    <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end items-center order-1 md:order-2">
      <Image
        className="px-1 py-1 w-[100%] md:w-[70%]  ml-0 md:ml-12 border-[1px] rounded-3xl md:rounded-full border-amber-500"
        src={vision}
        width={320}
        alt="image mission"
      />
    </div>
  </div>  
  <div className="row-span-2 grid grid-cols-12 py-5 gap-4">
    <div className="col-span-12 md:col-span-8 flex flex-col md:grid md:grid-cols-6 md:grid-rows-3 order-2 md:order-1">
      <div className="col-span-6  flex justify-center md:justify-center items-center">
        <h2 className="text-3xl md:text-5xl text-center md:text-left font-bold" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          La mission
        </h2>
      </div>
        <p className="col-span-6 row-start-2 text-base md:text-lg text-center md:text-justify px-2 py-1">
          <i>"Nous nous engageons à promouvoir la transparence, l'efficacité et l'impact durable dans toutes nos initiatives, tout en favorisant des partenariats solides et inclusifs."</i>
        </p>
    </div>
    <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start  ">
      <Image
        className="px-1 py-1 w-[100%] md:w-[70%] ml-0 md:ml-12  border-[1px] rounded-3xl md:rounded-full border-amber-500"
        src={mission}
        width={320}
        alt="image mission"
      />
    </div>
  </div>
</section>

  );
};

export default AProposVision;

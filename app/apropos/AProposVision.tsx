"use client";

import React from "react";
import Image from "next/image";

const AProposVision: React.FC = () => {
  const vision = require("../../public/Vision.png");
  const mission = require("../../public/Mission.png");

  return (
<section className="grid grid-rows-4 mx-24 my-20 min-h-screen">
    <div className="row-span-2 grid grid-cols-12 ">
      <div className=" col-span-4 ">
          <Image 
            className=" px-1 py-1 border-[1px] rounded-full border-amber-500"
            src={vision}
            width={320}
            alt="image vision"
          />
      </div>
      <div className=" col-span-8 grid grid-cols-6 grid-rows-3">
        <div className=" col-start-3 ">
          <h2 className=" text-5xl text-justify font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
            La vision
          </h2>  
        </div>
        <p className="col-span-6 row-start-2 text-lg text-justify  py-1"> <i> " Nous nous engageons à promouvoir la transparence,
            l'efficacité et l'impact durable dans toutes nos initiatives, tout
            en favorisant des partenariats solides et inclusifs. "</i>
        </p>
      </div>
    </div>
    <div className="row-span-2 grid grid-cols-12 py-5">
      <div className=" col-span-8 grid grid-cols-6 grid-rows-3">
        <div className=" col-start-3 ">
          <h2 className=" text-5xl text-justify font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
            La mission
          </h2>  
        </div>
        <p className="col-span-6 row-start-2 text-lg text-justify px-2 py-1"> <i> " Nous nous engageons à promouvoir la transparence,
            l'efficacité et l'impact durable dans toutes nos initiatives, tout
            en favorisant des partenariats solides et inclusifs. "</i>
        </p>
      </div>
      <div className=" col-span-4">
        <Image 
            className=" px-1 py-1 ml-12 border-[1px] rounded-full border-amber-500"
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

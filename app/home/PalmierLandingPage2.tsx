"use client"

import React, { useState } from "react";
import Image from "next/image";

const PalmierLandingPage2 = () => { 
    
    
return(
    <section className=" bg-cover md:h-screen " style={{ backgroundImage: "url('/motif_background.png')" }}>
        <div className=" px-20  hidden sm:block " style={{ backgroundImage: "url('/Rectangle585.png')" }}>
            <div style={{ maxWidth: '1200px' }}>
                <Image                   
                    src="/MEREEE.png"
                    layout="responsive"  
                    width={1000}
                    height={10}
                    alt="Bonne maman"
                />
            </div>
        </div>
        <div className="mt-2.5 flex justify-center items-center">
  <h2 className="text-4xl md:text-5xl text-center font-bold" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
    Ensemble
  </h2>        
</div>
<div className="px-4 md:px-6 mt-6 bg-[#EDEDCB]/70 border border-transparent ring ring-blur ring-white">
  <div className="px-1 py-1 bg-white mt-4 mx-auto rounded-full border-[6px] w-full md:w-[994px] h-auto md:h-[75px] border-[#B9DEC3]">
    <div className="px-4 py-2 md:py-0.5 rounded-full bg-[#B9DEC3] w-full h-full">
      <p className="text-sm md:text-base">Soutenons des projets innovants en Afrique, améliorons les conditions de vie des populations locales en préservant et en régénérant les écosystèmes.</p>
    </div>
  </div>
  <div className="px-1 py-1 bg-white mt-3 mx-auto rounded-full border-[6px] w-full md:w-[994px] h-auto md:h-[75px] border-[#B9DEC3]">
    <div className="px-4 py-2 md:py-0.5 rounded-full bg-[#B9DEC3] w-full h-full">
      <p className="text-sm md:text-base">Créons des projets de développement innovants, façonnons l’avenir et inspirons le changement positif pour un impact durable en Afrique.</p>
    </div>
  </div>
  <div className="px-1 py-1 bg-white mt-3 mx-auto mb-8 rounded-full border-[6px] w-full md:w-[994px] h-auto md:h-[75px] border-[#B9DEC3]">
    <div className="px-4 py-2 md:py-0.5 rounded-full bg-[#B9DEC3] w-full h-full">
      <p className="text-sm md:text-base">Engageons à promouvoir la transparence tout en favorisant des partenariats solides et inclusifs.</p>
    </div>
  </div>
</div>

    </section>
);
};

export default PalmierLandingPage2;

"use client"

import React, { useState } from "react";
import Image from "next/image";

const PalmierLandingPage2 = () => { 
    
    
return(
    <section className=" bg-cover h-screen " style={{ backgroundImage: "url('/motif_background.png')" }}>
        <div className=" px-20   " style={{ backgroundImage: "url('/Rectangle585.png')" }}>
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
        <div className=" mt-2.5  flex justify-center items-center ">
            <h2 className=" text-5xl text-justify font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
               Ensemble 
            </h2>        
        </div>
        <div className=" px-6 mt-6  bg-[#EDEDCB]/70 border border-transparent ring ring-blur ring-white">
            <div className="px-1 py-1  bg-white mt-4 ml-20 mr-0 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
                <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                    <p>Nous soutenons des projets innovants en Afrique, visant à améliorer les conditons de vies des populations locales tout en préservant et en régénérant les écosystèmes. </p>
                </div>
            </div>
            <div className="px-1 py-1 bg-white mt-3 ml-20 mr-2 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
                <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                    <p>Nous créons des projets de développement innovants, façonnons l’avenir et inspirons le changement positif pour un impact durable en Afrique. </p>
                </div>
            </div>
            <div className="px-1 py-1 bg-white mt-3 ml-20 mr-2 mb-8 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
                <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
                    <p>Nous nous engageons à promouvoir la transparence, l’efficacité et l’impact durable dans toutes nos initiatives, tout en favorisant des partenariats solides et inclusifs. </p>
                </div>
            </div>
        </div>
    </section>
);
};

export default PalmierLandingPage2;

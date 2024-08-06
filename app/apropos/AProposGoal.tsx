import React from "react";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdBookmarks } from "react-icons/io";

const AProposGoal: React.FC = () => {
  const oasis = require("../../public/oasis.png");
  const lokole = require("../../public/lokole.png");

  //const video_fille = String(video_fille_souriante);
  //const style = { color: "#F59300", fontSize: 60 };
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-4 md:mx-24 mt-10 md:min-h-screen bg-cover" style={{ backgroundImage: "url('./motif_background.png')" }}>
        <div className="col-span-1 md:col-span-6 w-full h-[80%] bg-cover bg-center grid grid-rows-6 md:grid-rows-8 md:rounded-br-full " style={{ backgroundImage: "url('/backgroundAfrikPossbl.png')"}}>
            <div className="md:row-end-2 flex justify-center items-center">
                <Image 
                    src={oasis}
                    alt="video fille souriante"
                />
            </div>
            <div className="md:row-start-2 row-span-3 md:row-span-4 mx-4 md:mx-20 flex justify-center items-center">
                <h2 className="text-4xl md:text-5xl text-justify text-pretty font-bold text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
                    Pour une Afrique des possibles 
                </h2>
            </div>
            <div className="flex justify-center items-center">
                <button className="h-12 w-[90%] md:w-48 rounded-full bg-green-800 text-white text-base font-bold px-4 hover:bg-amber-500">Rejoignez-Nous</button>
            </div>
        </div>  
        <div className="col-span-1 md:col-span-6 md:col-end-13 mt-0 md:mt-12 h-[130%] md:h-[71.5%] bg-cover flex justify-center items-center rounded-r-3xl" style={{ backgroundImage: "url('./lokoleBackground.png')"}}>
            <Image 
                className="h-[75%] md:h-[95%] w-[75%] md:w-[95%]"
                src={lokole}
                alt="video fille souriante"
            />
        </div>
    </section>
);
};
export default AProposGoal;

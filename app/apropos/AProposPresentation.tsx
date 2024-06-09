import React from "react";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdBookmarks } from "react-icons/io";

const AProposPresentation: React.FC = () => {
  const palmiers = require("../../public/apropos/Les-palmiers-1.png");
  //const video_fille = String(video_fille_souriante);
  const style = { color: "#F59300", fontSize: 60 };
  return (
    <section className="grid grid-cols-12 gap-2 mx-24 mt-14 min-h-screen bg-cover"
             style={{ backgroundImage: "url('./motif_background.png')" }}>
      <div className="col-span-12 grid grid-cols-12 grid-rows-6 gap-2 pb-10" style={{ backgroundImage: "url('/background_AproposPrz.png')" }}>        
        <div className="col-start-2 col-span-10 row-span-3   ">

          <iframe className="w-full aspect-[7/3] rounded-full" src="https://www.youtube.com/embed/MRzudQl4exY?playlist=MRzudQl4exY&autoplay=0&mute=1&loop=1&controls=1&rel=0">
          </iframe>

        </div> 
        <div className="col-start-6 mt-16 ">
            <h2 className=" text-5xl text-justify font-bold " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
               Palmier 
            </h2>   
        </div>

        <div className="col-start-2 col-span-10  ">
          <p className="text-lg mt-4 p-2">
            Créée en 2015, l'association <b>Palmier</b>  est sans but lucratif. Cette association constitue un 
            <b> laboratoire</b> d'échanges multiculturels et intergénérationnels autour des diverses questions liées à
            l’intégration, l’environnement, l’éducation, la participation citoyenne et démocratique.
          </p>
        </div>
      </div>  
    </section>
  );
};

export default AProposPresentation;

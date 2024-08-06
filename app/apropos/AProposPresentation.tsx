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
    <section className="grid grid-cols-1 md:grid-cols-12 gap-2 mx-4 md:mx-24 md:mt-14 md:min-h-screen bg-cover" style={{ backgroundImage: "url('./motif_background.png')" }}>
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 md:gap-2 md:pb-10" style={{ backgroundImage: "url('/background_AproposPrz.png')" }}>
        <div className="col-span-12  md:col-start-2 md:col-span-10 md:row-span-3">
            <iframe className="w-full aspect-[13/6] md:aspect-[7/3] rounded-3xl " src="https://www.youtube.com/embed/MRzudQl4exY?playlist=MRzudQl4exY&autoplay=0&mute=1&loop=1&controls=1&rel=0"></iframe>
        </div>
        <div className="col-span-12 md:col-start-6 mt-6 md:mt-12">
            <h2 className="text-4xl md:text-5xl text-center md:text-start font-bold text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
                Palmier 
            </h2>
        </div>
        <div className="col-span-12 md:col-start-2 md:col-span-10">
            <p className="text-lg md:text-lg mt-4 md:mt-4 md:p-2 text-black">
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

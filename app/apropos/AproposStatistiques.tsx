import React from "react";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdBookmarks } from "react-icons/io";

const AProposStatisques: React.FC = () => {
  const palmiers = require("../../public/apropos/Les-palmiers-1.png");
  //const video_fille = String(video_fille_souriante);
  const style = { color: "#F59300", fontSize: 60 };
  return (
<section className="hidden sm:block mt-[-110px] min-h-[360px]" > 
  <div className="w-full z-10"> 
    <div className="container mx-auto "> 
      <div className="grid md:grid-rows-3 grid-cols-4 shadow-2xl pt-9 px-9 " style={{ backgroundImage: "url('./bckgdStats.png')" }}>
        <p className="text-xl text-black"> 
            <span className="text-amber-500 font-bold text-2xl">200+</span><br /> Enfants scolarisés
        </p>
        <p className="text-xl text-black">
            <span className="text-amber-500 font-bold text-2xl">30+</span><br /> Partenaires locaux
        </p>
        <p className="text-xl text-black">
            <span className="text-amber-500 font-bold text-2xl">20+</span><br /> Projets réalisés
        </p>
        <p className="text-xl text-black">
            <span className="text-amber-500 font-bold text-2xl">10+</span><br /> Communautés impactées
        </p>
      </div> 
    </div> 
  </div> 
</section>
  );
};

export default AProposStatisques;

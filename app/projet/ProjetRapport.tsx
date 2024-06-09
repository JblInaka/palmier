import React from "react";

import Image from "next/image";
import Link from "next/link";

const ProjetRapport= () => {


  const devant1 = require("../../public/devant1.png");
  const devant = require("../../public/devant.png");

    return (
    <section className=" mt-16 mx-24 min-h-screen bg-center bg-cover " style={{ backgroundImage: "url('./motif_background.png')", backgroundSize: "100% 100%" }}>
      <div className=" text-end pb-8"> 
        <h2 className=" text-5xl font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Nos rapports d'activités
        </h2>
        <p className="mr-8">Découvrez nos activités de façon détaillée.</p>
      </div>
      <div className="carousel ">
        <div id="slide1" className="carousel-item  w-full gap-4  grid grid-cols-6 ">
          <div className=" flex justify-center mt-12 ">
            <a href="#slide3" className="btn btn-circle ">❮</a> 
          </div>
          <div className="col-start-2 col-span-2 bg-[#EDEDCB]"> 
                <div className=" row-start-1 row-span-2 bg-amber-500 bg-cover bg-center flex justify-center items-center rounded-bl-full" style={{ backgroundImage: "url('./arriere2.png')", backgroundSize: "90% 90%"  }}>
                  <Image
                      src={devant1}
                      alt=""
                  />
                </div>
                <div className="text-center font-bold text-3xl mt-6" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>2020</div>
                <div className="text-center mb-2 pt-2">En dépit du Covid 19</div>
                <Link href="assets/Rapport2020.pdf" target="_blank">
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto mb-4 bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Télécharger le PDF
                  </div>  
                </Link>  
          </div>
          <div className="col-start-4 col-span-2 bg-[#B9DEC3] ">
                <div className=" row-start-1 row-span-2 pl-1 bg-[#EDEDCB] bg-cover bg-center flex justify-center items-center rounded-bl-full" style={{ backgroundImage: "url('./arriere1.png')", backgroundSize: "90% 90%"  }}>
                  <Image
                      src={devant}
                      alt=""
                  />
                </div>
                <div className="text-center font-bold text-3xl mt-6" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>2021</div>
                <div className="text-center mb-2 pt-2">Palmier ne cesse de croitre</div>
                <Link href="assets/Rapport2021.pdf" target="_blank">
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto mb-4 bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Télécharger le PDF
                  </div>  
                </Link>  
          </div> 
          <div className=" flex justify-center mt-12 ">
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>  
        </div> 
        <div id="slide2" className="carousel-item  w-full gap-4 grid grid-cols-6 ">
          <div className=" flex justify-center mt-12 ">
            <a href="#slide1" className="btn btn-circle ">❮</a> 
          </div>
          <div className="col-start-2 col-span-2 bg-[#B9DEC3] ">
                <div className=" row-start-1 row-span-2 pl-1 bg-[#EDEDCB] bg-cover bg-center flex justify-center items-center rounded-bl-full" style={{ backgroundImage: "url('./arriere1.png')", backgroundSize: "90% 90%"  }}>
                  <Image
                      src={devant}
                      alt=""
                  />
                </div>
                <div className="text-center font-bold text-3xl mt-6" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>2022</div>
                <div className="text-center mb-2 pt-2">Palmier fixe ses racines</div>
                <Link href="assets/Rapport2022.pdf" target="_blank">
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto mb-4 bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Télécharger le PDF
                  </div>  
                </Link>    
          </div> 
          <div className="col-start-4 col-span-2 bg-[#EDEDCB]"> 
                <div className=" row-start-1 row-span-2 bg-amber-500 bg-cover bg-center flex justify-center items-center rounded-bl-full" style={{ backgroundImage: "url('./arriere2.png')", backgroundSize: "90% 90%"  }}>
                  <Image
                      src={devant1}
                      alt=""
                  />
                </div>
                <div className="text-center font-bold text-3xl mt-6" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>2018</div>
                <div className="text-center mb-2 pt-2">Palmier deploie ses rameaux</div>
                <Link href="assets/Rapport2018.pdf" target="_blank">
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto mb-4 bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Télécharger le PDF
                  </div>  
                </Link>    
          </div>
          <div className=" flex justify-center mt-12 ">
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>  
        </div> 
        <div id="slide3" className="carousel-item  w-full gap-4 grid grid-cols-6 ">
          <div className=" flex justify-center mt-12 ml-12">
            <a href="#slide2" className="btn btn-circle ">❮</a> 
          </div>
          <div className="col-start-3 col-span-2 bg-[#B9DEC3] ">
                <div className=" row-start-1 row-span-2 pl-1 bg-[#EDEDCB] bg-cover bg-center flex justify-center items-center rounded-bl-full" style={{ backgroundImage: "url('./arriere1.png')", backgroundSize: "90% 90%"  }}>
                  <Image
                      src={devant}
                      alt=""
                  />
                </div>
                <div className="text-center font-bold text-3xl mt-6" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>2017</div>
                <div className="text-center mb-2 pt-2">Palmier continue dans sa lancé</div>
                <Link href="assets/RapportPalmier.pdf" target="_blank">
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto mb-4 bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Télécharger le PDF
                  </div>  
                </Link>    
          </div> 
          <div className=" flex justify-end mt-12 ">
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>  
        </div> 
      </div>
    </section>
  );
};

export default ProjetRapport;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PalmierLandingPage3 = () => {
    return(
        <>
        <section className="mt-15">
            <div className="px-1 py-1 bg-white mt-12 ml-0 mr-0 rounded-full border-[2px] h-[94px] w-full border-[#B9DEC3]">
                    <div className="h-full flex justify-center items-center space-x-40 rounded-full bg-[#B9DEC3] w-[100%]">
                        <p className="text-xl">
                        <span className="text-amber-500 font-bold text-2xl">200+</span><br /> Enfants scolarisés
                        </p>
                        <p className="text-xl">
                        <span className="text-amber-500 font-bold text-2xl">30+</span><br /> Partenaires
                        </p>
                        <p className="text-xl">
                        <span className="text-amber-500 font-bold text-2xl">4+</span><br /> Pays
                        </p>
                </div>
            </div>
        </section>    
        <section className="mt-10">
            <div className=" mt-0 mb-10 flex justify-center items-center ">
                    <h2 className=" text-5xl text-justify font-bold py-7 " style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
                        Donnez vie à nos projets    
                    </h2>            
            </div>      
            <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: "url('bckGdS3.png')", backgroundSize: "100% 100%" }}>
                <div className="flex justify-evenly py-14 mt-2">
                    <div className="max-w-sm m-2 overflow-visible scroll-smooth rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] hover:bg-[#EDEDCB]" style={{ maxWidth: '300px' }}>
                        <Link href="#">
                            <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                                <div>
                                    <Image
                                        src="/fille_souriante1.png"
                                        layout="responsive"
                                        width={100}
                                        height={1}
                                        alt="projet phare"
                                    />
                                    <a href="#" className=" absolute top-[10px] right-[10px] bg-[rgba(248,184,100,0.8)] text-white text-[14px] font-medium px-[10px] py-[5px] flex items-center">
                                        Faire un don
                                    </a>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1 ">
                                    <div className="relative h-2 flex items-center justify-center ">
                                        <div className="absolute top-0 bottom-0 left-0 rounded-full w-[40%] bg-amber-500"></div>
                                        <div className="relative text-amber-500  text-xs">40%</div>
                                    </div>
                                </div>
                                <div className="absolute  bg-amber-500 text-white text-bold text-[17px] font-medium px-[10px] ml-4 mt-4 pt-[5px] flex items-center">Construction d’une école </div>
                            </figure>    
                            <figcaption>
                                <div className="pl-10 py-12 mt-3 ml-2">
                                    <p className="text-base text-gray-700 ">
                                        Objectif : CHF 10000 
                                    </p>
                                    <p className="text-base text-gray-700 ">
                                        Acquis : CHF 2000
                                    </p>
                                </div>
                            </figcaption>
                        </Link>
                    </div>
                    <div className="max-w-sm m-2 overflow-visible rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] hover:bg-[#EDEDCB]" style={{ maxWidth: '300px' }}>
                        <Link href="#">
                            <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                                <div>
                                    <Image
                                        src="/enfant_au_dos1.png"
                                        layout="responsive"
                                        width={100}
                                        height={1}
                                        alt="projet phare"
                                    />
                                    <a href="#" className=" absolute top-[10px] right-[10px] bg-[rgba(248,184,100,0.8)] text-white text-[14px] font-medium px-[10px] py-[5px] flex items-center">
                                        Faire un don
                                    </a>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1 ">
                                    <div className="relative h-2 flex items-center justify-center ">
                                        <div className="absolute top-0 bottom-0 left-0 rounded-full w-[60%] bg-amber-500"></div>
                                        <div className="relative text-white  text-xs">60%</div>
                                    </div>
                                </div>
                                <div className="absolute  bg-amber-500 text-white text-bold text-[17px] font-medium px-[10px] ml-8 mr-2 mt-4 pt-[5px] flex items-center">Soutien nouveau né </div>
                            </figure>    
                            <figcaption>
                                <div className="pl-10 py-12 mt-3 ml-2">
                                    <p className="text-base text-gray-700 ">
                                        Objectif : CHF 10000 
                                    </p>
                                    <p className="text-base text-gray-700 ">
                                        Acquis : CHF 2000
                                    </p>
                                </div>
                            </figcaption>
                        </Link>
                    </div>               
                </div>

            </div>                
        </section>
        </>    
);
};
export default PalmierLandingPage3;
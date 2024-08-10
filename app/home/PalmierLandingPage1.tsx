import React from 'react';
import Image from 'next/image';
import Link from "next/link";


const PalmierLandingPage1 = () => {
   // const img1 = require('../public/image1.jpg');

return(
<section className="bg-cover mid:h-screen grid grid-cols-12 gap-4" style={{ backgroundImage: "url('/motif_background.png')" }}>
  <div className="relative col-span-12 flex flex-col md:flex-row">
    <div className="md:col-span-5 md:flex flex-col justify-center items-center p-8 hidden">
      <p className="text-5xl text-center text-pretty font-bold py-10" style={{ fontFamily: "'Swanky and Moo Moo', cursive", lineHeight: '1.3' }}>
        Partenaire du <span className="text-green-700">changement</span> pour un impact durable <span className="text-green-700">en Afrique</span>
      </p>
      <div className="flex justify-center mt-4">
        <Link href="/contact">
          <div className="block"> 
            <div className="px-1 py-1 rounded-full bg-white border-4 border-green-800 font-bold mr-2 hover:border-amber-500">
              <button className="h-10 rounded-full bg-green-800 text-white text-base font-bold px-4 hover:bg-amber-500 flex items-center justify-center">
                Rejoignez-Nous
              </button>
            </div>
          </div>
        </Link>
        <Link href="/contact">
          <div className="block"> 
            <div className="px-1 py-1 rounded-full bg-white border-4 border-amber-500 font-bold hover:border-green-800">
              <button className="h-10 rounded-full bg-amber-500 text-white text-base font-bold px-4 hover:bg-green-800">Faire Un Don</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="relative md:col-start-6 md:w-[120%] w-full">
  <Image
    src="/imageFirst.png"
    layout="responsive"
    height={800}
    width={1000}
    alt="Bonne maman"
    className="h-full object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-20 bg-black md:hidden">
    <p className="text-2xl text-center text-white font-bold py-4 px-2" style={{ fontFamily: "'Swanky and Moo Moo', cursive", lineHeight: '1.3' }}>
      Partenaire du <span className="text-green-500">changement</span> pour un impact durable <span className="text-green-500">en Afrique</span>
    </p>
    <div className="flex justify-center mt-10 md:mt-2 w-[96%]">
      <Link href="/contact" className="block w-full">
        <div className="px-1 py-1 rounded-full bg-white border-4 border-amber-500 font-bold hover:border-green-800 w-full">
          <button className="h-10 rounded-full bg-amber-500 text-white text-3xl font-bold w-full hover:bg-green-800">Rejoignez-Nous</button>  
        </div>
      </Link>
    </div>
  </div>
</div>

  </div>
</section>

);

};

export default PalmierLandingPage1;

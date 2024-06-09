import React from "react";

import Image from "next/image";

const AProposEquipe: React.FC = () => {
  const membre1 = require("../../public/apropos/arianna_equipe.png");
  const membre2 = require("../../public/apropos/arianna_equipe2.png");

  return (
    <section>

         {/*   <section className="grid grid-cols-12 grid-rows-7 gap-4 mx-24 mt-10 min-h-screen bg-cover " style={{ backgroundImage: "url('./motif_background.png')" }}>
      <div>
        <div className="row-span-2 col-star-5 text-center" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          <h2 className=" text-5xl  font-bold " > 
          Ubuntu
          </h2>
          <p>je suis parce que nous sommes</p>
        </div>
      </div>
      <div>
<div className="col-span-3 p-5">
          <Image src={membre1} height={100} width={500} alt="karaba et kirikou" />
          <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
        </div>
        <div className="col-span-3 p-5">
          <Image src={membre2} height={100} width={500} alt="karaba et kirikou" />
          <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
        </div>

        <div className="col-span-3 p-5">
          <Image src={membre1} height={100} width={500} alt="karaba et kirikou" />
          <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
        </div>
        <div className="col-span-3 p-5">
          <Image src={membre2} height={100} width={500} alt="karaba et kirikou" />
          <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
        </div>
      </div>
    </section>*/}

</section>
  );
};

export default AProposEquipe;

"use client";

import React from "react";
//import Projets from "@/components/projets/Projets";
import Projet3 from "./Projet3";

const Page: React.FC = () => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url('/motif_background.png')" }}
    >
      <Projet3 />
    </div>
  );
};

export default Page;

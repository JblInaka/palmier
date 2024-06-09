"use client";

import React from "react";
import Image from "next/image";

const Projet3Intro = () => {
  const style_background = {
    backgroundImage: "url('/projets/projet3/projet3_intro.jpeg')",
    height: 500,
    width: "100%",
  };

  const style_progress_bar_prc = {
    left: "50%",
  };

  const style_progress_bar = {
    width: "50%",
  };

  const style_intro = {
    width: 400,
    height: 400,
  };

  return (
    <div
      className="
          h-screen
          grid
          grid-cols-12
          mx-24 my-10 mt-16
          "
    >
      <div
        className="col-span-12 ml-5 mt-10   bg-no-repeat bg-cover"
        style={style_background}
      >
        {/*  <div
          style={style_intro}
          className="h-60 w-80 mt-24 absolute right-24 rounded-t-lg"
        >
          <Image src="/projet3_intro.jpeg" layout="fill" alt="Bonne maman" />
        </div> */}
      </div>
      <div className="col-span-12 text-center">
        <div className="relative w-9/12 pt-12 ml-24 mr-24">
          <span
            className="absolute bottom-0 mb-4 -translate-x-1/2 w-12 h-10 bg-progress_bar
              shadow-[0px_12px_30px_0px_rgba(16,24,40,0.1)] rounded-full px-3.5 py-2 text-gray-800 text-xs
              font-medium flex justify-center items-center after:absolute after:bg-white after:flex after:bottom-[-5px]
              after:left-1/2 after:-z-10 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45"
            style={style_progress_bar_prc}
          >
            50%
          </span>
          <div className="relative flex w-full h-2.5  overflow-hidden rounded-3xl bg-gray-100">
            <div
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={style_progress_bar}
              className="flex h-full items-center justify-center bg-progress_bar  text-white rounded-3xl "
            ></div>
          </div>
        </div>
        <p className="mt-8 font-bold text-2xl">Atteint: 20 000$</p>
        <p className="font-bold text-2xl">Objectif: 40 000$</p>
        <h2 className="mt-16 font-bold text-2xl">Description</h2>
        <p className="p-5 pl-24 pr-24">
          Depuis sa mise en place en 2016, l’association Palmier continue au
          travers du projet Piplette sa permanence de soutien scolaire pour
          venir en aide aux enfants de Vernier en difficulté scolaire.
          L’association « Palmier » a poursuivi cette année 2017 les échanges
          multiculturels et intergénérationnels mettant en place une permanence
          gratuite de soutien scolaire à Vernier, pour les élèves des écoles de
          l’établissement : Châtelaine - Balexert - Bourquin. Sous la
          responsabilité de Madame Sara Offner, l’équipe d’encadrants a continué
          son aide gratuitement aux élèves de primaire dans toutes les matières
          et pour les élèves du cycle d’orientation en mathématiques, français
          et allemand.
        </p>
      </div>
    </div>
  );
};

export default Projet3Intro;

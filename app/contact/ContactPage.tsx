"use client";

import React from "react";
import { useState } from "react";

import Image from "next/image";

const ContactPage = () => {
  return (
<section >
  <div className="mx-4 md:mx-24 md:min-h-screen bg-cover text-center text-black flex flex-col md:flex-row " style={{ backgroundImage: "url('./motif_background.png')" }}>
    <div className="flex-1 md:min-h-screen flex flex-col justify-center items-center mb-2" >
      <h1 className="text-pretty text-4xl md:text-5xl font-bold mt-5 md:mb-10 py-20 text-topBarColor" style={{ fontFamily: "'Swanky and Moo Moo', cursive", lineHeight: "1.3" }}>
        Association Palmier
      </h1>
      <div className="text-2xl" style={{ fontFamily: "'Swanky and Moo Moo', cursive", lineHeight: "1.3" }}>
        <p>Chemin des Coudriers 21 / 1218 Le Grand - Saconnex</p>
        <p>
          Contact : Thomas Seki :<i>07621489473</i>
        </p>
        <p>Email: palmier.ge@gmail.com </p>
      </div>
    </div>
    <div className="flex-1 mt-8 mb-6">
      <iframe className="w-full h-full rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5520.825392474968!2d6.116711599999999!3d46.2221371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6496a147e3f9%3A0x81f58a59c081fc24!2sChem.%20des%20Coudriers%2021%2C%201216%20Le%20Grand-Saconnex!5e0!3m2!1sfr!2sch!4v1723036927935!5m2!1sfr!2sch" loading="lazy" >
      </iframe>
    </div>
  </div>
</section>

  );
};

export default ContactPage;

"use client";

import React from "react";
import { useState } from "react";

import Image from "next/image";

const ContactPage = () => {
  return (
<section >
  <div className="mx-4 md:mx-24 min-h-screen bg-cover text-center text-black flex flex-col md:flex-row " style={{ backgroundImage: "url('./motif_background.png')" }}>
    <div className="flex-1 md:min-h-screen flex flex-col justify-center items-center" >
      <h1 className="text-pretty text-5xl font-bold mt-5 mb-10 py-20 text-topBarColor" style={{ fontFamily: "'Swanky and Moo Moo', cursive", lineHeight: "1.3" }}>
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
    <div className="flex-1 hidden sm:block">
      <iframe className="w-full h-full rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        aria-hidden="false">
      </iframe>
    </div>
  </div>
</section>

  );
};

export default ContactPage;

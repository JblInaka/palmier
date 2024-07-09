"use client";

import React from "react";
import { useState } from "react";

import Image from "next/image";

const ContactPage = () => {
  /*
  const [subject, setSubject] = useState("");
  const [myMessage, setMyMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    //const formData = new FormData(event.target);
    //const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/sendEmail", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        //body: formData,
        body: JSON.stringify({
          subject,
          myMessage,
        }),
      });
      console.log("Response ", response);

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log("Response data: ", responseData);
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      console.log(err);
      alert("Error, please try resubmitting the form");
    }
  }
*/
  return (
    <div
      className="mx-24 mt-64 min-h-screen bg-cover text-center"
      style={{ backgroundImage: "url('./motif_background.png')" }}
    >
      <p>
        Vous pouvez nous contacter au: <i>Numéro de téléphone</i>{" "}
      </p>
      <p>Email: ... </p>
      <p>Adresse: </p>
    </div>
  );
};

export default ContactPage;

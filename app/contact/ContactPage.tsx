"use client";

import React from "react";

import Image from "next/image";

const ContactPage = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    //const formData = new FormData(event.target);
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: formData,
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

  return (
    <div
      className="grid grid-cols-12 gap-2 mx-24 mt-14 min-h-screen bg-cover"
      style={{ backgroundImage: "url('./motif_background.png')" }}
    >
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom complet:</label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="nom_complet"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="email"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="phone"
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              id="w3review"
              name="message"
              rows="4"
              cols="50"
              defaultValue="Enter your message here"
            ></textarea>
          </div>
          <div>
            <button type="submit">Soumettre</button>
            {/*<input type="submit" value="Soumettre" />  */}
          </div>
        </form>
      </>
    </div>
  );
};

export default ContactPage;

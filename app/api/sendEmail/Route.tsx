import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: any) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const { subject, myMessage } = await request.json();

  // const formData = await request.formData();

  // const name = formData.get("nom_complet");
  // const email = formData.get("email");
  // const phone = formData.get("phone");

  // const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: "dev.ckap@gmail.com",
      subject: `Website activity from `,
      html: `
              <p>Name: ${subject} </p>
              <p>Email:  </p>
              <p>Message: ${myMessage} </p>
              `,
    });
    console.log("Email sent :: ", mail.response);

    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}

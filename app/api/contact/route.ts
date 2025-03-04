import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { message, email } = await req.json();

    if (!message || message.length < 10) {
      return new Response(JSON.stringify({ error: "El mensaje debe tener al menos 10 caracteres" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Luis Carlos Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Nuevo mensaje desde tu portafolio",
      html: `
        <h1>Nuevo mensaje desde el portafolio de ${email}</h1>
        <p>${message}</p>
        <p>Enviado desde la web</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Correo enviado correctamente" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Hubo un error al enviar el correo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
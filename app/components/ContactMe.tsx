"use client";
import { Button, Wrapper } from "@/components/ui";
import contactMeData from "@/app/data/contact-me.json";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessage = async () => {
    if (message.length < 10) {
      setStatus("El mensaje debe tener al menos 10 caracteres");
      return;
    }
    try {
      setStatus("Enviando...");
    
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Mensaje enviado correctamente");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(data.error || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error(error);
      setStatus("Hubo un error al enviar el mensaje");
    }
  };
  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);

  return (
    <article id="contactMe" className="relative my-[102px] py-9 rounded-l-2xl">
      <div
        className="
        absolute inset-0 z-0 bg-secondary rounded-r-2xl
        lg:mr-[147px] md:mr-[88px] sm:mr-[59px] mr-[29px]
        lg:pr-[53px] md:pr-[32px] pr-[24px]
        lg:pl-[200px] md:pl-[120px] sm:pl-[80px] pl-[40px]
      "
      ></div>
      <Wrapper isContent className="relative z-10 grid grid-cols-3 text-text">
        <section className="lg:col-span-2 col-span-3 mb-4 sm:text-start text-center">
          <h1 className="text-4xl font-semibold mb-2.5">
            {contactMeData.title}
          </h1>
          {contactMeData.description.map((paragraph, index) => (
            <p key={index} className="text-lg font-medium mb-2">
              {paragraph}
            </p>
          ))}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            className="mb-1 bg-text w-full font-medium text-[16px] text-primary py-0.5 px-2.5 rounded-lg border-4 border-primary focus:outline-none focus:drop-shadow-[0_0_8px_#F50057] transition-all duration-300"
            onChange={handleEmailChange}
          />

          <input
            type="text"
            placeholder={contactMeData.input.placeholder}
            value={message}
            className="mb-1 bg-text w-full font-medium text-[16px] text-primary py-0.5 px-2.5 rounded-lg border-4 border-primary focus:outline-none focus:drop-shadow-[0_0_8px_#F50057] transition-all duration-300"
            onChange={handleMessageChange}
          />
          <p className="text-[12px] text-faded-text">
            {contactMeData.input.text}
          </p>
          <Button
            variant="Primary"
            className="w-[150px] mt-2 font-semibold bg-primary text-text rounded-full leading-4 py-2.5 text-center hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300"
            onClick={sendMessage}
          >
            Send message
          </Button>
          {status && (
            <p className={`text-sm mt-2 ${status.includes("error") ? "text-red-500" : "text-green-500"}`}>
              {status}
            </p>
          )}
        </section>
        <section className="flex lg:flex-col sm:flex-row flex-col justify-center lg:items-end items-center lg:col-span-1 col-span-3 gap-4">
          {contactMeData.links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              className="w-[150px] font-semibold bg-primary text-text rounded-full leading-4 py-2.5 text-center hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </section>
      </Wrapper>
    </article>
  );
}

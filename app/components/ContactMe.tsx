import { Wrapper } from "@/components/ui";
import contactMeData  from "@/app/data/contact-me.json";

import Link from "next/link";

export default function ContactMe() {
  return (
    <section className="
    grid grid-cols-3 text-text
    bg-secondary my-[102px] py-9 rounded-r-2xl
    lg:mr-[147px] md:mr-[88px] sm:mr-[59px] mr-[29px]
    lg:pr-[53px] md:pr-[32px] pr-[24px]
    lg:pl-[200px] md:pl-[120px] sm:pl-[80px] pl-[40px]
    ">
      <article className="lg:col-span-2 col-span-3 mb-8">
        <h1 className="text-4xl font-semibold mb-2.5">
          {contactMeData.title}
        </h1>
        {contactMeData.description.map((paragraph, index) => (
          <p key={index} className="text-lg font-medium mb-4">
            {paragraph}
          </p>
        ))}
        <input 
          type="text"
          placeholder={`${contactMeData.input.placeholder}`}
          className="bg-text w-full font-medium text-[16px] text-primary py-0.5 px-2.5 rounded-lg border-4 border-primary focus:outline-none"
        />
        <p className="text-[12px] text-faded-text">
          {contactMeData.input.text}
        </p>
      </article>
      <article className="flex lg:flex-col sm:flex-row flex-col justify-center lg:items-end items-center lg:col-span-1 col-span-3 gap-5">
        {contactMeData.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="w-[150px] font-semibold bg-primary active:bg-hover text-text rounded-full leading-4 py-2.5 text-center"
          >
            {link.label}
          </Link>
        ))}
      </article>
    </section>
  );
}

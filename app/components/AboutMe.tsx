import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="
    grid grid-cols-3 text-text
    bg-secondary my-[102px] py-9 rounded-l-2xl
    lg:ms-[147px] md:ms-[88px] sm:ms-[59px] ms-[29px]
    lg:pl-[53px] md:pl-[32px] pl-[24px]
    lg:pr-[200px] md:pr-[120px] sm:pr-[80px] pr-[40px]
    ">
      <article className="lg:col-span-2 col-span-3 mb-8">
        <h1 className="text-4xl font-semibold mb-2.5">
          About Me
        </h1>
        <p className="text-lg font-medium">
          I'm Luis Carlos, a Software Engineer specializing in web development and scalable software solutions. I create high-performance applications using React, Next.js, Angular, TypeScript, Node.js, NestJS, and Laravel.
        </p>
        <p className="text-lg font-medium">
          With a focus on clean code, performance, and maintainability, I build solutions that optimize business processes and deliver seamless user experiences.
        </p>
      </article>
      <article className="flex lg:flex-col sm:flex-row flex-col justify-center lg:items-end items-center lg:col-span-1 col-span-3 gap-5">
        <Link href={`#`} className="w-[150px] font-semibold bg-primary active:bg-hover text-text rounded-full leading-4 py-2.5 text-center">
          GitHub
        </Link>
        <Link href={`#`} className="w-[150px] font-semibold bg-primary active:bg-hover text-text rounded-full leading-4 py-2.5 text-center">
          LinkedIn
        </Link>
        <Link href={`#`} className="w-[150px] font-semibold bg-primary active:bg-hover text-text rounded-full leading-4 py-2.5 text-center">
          Curriculum
        </Link>
      </article>
    </section>
  );
}
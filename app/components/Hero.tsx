import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Wrapper isContent>
      <section className="grid grid-cols-2 w-full text-text py-[102px]">
        <article className="flex flex-col lg:col-span-1 col-span-2 ">
          <h1 className="text-4xl font-semibold mb-6">
            Scalable Systems & Custom Software Solutions
          </h1>
          <p className="text-lg font-medium">
            Crafting high-performance custom software solutions and backend architectures with NestJS, React, TypeScript, and others.
          </p>
          <p className="text-lg font-medium mb-5">
            I specialize in system automation, API integrations, and modular backend services, delivering scalable, secure, and optimized solutions to boost business efficiency.
          </p>
          <Link href={`#`} className="w-[150px] font-semibold bg-secondary active:bg-hover text-text rounded-full leading-4 mx-auto py-2.5 text-center">
            Contact me
          </Link>
        </article>
        <article className="grid lg:col-span-1 col-span-2 justify-center items-center">
          <Image
            src="/assets/hero-image.png"
            width={406}
            height={406}
            alt="Hero Image"
          />
        </article>
      </section>
    </Wrapper>
  );
}
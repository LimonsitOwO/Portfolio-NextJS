'use client';

import { Wrapper } from '@/components/ui';
import Link from 'next/link';
import heroData from '@/app/data/hero.json';

export default function HeroSection() {
  const { title, description, button } = heroData;

  return (
    <Wrapper isContent>
      <section className="grid grid-cols-2 w-full text-text py-[102px]">
        <article className="flex flex-col lg:col-span-1 col-span-2">
          <h1 className="text-4xl font-semibold mb-6">{title}</h1>
          {description.map((desc, index) => (
            <p key={index} className="text-lg font-medium mb-5">
              {desc}
            </p>
          ))}
          <Link
            href="#contactMe"
            className="w-[150px] font-semibold bg-secondary hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300 text-text rounded-full leading-4 mx-auto py-2.5 text-center"
          >
            {button.text}
          </Link>
        </article>

        <article
          className="grid lg:col-span-1 col-span-2 justify-center items-center overflow-hidden w-full p-8 lg:mt-0mt-8"
          onMouseEnter={(e) => {
            (e.currentTarget.querySelector('img') as HTMLImageElement).style.filter = `drop-shadow(0 0 20px #F50057)`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.querySelector('img') as HTMLImageElement).style.filter = 'none';
          }}
        >
          <img
            src="/assets/svg/NestJS.svg"
            alt="Logo de NestJS"
            className="object-contain w-full h-full min-h-[300px] transition-all duration-500"
            style={{ cursor: 'pointer' }}
          />
        </article>
      </section>
    </Wrapper>
  );
}

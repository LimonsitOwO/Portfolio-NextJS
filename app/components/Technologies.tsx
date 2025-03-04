'use client';

import { Wrapper } from '@/components/ui';
import technologiesData from '@/app/data/technologies.json';
import Image from 'next/image';

const hoverColors: Record<string, string> = {
  'React': '#53C1DE',
  'Next': '#E5383B',
  'Angular': '#F44336',
  'TypeScript': '#1976D2',
  'NodeJS': '#388E3C',
  'NestJS': '#F50057',
  'Laravel': '#E52030'
};

export default function Technologies() {
  return (
    <Wrapper isContent>
      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center w-full text-text">
        {technologiesData.map((technology, index) => {
          const color = hoverColors[technology.name] ?? '#E5383B';
          return (
            <article
              key={index}
              className="flex flex-col items-center justify-center md:w-[120px] md:h-[120px] hover:scale-105 transition-all duration-500"
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector('img') as HTMLImageElement).style.filter = `drop-shadow(0 0 20px ${color})`;
              }}
            >
              <Image
                src={technology.svg}
                alt={technology.name}
                width={75}
                height={75}
                className="object-contain transition-all duration-500"
                style={{ cursor: 'pointer' }}
              />
              <p className="text-center text-[12px] mt-2 font-semibold">{technology.name}</p>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
}
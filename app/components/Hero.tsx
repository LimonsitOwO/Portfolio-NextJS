import { Wrapper } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import heroData  from "@/app/data/hero.json";

export default function HeroSection() {
  const { title, description, button, image } = heroData;

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
            href={button.link}
            className="w-[150px] font-semibold bg-secondary active:bg-hover text-text rounded-full leading-4 mx-auto py-2.5 text-center"
          >
            {button.text}
          </Link>
        </article>

        <article className="grid lg:col-span-1 col-span-2 justify-center items-center">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </article>
      </section>
    </Wrapper>
  );
}

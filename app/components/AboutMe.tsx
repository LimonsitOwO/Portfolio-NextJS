import { Wrapper } from "@/components/ui";
import aboutMeData from "@/app/data/about-me.json";
import Link from "next/link";

export default function AboutMe() {
  return (
    <article id="aboutMe" className="relative my-[102px] py-9 rounded-l-2xl">
      <div
        className="
        absolute inset-0 z-0 bg-secondary rounded-l-2xl
        lg:ms-[147px] md:ms-[88px] sm:ms-[59px] ms-[29px]
        lg:pl-[53px] md:pl-[32px] pl-[24px]
        lg:pr-[200px] md:pr-[120px] sm:pr-[80px] pr-[40px]
      "
      ></div>
      <Wrapper isContent className="relative z-10">
        <section className="grid grid-cols-3 text-text sm:text-start text-center">
          <article className="lg:col-span-2 col-span-3 mb-8">
            <h1 className="text-4xl font-semibold mb-2.5">
              {aboutMeData.title}
            </h1>
            {aboutMeData.description.map((paragraph, index) => (
              <p key={index} className="text-lg font-medium mb-4">
                {paragraph}
              </p>
            ))}
          </article>

          <article className="flex lg:flex-col sm:flex-row flex-col justify-center lg:items-end items-center lg:col-span-1 col-span-3 gap-5">
            {aboutMeData.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="w-[150px] font-semibold bg-primary hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300 text-text rounded-full leading-4 py-2.5 text-center"
                {...(link.label === "Curriculum" ? { download: true } : {})}
              >
                {link.label}
              </Link>
            ))}
          </article>
        </section>
      </Wrapper>
    </article>
  );
}

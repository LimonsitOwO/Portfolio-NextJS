import { Wrapper } from "@/components/ui/index";

export default function Footer() {
  return (
    <Wrapper isContent>
      <footer className="flex flex-col justify-center py-10 lg:py-5 relative">
        <h2 className="text-2xl font-bold text-text rounded-lg">
          Luis Carlos Ballen Chavez
        </h2>
        <hr className="border-2 border-text w-full my-2.5" />
        <p className="text-text text-[16px]">
          Software Engineer | Full Stack Developer
        </p>
        <p className="text-text text-[16px]">
          Crafting scalable software solutions with React, Next.js, Angular, NestJS, Node.js, and Laravel.
        </p>
        <span className="text-faded-text text-[12px] font-light text-center mt-[100px]">
          © 2025 Luis Carlos Ballen Chavez - All Rights Reserved
        </span>
      </footer>
    </Wrapper>
  );
}
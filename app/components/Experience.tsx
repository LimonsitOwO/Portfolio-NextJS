import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    <Wrapper isContent>
      <section className="grid grid-cols-3 w-full text-text py-[102px] gap-4">
        <article className="col-span-4 mb-2">
          <h1 className="text-4xl font-semibold mb-10 text-center">
            Experience
          </h1>
        </article>

        <article className="bg-secondary rounded-xl col-span-1 min-h-[237px] p-3">
          <h1 className="text-[16px] font-semibold mb-2 text-center">
            Frontend Development
          </h1>
          <ul className="text-[12px] font-normal list-disc list-inside">
            <li>Modern interfaces with React, Next.js, and Angular</li>
            <li>API consumption and integration</li>
            <li>Responsive and accessible web applications</li>
            <li>Component-based architecture with TypeScript</li>
          </ul>
        </article>
      </section>
    </Wrapper >
  );
}
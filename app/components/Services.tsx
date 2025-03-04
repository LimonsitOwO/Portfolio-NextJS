import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <Wrapper isContent>
      <section className="grid grid-cols-4 w-full text-text py-[102px] gap-4">
        <article className="col-span-4 mb-2">
          <h1 className="text-4xl font-semibold mb-6 text-center">
            Services
          </h1>
          <p className="text-lg font-medium">
            I offer comprehensive software development services to create scalable, modern, and efficient web applications with a full stack approach.
          </p>
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

        <article className="bg-secondary rounded-xl col-span-1 min-h-[237px] p-3">
          <h1 className="text-[16px] font-semibold mb-2 text-center">
            Backend Development
          </h1>
          <ul className="text-[12px] font-normal list-disc list-inside">
            <li>API development with NestJS, Node.js, Express.js, and Laravel</li>
            <li>RESTful and GraphQL API integrations</li>
            <li>Authentication and authorization with JWT and OAuth</li>
            <li>Database management with PostgreSQL, MySQL, and MongoDB</li>
          </ul>
        </article>

        <article className="bg-secondary rounded-xl col-span-1 min-h-[237px] p-3">
          <h1 className="text-[16px] font-semibold mb-2 text-center">
            Full Stack Development
          </h1>
          <ul className="text-[12px] font-normal list-disc list-inside">
            <li>Complete web applications using React, Next.js, Angular, Node.js, Express.js, NestJS, and Laravel</li>
            <li>Scalable and secure architectures</li>
            <li>Business process automation</li>
            <li>Client-server communication and real-time data processing</li>
          </ul>
        </article>

        <article className="bg-secondary rounded-xl col-span-1 min-h-[237px] p-3">
          <h1 className="text-[16px] font-semibold mb-2 text-center">
            Custom Solutions
          </h1>
          <ul className="text-[12px] font-normal list-disc list-inside">
            <li>Ecommerce platforms</li>
            <li>Business management systems</li>
            <li>Third-party API integrations</li>
            <li>Performance optimization and legacy code refactoring</li>
          </ul>
        </article>
      </section>
    </Wrapper >
  );
}
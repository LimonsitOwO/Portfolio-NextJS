import { ReactNode } from "react";
import Link from "next/link";

export default function MenuDesktop() {
  return (
    <nav className="hidden lg:flex justify-center items-center mx-auto gap-2 leading-4">
      <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[150px] rounded-full py-2.5 text-center">
        About me
      </Link>
      <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[150px] rounded-full py-2.5 text-center">
        Services
      </Link>
      <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[150px] rounded-full py-2.5 text-center">
        Experience
      </Link>
      <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[150px] rounded-full py-2.5 text-center">
        Knowledge
      </Link>
      <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[150px] rounded-full py-2.5 text-center">
        Contact me
      </Link>
    </nav>
  );
}
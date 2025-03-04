import { ReactNode } from "react";

import Link from "next/link";

export default function MenuMobile() {
  return (
    <>
      <h2 className="text-2xl font-black text-text flex lg:hidden mb-5">
        Luis Carlos B.
      </h2>
      <nav className="flex flex-col lg:hidden text-lg justify-center items-start mx-auto gap-2 leading-4">
        <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[240px] rounded-full py-4 text-center">
          About me
        </Link>
        <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[240px] rounded-full py-4 text-center">
          Services
        </Link>
        <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[240px] rounded-full py-4 text-center">
          Experience
        </Link>
        <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[240px] rounded-full py-4 text-center">
          Knowledge
        </Link>
        <Link href={`#`} className="bg-secondary active:bg-hover text-text w-[240px] rounded-full py-4 text-center">
          Contact me
        </Link>
      </nav>
    </>
  );
}
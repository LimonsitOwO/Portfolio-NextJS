import Link from "next/link";

export default function MenuDesktop() {
  return (
    <nav className="hidden lg:flex justify-center items-center mx-auto gap-2 leading-4">
      <Link href="#aboutMe" scroll={true} className="bg-secondary hover:drop-shadow-[0_0_6px_#F50057] transition-all duration-300 text-text w-[150px] rounded-full py-2.5 text-center">
        About me
      </Link>
      <Link href="#services" scroll={true} className="bg-secondary hover:drop-shadow-[0_0_6px_#F50057] transition-all duration-300 text-text w-[150px] rounded-full py-2.5 text-center">
        Services
      </Link>
      <Link href="#experience" scroll={true} className="bg-secondary hover:drop-shadow-[0_0_6px_#F50057] transition-all duration-300 text-text w-[150px] rounded-full py-2.5 text-center">
        Experience
      </Link>
      <Link href="#knowledge" scroll={true} className="bg-secondary hover:drop-shadow-[0_0_6px_#F50057] transition-all duration-300 text-text w-[150px] rounded-full py-2.5 text-center">
        Knowledge
      </Link>
      <Link href="#contactMe" scroll={true} className="bg-secondary hover:drop-shadow-[0_0_6px_#F50057] transition-all duration-300 text-text w-[150px] rounded-full py-2.5 text-center">
        Contact me
      </Link>
    </nav>
  );
}
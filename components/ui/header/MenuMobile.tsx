import { ReactNode } from "react";
import Link from "next/link";

interface MenuMobileProps {
  closeMenu: () => void;
}

export default function MenuMobile({ closeMenu }: MenuMobileProps) {
  return (
    <nav className="flex flex-col text-lg justify-center items-center mx-auto gap-2 leading-4 bg-secondary p-5 rounded-lg absolute left-0 top-0 w-screen h-screen">
      <h2 className="text-2xl font-black text-text flex lg:hidden mb-5">
        Luis Carlos B.
      </h2>
      {[
        { href: "#aboutMe", label: "About me" },
        { href: "#services", label: "Services" },
        { href: "#experience", label: "Experience" },
        { href: "#knowledge", label: "Knowledge" },
        { href: "#contactMe", label: "Contact me" }
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          scroll={true}
          onClick={closeMenu}
          className="bg-primary hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300 text-text w-[240px] rounded-full py-4 text-center"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

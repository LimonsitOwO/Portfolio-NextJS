'use client';
import { useState } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-secondary z-50 flex justify-center items-center transition-opacity duration-300">
          <MenuMobile closeMenu={closeMenu} />
          <Button onClick={toggleMenu} className="absolute top-2 right-2 text-text text-3xl font-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_429_11081)">
                <circle cx="12" cy="11.9999" r="9" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 10.0001L10 14.0001" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.0001L14 14.0001" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </Button>
        </div>
      )}
      <header className="w-full">
        <Wrapper>
          <div className="flex lg:flex-row flex-col items-center py-10 lg:py-5 relative">
            <h2 className="text-2xl font-black text-text xl:absolute xl:flex hidden">
              Luis C.
            </h2>
            <MenuDesktop />
            <Button onClick={toggleMenu} className="lg:hidden text-text text-2xl font-black transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                className="fill-black dark:fill-white transition-all duration-300"
              >
                <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" />
                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" />
                <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" />
              </svg>
            </Button>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
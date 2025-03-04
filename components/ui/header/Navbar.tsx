import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Navbar() {
  return (
    <>
      <header className="w-full">
        <Wrapper>
          <div className="flex lg:flex-row flex-col items-center py-10 lg:py-5 relative">
            <h2 className="text-2xl font-black text-text xl:absolute xl:flex hidden">
              Luis C.
            </h2> 
            <MenuDesktop />
            <MenuMobile />
          </div>
        </Wrapper>
      </header>
    </>
  );
}
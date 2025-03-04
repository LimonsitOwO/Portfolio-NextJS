import { ReactNode } from "react";
import { Button, Wrapper } from "@/components/ui/index";

export default function Navbar() {
  return (
    <>
      <header className="w-full">
        <Wrapper>
          <div className="flex items-center py-4 relative">
            <span className="text-2xl font-black text-text lg:absolute">
              Luis Carlos B.
            </span>
            <nav className="hidden lg:flex justify-center items-center mx-auto gap-2">
              <Button variant="Secondary" className="w-[150px] rounded-full py-2.5 text-center">
                About me
              </Button>
              <Button variant="Secondary" className="w-[150px] rounded-full py-2.5 text-center">
                Services
              </Button>
              <Button variant="Secondary" className="w-[150px] rounded-full py-2.5 text-center">
                Experience
              </Button>
              <Button variant="Secondary" className="w-[150px] rounded-full py-2.5 text-center">
                Knowledge
              </Button>
              <Button variant="Secondary" className="w-[150px] rounded-full py-2.5 text-center">
                Contact me
              </Button>
            </nav>
            <div className="lg:hidden flex justify-end w-full">
              <button className="text-text text-2xl">
                ☰
              </button>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
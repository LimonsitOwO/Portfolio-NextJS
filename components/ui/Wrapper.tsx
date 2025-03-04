import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  isContent?: boolean;
}

export default function Wrapper({ children, isContent }: WrapperProps) {
  const className = isContent
    ? "max-w-[1440px] mx-auto px-[200px] lg:px-[120px] md:px-[80px] sm:px-[40px]"
    : "max-w-[1440px] mx-auto px-[120px] md:px-[80px] sm:px-[40px]";

  return <div className={className}>{children}</div>;
}
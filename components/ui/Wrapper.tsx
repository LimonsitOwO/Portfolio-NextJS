import { ReactNode } from "react";

interface WrapperProps {
  children?: ReactNode;
  isContent?: boolean;
  className?: string;
}

export default function Wrapper({ children, isContent, className }: WrapperProps) {
  const wrapper = isContent
    ? "max-w-[1440px] mx-auto lg:px-[200px] md:px-[120px] sm:px-[80px] px-[40px]"
    : "max-w-[1440px] mx-auto lg:px-[120px] md:px-[80px] sm:px-[40px] px-[20px]";

  return <div className={`${wrapper} ${className}`}>{children}</div>;
}
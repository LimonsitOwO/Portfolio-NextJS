'use client';
import { ReactNode } from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'Primary' | 'Secondary' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export default function ButtonText({
  children,
  className,
  variant,
  type,
  onClick = () => { },
  disabled = false
}: ButtonProps) {

  let variantClass = '';
  switch (variant) {
    case 'Primary':
      variantClass = 'bg-primary hover:drop-shadow-[0_0_8px_#F50057] text-text cursor-pointer';
      break;
    case 'Secondary':
      variantClass = 'bg-secondary hover:drop-shadow-[0_0_8px_#F50057] text-text cursor-pointer';
      break;
    default:
      variantClass = 'bg-tecnofi-primary hover:drop-shadow-[0_0_8px_#F50057] text-text cursor-pointer';
  }

  return (
    <div className='flex-shrink-0'>
      <button className={`${variantClass} ${className}`} onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
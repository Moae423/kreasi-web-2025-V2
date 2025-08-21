import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
interface CtaButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}
const CtaButton = ({ children, link }: CtaButtonProps) => {
  return (
    <Link href={link}>
      <Button className="flex items-center gap-2 font-bold text-[16px] sm:text-[18px] p-4 sm:p-6 cursor-pointer bg-[#152E8F] hover:text-black hover:bg-[#FCBB2D] hover:scale-105 active:scale-100 transition duration-300 ease-in-out">
        {children}
      </Button>
    </Link>
  );
};

export default CtaButton;

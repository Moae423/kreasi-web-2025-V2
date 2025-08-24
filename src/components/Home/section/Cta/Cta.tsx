"use client";

import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";

import gambar from "@/assets/images/billdoard (2).jpg";
import HireUs from "@/components/CtaButton";

const CTA = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={gambar}
        alt="Background CTA"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Overlay content */}
      <div className="relative flex flex-col gap-5 items-center z-10 max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Growth Your Business
        </h1>
        <p className="text-white text-lg md:text-xl">
          Bersama kami naikan brand awareness anda
        </p>
        <HireUs link={"/contact-us"}>
          <BsBriefcaseFill />
          Hire Us
        </HireUs>
      </div>
    </div>
  );
};

export default CTA;

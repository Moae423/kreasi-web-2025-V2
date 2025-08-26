import Image from "next/image";
import React from "react";
import gambar from "@/assets/images/Our Works/Our-Works (3).jpg";
import CtaButton from "@/components/CtaButton";
const Hero = () => {
  return (
    <div className="relative w-full h-[60dvh] md:min-h-screen ] flex items-end justify-start overflow-hidden">
      <Image
        src={gambar}
        alt="About Us"
        className="object-cover w-full h-full saturate-100"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-[101px] text-white font-bold text-center">
          Apa Sih Sebenarnya Kreasi Advertising?
        </h1>
        <CtaButton>See More</CtaButton>
      </div>
    </div>
  );
};

export default Hero;

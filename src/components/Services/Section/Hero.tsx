import Image from "next/image";
import React from "react";
import backgroundImage from "@/assets/images/billdoard (2).jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[60dvh] md:h-[80dvh] flex items-end justify-start  overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt="Background CTA"
        fill
        priority
        className="object-cover object-center brightness-50 "
      />

      {/* Overlay content */}
      <div className="relative flex flex-col gap-5 items-start  z-10 max-w-5xl p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FEEABE] drop-shadow-lg">
          Apa Saja Layanan Kami?
        </h1>
        <p className="text-white text-start text-lg md:text-xl">
          Mulai dari pemasangan baliho yang mencolok hingga neon box yang
          memikat perhatian, kami hadir untuk membantu brand Anda tampil
          menonjol di ruang publik.
        </p>
      </div>
    </div>
  );
};

export default Hero;

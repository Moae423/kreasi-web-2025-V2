import CtaButton from "@/components/CtaButton";
import Image from "next/image";
import React from "react";
import billboard from "@/assets/images/billdoard (1).jpg";

const CtaServices = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[80dvh] bg-[#0F2166] ">
      {/* Text Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#fefefe] leading-snug">
          Siap Buat Bisnismu Lebih Terlihat?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#b4b4b4]">
          Kami bantu wujudkan tampilan visual yang mencuri perhatian dari
          baliho, neon box, street sign hingga layanan cetak profesional.
        </p>
        <div className="mt-4">
          <CtaButton>Get In Touch</CtaButton>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-full flex">
        <Image
          src={billboard}
          alt="billboard"
          className="object-cover w-full h-full rounded-none"
        />
      </div>
    </div>
  );
};

export default CtaServices;

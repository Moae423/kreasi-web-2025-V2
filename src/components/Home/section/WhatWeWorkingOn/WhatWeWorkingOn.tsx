import React from "react";
import { CarouselDemo } from "./Caraousel";

const WhatWeWorking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-[#0F2166] py-10 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[57px] font-bold text-white">
        What Are We Working On
      </h1>
      <CarouselDemo />
      <p className="text-[#B4B4B4] max-w-7xl text-center p-6 md:p-0">
        Temukan pilihan laptop dan komputer terbaik yang paling banyak dicari
        pelanggan kami. Performa cepat, desain elegan, dan harga bersahabat –
        semua tersedia untuk menunjang aktivitas harian maupun kebutuhan
        profesionalmu.
      </p>
    </div>
  );
};

export default WhatWeWorking;

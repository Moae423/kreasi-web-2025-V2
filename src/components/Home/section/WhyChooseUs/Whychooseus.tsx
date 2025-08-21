import React from "react";
import Card from "./Card";
import Image from "next/image";
import { logoClient } from "@/lib/data";

const Whychooseus = () => {
  return (
    <div className="p-0 md:p-6 lg:p-10 min-h-screen bg-[#FFF8EA]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[60vh] py-3">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-[#333333]">
            Why Choose Us
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-[76px] font-bold text-[#152E8F] max-w-lg">
            Desain yang Menghasilkan
          </h2>
        </div>
        <Card />
      </div>
      <div className="p-3">
        <p
          className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 
               text-gray-600 leading-relaxed text-left"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          quas, velit dicta architecto alias inventore quaerat ipsum, eos
          molestiae vitae nesciunt nemo?
        </p>

        <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />

        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 py-4 sm:py-6">
          <h3 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-center sm:text-left">
            Trusted By
          </h3>

          {/* Tablet & Desktop: Grid or flex wrap */}
          <div className="">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12 py-4 md:py-6  lg:py-8 overflow-hidden">
              {logoClient.map((item, index) => (
                <Image
                  src={item.path}
                  key={index}
                  alt={item.alt}
                  className="w-20
                       object-contain transition-transform duration-200 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;

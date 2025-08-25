import Image from "next/image";
import React from "react";
import { OurWorks } from "@/lib/data";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-0 md:p-10 relative">
      {OurWorks.map((item, index) => (
        <div
          key={index}
          className="w-[25rem] sm:w-[25rem] md:w-[28rem] lg:w-[30rem] h-[35rem] bg-black rounded-lg relative 
  transition-all duration-300 ease-in-out hover:scale-105 hover:z-20"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="object-cover h-full w-full rounded-lg brightness-50"
          />
          <div className="flex flex-col justify-end absolute inset-0 z-10 p-6">
            <h1 className="text-[28px] md:text-[32px] font-bold text-white ">
              {item.title}
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-300">
              {item.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

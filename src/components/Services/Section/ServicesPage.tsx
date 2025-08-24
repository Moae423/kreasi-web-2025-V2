import CtaButton from "@/components/CtaButton";
import { cardServices } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";

const ServicesPage = () => {
  return (
    <div className="flex flex-col gap-12 items-center min-h-screen bg-[#0F2166] px-4 sm:px-8 lg:px-16 py-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-[57px] font-bold text-white text-center">
        What We Provide To You
      </h1>

      {/* Services Cards */}
      {cardServices.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-6xl ${
            item.position === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="flex flex-col max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl text-center md:text-left lg:text-[43px] font-bold text-white mb-3">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-[#B0B0B0]  leading-relaxed">
              {item.Desc}
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-[40rem]">
            <Image
              src={item.image}
              alt={item.title}
              width={640}
              height={360}
              className="w-full h-auto max-h-[22rem] object-cover rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>
      ))}

      {/* CTA */}
      <CtaButton>
        <MdEmail className="text-xl sm:text-2xl lg:text-3xl" />
        <span className="ml-2 text-sm sm:text-base lg:text-lg">Contact Us</span>
      </CtaButton>
    </div>
  );
};

export default ServicesPage;

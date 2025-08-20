import { cardChooseUs } from "@/lib/data";
import { Satoshi } from "@/lib/font";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Card = () => {
  return (
    <div className={`${Satoshi.className}`}>
      {cardChooseUs.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[40rem] xl:max-w-[45rem] 
                 h-auto min-h-[12rem] lg:min-h-[10rem] 
                 bg-[#0F2166] rounded-lg my-3 mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4 sm:p-6 gap-3 sm:gap-4">
            <FaCheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#FEEABE] flex-shrink-0" />
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#FCBB2D] mb-1 sm:mb-2">
                {item.title}
              </h2>
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#FFFFFF] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

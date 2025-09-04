import React from "react";
import Cards from "../Cards";

const OurWorks = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center  bg-[#FFF8EA] py-20">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-[57px] text-center  font-bold text-[#152E8F]">
          Our Works
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default OurWorks;

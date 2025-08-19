import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Billboard from "@/assets/images/Billboard_Homepage.jpg";
import { Satoshi } from "@/lib/font";
import { BsBriefcaseFill } from "react-icons/bs";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div
        className={`flex flex-col lg:flex-row md:justify-start justify-center items-center min-h-screen bg-[#0F2166] text-white gap-3 px-6 md:px-0 ${Satoshi.className}`}
      >
        {/* Gambar */}
        <Image
          src={Billboard}
          loading="eager"
          alt="Billboard"
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-screen object-cover rounded-xl lg:rounded-none"
        />

        {/* Teks */}
        <div className="flex flex-col max-w-3xl gap-3 text-center  lg:text-left my-3 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[76px] font-bold">
            Beriklan Bersama Kreasi Advertising
          </h1>
          <p className="text-base sm:text-lg md:text-xl  lg:text-[24px] text-[#B4B4B4]">
            Tempat periklanan terpercaya di Bukittinggi untuk bisnis Anda. Kami
            menyediakan layanan iklan billboard, spanduk, dan media promosi
            kreatif yang efektif menjangkau lebih banyak pelanggan.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/contact-us">
              <Button className="flex items-center gap-2 text-[16px] sm:text-[18px] p-4 sm:p-6 cursor-pointer bg-[#152E8F] hover:text-black hover:bg-[#FCBB2D] hover:scale-105 active:scale-100 transition duration-300 ease-in-out">
                <BsBriefcaseFill className="w-5 h-5" />
                Hire Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

"use client";
import React from "react";
import Card from "./Card";
import Image from "next/image";
import { logoClient } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Whychooseus = () => {
  const logoTrackRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!logoTrackRef.current) return;
    gsap.fromTo(
      Array.from(sectionRef.current?.children || []), // convert ke array
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%", // baru jalan pas muncul di layar
          toggleActions: "play none none reset", // play sekali doang
        },
      }
    );

    gsap.to(logoTrackRef.current, {
      x: "-50%", // geser separuh karena kita duplicate list
      duration: 10, // makin kecil makin cepat
      ease: "linear",
      repeat: -1, // infinite loop
    });
  }, []);
  return (
    <div className="p-0 md:p-6 lg:p-8 min-h-screen overflow-hidden ">
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[60vh] py-3"
      >
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
          Kepercayaan dari brand ternama adalah bukti nyata kualitas layanan
          kami. Bersama klien-klien besar, kami terus menghadirkan desain yang
          berdampak dan berjangka panjang.
        </p>

        <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />

        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 py-4 sm:py-6">
          <h3 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-center sm:text-left">
            Trusted By
          </h3>

          {/* Tablet & Desktop: Grid or flex wrap */}
          <div className="relative w-full overflow-hidden py-6">
            {/* Gradient kiri */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FFF8EA] to-transparent z-10" />
            {/* Gradient kanan */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FFF8EA] to-transparent z-10" />

            {/* Track logo */}
            <div ref={logoTrackRef} className="flex items-center gap-12">
              {logoClient.map((item, index) => (
                <Image
                  key={index}
                  src={item.path}
                  alt={item.alt}
                  className="w-20 object-contain"
                />
              ))}
              {/* Duplicate biar looping mulus */}
              {logoClient.map((item, index) => (
                <Image
                  key={`dup-${index}`}
                  src={item.path}
                  alt={item.alt}
                  className="w-20 object-contain"
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

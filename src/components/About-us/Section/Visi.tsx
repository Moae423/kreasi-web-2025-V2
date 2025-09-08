"use client";
import React from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdVisibility } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Visi = () => {
  const VisiRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animasi child, bukan parent
      gsap.fromTo(
        Array.from(VisiRef.current?.children || []), // convert ke array
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          stagger: 0.15,
          scrollTrigger: {
            trigger: VisiRef.current,
            start: "top 100%", // baru jalan pas muncul di layar
            toggleActions: "play none none reset",
          },
        }
      );
    }, VisiRef);

    return () => ctx.revert(); // cleanup GSAP
  }, []);
  const dataContent = [
    {
      id: "mission",
      icon: VscVscodeInsiders,
      title: "Visioner and Creativity",
      desc: "Kami hadir untuk menghidupkan ide melalui media luar ruang dan solusi kreatif. Misi kami adalah membantu brand tampil mencolok di tengah keramaian, menyampaikan pesan dengan presisi, dan menciptakan dampak nyata di setiap titik sentuh iklan.",
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: MdVisibility,
      desc: "Kami percaya bahwa setiap merek memiliki cerita yang layak untuk didengar. Visi kami adalah menjadi jembatan antara pesan yang bermakna dan audiens yang tepat—memperkuat komunikasi visual yang tidak hanya terlihat, tetapi juga dirasakan.",
    },
  ];

  return (
    <div
      ref={VisiRef}
      className="flex flex-col items-center justify-center min-h-screen md:h-[80dvh] bg-[#0F2166] p-6 md:p-10"
    >
      <h1 className="text-[#ffffff] text-4xl md:text-5xl lg:text-[57px] font-bold text-center py-8">
        Kreasi Vision & Approach
      </h1>

      <div className="flex flex-col gap-12 w-full max-w-6xl my-3">
        {dataContent.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-[#132A82] p-3 md:p-4 lg:p-6 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-12 h-12 text-[#FDC957]" />
                <h1 className="text-[43px] font-bold text-[#FDC957]">
                  {item.title}
                </h1>
              </div>
              <p className="text-white  text-base md:text-[18px] max-w-5xl ">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-gray-400 text-center max-w-5xl my-5">
        Dengan menggabungkan visi kreatif dan misi yang berorientasi pada hasil,
        Kreasi Advertising menjadi mitra strategis bagi bisnis yang ingin
        berkembang pesat. Kami percaya bahwa iklan bukan hanya soal tampil,
        tetapi juga soal bagaimana pesan brand Anda dapat membangun hubungan
        emosional dengan audiens dan menciptakan loyalitas jangka panjang.
      </p>
    </div>
  );
};

export default Visi;

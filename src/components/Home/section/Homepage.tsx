"use client";
import Image from "next/image";
import Billboard from "@/assets/images/Billboard_Homepage.jpg";
import { Satoshi } from "@/lib/font";
import { Metadata } from "next";
import HireUs from "@/components/CtaButton";
import { BsBriefcaseFill } from "react-icons/bs";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const metadata: Metadata = {
  title:
    "Kreasi Advertising - Jasa Iklan Billboard & Media Promosi Bukittinggi",
  description:
    "Kreasi Advertising adalah penyedia jasa periklanan terpercaya di Bukittinggi. Kami melayani iklan billboard, spanduk, dan media promosi kreatif untuk menjangkau lebih banyak pelanggan.",
  keywords: [
    "iklan billboard Bukittinggi",
    "jasa advertising",
    "media promosi",
    "spanduk Bukittinggi",
    "Kreasi Advertising",
  ],
  authors: [{ name: "Kreasi Advertising" }],
  openGraph: {
    title: "Kreasi Advertising - Solusi Iklan Billboard & Media Promosi",
    description:
      "Tingkatkan exposure bisnis Anda dengan jasa iklan billboard, spanduk, dan media promosi dari Kreasi Advertising di Bukittinggi.",
    url: "https://www.kreasiadvertising.com", // ganti sesuai domain lu
    siteName: "Kreasi Advertising",
    images: [
      {
        url: "/og-image.jpg", // taruh gambar og di /public
        width: 1200,
        height: 630,
        alt: "Kreasi Advertising Billboard",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kreasi_ads", // ganti kalau punya Twitter
    creator: "@kreasi_ads",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.kreasiadvertising.com",
  },
};
const Homepage = () => {
  const titleRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power4.inOut", delay: 0.2 }
    );
  });
  return (
    <div className="min-h-screen bg-black">
      <div
        className={`flex flex-col lg:flex-row md:justify-start justify-center items-center min-h-screen bg-[#0F2166] text-white gap-3 md:gap-5 lg:gap-8 px-6 md:px-0 ${Satoshi.className}`}
      >
        {/* Gambar */}
        <Image
          src={Billboard}
          loading="eager"
          alt="Billboard"
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-screen object-cover rounded-xl lg:rounded-none"
        />

        {/* Teks */}
        <div
          ref={titleRef}
          className="flex flex-col max-w-3xl gap-3 text-left my-3 lg:mt-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[76px] font-bold">
            Beriklan Bersama Kreasi Advertising
          </h1>
          <p className="text-base sm:text-lg md:text-xl  lg:text-[24px] text-[#B4B4B4]">
            Tempat periklanan terpercaya di Bukittinggi untuk bisnis Anda. Kami
            menyediakan layanan iklan billboard, spanduk, dan media promosi
            kreatif yang efektif menjangkau lebih banyak pelanggan.
          </p>
          <div className="flex justify-center lg:justify-start">
            <HireUs link="/contact-us">
              <BsBriefcaseFill />
              Hire Us
            </HireUs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

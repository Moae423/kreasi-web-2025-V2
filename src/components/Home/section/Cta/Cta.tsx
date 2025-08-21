"use client";

import Image from "next/image";
import Link from "next/link";
import gambar from "@/assets/images/billdoard (2).jpg";

const CTA = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={gambar}
        alt="Background CTA"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Growth Your Business
        </h1>
        <p className="mt-4 text-white/90 text-lg md:text-xl">
          Bersama kami naikan brand awareness anda
        </p>
        <Link href="/contact-us">
          <button className="mt-6 px-6 py-3 bg-[#152E8F] text-white font-semibold rounded-lg shadow-lg hover:bg-[#FCBB2D] hover:text-black transition-transform transform hover:scale-105">
            Hire Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;

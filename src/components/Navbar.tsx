"use client";
import Image from "next/image";
import Link from "next/link";
import LogoKreasi from "@/assets/images/LOGO KREASI.png";
import { Satoshi } from "@/lib/font";
import MobileMenu from "./Navbar/MobileMenu";
import { navItem } from "@/lib/data";
import CtaButton from "./CtaButton";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Navbar = () => {
  const NavRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      NavRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.inOut", delay: 1 }
    );

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1) {
          // scroll ke bawah -> hide
          gsap.to(NavRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut",
          });
        } else {
          // scroll ke atas -> show
          gsap.to(NavRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.inOut",
          });
        }
      },
    });
  });

  return (
    <nav
      ref={NavRef}
      className={`fixed z-50 top-0 md:top-8 left-0 right-0 max-w-7xl mx-auto py-4 px-6 md:px-12 md:bg-black/25 backdrop-blur-2xl rounded-none md:rounded-xl text-white ${Satoshi.className} font-satoshi`}
    >
      <div className="flex items-center justify-between text-[24px]">
        <Image src={LogoKreasi} alt="Logo Kreasi" className="w-24" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-bold hover:text-[#FCBB2D] hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              <li>{item.menu}</li>
            </Link>
          ))}
        </ul>
        <CtaButton
          className="hidden md:flex"
          link="https://linktr.ee/KreasiADV"
        >
          <MdEmail width={400} height={400} />
          Contact Us
        </CtaButton>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

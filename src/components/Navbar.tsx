import Image from "next/image";
import Link from "next/link";
import LogoKreasi from "@/assets/images/LOGO KREASI.png";
import { Button } from "./ui/button";
import { Satoshi } from "@/lib/font";
import { MdEmail } from "react-icons/md";
import MobileMenu from "./Navbar/MobileMenu";
import { navItem } from "@/lib/data";

const Navbar = () => {
  return (
    <nav
      className={`fixed z-50  top-0 md:top-8 left-0 right-0 max-w-7xl mx-auto py-4 px-6 md:px-12  md:bg-black/25 backdrop-blur-2xl rounded-none md:rounded-xl text-white ${Satoshi.className} font-satoshi`}
    >
      <div className="flex items-center justify-between text-[24px]">
        <Image src={LogoKreasi} alt="Logo Kreasi" className="w-24" />
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5">
          {navItem.map((item, index) => (
            <li
              className="font-bold hover:text-[#FCBB2D] hover:-translate-y-1 transition duration-300 ease-in-out"
              key={index}
            >
              <Link href={item.link}>{item.menu}</Link>
            </li>
          ))}
        </ul>
        {/* DESKTOP Contact Button */}
        <Link href={"/contact-us"} className="hidden md:block">
          <Button className=" text-[18px] p-6 cursor-pointer bg-[#152E8F] font-bold hover:text-black hover:bg-[#FCBB2D] hover:scale-105 active:scale-100 transition duration-300 ease-in-out">
            <MdEmail width={400} height={400} />
            Contact Us
          </Button>
        </Link>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import LogoKreasi from "@/assets/images/LOGO KREASI.png";
import { Button } from "./ui/button";
import { Satoshi } from "@/lib/font";

const navItem = [
  {
    menu: "Home",
    link: "/",
  },
  {
    menu: "Services",
    link: "/services",
  },
  {
    menu: "About Us",
    link: "/about-us",
  },
];
const Navbar = () => {
  return (
    <nav
      className={`fixed top-8 left-0 right-0 max-w-7xl mx-auto py-6 px-12 bg-white/25 backdrop-blur-2xl rounded-xl text-white ${Satoshi.className} font-satoshi`}
    >
      <div className="flex items-center justify-between text-[24px]">
        <Image src={LogoKreasi} alt="Logo Kreasi" className="w-24" />
        <ul className="flex items-center gap-5">
          {navItem.map((item, index) => (
            <li className="font-bold " key={index}>
              <Link href={item.link}>{item.menu}</Link>
            </li>
          ))}
        </ul>
        <Link href={"/contact-us"}>
          <Button className="text-[24px] p-6 cursor-pointer bg-[#152E8F] hover:text-black hover:bg-[#FCBB2D] hover:scale-105 active:scale-100 transition duration-300 ease-in-out">
            Contact Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

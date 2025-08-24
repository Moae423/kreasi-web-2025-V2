import Image from "next/image";
import React from "react";
import LogoKreasi from "@/assets/images/LOGO KREASI.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FooterItem } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { icon: FaWhatsapp, href: "#", hoverColor: "hover:text-green-500" },
    { icon: FaInstagram, href: "#", hoverColor: "hover:text-pink-500" },
    { icon: FaFacebook, href: "#", hoverColor: "hover:text-blue-500" },
    { icon: FaYoutube, href: "#", hoverColor: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#09133C] to-[#0C194F] p-3 md:p-8 lg:p-10 h-full  lg:h-[20rem]">
      <div className="flex flex-col lg:flex-row items-start md:items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-8 gap-5 h-full">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-md">
          <Image
            src={LogoKreasi}
            alt="Logo Kreasi"
            className="w-24 h-auto"
            priority
          />
          <p className="text-sm text-gray-300 text-center md:text-start ">
            Kreasi Advertising is a registered trademark. All Rights Reserved
            2025.
          </p>

          {/* Social Links */}
          <div className="flex gap-4  text-xl text-white">
            {socialLinks.map(({ icon: Icon, href, hoverColor }, index) => (
              <a
                key={index}
                href={href}
                className={`transition-colors duration-200 ${hoverColor}`}
                aria-label={`Visit our ${Icon.name.replace("Fa", "")} page`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        {/* Menu */}
        <div className="flex flex-row  items-start justify-center gap-3">
          {FooterItem.map((item, i) => (
            <div key={i} className="flex flex-col items-start p-3 ">
              <div className="text-lg font-bold text-white">{item.title}</div>
              <ul className="text-gray-400">
                {item.subItems.map((subItems, i) => (
                  <li key={i}>
                    <Link href={subItems.link} className="hover:text-white">
                      {subItems.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

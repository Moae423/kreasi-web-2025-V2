import Image from "next/image";
import React from "react";
import LogoKreasi from "@/assets/images/LOGO KREASI.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaWhatsapp, href: "#", hoverColor: "hover:text-green-500" },
    { icon: FaInstagram, href: "#", hoverColor: "hover:text-pink-500" },
    { icon: FaFacebook, href: "#", hoverColor: "hover:text-blue-500" },
    { icon: FaYoutube, href: "#", hoverColor: "hover:text-red-500" },
  ];

  const menuSections = [
    {
      title: "Services",
      items: ["Advertising", "Digital Marketing", "Brand Strategy"],
    },
    {
      title: "Company",
      items: ["About Us", "Our Team", "Careers"],
    },
    {
      title: "Support",
      items: ["Contact", "Help Center", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 p-20">
      <div className="flex flex-col lg:flex-row items-start justify-between bg-black/20 backdrop-blur-sm rounded-lg p-8 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col gap-4 max-w-md">
          <Image
            src={LogoKreasi}
            alt="Logo Kreasi"
            className="w-24 h-auto"
            priority
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Kreasi Advertising is a registered trademark. All Rights Reserved
            2025.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-xl text-white">
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

        {/* Menu Sections */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {menuSections.map((section, index) => (
            <div key={index} className="text-white">
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
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

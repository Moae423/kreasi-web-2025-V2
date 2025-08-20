"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi"; // icon burger buat trigger
import { navItem } from "@/lib/data";
import { Satoshi } from "@/lib/font";

const MobileMenu = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <HiMenuAlt3 />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className={`text-3xl font-bold ${Satoshi.className}`}>
              Kreasi Advertising
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-6">
            <ul>
              {navItem.map((item, index) => (
                <DrawerClose key={index} asChild>
                  <Link href={item.link} className="w-full p-4 ">
                    <li
                      className={`${Satoshi.className} font-bold p-3  border-2 rounded-lg border-[#152E8F] transition duration-300 ease-in-out`}
                    >
                      {item.menu}
                    </li>
                  </Link>
                </DrawerClose>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Link href={"/contact-us"} className="">
                <Button
                  className={`${Satoshi.className} text-[18px] p-6 w-full cursor-pointer bg-[#152E8F] font-bold hover:text-black hover:bg-[#FCBB2D] hover:scale-105 active:scale-100 transition duration-300 ease-in-out`}
                >
                  <MdEmail width={400} height={400} />
                  Contact Us
                </Button>
              </Link>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;

"use client";

import { AnimatePageIn } from "@/utils/Animation";
import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AnimatePageIn();
  }, []);
  return (
    <div>
      <div
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
        id="banner-1"
      ></div>
      <div
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
        id="banner-2"
      ></div>
      <div
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
        id="banner-3"
      ></div>
      <div
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
        id="banner-4"
      ></div>
      {children}
    </div>
  );
};

export default Template;

"use client";

import Carousel from "@/components/ui/carousel";
import gambar1 from "@/assets/images/Billboard_Homepage.jpg";
import gambar2 from "@/assets/images/billdoard (1).jpg";
import gambar3 from "@/assets/images/billdoard (2).jpg";
export const CarouselDemo = () => {
  const slideData = [
    {
      title: "Sampoerna Billboard",
      button: "Explore Component",
      desc: "Jl. Batang Masang No.252, Birugo, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi",
      src: gambar1,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      desc: "lorem3",
      src: gambar2,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      desc: "lorem3",
      src: gambar3,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

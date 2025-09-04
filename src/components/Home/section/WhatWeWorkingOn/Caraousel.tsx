"use client";

import Carousel from "@/components/ui/carousel";
import gambar1 from "@/assets/images/Billboard_Homepage.jpg";
import gambar2 from "@/assets/images/billdoard (1).jpg";
import gambar3 from "@/assets/images/billdoard (2).jpg";
export const CarouselDemo = () => {
  const slideData = [
    {
      title: "Billboard Sampoerna",
      button: "Jelajahi Lokasi",
      desc: "Jl. Batang Masang No.252, Birugo, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi, Sumatera Barat",
      src: gambar1,
    },
    {
      title: "Spanduk Puskesmas",
      button: "Jelajahi Lokasi",
      desc: "Jl. Sudirman No.45, Kuningan, Jakarta Selatan, DKI Jakarta",
      src: gambar2,
    },
    {
      title: "NeonBox Xiaomi",
      button: "Jelajahi Lokasi",
      desc: "Jl. Asia Afrika No.112, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat",
      src: gambar3,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

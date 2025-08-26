import Image from "next/image";

import gambar from "@/assets/images/About/bao-bao.jpg";
import HireUs from "@/components/CtaButton";

const CTA = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={gambar}
        alt="Background CTA"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Overlay content */}
      <div className="relative flex flex-col gap-5 items-center z-10 max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Let&apos;s Get In Touch
        </h1>
        <p className="text-white text-lg md:text-xl">
          For Growth Your Business
        </p>
        <HireUs link={"/contact-us"}>Let&apos;s Start</HireUs>
      </div>
    </div>
  );
};

export default CTA;

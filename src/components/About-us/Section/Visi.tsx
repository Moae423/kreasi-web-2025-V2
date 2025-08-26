import React from "react";
import { FaLowVision } from "react-icons/fa";

const Visi = () => {
  const dataContent = [
    {
      id: "mission",
      title: "Our Mission",
      content: "Visioner and Creativity",
      desc: "Kami hadir untuk menghidupkan ide melalui media luar ruang dan solusi kreatif. Misi kami adalah membantu brand tampil mencolok di tengah keramaian, menyampaikan pesan dengan presisi, dan menciptakan dampak nyata di setiap titik sentuh iklan.",
      position: "right",
    },
    {
      id: "vision",
      title: "Our Vision",
      content: "Amplify What Matters",
      desc: "Kami percaya bahwa setiap merek memiliki cerita yang layak untuk didengar. Visi kami adalah menjadi jembatan antara pesan yang bermakna dan audiens yang tepat—memperkuat komunikasi visual yang tidak hanya terlihat, tetapi juga dirasakan.",
      position: "left",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen md:h-[80dvh] bg-[#FFF8EA] p-6 md:p-10">
      <h1 className="text-[#0F2166] text-4xl md:text-5xl lg:text-[57px] font-bold text-center py-8">
        Creative Vision & Approach
      </h1>

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {dataContent.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-6 md:gap-10 my-8 ${
              item.position === "left" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Icon + Title + Content */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <FaLowVision className="w-8 h-8 md:w-10 md:h-10 text-[#0F2166]" />
                <h2 className="text-2xl md:text-[32px] font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>
              <p className="text-3xl md:text-[43px] font-bold text-[#0F2166]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Visi;

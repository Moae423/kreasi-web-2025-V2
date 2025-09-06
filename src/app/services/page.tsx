import React from "react";
import Hero from "@/components/Services/Section/Hero";
import ServicesPage from "@/components/Services/Section/ServicesPage";
import OurWorks from "@/components/Services/Section/OurWorks";
import CtaServices from "@/components/Services/Section/CtaServices";

const page = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="services" className="min-h-screen bg-[#0F2166]">
        <ServicesPage />
      </section>
      <section id="ourworks">
        <OurWorks />
      </section>
      <section id="ctaServices">
        <CtaServices />
      </section>
    </main>
  );
};

export default page;

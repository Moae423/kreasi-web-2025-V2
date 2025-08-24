import React from "react";
import Hero from "@/components/Services/Section/Hero";
import ServicesPage from "@/components/Services/Section/ServicesPage";

const page = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <ServicesPage />
      </section>
    </main>
  );
};

export default page;

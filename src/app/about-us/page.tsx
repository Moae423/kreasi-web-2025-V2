import Hero from "@/components/About-us/Section/Hero";
import Stories from "@/components/About-us/Section/Stories";
import Visi from "@/components/About-us/Section/Visi";
import CTA from "@/components/Home/section/Cta/Cta";
const page = () => {
  return (
    <main>
      <section id="heroAbout">
        <Hero />
      </section>
      <section id="Story">
        <Stories />
      </section>
      <section id="visi">
        <Visi />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </main>
  );
};

export default page;

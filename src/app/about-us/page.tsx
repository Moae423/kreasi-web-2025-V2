import Hero from "@/components/About-us/Section/Hero";
import Stories from "@/components/About-us/Section/Stories";
import Visi from "@/components/About-us/Section/Visi";
import CtaAbout from "@/components/About-us/Section/CtaAbout";
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
        <CtaAbout />
      </section>
    </main>
  );
};

export default page;

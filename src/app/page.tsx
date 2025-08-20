import Homepage from "@/components/Home/section/Homepage";
import Whychooseus from "@/components/Home/section/WhyChooseUs/Whychooseus";

const page = () => {
  return (
    <>
      <section id="homepage">
        <Homepage />
      </section>
      <section id="whychooseus">
        <Whychooseus />
      </section>
    </>
  );
};

export default page;

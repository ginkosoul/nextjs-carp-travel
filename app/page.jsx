import AboutSection from "@components/AboutSection";
import CareerSection from "@components/CareerSection";
import ContactSection from "@components/ContactSection";
import Hero from "@components/Hero";
import ServiceSection from "@components/ServiceSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <CareerSection />
      <ContactSection />
    </>
  );
}

export default Home;

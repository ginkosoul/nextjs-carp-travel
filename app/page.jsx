import AboutSection from "@components/AboutSection";
import CareerSection from "@components/CareerSection";
import ContactSection from "@components/ContactSection";
import GallerySection from "@components/GallerySection";
import Hero from "@components/Hero";
import ServiceSection from "@components/ServiceSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <CareerSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}

export default Home;

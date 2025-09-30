import AboutUs from "@/Components/AboutUs";
import CtaSection from "@/Components/CtaSection";
import HeroSlider from "@/Components/HeroSlider";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <AboutUs></AboutUs>
      <Services></Services>
      <CtaSection></CtaSection>
    </>
  );
}

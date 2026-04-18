import HeroSection from "./components/HeroSection";
import BackgroundGradient from "@/components/BackgroundGradient";
import FeatureHighlights from "@/app/home/components/FeatureHighlights";

const HomePage = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0b] text-white selection:bg-orange-500/30">
      <BackgroundGradient />

      <HeroSection />
      <FeatureHighlights />
    </section>
  );
};

export default HomePage;

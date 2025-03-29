
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContentSections from "@/components/sections/ContentSections";
import CallToActionSection from "@/components/sections/CallToActionSection";
import PopularAreas from "@/components/PopularAreas";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-nordic-dark">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <PopularAreas />
        <FeaturesSection />
        <ContentSections />
        <CallToActionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

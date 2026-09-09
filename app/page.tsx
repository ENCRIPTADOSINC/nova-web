import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RiskSection from "@/components/RiskSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs />
      <div className="pt-4 sm:pt-8">
        <Navbar />
        <Hero />
        <RiskSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <CtaBanner />
        <Footer />
      </div>
    </div>
  );
}

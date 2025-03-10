
import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ToolsSection from "../components/ToolsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import DisclaimerSection from "../components/DisclaimerSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SmallDisclaimer from "../components/SmallDisclaimer";
import DisclaimerConsent from "../components/DisclaimerConsent";

const Index = () => {
  // Add scanline effect
  useEffect(() => {
    const scanline = document.createElement("div");
    scanline.className = "scanline animate-scanline";
    document.body.appendChild(scanline);

    return () => {
      document.body.removeChild(scanline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-hidden">
      <Header />
      <div className="pt-16"> {/* Added padding-top to create space for fixed header */}
        <SmallDisclaimer />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ToolsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FAQSection />
          <DisclaimerSection />
          <CTASection />
        </main>
        <Footer />
      </div>
      <DisclaimerConsent />
    </div>
  );
};

export default Index;

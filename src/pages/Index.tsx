import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { DashboardPreview } from "@/components/ui/dashboard-preview";
import { AIModelsSection } from "@/components/ui/ai-models-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <AIModelsSection />
      <Footer />
    </div>
  );
};

export default Index;

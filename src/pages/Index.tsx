import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { ResearchSection } from '@/components/ResearchSection';
import { MarketSection } from '@/components/MarketSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { VisionSection } from '@/components/VisionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <ResearchSection />
        <MarketSection />
        <RoadmapSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

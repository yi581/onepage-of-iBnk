import { Navbar } from './components/Navbar';
import { HeroMinimal } from './components/HeroMinimal';
import { FoundingStorySection } from './components/FoundingStorySection';
import { ProblemsMinimal } from './components/ProblemsMinimal';
import { SolutionMinimal } from './components/SolutionMinimal';
import { HowItWorksMinimal } from './components/HowItWorksMinimal';
import { WhyNowMinimal } from './components/WhyNowMinimal';
import { CTAMinimal } from './components/CTAMinimal';
import { FooterMinimal } from './components/FooterMinimal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroMinimal />
      <FoundingStorySection />
      <ProblemsMinimal />
      <SolutionMinimal />
      <HowItWorksMinimal />
      <WhyNowMinimal />
      <CTAMinimal />
      <FooterMinimal />
    </div>
  );
}
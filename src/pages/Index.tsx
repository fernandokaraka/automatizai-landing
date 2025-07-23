import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import AnimationObserver from '../components/AnimationObserver';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <ScrollProgressBar />
      
      {/* Animation Observer */}
      <AnimationObserver />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

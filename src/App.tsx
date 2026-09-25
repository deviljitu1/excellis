import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import MissionVisionSection from './components/MissionVisionSection';
import BackedBySection from './components/BackedBySection';
import CoreValuesSection from './components/CoreValuesSection';
import ServicesSection from './components/ServicesSection';
import UseCasesSection from './components/UseCasesSection';
import WealthPathwaysSection from './components/WealthPathwaysSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col bg-[#F9F2DC]">
      {/* First viewport - Navbar + Hero */}
      <div className="h-[100dvh] min-h-[600px] flex flex-col overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>

      {/* Remaining sections */}
      <InfoSection />
      <MissionVisionSection />
      <BackedBySection />
      <CoreValuesSection />
      <ServicesSection />
      <UseCasesSection />
      <WealthPathwaysSection />
      <CTASection />
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import MissionVisionSection from './components/MissionVisionSection';
import CoreValuesSection from './components/CoreValuesSection';
import ServicesSection from './components/ServicesSection';
import UseCasesSection from './components/UseCasesSection';
import WealthPathwaysSection from './components/WealthPathwaysSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import InfoModal from './components/InfoModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    content: string[];
  }>({
    isOpen: false,
    title: '',
    category: '',
    content: [],
  });

  useEffect(() => {
    const handleOpenContact = () => setContactModalOpen(true);
    const handleOpenInfo = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setInfoModalData({
          isOpen: true,
          title: customEvent.detail.title || '',
          category: customEvent.detail.category || '',
          content: customEvent.detail.content || [],
        });
      }
    };

    window.addEventListener('open-contact-modal', handleOpenContact);
    window.addEventListener('open-info-modal', handleOpenInfo);
    return () => {
      window.removeEventListener('open-contact-modal', handleOpenContact);
      window.removeEventListener('open-info-modal', handleOpenInfo);
    };
  }, []);

  return (
    <div className="site-shell flex flex-col bg-[#F9F2DC]">
      {/* First viewport - Navbar + Hero */}
      <div className="hero-frame">
        <Navbar />
        <HeroSection />
      </div>

      {/* Remaining sections */}
      <InfoSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ServicesSection />
      <UseCasesSection />
      <WealthPathwaysSection />
      <CTASection />
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <InfoModal
        isOpen={infoModalData.isOpen}
        title={infoModalData.title}
        category={infoModalData.category}
        content={infoModalData.content}
        onClose={() => setInfoModalData((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

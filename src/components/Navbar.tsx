import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', target: 'services' },
  { label: 'About', target: 'about' },
  { label: 'Values', target: 'values' },
  { label: 'Insights', target: 'pathways' },
  { label: 'Contact', target: 'contact' },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (target: string) => {
    setMobileMenuOpen(false);
    scrollTo(target);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        {/* Left - Logo */}
        <button
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center cursor-pointer bg-transparent border-none p-0"
        >
          <img src="/EXCELLIS.png" alt="Excellis" className="h-10 md:h-14 w-auto object-contain" />
        </button>

        {/* Center - Nav links (hidden below md) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right - CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer border-none"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black bg-transparent border-none cursor-pointer p-2 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl py-6 px-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleMobileNavClick(link.target)}
              className="text-lg text-gray-800 hover:text-black font-medium text-left bg-transparent border-none cursor-pointer p-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleMobileNavClick('contact')}
            className="bg-black text-white text-lg font-medium px-7 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer mt-4 border-none"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

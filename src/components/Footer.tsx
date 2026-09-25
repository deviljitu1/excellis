const FOOTER_LINKS = {
  Services: [
    'Stock Advisory',
    'Mutual Funds',
    'Insurance & Protection',
    'Global Markets',
    'Luxury Real Estate',
    'Portfolio Management',
    'Startup Investments',
  ],
  Company: [
    'About Us',
    'Our Mission',
    'Core Values',
    'Careers',
    'Newsroom',
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Disclosures',
    'Regulatory Info',
  ],
} as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-black px-6 pt-20 pb-8">
      <div className="max-w-[88rem] mx-auto">
        {/* Top row - logo + links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Brand column */}
          <div className="md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center mb-6 cursor-pointer bg-transparent border-none p-0"
            >
              <img src="/EXCELLIS.png" alt="Excellis" className="h-10 w-auto object-contain brightness-0 invert" />
            </button>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Strategic wealth management for a global future. We help you
              create, grow, protect, and transfer wealth across generations.
            </p>
            <button
              onClick={() => scrollTo('services')}
              className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Excellis Wealth Management. All rights
              reserved.
            </p>
            <p className="text-white/30 text-xs text-center md:text-right max-w-lg">
              This content is for informational purposes only and does not
              constitute financial advice. All investments carry risk. Past
              performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

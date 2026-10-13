import BrandLogo from './BrandLogo';

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
  const handleLinkClick = (category: string, link: string) => {
    if (category === 'Services') {
      scrollTo('services');
      return;
    }
    if (category === 'Company') {
      if (link === 'About Us') {
        scrollTo('about');
        return;
      }
      if (link === 'Our Mission') {
        scrollTo('mission');
        return;
      }
      if (link === 'Core Values') {
        scrollTo('values');
        return;
      }
      if (link === 'Careers') {
        window.dispatchEvent(
          new CustomEvent('open-info-modal', {
            detail: {
              title: 'Careers at Excellion Private Wealth',
              category: 'Talent & Opportunities',
              content: [
                'We welcome inquiries from exceptional wealth strategists, research analysts, and private client advisors.',
                'Direct curriculum vitae and confidential portfolio inquiries may be submitted directly to our talent acquisition team at: careers@excellis.com.',
              ],
            },
          })
        );
        return;
      }
      if (link === 'Newsroom') {
        window.dispatchEvent(
          new CustomEvent('open-info-modal', {
            detail: {
              title: 'Newsroom & Media Inquiries',
              category: 'Press Relations',
              content: [
                'For press releases, market commentary, and institutional research distribution, contact our global media desk at: press@excellis.com.',
              ],
            },
          })
        );
        return;
      }
    }
    if (category === 'Legal') {
      const legalContents: Record<string, { title: string; category: string; content: string[] }> = {
        'Privacy Policy': {
          title: 'Privacy Policy',
          category: 'Legal & Compliance',
          content: [
            'Excellion Private Wealth strictly protects client confidentiality and financial data integrity.',
            'Personal and financial data is processed in compliance with global fiduciary standards and regional privacy frameworks.',
            'For compliance or data privacy inquiries, contact our legal counsel at: privacy@excellis.com.',
          ],
        },
        'Terms of Service': {
          title: 'Terms of Service',
          category: 'Legal & Compliance',
          content: [
            'Access to this platform is governed by our institutional terms of engagement and advisory agreements.',
            'Information provided on this site does not constitute an offer to buy or sell securities in jurisdictions where unauthorized.',
          ],
        },
        Disclosures: {
          title: 'Regulatory Disclosures',
          category: 'Investment Disclosures',
          content: [
            'All investments involve risk of capital loss. Past performance is not indicative of future returns.',
            'Alternative investments, international real estate, and private placements are intended solely for qualified investors.',
          ],
        },
        'Regulatory Info': {
          title: 'Regulatory & Licensing',
          category: 'Compliance Oversight',
          content: [
            'Excellion Private Wealth operates through regulated entities and partnered fiduciary custodians across premier international hubs.',
            'Advisory activities are subject to local financial regulatory standards in the United Kingdom, United States, Singapore, and Switzerland.',
          ],
        },
      };

      const selected = legalContents[link] || {
        title: link,
        category: 'Legal & Compliance',
        content: ['For specific documentation or verification, contact compliance@excellis.com.'],
      };

      window.dispatchEvent(
        new CustomEvent('open-info-modal', {
          detail: selected,
        })
      );
    }
  };

  const openContact = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <footer id="contact" className="site-footer bg-black px-6 pt-20 pb-8">
      <div className="max-w-[88rem] mx-auto">
        {/* Top row - logo + links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Brand column */}
          <div className="md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center mb-6 cursor-pointer bg-transparent border-none p-0"
            >
              <BrandLogo />
            </button>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Strategic wealth management for a global future. We help you
              create, grow, protect, and transfer wealth across generations.
            </p>
            <button
              onClick={openContact}
              className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer border-none"
            >
              Get Started
            </button>

            {/* Direct Contact Details */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-xs text-white/50">
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase tracking-wider text-[11px]">Direct Advisory:</span>
                <a href="mailto:advisory@excellis.com" className="text-white/80 hover:text-white transition-colors underline-offset-2 hover:underline">
                  advisory@excellis.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/30 uppercase tracking-wider text-[11px]">Private Desk:</span>
                <a href="tel:+18008459270" className="text-white/80 hover:text-white transition-colors underline-offset-2 hover:underline">
                  +1 (800) 845-9270
                </a>
              </p>
            </div>
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
                    <button
                      onClick={() => handleLinkClick(category, link)}
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200 text-left bg-transparent border-none p-0 cursor-pointer font-normal"
                    >
                      {link}
                    </button>
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
              © {new Date().getFullYear()} Excellion Private Wealth. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

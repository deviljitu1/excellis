import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'Stock Advisory',
    description:
      'Turn market opportunities into informed investment decisions. Our research-driven insights, market analysis, and strategic guidance help you navigate equity markets with greater confidence.',
    span: true,
  },
  {
    number: '02',
    title: 'Mutual Funds & Diversified Investments',
    description:
      'Build a portfolio designed for your financial journey. We assist clients in exploring diversified mutual fund and investment solutions based on objectives, risk tolerance, and overall wealth strategy.',
    span: false,
  },
  {
    number: '03',
    title: 'Insurance & Wealth Protection',
    description:
      'Protect the wealth you create. We help clients evaluate suitable insurance and protection solutions designed to support financial security, family protection, and long-term wealth preservation.',
    span: false,
  },
  {
    number: '04',
    title: 'Global Markets & International Wealth',
    description:
      'Think beyond borders. Gain a broader perspective on international markets and global investment opportunities, creating diversification across different economies and asset classes.',
    span: false,
  },
  {
    number: '05',
    title: 'Luxury Global Real Estate',
    description:
      'Own exceptional assets in exceptional destinations. We assist eligible clients in exploring luxury residences, premium properties, and international real estate opportunities across select global markets.',
    span: false,
  },
  {
    number: '06',
    title: 'Global Account & Portfolio Management',
    description:
      'One strategic view of your global wealth. Our personalized portfolio management helps clients coordinate their investments with a clear, structured, and performance-focused strategy.',
    span: true,
  },
  {
    number: '07',
    title: 'Startup & Private Investment',
    description:
      'Invest in ideas that could shape tomorrow. We assist clients in identifying promising startups, emerging businesses, and private investment opportunities that may offer long-term value creation.',
    span: false,
  },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <p className="text-black/60 text-sm mb-2">What We Offer</p>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Wealth Management
              <br />
              Services
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-black/70 text-xl md:text-2xl leading-relaxed">
              Seven distinct pathways to wealth - each tailored to your
              ambitions, risk profile, and vision for the future.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className={`rounded-2xl p-8 min-h-72 flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300 ${
                service.span ? 'sm:col-span-2' : ''
              }`}
              style={{ backgroundColor: '#181511' }}
            >
              <div>
                <span className="text-white/30 text-sm font-medium tracking-widest mb-4 block">
                  {service.number}
                </span>
                <h3
                  className="text-white text-xl md:text-2xl font-medium leading-snug mb-4"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Explore All Services
            <span className="bg-white rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

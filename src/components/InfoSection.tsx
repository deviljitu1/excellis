import { ArrowRight } from 'lucide-react';

const CARD_IMAGE = '/Images/CARD_IMAGE.jpeg';

export default function InfoSection() {
  return (
    <section id="about" className="bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1 - Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Why We Started.
            </h2>
            <button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Our Story
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </button>
          </div>

          {/* Right */}
          <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
            Great wealth deserves great strategy. We created a platform where
            clients access multiple dimensions of wealth creation-from equities
            to global markets, luxury real estate, and beyond.
          </p>
        </div>

        {/* Row 2 - Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 - image bg, spans 2 cols on lg */}
          <div
            className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{
              backgroundImage: `url("${CARD_IMAGE}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Capital that grows
            </h3>
            <p className="text-black/70 text-base max-w-xs">
              Deploy your capital intelligently across diversified strategies
              designed for long-term wealth creation.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#181511' }}
          >
            <h3
              className="text-white text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Protected,
              <br />
              always secure.
            </h3>
            <p className="text-white/60 text-base">
              Safeguard your assets with proven protection strategies - no
              unnecessary risk or uncertainty.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#181511' }}
          >
            <h3
              className="text-white text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Globally
              <br />
              connected
            </h3>
            <p className="text-white/60 text-base">
              Access international markets, premium real estate, and
              cross-border opportunities with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

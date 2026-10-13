import { Globe, Layers, ShieldCheck } from 'lucide-react';

const USE_CASE_VIDEO = '/videos/USE_CASE_VIDEO.mp4';


export default function UseCasesSection() {
  return (
    <section className="practice-section section bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="md:pr-6">
            <p
              className="text-black/50 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ letterSpacing: '0.12em' }}
            >
              Wealth In Practice
            </p>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              One partner.
              <br />
              Multiple paths.
            </h2>
            <p className="text-black/70 text-xl md:text-2xl leading-relaxed max-w-lg mb-8">
              From public markets to private opportunities, from financial
              investments to global real estate - our approach is built around
              creating a connected wealth strategy rather than isolated decisions.
            </p>

            {/* Practice highlights to balance the vertical space */}
            <div className="practice-highlights space-y-3.5 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0E6CA]/70 border border-black/5 hover:border-black/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="text-black font-medium text-base mb-1">
                    Cross-Border Asset Architecture
                  </h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    Seamlessly bridge domestic portfolios with prime international developments and offshore market opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0E6CA]/70 border border-black/5 hover:border-black/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="text-black font-medium text-base mb-1">
                    Multi-Asset Synchronicity
                  </h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    Connect public equities, private equity investments, and luxury physical real estate under a single, unified vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0E6CA]/70 border border-black/5 hover:border-black/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="text-black font-medium text-base mb-1">
                    Generational Capital Governance
                  </h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    Safeguard family interests with disciplined wealth preservation and structured succession frameworks.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* Right column - video card */}
        <div className="property-card relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[720px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-[50%_30%] absolute inset-0 w-full h-full scale-[1.02] border-none outline-none"
          >
            <source src={USE_CASE_VIDEO} type="video/mp4" />
          </video>

          {/* Overlay content */}
          <div className="relative z-10 p-10 md:p-12">
            <h3
              className="text-3xl md:text-4xl font-medium leading-tight mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Global Real
              <br />
              Estate
            </h3>
            <p className="text-black/75 text-base md:text-lg max-w-md mb-8 leading-relaxed">
              Own exceptional assets in exceptional destinations. We assist
              eligible clients in exploring luxury residences, premium
              properties, and international real estate opportunities across
              select global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

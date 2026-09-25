import { Target, Eye } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission Card */}
          <div
            className="rounded-2xl p-10 md:p-12 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#2B2644' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white/80" />
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                To create, grow, protect, and strategically manage wealth.
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              We deliver personalized strategies, informed decision-making, and
              access to diverse wealth opportunities - helping our clients
              pursue their financial ambitions while building a stronger
              foundation for the generations that follow.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="rounded-2xl p-10 md:p-12 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#1A1A2E' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white/80" />
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-3">
                Our Vision
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                To build a globally trusted wealth platform that transforms
                capital into lasting legacy.
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              We envision a future where our clients confidently explore global
              investments, entrepreneurial opportunities, premium real estate,
              financial markets, and strategic wealth solutions - creating
              families, entrepreneurs, and institutions that are financially
              stronger across generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

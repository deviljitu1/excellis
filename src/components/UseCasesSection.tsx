import { ArrowRight } from 'lucide-react';

const USE_CASE_VIDEO = '/videos/USE_CASE_VIDEO.mp4';

export default function UseCasesSection() {
  return (
    <section className="bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm mb-2">Wealth In Practice</p>
          <h2
            className="text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            One partner.
            <br />
            Multiple paths.
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm">
            From public markets to private opportunities, from financial
            investments to global real estate - our approach is built around
            creating a connected wealth strategy rather than isolated decisions.
          </p>
        </div>

        {/* Right column - video card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[720px]">
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
              className="text-4xl md:text-5xl font-medium leading-tight mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Global Real
              <br />
              Estate
            </h3>
            <p className="text-black/70 text-base max-w-md mb-8">
              Own exceptional assets in exceptional destinations. We assist
              eligible clients in exploring luxury residences, premium
              properties, and international real estate opportunities across
              select global markets.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 group text-black font-medium text-base"
            >
              <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              Explore properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Globe,
  ArrowRightLeft,
} from 'lucide-react';

const PATHWAYS = [
  {
    icon: Sparkles,
    title: 'Create Wealth',
    description: 'Identify opportunities and deploy capital intelligently.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Wealth',
    description:
      'Build diversified strategies designed for long-term potential.',
  },
  {
    icon: ShieldCheck,
    title: 'Protect Wealth',
    description: 'Safeguard assets and prepare for uncertainty.',
  },
  {
    icon: Globe,
    title: 'Expand Wealth',
    description:
      'Explore global markets and opportunities beyond traditional boundaries.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transfer Wealth',
    description:
      'Build a foundation that can support the next generation.',
  },
] as const;

export default function WealthPathwaysSection() {
  return (
    <section id="pathways" className="bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-black/60 text-sm mb-2">The Wealth Lifecycle</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Five pathways.
            <br />
            One connected strategy.
          </h2>
          <p className="text-black/60 text-base leading-relaxed">
            Wealth is not a single event - it is a journey. Our approach guides
            you through every stage, from the first investment to generational
            transfer.
          </p>
        </div>

        {/* Pathways - horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PATHWAYS.map((pathway, i) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.title}
                className="rounded-2xl p-7 min-h-64 flex flex-col justify-between group hover:scale-[1.03] transition-transform duration-300"
                style={{
                  backgroundColor: i % 2 === 0 ? '#181511' : '#0C0A08',
                }}
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <h3
                    className="text-white text-lg font-medium leading-snug mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {pathway.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pathway.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

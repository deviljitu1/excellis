import {
  Shield,
  Award,
  Clock,
  Users,
  Lightbulb,
  Globe,
} from 'lucide-react';

const VALUES = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Trust is the foundation of every successful financial relationship. We operate with transparency, responsibility, and ethical intent.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We pursue high standards in research, strategy, service, and execution, continuously striving to improve the value we deliver.',
  },
  {
    icon: Clock,
    title: 'Long-Term Thinking',
    description:
      'We focus beyond short-term gains, building strategies designed around sustainable wealth creation and generational outcomes.',
  },
  {
    icon: Users,
    title: 'Client First',
    description:
      "Every strategy begins with understanding the client's goals, ambitions, risk profile, and vision for the future.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously explore new markets, emerging opportunities, technologies, and investment ideas to stay ahead in an evolving financial world.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description:
      'Wealth opportunities should not be limited by geography - we give clients access to global markets and cross-border opportunities.',
  },
] as const;

export default function CoreValuesSection() {
  return (
    <section id="values" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-black/60 text-sm mb-2">What Guides Us</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Our Core Values
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl p-8 min-h-64 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: '#2B2644' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <h3
                    className="text-white text-xl font-medium leading-snug mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {value.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

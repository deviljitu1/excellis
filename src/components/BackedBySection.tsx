interface Backer {
  name: string;
  style: React.CSSProperties;
}

const BACKERS: Backer[] = [
  {
    name: 'Goldman Sachs',
    style: { fontFamily: "'Times New Roman', serif", fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' },
  },
  {
    name: 'BLACKROCK',
    style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' },
  },
  {
    name: 'JPM',
    style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' },
  },
  {
    name: 'Vanguard',
    style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' },
  },
  {
    name: 'Morgan Stanley',
    style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' },
  },
  {
    name: 'FIDELITY',
    style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' as const },
  },
  {
    name: 'SCHWAB',
    style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' },
  },
  {
    name: 'Bridgewater',
    style: { fontFamily: "Palatino, 'Book Antiqua', serif", fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' },
  },
];

export default function BackedBySection() {
  return (
    <section className="bg-[#F5F5F5] px-6">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left - description */}
        <p className="text-black/70 text-base leading-relaxed">
          Guided by the standards
          <br />
          of the world's leading institutions.
        </p>

        {/* Right - marquee */}
        <div className="md:col-span-3 overflow-hidden">
          <div className="backers-track">
            {[...BACKERS, ...BACKERS].map((backer, i) => (
              <span
                key={`${backer.name}-${i}`}
                className="mx-10 shrink-0 text-black/50 whitespace-nowrap"
                style={backer.style}
              >
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

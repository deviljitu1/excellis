import { ArrowRight } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function CTASection() {
  return (
    <section className="bg-[#F9F2DC] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div
          className="rounded-2xl p-8 md:p-20 text-center flex flex-col items-center"
          style={{ backgroundColor: '#181511' }}
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
            Your Wealth Is More Than Capital
          </p>
          <h2
            className="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 max-w-3xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            It is your freedom. Your ambition. Your family's future. Your
            legacy.
          </h2>
          <p
            className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            We are here to help you turn today's capital into tomorrow's
            opportunity - and tomorrow's opportunity into generational wealth.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-3 bg-white text-black text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            Build Today. Grow Tomorrow.
            <span className="bg-black rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

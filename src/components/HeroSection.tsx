import { ArrowRight } from 'lucide-react';

const HERO_VIDEO = '/videos/hero-bg.mp4';



function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div
        className="hero-media relative w-full overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="object-cover absolute inset-0 w-full h-full border-none outline-none"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Content overlay */}
        <div className="hero-copy relative z-10 flex flex-col items-start">
          <p
            className="text-black/50 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Build Wealth. Create Legacy.
          </p>

          <h1
            className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-[1.25] max-w-2xl mb-6 md:mb-8"
            style={{ letterSpacing: '-0.03em' }}
          >
            We bring together investment expertise, global opportunities, and
            personalized advisory to help you move from wealth creation to
            lasting legacy.
          </h1>

          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Start Your Journey
            <span className="bg-white rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

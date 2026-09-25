import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_VIDEO = '/videos/hero-bg.mp4';



function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      // Reset the video 0.15 seconds before the end to skip the laggy final frame
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.15) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="object-cover absolute inset-0 w-full h-full scale-[1.01] border-none outline-none"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center md:justify-start h-full p-6 pt-16 md:p-12 md:pt-36">
          <p
            className="text-black/50 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Build Wealth. Create Legacy.
          </p>

          <h1
            className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Strategic Wealth
            <br />
            Management
          </h1>

          <p
            className="text-black/70 text-base md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            We bring together investment expertise, global opportunities, and
            personalized advisory to help you move from wealth creation to
            lasting legacy.
          </p>

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

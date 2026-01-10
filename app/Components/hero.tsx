import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import LightRays from "./lightrays";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-neutral-900 text-white min-h-screen overflow-hidden">
      {/* Rotating Background Image */}
      <Reveal delay={600} className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 !duration-[2000ms]">
        <Image
          src="/assets/cloudkickhero1.png"
          alt="Hero Background Graphic"
          width={1200}
          height={1200}
          className="w-[80%] md:w-[600px] h-auto object-contain opacity-70 animate-sway translate-y-12"
        />
      </Reveal>

      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#10da10ff"
          raysSpeed={2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[1100px] text-center pt-20">

          <Reveal delay={1200} className="!duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Built for comfort.
              <br />
              Styled for the street.
            </h1>
          </Reveal>

          <Reveal delay={2000} className="mt-6 !duration-1000">
            <p className="text-base md:text-lg text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Designed to feel different.
            </p>
          </Reveal>

          <Reveal delay={2800} className="mt-12 flex items-center justify-center !duration-1000">
            <Link
              href="/shop"
              className="
                bg-white
                text-neutral-900
                hover:scale-110
                hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
                active:scale-95
                transition-all
                duration-500
                ease-out
                text-sm
                md:text-base
                font-bold
                px-12
                py-4
                rounded-full
                shadow-[0_0_20px_rgba(255,255,255,0.1)]
              "
            >
              Shop now
            </Link>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default Hero;

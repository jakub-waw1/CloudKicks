import React from "react";
import Reveal from "./reveal";

const Hero: React.FC = () => {
  return (
    <div className="bg-[url('/assets/herobackground.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <section className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[1100px] text-center pt-20">

          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Built for comfort.
              <br />
              Styled for the street.
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <p className="text-base md:text-lg text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Designed to feel different.
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-12 flex items-center justify-center">
            <button
              className="
                bg-yellow-400
                hover:bg-yellow-300
                active:scale-95
                transition
                transform
                text-black
                text-sm
                md:text-base
                font-semibold
                px-10
                py-4
                rounded-full
                shadow-lg
              "
            >
              Shop now
            </button>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default Hero;

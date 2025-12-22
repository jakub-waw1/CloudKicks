import React from "react";
import Reveal from "./reveal";

const Hero: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">

      <section className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[1100px] text-center pt-28">
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Step Into Comfort and Style
              <br />
              With CloudKicks Footwear
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <p className="text-lg md:text-xl text-gray-300 max-w-[900px] mx-auto leading-relaxed">
              Lightweight sneaker-slippers designed for everyday comfort, built with premium cushioning,
              minimalist aesthetics, and the versatility to go anywhere. CloudKicks blend streetwear energy
              with lounge-level comfort so you never have to choose between style and relaxation.
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-10 flex items-center justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition transform text-white text-sm md:text-base font-semibold px-8 py-3 rounded-lg shadow-md">
              Shop Now
            </button>

            <button className="border border-white/20 text-white hover:bg-white hover:text-black transition text-sm md:text-base font-medium px-6 py-3 rounded-lg">
              View Collection
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Hero;

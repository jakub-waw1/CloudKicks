import React from "react";
import Reveal from "./reveal";

const Showcase: React.FC = () => {
  return (
    <section className="w-full bg-neutral-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-wide text-gray-400"></p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Comfort, redefined<br /></h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Where comfort becomes the design.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={60} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[url('/assets/showcase1.png')] bg-cover bg-center shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 text-xl text-white/70 group-hover:text-white transition">+</div>
            <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90">All-day comfort</p></div>
          </Reveal>

          <Reveal delay={120} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[url('/assets/showcase12.png')] bg-cover bg-center shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 text-xl text-white/70 group-hover:text-white transition">+</div>
            <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90">Lightweight design</p></div>
          </Reveal>

          <Reveal delay={180} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800 shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 text-xl text-white/70 group-hover:text-white transition">+</div>
            <div className="absolute bottom-4 left-4"><p className="text-sm text-white/90">Minimal, versatile style</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

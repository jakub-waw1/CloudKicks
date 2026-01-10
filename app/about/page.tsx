"use client";

import React from "react";
import Reveal from "../Components/reveal";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white selection:bg-emerald-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-neutral-900 z-0" />
                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                            The Evolution of Comfort.
                        </h1>
                    </Reveal>
                    <Reveal delay={200} className="mt-8">
                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            We didn't just build a slipper. We engineered a feeling. CloudKicks was born from the desire to merge sneaker culture with improved loungewear.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Our Story Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <Reveal delay={100}>
                            <h2 className="text-3xl md:text-4xl font-semibold">Started from the sole.</h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                It started in a small apartment with a simple question: "Why do house shoes have to look so boring?" We wanted the swagger of a fresh pair of kicks with the cloud-like embrace of a luxury hotel slipper.
                            </p>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                Hundreds of prototypes later, we found the perfect balance. Plush distinct styling, and a silhouette that commands respect even when you're just grabbing the mail.
                            </p>
                        </Reveal>
                    </div>

                    {/* Abstract Visual/Card */}
                    <Reveal delay={400} className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden bg-neutral-800 border border-white/5 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-blue-500/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-bold text-white/5 select-none">CK</span>
                        </div>
                        {/* Floating Elements (Visual fluff) */}
                        <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
                        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-700" />
                    </Reveal>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-neutral-950 py-32 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mx-auto max-w-7xl px-6">
                    <Reveal className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold">Why we exist.</h2>
                    </Reveal>

                    <div className="grid gap-8 md:grid-cols-3">
                        <ValueCard
                            delay={0}
                            title="Uncompromising Comfort"
                            desc="Memory foam insoles that adapt to your footprint, making every step feel like walking on air."
                        />
                        <ValueCard
                            delay={150}
                            title="Street-Ready Aesthetics"
                            desc="Inspired by iconic silhouettes. We bring the heat to your living room."
                        />
                        <ValueCard
                            delay={300}
                            title="Premium Materials"
                            desc="Vegan leather, breathable mesh, and durable stitching. Built to last longer than your next binge-watch."
                        />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 text-center px-6">
                <Reveal>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8">Ready to float?</h3>
                    <a href="/shop" className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        Shop the Collection
                    </a>
                </Reveal>
            </section>

        </div>
    );
}

function ValueCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
    return (
        <Reveal delay={delay} className="group relative p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <h3 className="text-xl font-bold mb-4 text-emerald-400">{title}</h3>
            <p className="text-neutral-400 leading-relaxed relative z-10">{desc}</p>
        </Reveal>
    );
}

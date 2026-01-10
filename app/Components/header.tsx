import Link from "next/link";
import Image from "next/image";
import CloudButton from "./cloud-button";
import Reveal from "./reveal";

export default function Header() {
  return (
    <Reveal className="w-full" delay={100}>
      <div className="mx-auto max-w-4xl px-4 py-2">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1 shadow-lg">

          {/* Left Side - Browse Button */}
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden md:block">
              <Link
                href="/shop"
                className="group relative px-4 py-2 text-base font-bold transition-colors duration-300"
              >
                <span className="bg-[linear-gradient(110deg,#a3a3a3,45%,#ffffff,55%,#a3a3a3)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                  Browse the range
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0 mx-4">
            <Link
              href="/"
              className="relative flex items-center justify-center -my-10 group transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-125 hover:-rotate-3"
            >
              <Image
                src="/assets/Cloudkickslogo.png"
                alt="CloudKicks Logo"
                width={260}
                height={120}
                className="h-32 w-auto object-contain filter drop-shadow-lg transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-[0_0_25px_rgba(167,243,208,0.5)]"
              />

              {/* Glare Effect */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  maskImage: "url('/assets/Cloudkickslogo.png')",
                  WebkitMaskImage: "url('/assets/Cloudkickslogo.png')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out" />
              </div>
            </Link>
          </div>

          {/* Right Side - About Button & Icons */}
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <div className="hidden md:block">
              <Link
                href="/about"
                className="group relative px-4 py-2 text-base font-bold transition-colors duration-300"
              >
                <span className="bg-[linear-gradient(110deg,#a3a3a3,45%,#ffffff,55%,#a3a3a3)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                  About CloudKicks
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1">
              <Link
                href="/account"
                className="group relative p-2 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Account"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
                  />
                </svg>
                <span className="absolute bottom-1 left-1 right-1 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link
                href="/cart"
                className="group relative p-2 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Cart"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5M17 13l1.5 7.5M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <span className="absolute bottom-1 left-1 right-1 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Reveal>
  );
}

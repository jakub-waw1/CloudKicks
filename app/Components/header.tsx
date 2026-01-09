import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-4xl px-4 py-2">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-0 shadow-lg">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Cloudkickslogo.png"
              alt="CloudKicks Logo"
              width={200}
              height={80}
              className="h-20 w-auto object-contain -my-4"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center text-sm font-medium text-white/70 tracking-wide">
            <Link
              href="/shop"
              className="group relative px-6 py-2 hover:text-white transition-colors duration-300"
            >
              <span>Browse the range</span>
              <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            {/* Divider */}
            <span className="mx-2 h-4 w-px bg-white/10" />

            <Link
              href="/about"
              className="group relative px-6 py-2 hover:text-white transition-colors duration-300"
            >
              <span>About CloudKicks</span>
              <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/account"
              className="p-2 text-white/70 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
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
            </Link>

            <Link
              href="/cart"
              className="p-2 text-white/70 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
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
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-neutral-900 px-5 py-3 shadow-lg">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-black text-sm font-bold shadow-sm">
              CK
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">CloudKicks</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link href="#" className="relative px-1 py-1 hover:text-white transition-colors">
              Product
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="hover:text-white transition">Solutions</Link>
            <Link href="#" className="hover:text-white transition">Customers</Link>
            <Link href="#" className="hover:text-white transition">Pricing</Link>
            <Link href="#" className="hover:text-white transition">Resources</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-white/70 hover:text-white transition">
              Login
            </Link>

            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:scale-[1.02] transition-transform">
              Try for Free
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

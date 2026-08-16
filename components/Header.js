import Link from "next/link";

import Socials from "./Socials";

const Header = () => (
  <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0b1020]/85 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:pr-24">
      <Link
        href="/"
        className="group inline-flex min-h-[44px] items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label="Reeju Bhattacherji, home"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-sm font-bold tracking-[0.08em] text-white transition-colors group-hover:border-accent">
          RB
        </span>
        <span className="hidden sm:block">
          <span className="block text-sm font-semibold leading-tight text-white">
            Reeju Bhattacherji
          </span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
            Data / Automation / AI
          </span>
        </span>
      </Link>

      <Socials />
    </div>
  </header>
);

export default Header;

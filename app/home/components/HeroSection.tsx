import Link from "next/link";
import HeroRadar from "./HeroRadar";
import { ArrowRightIcon } from "@/assets/icons";

const HeroSection = () => {
  return (
    <section className="max-w-section-max-width md:h-section md:max-h-section relative mx-auto flex items-center px-6">
      <div className="mt-4 flex h-full w-full flex-col-reverse items-center md:mt-0 md:flex-row md:justify-between md:gap-16">
        {/* LEFT SIDE */}
        <div className="flex max-w-2xl flex-col text-left">
          <h1 className="mt-8 mb-4 text-4xl font-black tracking-tight uppercase italic md:mt-0 md:text-7xl">
            Built by a Competitive Player, <br />
            <span className="text-primary">For Competitive Players</span>
          </h1>

          <Link
            href="/lineups"
            className="group bg-primary relative mb-4 flex h-14 w-max items-center gap-3 overflow-hidden px-8 font-black tracking-tighter text-white transition-all [clip-path:var(--button-clip-path)] hover:bg-red-700 active:scale-95"
          >
            <span className="relative z-10 text-lg uppercase">
              Browse All Maps
            </span>
            <span className="relative z-10 h-5 w-5 leading-none transition-transform group-hover:translate-x-1">
              <ArrowRightIcon />
            </span>
          </Link>

          <p className="mb-10 text-lg leading-relaxed font-medium text-zinc-400 md:text-xl">
            Master smoke, flash, molly, and grenade lineups for CS2. Built for
            real matches and real executes.
          </p>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <HeroRadar />
      </div>
    </section>
  );
};

export default HeroSection;

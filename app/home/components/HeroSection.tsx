import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-w-section-max-width min-h-section relative mx-auto flex items-center px-6">
      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* LEFT SIDE */}
        <div className="flex max-w-2xl flex-col text-left">
          <h1 className="mt-12 mb-6 text-4xl font-black tracking-tight uppercase italic md:mt-0 md:text-7xl">
            Built by a Competitive Player, <br />
            <span className="text-primary">For Competitive Players</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed font-medium text-zinc-400 md:text-xl">
            Master smoke, flash, molly, and grenade lineups for CS2. Built for
            real matches and real executes.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row md:justify-start">
            <Link
              href="/lineups"
              className="group bg-primary relative flex h-14 items-center gap-3 overflow-hidden rounded-sm px-8 font-black tracking-tighter text-white transition-all hover:bg-red-700 active:scale-95"
            >
              <span className="relative z-10 text-lg uppercase">
                Browse All Maps
              </span>
              <span className="relative z-10 h-5 w-5 leading-none transition-transform group-hover:translate-x-1">
                {">"}
              </span>
              <div className="absolute inset-0 z-0 -translate-x-full bg-linear-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>

            <Link
              href="#features"
              className="group flex h-14 items-center gap-3 rounded-sm border-2 border-white/10 bg-white/5 px-8 font-black tracking-tighter text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 md:border-4"
            >
              <span className="text-lg uppercase">How it Works</span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-md border border-white/10 bg-white/5 backdrop-blur-md">
          <Image
            src="/hero-image.png"
            alt="CS2 Lineup Preview"
            fill
            className="object-cover"
            priority
          />

          {/* optional glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

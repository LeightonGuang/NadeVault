import BackgroundGradient from "@/components/BackgroundGradient";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#0a0a0b] text-white selection:bg-orange-500/30">
      <BackgroundGradient />

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <div className="bg-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <span className="text-[10px] leading-none font-black tracking-[0.2em] text-zinc-400 uppercase">
            Protocol v2.4 Active
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-6 max-w-4xl text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
          Master Every <br />
          <span className="text-primary">Tactical Utility</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-2xl text-lg leading-relaxed font-medium text-zinc-400 md:text-xl">
          Elevate your gameplay with pixel-perfect smoke, flash, molly, and
          grenade lineups for CS2. The ultimate vault for competitive tactical
          superiority.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/lineups"
            className="group bg-primary relative flex h-14 items-center gap-3 overflow-hidden rounded-sm px-8 font-black tracking-tighter text-white transition-all hover:bg-red-700 active:scale-95"
          >
            <span className="relative z-10 text-lg uppercase italic">
              Browse All Maps
            </span>
            <div className="relative z-10 h-5 w-5 leading-none transition-transform group-hover:translate-x-1">
              {">"}
            </div>
            <div className="absolute inset-0 z-0 -translate-x-full bg-linear-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#features"
            className="group flex h-14 items-center gap-3 rounded-sm border-2 border-white/10 bg-white/5 px-8 font-black tracking-tighter text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 md:border-4"
          >
            <span className="text-lg uppercase italic">How it Works</span>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mt-24 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 text-center">
            <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
              {/* <Target className="h-6 w-6" /> */}
            </div>
            <h3 className="mb-2 font-black tracking-tight uppercase italic">
              Pixel Perfection
            </h3>
            <p className="text-sm text-zinc-500">
              Every lineup is verified and tested for maximum consistency.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 text-center">
            <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
              {/* <Shield className="h-6 w-6" /> */}
            </div>
            <h3 className="mb-2 font-black tracking-tight uppercase italic">
              Global Standards
            </h3>
            <p className="text-sm text-zinc-500">
              Curated from pro matches and high-level competitive play.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 text-center">
            <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
              {/* <Zap className="h-6 w-6" /> */}
            </div>
            <h3 className="mb-2 font-black tracking-tight uppercase italic">
              Rapid Learning
            </h3>
            <p className="text-sm text-zinc-500">
              Interactive maps and concise visuals for fast execution.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

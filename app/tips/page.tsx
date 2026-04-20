import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tips | Nade Vault",
  description:
    "Learn essential CS2 grenade throwing mechanics including jumpthrows, walkthrows, and more.",
};

const tips = [
  {
    id: "",
    title: "Precision scale",
    content: ``,
  },
  {
    id: "jumpthrow",
    title: "Jumpthrow",
    content: `A jumpthrow is used to launch a grenade much further than a standard standing throw by releasing it at the apex of a jump. In CS2, jumpthrows are modernized: if you press jump and throw within a small window, the grenade will have perfect consistency without needing a specialized bind.`,
  },
  {
    id: "walk-jumpthrow",
    title: "Walk-Jumpthrow",
    content: `By walking forward and initiating a jumpthrow simultaneously, you add your movement speed to the grenade's initial velocity. This provides even greater distance than a standard jumpthrow and is often used for 'instant' smokes from spawn or very deep entry flashes.`,
  },
  {
    id: "middle-click-throw",
    title: "Middle-Click Throw",
    content: `CS2 features three standard release strengths. While Left-click is far and Right-click is close, clicking both at the same time results in a medium-strength toss. This is useful for 'pop-flashes' over walls or smokes that need to land just a few meters in front of you.`,
  },
  {
    id: "crouch-throw",
    title: "Crouching Throw",
    content: `Throwing while crouching lowers your release height. This is often used to slide grenades under obstacles, through small gaps, or to ensure they bounce off the ground at a specific angle to land in tight cubbies.`,
  },
  {
    id: "run-throw",
    title: "Run-Throw",
    content: `A run-throw involves releasing the grenade while at full running speed. This drastically increases the forward distance but is much harder to time correctly for specific lineups. Professional lineups often substitute this for a 'walk-jumpthrow'.`,
  },
];

const TipsPage = () => {
  return (
    <section className="min-h-section selection:bg-primary/30 relative overflow-hidden bg-zinc-950 text-white">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-section-max-width mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h1 className="font-[hoover] text-4xl font-black tracking-tight uppercase md:text-6xl">
            Tips
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Understanding the different release types in Counter-Strike 2 is
            fundamental to mastering utility. Consistency in your throw types is
            what separates professional executes from casual play.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          <h2 className="text-primary mb-8 text-[10px] font-black tracking-[0.4em] uppercase">
            Utility Release Types
          </h2>

          <div className="space-y-10">
            {tips.map((mechanic) => (
              <div key={mechanic.id} className="relative">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors">
                  {mechanic.title}
                </h3>
                <p className="text-md leading-relaxed text-zinc-400">
                  {mechanic.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/5 pt-8">
            <p className="text-[10px] font-medium text-zinc-500 italic">
              Note: CS2 has built-in audio cues for jumpthrows. If you hear a
              distinctive sound during your throw, it confirms the timing was
              perfect and consistent.
            </p>
          </div>
        </div>

        {/* Bottom Navigation Link */}
        <div className="mt-12 text-center">
          <a
            href="/lineups/dust2"
            className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase transition-colors hover:text-white"
          >
            ← Application of Strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default TipsPage;

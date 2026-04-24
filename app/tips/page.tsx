import { Metadata } from "next";
import PrecisionMeter from "../lineups/components/PrecisionMeter";

export const metadata: Metadata = {
  title: "Tips | Nade Vault",
  description: "Tips for anything CS2 related and more.",
};

const tips = [
  {
    id: "precision-scale",
    title: "Precision scale",
    content: (
      <div className="space-y-6">
        <p>
          The precision scale indicates how much room for error a specific
          lineup allows. Higher precision requirements mean you need to be more
          exact with your crosshair placement and movement to ensure the utility
          lands correctly.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              scale: "Very Forgiving" as const,
              desc: "Can be in the general vicinity of the starting position and aim at a broad area. small deviation from the reference point won't affect the lineup.",
            },
            {
              scale: "Forgiving" as const,
              desc: "Player must stand relatively accurately in the starting position, with minor leeway on aiming at the reference point",
            },
            {
              scale: "Precise" as const,
              desc: "Even small deviations from the reference point can cause the throw to fail, requiring careful aim and positioning.",
            },
            {
              scale: "Pixel Perfect" as const,
              desc: "Any deviation from the starting position and reference point will cause the throw to fail.",
            },
          ].map((item) => (
            <div
              key={item.scale}
              className="flex flex-col gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <div className="w-20">
                <PrecisionMeter scale={item.scale} />
              </div>
              <div className="text-md leading-relaxed text-zinc-400">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "nade-throws",
    title: "Nade throws",
    content: (
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-xs font-medium text-zinc-500 italic">
            Note: There is no need for a specialized jumpthrow bind in CS2. The
            mechanic is built-in, and the game provides a distinctive audio cue
            whenever a jumpthrow is timed correctly to confirm its consistency.
          </p>
        </div>

        <div>
          <h3 className="text-md font-bold text-white">Jumpthrow</h3>

          <p className="text-md leading-relaxed text-zinc-400">
            A jumpthrow is used to launch a grenade much further than a standard
            standing throw by releasing it at the apex of a jump. In CS2,
            jumpthrows are modernized: if you press jump and throw within a
            small window, the grenade will have perfect consistency without
            needing a specialized bind.
          </p>
          {/* TODO: Add jumpthrow keyboard and mouse animation */}
        </div>

        <div>
          <h3 className="text-md font-bold text-white">Walk Jumpthrow</h3>

          <p className="text-md leading-relaxed text-zinc-400">
            By walking forward and initiating a jumpthrow simultaneously, you
            add your movement speed to the grenade's initial velocity. This
            provides even greater distance than a standard jumpthrow and is
            often used for 'instant' smokes from spawn or very deep entry
            flashes.
          </p>
        </div>
      </div>
    ),
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
          <div className="space-y-10">
            {tips.map((mechanic) => (
              <div key={mechanic.id} className="relative">
                <h2 className="mb-2 text-xl font-bold text-white transition-colors">
                  {mechanic.title}
                </h2>

                {mechanic.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsPage;

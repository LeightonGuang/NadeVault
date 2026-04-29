import { Metadata } from "next";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import PrecisionMeter from "../lineups/[mapSlug]/components/PrecisionMeter";

import { Precision } from "@/types/Precision";

export const metadata: Metadata = {
  title: "Tips | Nade Vault",
  description: "Tips for anything CS2 related and more.",
};

const tips = [
  {
    id: "lining-up-starting-position",
    title: "Lining up starting position",
    content: (
      <div className="space-y-3 text-sm text-zinc-400 md:text-base">
        <p className="leading-relaxed">
          When lining up a starting position, small movements can make a big
          difference. Crouching reduces your movement speed, making it much
          easier to fine-tune your position and align yourself precisely with
          reference points.
        </p>

        <p className="leading-relaxed">
          If you're struggling to stand in the exact spot for a lineup, try
          holding crouch (Ctrl key) while adjusting. This gives you more control
          and improves consistency.
        </p>
      </div>
    ),
  },

  {
    id: "jump-throw",
    title: "Jumpthrow",
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
  {
    id: "precision-scale",
    title: "Precision Scale",
    content: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
          The precision scale indicates how much room for error a specific
          lineup allows. Higher precision requirements mean you need to be more
          exact with your crosshair placement and movement to ensure the utility
          lands correctly.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              id: 1,
              name: "Very Forgiving" as const,
              desc: "Can be in the general vicinity of the starting position and aim at a broad area. Small deviation from the reference point won't affect the lineup.",
            },
            {
              id: 2,
              name: "Forgiving" as const,
              desc: "Player must stand relatively accurately in the starting position, with minor leeway on aiming at the reference point.",
            },
            {
              id: 3,
              name: "Precise" as const,
              desc: "Even small deviations from the reference point can cause the throw to fail, requiring careful aim and positioning.",
            },
            {
              id: 4,
              name: "Pixel Perfect" as const,
              desc: "Any deviation from the starting position and reference point will cause the throw to fail.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur-sm"
            >
              <div className="w-16 shrink-0 pt-1">
                <PrecisionMeter scale={item.id as Precision} />
              </div>
              <div className="text-sm leading-relaxed text-zinc-400">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const TipsPage = () => {
  return (
    <SmoothScrollWrapper>
      <section className="min-h-section selection:bg-primary/30 relative bg-zinc-950 text-white">
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
              Tips that beginners might not know when starting out in CS2 and
              explanations for specific areas of the website.
            </p>
          </div>

          {/* Layout with Sidebar */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24 space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                  Sections
                </h3>
                <nav className="flex flex-col gap-2">
                  {tips.map((tip) => (
                    <a
                      key={tip.id}
                      href={`#${tip.id}`}
                      className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all hover:text-white"
                    >
                      <div className="group-hover:bg-primary h-1 w-1 rounded-full bg-zinc-800 transition-all group-hover:w-2" />
                      {tip.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Section */}
            <div className="lg:col-span-9">
              <div className="space-y-24">
                {tips.map((mechanic) => (
                  <div
                    key={mechanic.id}
                    id={mechanic.id}
                    className="relative scroll-mt-24"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <h2 className="text-2xl font-bold text-white transition-colors md:text-3xl">
                        {mechanic.title}
                      </h2>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <div className="relative">{mechanic.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SmoothScrollWrapper>
  );
};

export default TipsPage;

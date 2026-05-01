import Pill from "@/components/Pill";

const updates = [
  {
    version: "v0.0.3",
    date: "30/4/2026",
    title: "The Cache Update",
    description: "Adding Cache to the list of maps available.",
    changes: [
      { type: "new", text: "Added Cache lineups" },
      { type: "improvement", text: "Updated radar path animations" },
      { type: "fix", text: "Fixed footer alignment on mobile" },
    ],
  },
  {
    version: "v0.0.2",
    date: "17/2/2026",
    title: "Adding Dust 2 lineups",
    description: "Expanding our Dust 2 lineups with more utility options.",
    changes: [
      { type: "new", text: "Added Mirage lineups" },
      { type: "improvement", text: "Updated radar path animations" },
      { type: "fix", text: "Fixed footer alignment on mobile" },
    ],
  },
  {
    version: "v0.0.1",
    date: "16/2/2026",
    title: "Initial Release",
    description: "Launch of Nade Vault with support for Dust 2.",
    changes: [
      { type: "new", text: "Initial release of the platform" },
      { type: "new", text: "Added Dust 2 lineups" },
      { type: "feature", text: "Interactive radar visualization" },
    ],
  },
];

const UpdatesPage = () => {
  return (
    <section className="min-h-section relative overflow-hidden bg-zinc-950 text-white">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full blur-[100px]" />
        <div className="bg-primary/5 absolute top-1/2 -left-24 h-[500px] w-[500px] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-section-max-width relative mx-auto px-6 py-20 lg:py-32">
        <div className="mb-20 space-y-6">
          <Pill variant="dark-red">Updates</Pill>
          <h1 className="font-[hoover] text-5xl font-black tracking-tight uppercase md:text-7xl lg:text-8xl">
            Update <span className="text-primary">Logs</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Keep track of the latest additions, improvements, and bug fixes to
            Nade Vault. We&apos;re constantly working to bring you the best
            lineup experience.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="from-primary/50 absolute top-0 left-4 h-full w-px bg-linear-to-b via-white/10 to-transparent md:left-8" />

          {updates.map((update, index) => (
            <div key={update.version} className="relative pl-12 md:pl-24">
              {/* Timeline Dot */}
              <div className="absolute top-2 left-2 flex h-4 w-4 items-center justify-center md:top-3 md:left-6">
                <div className="border-primary h-full w-full rounded-full border-2 bg-zinc-950 shadow-[0_0_10px_rgba(204,41,54,0.5)]" />
              </div>

              <div className="group hover:border-primary/20 relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-8 transition-all duration-500 hover:bg-white/4">
                {/* Accent Background */}
                <div className="bg-primary/5 absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                      {update.version} • {update.date}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {update.title}
                  </h2>

                  <p className="max-w-3xl text-zinc-400 sm:text-lg">
                    {update.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {update.changes.map((change, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/3 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-colors group-hover:border-white/10"
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            change.type === "new"
                              ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                              : change.type === "fix"
                                ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"
                                : "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                          }`}
                        />
                        {change.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesPage;

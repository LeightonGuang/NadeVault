const FeatureHighlights = () => {
  return (
    <div className="max-w-section-max-width mx-auto mt-24 grid w-full grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3">
      <div className="flex flex-col items-center p-6 text-center">
        <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10"></div>
        <h3 className="mb-2 font-black tracking-tight uppercase italic">
          Pixel Perfection
        </h3>
        <p className="text-sm text-zinc-500">
          Every lineup is verified and tested for maximum consistency.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10"></div>
        <h3 className="mb-2 font-black tracking-tight uppercase italic">
          Global Standards
        </h3>
        <p className="text-sm text-zinc-500">
          Curated from pro matches and high-level competitive play.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10"></div>
        <h3 className="mb-2 font-black tracking-tight uppercase italic">
          Rapid Learning
        </h3>
        <p className="text-sm text-zinc-500">
          Interactive maps and concise visuals for fast execution.
        </p>
      </div>
    </div>
  );
};

export default FeatureHighlights;

import { Lineup } from "@/types/Lineup";
import { twMerge } from "tailwind-merge";
import PrecisionMeter from "./PrecisionMeter";

const InfoCard = ({
  lineup,
  className,
}: {
  lineup: Lineup | undefined;
  className?: string;
}) => {
  return (
    <div className={className}>
      {lineup ? (
        <div className="flex flex-col gap-6">
          <header>
            <h2 className="hidden font-[Hoover] text-2xl font-bold tracking-tight text-white md:block">
              {lineup.name}
            </h2>
            <div className="mt-2 flex items-center gap-3 text-xs font-bold tracking-wider uppercase">
              <span
                className={twMerge(
                  "rounded-sm px-1.5 py-0.5",
                  lineup.team === "CT"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-orange-500/20 text-orange-400",
                )}
              >
                {lineup.team}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-primary">{lineup.type}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/50">{lineup.throwType}</span>
            </div>
          </header>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl">
            <iframe
              className="aspect-9/16 w-full"
              src={lineup.youtubeUrl}
              title={lineup.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="space-y-4">
            {lineup.description && (
              <p className="text-sm leading-relaxed text-white/70">
                {lineup.description}
              </p>
            )}

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Precision
                </h3>
                <PrecisionMeter scale={lineup.precision} />
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Duration
                </h3>
                <p className="text-sm font-medium text-white">
                  {lineup.duration} seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center p-8 text-center">
          <span className="font-[Hoover] text-lg font-medium text-white/30">
            No lineup selected. Click a marker on the radar to view details.
          </span>
        </div>
      )}
    </div>
  );
};

export default InfoCard;

import { twMerge } from "tailwind-merge";
import { Precision } from "@/types/Precision";

const PRECISION_LEVELS: { id: Precision; name: string; color: string }[] = [
  { id: 1, name: "Very Forgiving", color: "#22c55e" },
  { id: 2, name: "Forgiving", color: "#eab308" },
  { id: 3, name: "Precise", color: "#f97316" },
  { id: 4, name: "Pixel Perfect", color: "#ef4444" },
];

const PrecisionMeter = ({ scale }: { scale: Precision }) => {
  const currentIndex = PRECISION_LEVELS.findIndex((p) => p.id === scale);
  const activeLevel =
    currentIndex !== -1 ? PRECISION_LEVELS[currentIndex] : PRECISION_LEVELS[0];

  return (
    <div className="w-full space-y-2">
      <div className="flex h-1.5 w-full gap-1.5">
        {PRECISION_LEVELS.map((level, i) => {
          const isActive = i <= currentIndex;

          return (
            <div key={level.id} className="relative flex-1">
              {/* Segment Track */}
              <div
                className={twMerge(
                  "h-full w-full rounded-full transition-all duration-500",
                  isActive ? "opacity-100" : "bg-white/10 opacity-20",
                )}
                style={{
                  backgroundColor: isActive ? activeLevel.color : undefined,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-bold tracking-tight transition-colors duration-300"
          style={{ color: activeLevel.color }}
        >
          {activeLevel.name}
        </span>
      </div>
    </div>
  );
};

export default PrecisionMeter;

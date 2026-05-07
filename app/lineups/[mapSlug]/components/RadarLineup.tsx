import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

import { Lineup } from "@/types/Lineup";

interface RadarLineupProps {
  lineup: Lineup;
  mapSlug: string;
  nadeType?: string;
  lineupSlug?: string;
  onHover: (lineup: Lineup | null) => void;
  onMousePos: (pos: { x: number; y: number }) => void;
}

const RadarLineup = ({
  lineup,
  mapSlug,
  nadeType,
  lineupSlug,
  onHover,
  onMousePos,
}: RadarLineupProps) => {
  const router = useRouter();
  const lineupUrl = `/lineups/${mapSlug}/${nadeType || "all"}/${lineup.id}`;
  const isSelected = lineup.id === Number(lineupSlug);
  const pathD = lineup.points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const handleMouseMove = (e: React.MouseEvent) => {
    onMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => onHover(lineup);
  const handleMouseLeave = () => onHover(null);
  const handleClick = () => router.push(lineupUrl);

  return (
    <g className="group">
      {/* Hitbox Path */}
      <path
        d={pathD}
        fill="none"
        stroke="white"
        strokeOpacity={0}
        strokeWidth={30}
        className="peer cursor-pointer touch-manipulation"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />

      {/* Visible Path */}
      <path
        d={pathD}
        fill="none"
        strokeWidth={isSelected ? "4" : "2"}
        strokeDasharray="4 4"
        className={twMerge(
          "pointer-events-none stroke-4 opacity-40 transition-all [stroke-dasharray:8_4] group-hover:opacity-100",
          isSelected && "opacity-100",
          lineup.type === "smoke" && "stroke-nade-smoke",
          lineup.type === "molly" && "stroke-nade-molly",
          lineup.type === "he" && "stroke-nade-he",
          lineup.type === "flash" && "stroke-nade-flash",
        )}
      />

      {/* Animation Circle */}
      {isSelected && (
        <circle
          r="8"
          fill={
            {
              smoke: "#fff",
              molly: "#f97316",
              he: "#22c55e",
              flash: "#3b82f6",
            }[lineup.type]
          }
          className="pointer-events-none"
          style={{
            filter: `drop-shadow(0 0 8px ${
              {
                smoke: "rgba(255,255,255,0.8)",
                molly: "rgba(249,115,22,0.8)",
                he: "rgba(34,197,94,0.8)",
                flash: "rgba(59,130,246,0.8)",
              }[lineup.type]
            })`,
          }}
        >
          <animateMotion
            dur={`${lineup.duration || 2}s`}
            repeatCount="indefinite"
            path={pathD}
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3 0.8 0.4 1"
          />
        </circle>
      )}

      {/* Start Position */}
      {lineup.points.length > 0 && (
        <circle
          cx={lineup.points[0].x}
          cy={lineup.points[0].y}
          r="5"
          className={twMerge(
            "peer-hover:r-7 cursor-pointer opacity-75 transition-all",
            lineup.type === "smoke" && "fill-nade-smoke",
            lineup.type === "molly" && "fill-nade-molly",
            lineup.type === "he" && "fill-nade-he",
            lineup.type === "flash" && "fill-nade-flash",
          )}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
      )}

      {/* End Position */}
      {lineup.points.length > 1 && (
        <circle
          cx={lineup.points[lineup.points.length - 1].x}
          cy={lineup.points[lineup.points.length - 1].y}
          r={
            lineup.type === "smoke"
              ? "35"
              : lineup.type === "molly"
                ? "25"
                : "5"
          }
          className={twMerge(
            "cursor-pointer opacity-0 transition-all group-hover:opacity-100",
            isSelected && "opacity-100",
            lineup.type === "smoke" && "fill-nade-smoke group-hover:opacity-50",
            lineup.type === "molly" && "fill-nade-molly group-hover:opacity-50",
            isSelected &&
              (lineup.type === "smoke" || lineup.type === "molly") &&
              "opacity-50",
            lineup.type === "he" && "fill-nade-he",
            lineup.type === "flash" && "fill-nade-flash",
          )}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
      )}
    </g>
  );
};

export default RadarLineup;

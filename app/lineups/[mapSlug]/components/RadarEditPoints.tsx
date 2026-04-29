import { Point } from "@/types/Point";

interface RadarEditPointsProps {
  points: Point[];
  isReadOnly: boolean;
}

const RadarEditPoints = ({ points, isReadOnly }: RadarEditPointsProps) => {
  if (isReadOnly || points.length === 0) return null;

  return (
    <g>
      {/* New points path */}
      <path
        d={points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="opacity-60"
      />
      {/* New points circles */}
      {points.map((p, i) => (
        <circle
          key={`new-point-${i}`}
          cx={p.x}
          cy={p.y}
          r="5"
          className="fill-primary shadow-lg"
        />
      ))}
    </g>
  );
};

export default RadarEditPoints;

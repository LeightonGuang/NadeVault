import { twMerge } from "tailwind-merge";
import { Precision } from "@/types/Precision";

const PrecisionMeter = ({ precision }: { precision: Precision }) => {
  const precisionColors = {
    "Very Forgiving": "bg-green-500",
    Forgiving: "bg-yellow-500",
    Precise: "bg-orange-500",
    "Pixel Perfect": "bg-red-500",
  };

  return (
    <div className="flex">
      {Object.entries(precisionColors).map(([key, className]) => (
        <div
          key={key}
          className={twMerge(
            "w-1/4 py-1 text-center text-sm leading-none",
            className,
          )}
        >
          {precision === key ? precision : ""}
        </div>
      ))}
    </div>
  );
};

export default PrecisionMeter;

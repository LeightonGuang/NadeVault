import { Lineup } from "@/types/Lineup";
import PrecisionMeter from "../../components/PrecisionMeter";

const InfoCard = ({ lineup }: { lineup: Lineup | undefined }) => {
  return (
    <div className="w-1/3 overflow-y-auto bg-red-900 p-4">
      {lineup ? (
        <div>
          <h2 className="font-[Hoover] text-xl font-medium text-white">
            {lineup.name}
          </h2>

          <iframe
            className="aspect-9/16 w-full mt-4"
            src={lineup.youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <div>{lineup.description || "No description"}</div>

          <h3>Difficulty</h3>
          <PrecisionMeter precision={lineup.precision} />

          <h3>Team</h3>
          <div>{lineup.team}</div>

          <h3>Type</h3>
          <div>{lineup.type}</div>

          <div className="flex items-center gap-2">
            <h3>Duration:</h3>
            <p>{lineup.duration} seconds</p>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-[Hoover] font-medium text-white">
            No lineup available
          </span>
        </div>
      )}
    </div>
  );
};

export default InfoCard;

import { twMerge } from "tailwind-merge";
import Radar from "../[mapSlug]/components/Radar";
import InfoCard from "../[mapSlug]/components/InfoCard";

import { MapSlug } from "@/types/Map";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";

const RadarAndInfo = ({
  mapSlug,
  lineups,
  selectedLineup,
  lineupSlug,
  nadeType,
  className,
}: {
  mapSlug: MapSlug;
  lineups: Lineup[];
  selectedLineup: Lineup | undefined;
  lineupSlug?: string;
  nadeType?: NadeType | "all";
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "mx-auto flex h-full min-h-0 w-full flex-1 gap-8 p-4",
        className,
      )}
    >
      <Radar
        className="bg-black/25"
        mapSlug={mapSlug}
        isReadOnly={true}
        lineups={lineups}
        lineupSlug={lineupSlug}
        nadeType={nadeType}
      />

      <InfoCard
        className="h-full w-full overflow-y-auto bg-red-900 p-4"
        lineup={selectedLineup || lineups[0]}
      />
    </div>
  );
};

export default RadarAndInfo;

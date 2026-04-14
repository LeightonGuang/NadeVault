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
  nade,
}: {
  mapSlug: MapSlug;
  lineups: Lineup[];
  selectedLineup: Lineup | undefined;
  lineupSlug?: string;
  nade?: NadeType | "all";
}) => {
  return (
    <div className="mx-auto min-h-0 w-full max-w-7xl flex-1">
      <div className="flex h-full min-h-0 justify-between gap-4 p-4">
        <Radar
          mapSlug={mapSlug}
          isReadOnly={true}
          lineups={lineups}
          lineupSlug={lineupSlug}
          nade={nade}
        />

        <InfoCard lineup={selectedLineup || lineups[0]} />
      </div>
    </div>
  );
};

export default RadarAndInfo;

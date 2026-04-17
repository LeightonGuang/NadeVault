import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "../../components/MapSelector";
import RadarAndInfo from "@/app/lineups/components/RadarAndInfo";

import { MapSlug } from "@/types/Map";
import { NadeType } from "@/types/Nade";

const LineupPage = async ({
  params,
}: {
  params: Promise<{
    mapSlug: MapSlug;
    nade: NadeType | "all";
    lineupSlug: string;
  }>;
}) => {
  const { mapSlug, nade, lineupSlug } = await params;
  const lineups = await fetchLineups(mapSlug, nade);
  const lineup = lineups.find((l) => l.id === parseInt(lineupSlug));

  return (
    <>
      <MapSelector mapSlug={mapSlug} />

      <RadarAndInfo
        mapSlug={mapSlug}
        lineups={lineups}
        selectedLineup={lineup}
        lineupSlug={lineupSlug}
        nade={nade}
      />
    </>
  );
};

export default LineupPage;

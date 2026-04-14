import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "../components/MapSelector";
import RadarAndInfo from "../../components/RadarAndInfo";

import { MapSlug } from "@/types/Map";

const NadePage = async ({
  params,
}: {
  params: Promise<{
    mapSlug: MapSlug;
    nade: "all" | "flash" | "smoke" | "molly" | "he";
  }>;
}) => {
  const { mapSlug, nade } = await params;

  const lineups = await fetchLineups(mapSlug, nade);

  const lineup = lineups[0];

  return (
    <>
      <MapSelector mapSlug={mapSlug} />

      <RadarAndInfo
        mapSlug={mapSlug}
        lineups={lineups}
        selectedLineup={lineup}
        nade={nade}
      />
    </>
  );
};

export default NadePage;

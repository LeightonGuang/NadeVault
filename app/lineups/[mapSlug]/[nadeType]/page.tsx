import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "../components/MapSelector";
import RadarAndInfo from "../../components/RadarAndInfo";

import { MapSlug } from "@/types/Map";

const NadePage = async ({
  params,
}: {
  params: Promise<{
    mapSlug: MapSlug;
    nadeType: "all" | "flash" | "smoke" | "molly" | "he";
  }>;
}) => {
  const { mapSlug, nadeType } = await params;

  const lineups = await fetchLineups(mapSlug, nadeType);

  const lineup = lineups[0];

  return (
    <section className="h-section flex flex-col">
      <MapSelector mapSlug={mapSlug} />

      <RadarAndInfo
        className="max-w-section-max-width"
        mapSlug={mapSlug}
        lineups={lineups}
        selectedLineup={lineup}
        nadeType={nadeType}
      />
    </section>
  );
};

export default NadePage;

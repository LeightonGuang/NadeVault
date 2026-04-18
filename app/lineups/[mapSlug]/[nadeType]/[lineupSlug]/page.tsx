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
    nadeType: NadeType | "all";
    lineupSlug: string;
  }>;
}) => {
  const { mapSlug, nadeType, lineupSlug } = await params;
  const lineups = await fetchLineups(mapSlug, nadeType);
  const lineup = lineups.find((l) => l.id === parseInt(lineupSlug));

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

export default LineupPage;

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
    <section className="h-section flex flex-col overflow-hidden">
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-md">
        <MapSelector mapSlug={mapSlug} className="mx-auto" />
      </div>

      <div className="min-h-0 flex-1 overflow-hidden">
        <RadarAndInfo
          className="max-w-section-max-width"
          mapSlug={mapSlug}
          lineups={lineups}
          selectedLineup={lineup}
          nadeType={nadeType}
        />
      </div>
    </section>
  );
};

export default LineupPage;

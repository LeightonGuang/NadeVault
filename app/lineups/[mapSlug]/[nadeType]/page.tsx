import getMaps from "@/utils/getMaps";
import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "../components/MapSelector";
import RadarAndInfo from "../components/RadarAndInfo";

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
  const map = getMaps(mapSlug)[0];

  if (!map) return <div>Map not found</div>;

  const lineup = lineups[0];

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
          radars={map.radars}
        />
      </div>
    </section>
  );
};

export default NadePage;

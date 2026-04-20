import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "./components/MapSelector";
import RadarAndInfo from "../components/RadarAndInfo";

import { MapSlug } from "@/types/Map";

const MapPage = async ({
  params,
}: {
  params: Promise<{ mapSlug: MapSlug }>;
}) => {
  const { mapSlug } = await params;
  const lineups = await fetchLineups(mapSlug);

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
          selectedLineup={lineups[0]}
        />
      </div>
    </section>
  );
};

export default MapPage;

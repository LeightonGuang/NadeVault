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
    <section className="h-section flex flex-col">
      <MapSelector mapSlug={mapSlug} />

      <RadarAndInfo
        className="max-w-section-max-width"
        mapSlug={mapSlug}
        lineups={lineups}
        selectedLineup={lineups[0]}
      />
    </section>
  );
};

export default MapPage;

import Radar from "./components/Radar";
import InfoCard from "./components/InfoCard";
import { fetchLineups } from "@/lib/api/lineups";
import MapSelector from "./components/MapSelector";

import { MapSlug } from "@/types/Map";
import RadarAndInfo from "../components/RadarAndInfo";

const MapPage = async ({
  params,
}: {
  params: Promise<{ mapSlug: MapSlug }>;
}) => {
  const { mapSlug } = await params;
  const lineups = await fetchLineups(mapSlug);

  return (
    <>
      <MapSelector mapSlug={mapSlug} />

      <RadarAndInfo
        mapSlug={mapSlug}
        lineups={lineups}
        selectedLineup={lineups[0]}
      />
    </>
  );
};

export default MapPage;

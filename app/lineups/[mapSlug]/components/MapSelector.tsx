import Link from "next/link";
import Image from "next/image";
import getMaps from "@/utils/getMaps";
import { twMerge } from "tailwind-merge";

import { MapSlug } from "@/types/Map";

const MapSelector = ({
  className,
  mapSlug,
}: {
  className?: string;
  mapSlug: MapSlug;
}) => {
  const maps = getMaps();

  return (
    <div className={twMerge("flex h-10 w-full overflow-x-auto", className)}>
      {maps.map((map) => (
        <Link
          key={map.name}
          href={map.enabled ? `/lineups/${map.slug}/all` : "#"}
          className={twMerge(
            "hover:bg-primary flex h-full w-max shrink-0 items-center gap-1 px-2 whitespace-nowrap",
            mapSlug === map.slug ? "bg-primary" : "",
            !map.enabled
              ? "pointer-events-none cursor-not-allowed opacity-50"
              : "",
          )}
          title={!map.enabled ? "Coming soon" : map.name}
        >
          <Image
            src={map.emblemUrl}
            alt={map.name}
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-sm font-bold text-white">{map.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MapSelector;

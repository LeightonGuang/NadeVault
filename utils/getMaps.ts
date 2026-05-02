import { MapSlug } from "@/types/Map";

interface Maps {
  name: string;
  slug: MapSlug;
  emblemUrl: string;
  radars: string[];
  enabled: boolean;
}

const getMaps = (mapSlug?: MapSlug): Maps[] => {
  const maps: Maps[] = [
    {
      name: "Ancient",
      slug: "ancient",
      emblemUrl: "/emblem/ancient.png",
      radars: ["/radar/ancient/ancient.png"],
      enabled: true,
    },
    {
      name: "Anubis",
      slug: "anubis",
      emblemUrl: "/emblem/anubis.png",
      radars: ["/radar/anubis/anubis.png"],
      enabled: true,
    },
    {
      name: "Cache",
      slug: "cache",
      emblemUrl: "/emblem/cache.png",
      radars: ["/radar/cache/cache.png"],
      enabled: true,
    },
    {
      name: "Dust 2",
      slug: "dust2",
      emblemUrl: "/emblem/dust2.png",
      radars: ["/radar/dust2/dust2.png"],
      enabled: true,
    },
    {
      name: "Inferno",
      slug: "inferno",
      emblemUrl: "/emblem/inferno.png",
      radars: ["/radar/inferno/inferno.png"],
      enabled: true,
    },
    {
      name: "Mirage",
      slug: "mirage",
      emblemUrl: "/emblem/mirage.png",
      radars: ["/radar/mirage/mirage.png"],
      enabled: true,
    },
    {
      name: "Nuke",
      slug: "nuke",
      emblemUrl: "/emblem/nuke.png",
      radars: ["/radar/nuke/nuke_upper.png", "/radar/nuke/nuke_lower.png"],
      enabled: true,
    },
    {
      name: "Overpass",
      slug: "overpass",
      emblemUrl: "/emblem/overpass.png",
      radars: ["/radar/overpass/overpass.png"],
      enabled: true,
    },
    {
      name: "Train",
      slug: "train",
      emblemUrl: "/emblem/train.png",
      radars: ["/radar/train/train_lower.png", "/radar/train/train_upper.png"],
      enabled: true,
    },
    {
      name: "Vertigo",
      slug: "vertigo",
      emblemUrl: "/emblem/vertigo.png",
      radars: [
        "/radar/vertigo/vertigo_lower.png",
        "/radar/vertigo/vertigo_upper.png",
      ],
      enabled: true,
    },
  ];

  if (mapSlug) {
    const filtered = maps.find((map) => map.slug === mapSlug);
    return filtered ? [filtered] : [];
  } else {
    return maps as Maps[];
  }
};

export default getMaps;

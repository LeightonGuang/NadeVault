import { MapSlug } from "@/types/Map";

const getMaps = () => {
  const maps: {
    name: string;
    slug: MapSlug;
    emblemUrl: string;
    enabled: boolean;
  }[] = [
    {
      name: "Ancient",
      slug: "ancient",
      emblemUrl: "/emblem/ancient.png",
      enabled: true,
    },
    {
      name: "Anubis",
      slug: "anubis",
      emblemUrl: "/emblem/anubis.png",
      enabled: true,
    },
    {
      name: "Cache",
      slug: "cache",
      emblemUrl: "/emblem/cache.png",
      enabled: true,
    },
    {
      name: "Dust 2",
      slug: "dust2",
      emblemUrl: "/emblem/dust2.png",
      enabled: true,
    },
    {
      name: "Inferno",
      slug: "inferno",
      emblemUrl: "/emblem/inferno.png",
      enabled: true,
    },
    {
      name: "Mirage",
      slug: "mirage",
      emblemUrl: "/emblem/mirage.png",
      enabled: true,
    },
    {
      name: "Nuke",
      slug: "nuke",
      emblemUrl: "/emblem/nuke.png",
      enabled: false,
    },
    {
      name: "Overpass",
      slug: "overpass",
      emblemUrl: "/emblem/overpass.png",
      enabled: true,
    },
    {
      name: "Train",
      slug: "train",
      emblemUrl: "/emblem/train.png",
      enabled: false,
    },
    {
      name: "Vertigo",
      slug: "vertigo",
      emblemUrl: "/emblem/vertigo.png",
      enabled: false,
    },
  ];

  return maps;
};

export default getMaps;

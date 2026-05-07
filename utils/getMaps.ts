import { MapSlug } from "@/types/Map";

interface Maps {
  name: string;
  slug: MapSlug;
  imgUrl: string;
  emblemUrl: string;
  radars: string[];
  active: boolean;
  enabled: boolean;
}

const getMaps = (mapSlug?: MapSlug): Maps[] => {
  const maps: Maps[] = [
    {
      name: "Ancient",
      slug: "ancient",
      imgUrl: "/map/ancient.png",
      emblemUrl: "/emblem/ancient.png",
      radars: ["/radar/ancient/ancient.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Anubis",
      slug: "anubis",
      imgUrl: "/map/anubis.png",
      emblemUrl: "/emblem/anubis.png",
      radars: ["/radar/anubis/anubis.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Cache",
      slug: "cache",
      imgUrl: "/map/cache.png",
      emblemUrl: "/emblem/cache.png",
      radars: ["/radar/cache/cache.png"],
      active: false,
      enabled: true,
    },
    {
      name: "Dust 2",
      slug: "dust2",
      imgUrl: "/map/dust2.png",
      emblemUrl: "/emblem/dust2.png",
      radars: ["/radar/dust2/dust2.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Inferno",
      slug: "inferno",
      imgUrl: "/map/inferno.png",
      emblemUrl: "/emblem/inferno.png",
      radars: ["/radar/inferno/inferno.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Mirage",
      slug: "mirage",
      imgUrl: "/map/mirage.png",
      emblemUrl: "/emblem/mirage.png",
      radars: ["/radar/mirage/mirage.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Nuke",
      slug: "nuke",
      imgUrl: "/map/nuke.png",
      emblemUrl: "/emblem/nuke.png",
      radars: ["/radar/nuke/nuke_upper.png", "/radar/nuke/nuke_lower.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Overpass",
      slug: "overpass",
      imgUrl: "/map/overpass.png",
      emblemUrl: "/emblem/overpass.png",
      radars: ["/radar/overpass/overpass.png"],
      active: true,
      enabled: true,
    },
    {
      name: "Train",
      slug: "train",
      imgUrl: "/map/train.png",
      emblemUrl: "/emblem/train.png",
      radars: ["/radar/train/train_lower.png", "/radar/train/train_upper.png"],
      active: false,
      enabled: true,
    },
    {
      name: "Vertigo",
      slug: "vertigo",
      imgUrl: "/map/vertigo.png",
      emblemUrl: "/emblem/vertigo.png",
      radars: [
        "/radar/vertigo/vertigo_lower.png",
        "/radar/vertigo/vertigo_upper.png",
      ],
      active: false,
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

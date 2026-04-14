import { MapSlug } from "@/types/Map";

const getMaps = () => {
  const maps: { name: string; slug: MapSlug; emblemUrl: string }[] = [
    { name: "Ancient", slug: "ancient", emblemUrl: "/emblem/ancient.png" },
    { name: "Anubis", slug: "anubis", emblemUrl: "/emblem/anubis.png" },
    { name: "Dust 2", slug: "dust2", emblemUrl: "/emblem/dust2.png" },
    { name: "Inferno", slug: "inferno", emblemUrl: "/emblem/inferno.png" },
    { name: "Mirage", slug: "mirage", emblemUrl: "/emblem/mirage.png" },
    { name: "Nuke", slug: "nuke", emblemUrl: "/emblem/nuke.png" },
    { name: "Overpass", slug: "overpass", emblemUrl: "/emblem/overpass.png" },
    { name: "Train", slug: "train", emblemUrl: "/emblem/train.png" },
    { name: "Vertigo", slug: "vertigo", emblemUrl: "/emblem/vertigo.png" },
  ];

  return maps;
};

export default getMaps;

"use client";

import Link from "next/link";
import Image from "next/image";
import Pill from "@/components/Pill";
import BackgroundGradient from "@/components/BackgroundGradient";

interface MapItem {
  name: string;
  slug: string;
  active: boolean;
  imgURL: string;
  emblemURL: string;
}

const maps: MapItem[] = [
  {
    name: "Ancient",
    slug: "ancient",
    active: true,
    imgURL: "/map/ancient.png",
    emblemURL: "/emblem/ancient.png",
  },
  {
    name: "Anubis",
    slug: "anubis",
    active: true,
    imgURL: "/map/anubis.png",
    emblemURL: "/emblem/anubis.png",
  },
  {
    name: "Dust 2",
    slug: "dust2",
    active: true,
    imgURL: "/map/dust2.png",
    emblemURL: "/emblem/dust2.png",
  },
  {
    name: "Inferno",
    slug: "inferno",
    active: true,
    imgURL: "/map/inferno.png",
    emblemURL: "/emblem/inferno.png",
  },
  {
    name: "Mirage",
    slug: "mirage",
    active: true,
    imgURL: "/map/mirage.png",
    emblemURL: "/emblem/mirage.png",
  },
  {
    name: "Nuke",
    slug: "nuke",
    active: true,
    imgURL: "/map/nuke.png",
    emblemURL: "/emblem/nuke.png",
  },
  {
    name: "Overpass",
    slug: "overpass",
    active: true,
    imgURL: "/map/overpass.png",
    emblemURL: "/emblem/overpass.png",
  },
  {
    name: "Train",
    slug: "train",
    active: false,
    imgURL: "/map/train.png",
    emblemURL: "/emblem/train.png",
  },
  {
    name: "Vertigo",
    slug: "vertigo",
    active: false,
    imgURL: "/map/vertigo.png",
    emblemURL: "/emblem/vertigo.png",
  },
];

const LineupsPage = () => {
  return (
    <section className="selection:bg-primary/30 bg-background text-foreground min-h-section">
      <BackgroundGradient />

      <div className="max-w-section-max-width relative z-10 mx-auto px-6 py-16">
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="from-primary h-1 w-12 bg-linear-to-r to-transparent" />
            <span className="text-primary text-sm leading-none font-bold tracking-[0.3em] uppercase">
              Lineups
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-black tracking-tighter text-white uppercase italic md:text-7xl">
            Select A Map
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed font-medium text-zinc-400">
            Choose a map to learn a lineup.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {maps.map((map) => (
            <Link
              key={map.slug}
              href={`/lineups/${map.slug}`}
              className="group hover:border-primary relative h-80 overflow-hidden border-4 border-white bg-zinc-900/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]"
            >
              {/* Card Background (Simulation) */}
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 animate-pulse bg-zinc-800 group-hover:hidden" />

              {/* Simulated Map Image / Placeholder */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={map.imgURL}
                  alt={map.name}
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100"
                />
              </div>

              <Image
                className="absolute top-1/2 left-1/2 z-20 aspect-square h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 transform duration-500 group-hover:h-2/5 group-hover:w-2/5"
                src={map.emblemURL}
                alt={map.name}
                width={1280}
                height={1280}
                layout="intrinsic"
              />

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 z-20 flex flex-col items-end">
                <Pill variant={map.active ? "active" : "inactive"}>
                  {map.active ? "Active" : "Inactive"}
                </Pill>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-2 text-center text-2xl leading-none font-medium tracking-tighter text-white uppercase italic">
                    {map.name}
                  </h3>
                </div>
              </div>

              {/* Glowing Corner */}
              <div className="absolute right-0 bottom-0 h-24 w-24 translate-x-12 translate-y-12 rounded-full bg-red-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineupsPage;

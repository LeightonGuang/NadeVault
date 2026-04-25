"use client";

import getMaps from "@/utils/getMaps";
import { fetchLineups } from "@/lib/api/lineups";
import { useState, useEffect, useMemo } from "react";
import Radar from "@/app/lineups/[mapSlug]/components/Radar";

import { Lineup } from "@/types/Lineup";

const HeroRadar = () => {
  const [mounted, setMounted] = useState(false);
  const [lineups, setLineups] = useState<Lineup[]>([]);
  const maps = useMemo(() => getMaps(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const randomMap = useMemo(() => {
    if (!mounted) return null;
    return maps[Math.floor(Math.random() * maps.length)];
  }, [mounted, maps]);

  useEffect(() => {
    if (!randomMap?.slug) return;

    const loadLineups = async () => {
      const data = await fetchLineups(randomMap.slug);
      setLineups(data);
    };

    loadLineups();
  }, [randomMap]);

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      {mounted && randomMap && (
        <Radar isReadOnly mapSlug={randomMap.slug} lineups={lineups} />
      )}
    </div>
  );
};

export default HeroRadar;

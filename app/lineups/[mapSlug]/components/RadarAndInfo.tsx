"use client";

import {
  motion,
  animate,
  useMotionValue,
  AnimatePresence,
  useDragControls,
} from "framer-motion";
import Radar from "./Radar";
import InfoCard from "./InfoCard";
import { twMerge } from "tailwind-merge";
import NadeSelector from "./NadeSelector";
import { useState, useEffect, useRef } from "react";

import { MapSlug } from "@/types/Map";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";

// How much of the drawer is visible when collapsed (peek height)
const PEEK_HEIGHT = 200; // px — enough to show title/thumbnail
const EXPANDED_HEIGHT_VH = 90; // vh — max when dragged up

const RadarAndInfo = ({
  mapSlug,
  lineups,
  selectedLineup,
  lineupSlug,
  nadeType,
  className,
}: {
  mapSlug: MapSlug;
  lineups: Lineup[];
  selectedLineup?: Lineup | undefined;
  lineupSlug?: string;
  nadeType: NadeType | "all";
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dragControls = useDragControls();
  const dragDelta = useMotionValue(0);
  const drawerHeight = useMotionValue(PEEK_HEIGHT);

  const prevLineupId = useRef<string | number | undefined>(selectedLineup?.id);

  const getTargetHeight = (expanded: boolean) =>
    expanded ? window.innerHeight * (EXPANDED_HEIGHT_VH / 100) : PEEK_HEIGHT;

  useEffect(() => {
    const hasChanged = selectedLineup?.id !== prevLineupId.current;
    prevLineupId.current = selectedLineup?.id;

    if (hasChanged && selectedLineup && window.innerWidth < 768) {
      setIsExpanded(true);
      animate(drawerHeight, getTargetHeight(true), {
        type: "spring",
        damping: 30,
        stiffness: 300,
      });
    }
  }, [selectedLineup]);

  const snapDrawer = (expanded: boolean) => {
    setIsExpanded(expanded);
    animate(drawerHeight, getTargetHeight(expanded), {
      type: "spring",
      damping: 30,
      stiffness: 300,
    });
  };

  return (
    <div
      className={twMerge(
        "relative mx-auto flex h-full flex-col md:w-max md:flex-row md:gap-8 md:p-4",
        className,
      )}
    >
      <div className="absolute top-4 left-4 z-50 md:relative md:top-auto md:left-auto">
        <NadeSelector mapSlug={mapSlug} currentNadeType={nadeType} />
      </div>

      {/* ── Radar fills remaining space above drawer ── */}
      <Radar
        mapSlug={mapSlug}
        isReadOnly={true}
        lineups={lineups}
        lineupSlug={lineupSlug || selectedLineup?.id?.toString()}
        nadeType={nadeType}
      />

      {/* ── Mobile Backdrop ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => snapDrawer(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            style={{ WebkitBackdropFilter: "blur(4px)" }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer — sits at the bottom of the flex column ── */}
      <motion.div
        className="relative z-50 flex w-full shrink-0 flex-col overflow-hidden border-t border-white/10 shadow-[0_-8px_30px_rgb(0,0,0,0.5)] md:hidden"
        style={{
          height: drawerHeight,
          backgroundColor: "rgba(5, 5, 5, 0.9)",
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
          borderRadius: "24px 24px 0 0",
        }}
        drag="y"
        dragControls={dragControls}
        dragConstraints={false}
        dragElastic={0}
        _dragY={dragDelta}
        onDrag={(_, info) => {
          // Resize height live as the user drags
          const next = drawerHeight.get() - info.delta.y;
          const min = PEEK_HEIGHT;
          const max = window.innerHeight * (EXPANDED_HEIGHT_VH / 100);
          drawerHeight.set(Math.min(max, Math.max(min, next)));
        }}
        onDragEnd={(_, info) => {
          const threshold = 60;
          if (info.offset.y < -threshold && !isExpanded) {
            snapDrawer(true);
          } else if (info.offset.y > threshold && isExpanded) {
            snapDrawer(false);
          } else {
            // snap back to current state
            snapDrawer(isExpanded);
          }
        }}
      >
        {/* Handle */}
        <div
          className="flex w-full shrink-0 cursor-pointer touch-none flex-col items-center justify-center px-4 text-2xl"
          onPointerDown={(e) => dragControls.start(e)}
          onClick={() => snapDrawer(!isExpanded)}
        >
          <div className="mt-4 h-1.5 w-12 rounded-full bg-white/20" />
          <h2 className="my-2 w-full font-[hoover] font-bold text-white">
            {selectedLineup?.name || "No lineup selected"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6">
          <InfoCard lineup={selectedLineup} />
        </div>
      </motion.div>

      {/* ── Desktop Sidebar ── */}
      <div className="hidden h-full md:block md:w-[400px] lg:w-[450px]">
        <InfoCard
          className="h-full w-full overflow-y-auto border border-white/5 bg-white/5 p-6 backdrop-blur-sm md:rounded-2xl"
          lineup={selectedLineup}
        />
      </div>
    </div>
  );
};

export default RadarAndInfo;

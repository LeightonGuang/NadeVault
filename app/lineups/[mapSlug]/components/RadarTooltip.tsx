import PrecisionMeter from "./PrecisionMeter";
import { motion, AnimatePresence } from "framer-motion";

import { Lineup } from "@/types/Lineup";

interface RadarTooltipProps {
  hoveredLineup: Lineup | null;
  mousePos: { x: number; y: number };
}

const RadarTooltip = ({ hoveredLineup, mousePos }: RadarTooltipProps) => {
  return (
    <AnimatePresence>
      {hoveredLineup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          style={{
            position: "fixed",
            left: mousePos.x + 15,
            top: mousePos.y + 15,
            pointerEvents: "none",
            zIndex: 100,
          }}
          className="hidden w-48 rounded-xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-md md:block"
        >
          <p className="mb-2 text-xs font-bold tracking-widest text-white/50 uppercase">
            Precision
          </p>
          <PrecisionMeter scale={hoveredLineup.precision} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RadarTooltip;

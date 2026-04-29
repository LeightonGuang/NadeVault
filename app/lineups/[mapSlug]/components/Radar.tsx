"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import RadarLineup from "./RadarLineup";
import RadarTooltip from "./RadarTooltip";
import RadarToolbar from "./RadarToolbar";
import RadarEditPoints from "./RadarEditPoints";

import { Point } from "@/types/Point";
import { MapSlug } from "@/types/Map";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";

const Radar = ({
  mapSlug,
  isReadOnly = false,
  lineups,
  lineupSlug,
  nadeType = "all",
  className,
  onPointsChange,
  points: controlledPoints,
}: {
  mapSlug: MapSlug;
  isReadOnly?: boolean;
  lineups: Lineup[];
  lineupSlug?: string;
  nadeType?: NadeType | "all";
  className?: string;
  onPointsChange?: (points: Point[]) => void;
  points?: Point[];
}) => {
  const [scale, setScale] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [internalPoints, setInternalPoints] = useState<Point[]>([]);
  const [hoveredLineup, setHoveredLineup] = useState<Lineup | null>(null);
  const mapWidth = 1024;
  const mapHeight = 1024;

  const svgRef = useRef<SVGSVGElement>(null);
  const points =
    controlledPoints !== undefined ? controlledPoints : internalPoints;

  const updatePoints = (newPoints: Point[]) => {
    if (controlledPoints !== undefined) {
      onPointsChange?.(newPoints);
    } else {
      setInternalPoints(newPoints);
      onPointsChange?.(newPoints);
    }
  };

  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || isReadOnly) return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    const newPoints = [...points, { x, y }];
    updatePoints(newPoints);
  };

  const clearPoints = () => {
    updatePoints([]);
  };

  const undoPoints = () => {
    updatePoints(points.slice(0, -1));
  };

  useEffect(() => {
    console.log({ points });
  }, [points]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-square h-full w-auto overflow-hidden md:rounded-2xl md:border md:border-white/5 md:bg-black/25",
        className,
      )}
    >
      <TransformWrapper
        onTransformed={(ref) => setScale(ref.state.scale)}
        panning={{ disabled: scale <= 1 }}
        minScale={1}
        initialScale={1}
      >
        {({ resetTransform }) => (
          <div className="relative h-full w-full">
            <TransformComponent
              wrapperClass="!h-full !w-full"
              contentClass="!h-full !w-full flex items-center justify-center"
            >
              <div className="flex h-full w-full items-center justify-center">
                <section className="relative flex h-full w-full flex-col items-center justify-center p-4">
                  <div className="relative aspect-square w-full">
                    <div className="relative h-full w-full">
                      <Image
                        className="pointer-events-none aspect-square h-full w-full object-contain select-none"
                        draggable={false}
                        src={`/radar/${mapSlug}.png`}
                        alt={mapSlug}
                        width={mapWidth}
                        height={mapHeight}
                        priority
                      />
                    </div>

                    {/* lineups overlay */}
                    <svg
                      ref={svgRef}
                      viewBox={`0 0 ${mapWidth} ${mapHeight}`}
                      className={`absolute inset-0 h-full w-full touch-none ${
                        isReadOnly ? "cursor-default" : "cursor-crosshair"
                      }`}
                      onClick={handleSvgClick}
                    >
                      <g>
                        {lineups?.map((lineup) => (
                          <RadarLineup
                            key={`lineup-${lineup.id}`}
                            lineup={lineup}
                            mapSlug={mapSlug}
                            nadeType={nadeType}
                            lineupSlug={lineupSlug}
                            onHover={setHoveredLineup}
                            onMousePos={setMousePos}
                          />
                        ))}
                      </g>

                      <RadarEditPoints
                        points={points}
                        isReadOnly={isReadOnly}
                      />
                    </svg>
                  </div>
                </section>
              </div>
            </TransformComponent>

            <RadarToolbar
              isReadOnly={isReadOnly}
              pointsLength={points.length}
              mapSlug={mapSlug}
              isAdmin={isAdmin}
              onUndo={undoPoints}
              onClear={clearPoints}
            />

            {/* Reset Zoom Button */}
            {scale > 1.01 && (
              <button
                onClick={() => {
                  resetTransform();
                  setScale(1);
                }}
                className="absolute right-6 bottom-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20 active:scale-95"
                title="Reset Zoom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>
            )}
          </div>
        )}
      </TransformWrapper>

      <RadarTooltip hoveredLineup={hoveredLineup} mousePos={mousePos} />
    </div>
  );
};

export default Radar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

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
  const mapWidth = 1024;
  const mapHeight = 1024;
  const svgRef = useRef<SVGSVGElement>(null);
  const [internalPoints, setInternalPoints] = useState<Point[]>([]);
  const points = controlledPoints !== undefined ? controlledPoints : internalPoints;

  const updatePoints = (newPoints: Point[]) => {
    if (controlledPoints !== undefined) {
      onPointsChange?.(newPoints);
    } else {
      setInternalPoints(newPoints);
      onPointsChange?.(newPoints);
    }
  };
  const [scale, setScale] = useState(1);

  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  const router = useRouter();

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
        "aspect-square h-full w-auto mx-auto overflow-hidden md:rounded-2xl md:border md:border-white/5 md:bg-black/25",
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
                        {/* line button */}
                        {lineups?.map((lineup) => {
                          const lineupUrl = `/lineups/${mapSlug}/${nadeType || "all"}/${lineup.id}`;
                          const isSelected = lineup.id === Number(lineupSlug);
                          const pathD = lineup.points
                            .map(
                              (p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`,
                            )
                            .join(" ");

                          return (
                            <g key={`lineup-${lineup.id}`} className="group">
                              {/* Hitbox Path */}
                              <path
                                d={pathD}
                                fill="none"
                                stroke="white"
                                strokeOpacity={0}
                                strokeWidth={30}
                                className="peer cursor-pointer touch-manipulation"
                                onClick={() => router.push(lineupUrl)}
                              />

                              {/* Visible Path */}
                              <path
                                d={pathD}
                                fill="none"
                                strokeWidth={isSelected ? "4" : "2"}
                                strokeDasharray="4 4"
                                className={twMerge(
                                  "pointer-events-none stroke-4 opacity-40 transition-all [stroke-dasharray:4_4] group-hover:opacity-100",
                                  isSelected && "opacity-100",
                                  lineup.type === "smoke" &&
                                    "stroke-nade-smoke",
                                  lineup.type === "molly" &&
                                    "stroke-nade-molly",
                                  lineup.type === "he" && "stroke-nade-he",
                                  lineup.type === "flash" &&
                                    "stroke-nade-flash",
                                )}
                              />

                              {/* Animation Circle */}
                              {isSelected && (
                                <circle
                                  key={`anim-${lineup.id}`}
                                  r="8"
                                  fill={
                                    {
                                      smoke: "#fff",
                                      molly: "#f97316",
                                      he: "#22c55e",
                                      flash: "#3b82f6",
                                    }[lineup.type]
                                  }
                                  className="pointer-events-none"
                                  style={{
                                    filter: `drop-shadow(0 0 8px ${
                                      {
                                        smoke: "rgba(255,255,255,0.8)",
                                        molly: "rgba(249,115,22,0.8)",
                                        he: "rgba(34,197,94,0.8)",
                                        flash: "rgba(59,130,246,0.8)",
                                      }[lineup.type]
                                    })`,
                                  }}
                                >
                                  <animateMotion
                                    dur={`${lineup.duration || 2}s`}
                                    repeatCount="indefinite"
                                    path={pathD}
                                    calcMode="spline"
                                    keyTimes="0; 1"
                                    keySplines="0.3 0.8 0.4 1"
                                  />
                                </circle>
                              )}

                              {/* Start Position */}
                              {lineup.points.length > 0 && (
                                <circle
                                  cx={lineup.points[0].x}
                                  cy={lineup.points[0].y}
                                  r="5"
                                  className={twMerge(
                                    "peer-hover:r-7 cursor-pointer opacity-75 transition-all",
                                    lineup.type === "smoke" &&
                                      "fill-nade-smoke",
                                    lineup.type === "molly" &&
                                      "fill-nade-molly",
                                    lineup.type === "he" && "fill-nade-he",
                                    lineup.type === "flash" &&
                                      "fill-nade-flash",
                                  )}
                                  onClick={() => {
                                    router.push(lineupUrl);
                                  }}
                                />
                              )}

                              {/* End Position */}
                              {lineup.points.length > 1 && (
                                <circle
                                  cx={lineup.points[lineup.points.length - 1].x}
                                  cy={lineup.points[lineup.points.length - 1].y}
                                  r={
                                    lineup.type === "smoke"
                                      ? "35"
                                      : lineup.type === "molly"
                                        ? "25"
                                        : "5"
                                  }
                                  className={twMerge(
                                    "peer-hover:r-10 cursor-pointer transition-all",
                                    lineup.type === "smoke" &&
                                      "fill-nade-smoke opacity-50",
                                    lineup.type === "molly" &&
                                      "fill-nade-molly opacity-50",
                                    lineup.type === "he" && "fill-nade-he",
                                    lineup.type === "flash" &&
                                      "fill-nade-flash",
                                  )}
                                  onClick={() => {
                                    router.push(lineupUrl);
                                  }}
                                />
                              )}
                            </g>
                          );
                        })}
                      </g>

                      {/* New points being edited */}
                      {!isReadOnly && points.length > 0 && (
                        <g>
                          {/* New points path */}
                          <path
                            d={points
                              .map(
                                (p, i) =>
                                  `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`,
                              )
                              .join(" ")}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="opacity-60"
                          />
                          {/* New points circles */}
                          {points.map((p, i) => (
                            <circle
                              key={`new-point-${i}`}
                              cx={p.x}
                              cy={p.y}
                              r="5"
                              className="fill-primary shadow-lg"
                            />
                          ))}
                        </g>
                      )}
                    </svg>
                  </div>
                </section>
              </div>
            </TransformComponent>

            {/* Toolbar - Moved outside TransformComponent to avoid zooming */}
            {!isReadOnly ? (
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <Link
                  href={`/lineups/${mapSlug}${isAdmin ? "?admin=true" : ""}`}
                  className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
                >
                  Back to View
                </Link>
                <button
                  onClick={undoPoints}
                  disabled={points.length === 0}
                  className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Undo
                </button>
                <button
                  onClick={clearPoints}
                  disabled={points.length === 0}
                  className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Clear Map
                </button>
              </div>
            ) : (
              isAdmin && (
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <Link
                    href={`/lineups/${mapSlug}/edit?admin=true`}
                    className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
                  >
                    Edit Lineup
                  </Link>
                </div>
              )
            )}

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
    </div>
  );
};

export default Radar;

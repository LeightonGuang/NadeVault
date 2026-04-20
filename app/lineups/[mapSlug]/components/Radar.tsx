"use client";

import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { MapSlug } from "@/types/Map";
import { Point } from "@/types/Point";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";

const Radar = ({
  mapSlug,
  isReadOnly = false,
  lineups,
  lineupSlug,
  nadeType = "all",
  className,
}: {
  mapSlug: MapSlug;
  isReadOnly?: boolean;
  lineups: Lineup[];
  lineupSlug?: string;
  nadeType?: NadeType | "all";
  className?: string;
}) => {
  const mapWidth = 1024;
  const mapHeight = 1024;
  const svgRef = useRef<SVGSVGElement>(null);
  const [points, setPoints] = useState<Point[]>([]);

  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  const router = useRouter();

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || isReadOnly) return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    setPoints((prev) => [...prev, { x, y }]);
  };

  const clearPoints = () => setPoints([]);

  useEffect(() => {
    console.log({ points });
  }, [points]);

  return (
    <div
      className={twMerge(
        "min-h-0 flex-1 overflow-hidden border border-white/5 bg-black/25",
        className,
      )}
    >
      <TransformWrapper>
        <TransformComponent
          wrapperClass="!h-full !w-full"
          contentClass="!h-full !w-full flex items-center justify-center"
        >
          <div className="flex h-full w-full items-center justify-center">
            <section className="relative flex h-full w-full flex-col items-center justify-center p-4">
              {/* Toolbar */}
              {!isReadOnly ? (
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <Link
                    href={`/lineups/${mapSlug}${isAdmin ? "?admin=true" : ""}`}
                    className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
                  >
                    Back to View
                  </Link>
                  <button
                    onClick={clearPoints}
                    className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
                  >
                    Clear Map
                  </button>
                </div>
              ) : (
                isAdmin && (
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <Link
                      href={`/lineups/${mapSlug}/edit?admin=true`}
                      className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
                    >
                      Edit Lineup
                    </Link>
                  </div>
                )
              )}

              <div className="relative aspect-square h-full w-full max-h-full max-w-full">
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
                        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
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
                              lineup.type === "smoke" && "stroke-nade-smoke",
                              lineup.type === "molly" && "stroke-nade-molly",
                              lineup.type === "he" && "stroke-nade-he",
                              lineup.type === "flash" && "stroke-nade-flash",
                            )}
                          />

                          {/* Animation Circle */}
                          {isSelected && (
                            <circle
                              r="4"
                              fill={
                                {
                                  smoke: "#fff",
                                  molly: "#f97316",
                                  he: "#22c55e",
                                  flash: "#3b82f6",
                                }[lineup.type]
                              }
                              className="shadow-lg"
                            >
                              <animateMotion
                                dur={`${lineup.duration}s`}
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
                                "peer-hover:r-7 opacity-75 transition-all cursor-pointer",
                                lineup.type === "smoke" && "fill-nade-smoke",
                                lineup.type === "molly" && "fill-nade-molly",
                                lineup.type === "he" && "fill-nade-he",
                                lineup.type === "flash" && "fill-nade-flash",
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
                                "peer-hover:r-10 transition-all cursor-pointer",
                                lineup.type === "smoke" &&
                                  "fill-nade-smoke opacity-50",
                                lineup.type === "molly" &&
                                  "fill-nade-molly opacity-50",
                                lineup.type === "he" && "fill-nade-he",
                                lineup.type === "flash" && "fill-nade-flash",
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
                </svg>
              </div>
            </section>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Radar;

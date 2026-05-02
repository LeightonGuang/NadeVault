"use client";

import {
  CodeIcon,
  CopyIcon,
  UndoIcon,
  TrashIcon,
  CrosshairIcon,
} from "@/assets/icons";
import { useState } from "react";
import getMaps from "@/utils/getMaps";
import Radar from "../components/Radar";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundGradient from "@/components/BackgroundGradient";

import { Point } from "@/types/Point";
import { MapSlug } from "@/types/Map";

const EditLineupPage = () => {
  const params = useParams();
  const mapSlug = (params.mapSlug as MapSlug) || "dust2";
  const [points, setPoints] = useState<Point[]>([]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(points, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-background text-foreground h-section relative flex flex-col overflow-hidden">
      <BackgroundGradient />

      <div className="max-w-section-max-width relative z-10 mx-auto flex w-full flex-1 flex-col overflow-hidden px-6 py-4 lg:py-6">
        <header className="mb-4 shrink-0 lg:mb-6">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">
            <span className="text-primary/60">Vaulted</span>
            <span className="text-zinc-700">/</span>
            <span>Lineup Editor</span>
            <span className="text-zinc-700">/</span>
            <span className="text-white">{mapSlug}</span>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 overflow-hidden lg:grid-cols-12">
          {/* Radar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative flex min-h-0 flex-1 flex-col items-center justify-center lg:col-span-8"
          >
            <div className="relative aspect-square h-full p-4 md:p-0">
              <div className="from-primary absolute -inset-2 rounded-[2rem] bg-linear-to-r to-blue-600 opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
              <div className="from-primary absolute -inset-0.5 rounded-2xl bg-linear-to-r to-blue-600 opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
              <Radar
                mapSlug={mapSlug}
                isReadOnly={false}
                lineups={[]}
                points={points}
                onPointsChange={setPoints}
                className="relative z-10 h-full w-full shadow-2xl"
                radars={getMaps(mapSlug)[0]?.radars || []}
              />
            </div>
          </motion.div>

          {/* Controls & Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex min-h-0 flex-col gap-6 lg:col-span-4"
          >
            {/* Stats Card */}
            <div className="shrink-0 rounded-2xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                  <CrosshairIcon className="text-primary h-5 w-5" />
                  Map Points
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPoints(points.slice(0, -1))}
                    disabled={points.length === 0}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    title="Undo Last Point"
                  >
                    <UndoIcon />
                  </button>
                  <button
                    onClick={() => setPoints([])}
                    disabled={points.length === 0}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                    title="Clear All Points"
                  >
                    <TrashIcon />
                  </button>
                  <span className="bg-primary/20 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-bold">
                    {points.length}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-zinc-400">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                    <span className="text-xs font-bold text-white">01</span>
                  </div>
                  <p>
                    First click sets the{" "}
                    <span className="font-semibold text-white">
                      Start Position
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-zinc-400">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                    <span className="text-xs font-bold text-white">02</span>
                  </div>
                  <p>
                    Subsequent clicks define the{" "}
                    <span className="font-semibold text-white">
                      Flight Path
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-zinc-400">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                    <span className="text-xs font-bold text-white">03</span>
                  </div>
                  <p>
                    Final click marks the{" "}
                    <span className="font-semibold text-white">
                      Landing Zone
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* JSON Output */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/80 shadow-2xl">
              <div className="flex shrink-0 items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                  <CodeIcon />
                  Lineup Data
                </div>
                <button
                  onClick={copyToClipboard}
                  disabled={points.length === 0}
                  className="flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copied ? (
                    <span className="text-green-500">Copied!</span>
                  ) : (
                    <>
                      <CopyIcon />
                      Copy JSON
                    </>
                  )}
                </button>
              </div>
              <div className="custom-scrollbar flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {points.length > 0 ? (
                    <motion.pre
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-sm leading-relaxed"
                    >
                      <code className="text-primary/90">"points": </code>
                      <code className="text-blue-400">[</code>
                      <div className="pl-4">
                        {points.map((p, i) => (
                          <div key={i} className="group text-zinc-100">
                            <span className="text-zinc-500">{`{ `}</span>
                            <span className="text-zinc-300">x: </span>
                            {p.x.toFixed(1)}
                            <span className="text-zinc-300">, y: </span>
                            {p.y.toFixed(1)}
                            <span className="text-zinc-500">{` }`}</span>
                            {i < points.length - 1 && (
                              <span className="text-zinc-500">,</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <code className="text-blue-400">]</code>
                    </motion.pre>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-600">
                        <CrosshairIcon />
                      </div>
                      <p className="text-sm font-medium text-zinc-500">
                        Waiting for coordinate input...
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditLineupPage;

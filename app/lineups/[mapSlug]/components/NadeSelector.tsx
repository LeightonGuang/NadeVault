"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MapSlug } from "@/types/Map";
import { NadeType } from "@/types/Nade";
import { SmokeIcon } from "@/assets/icons";

const nadeTypes: {
  label: string;
  value: NadeType | "all";
  icon: React.ReactNode;
  color: string;
}[] = [
  {
    label: "All Nades",
    value: "all",
    color: "#fff",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    ),
  },
  {
    label: "Smoke",
    value: "smoke",
    color: "var(--color-nade-smoke)",
    icon: <SmokeIcon />,
  },
  {
    label: "Flash",
    value: "flash",
    color: "var(--color-nade-flash)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    ),
  },
  {
    label: "Molotov",
    value: "molly",
    color: "var(--color-nade-molly)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 7 7 7 11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11C17 7 12 2 12 2Z" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "HE Grenade",
    value: "he",
    color: "var(--color-nade-he)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <rect x="10" y="5" width="4" height="2" fill="black" />
      </svg>
    ),
  },
];

const NadeSelector = ({
  mapSlug,
  currentNadeType,
}: {
  mapSlug: MapSlug;
  currentNadeType: NadeType | "all";
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentType =
    nadeTypes.find((t) => t.value === currentNadeType) || nadeTypes[0];

  // Close dropdown on selection or when clicking outside
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentNadeType]);

  return (
    <div className="relative inline-block w-max max-w-full shrink-0 text-left md:w-56">
      {/* Mobile Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-max items-center justify-between gap-3 rounded-2xl bg-black/80 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl focus:outline-none md:hidden"
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10"
            style={{ color: currentType.color }}
          >
            {currentType.icon}
          </div>
          <span className="font-medium text-white">{currentType.label}</span>
        </div>
        <svg
          className={twMerge(
            "h-5 w-5 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu / Desktop Sidebar */}
      <AnimatePresence>
        {(isOpen || !mounted || window.innerWidth >= 768) && (
          <motion.div
            initial={isOpen ? { opacity: 0, y: -10 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={twMerge(
              "absolute top-full left-0 z-[60] mt-2 w-max min-w-full rounded-2xl bg-black/90 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl md:relative md:top-auto md:z-auto md:mt-0 md:block md:bg-black/80",
              !isOpen && "hidden md:block",
            )}
          >
            <div className="flex flex-col gap-1">
              {nadeTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => {
                    router.push(`/lineups/${mapSlug}/${type.value}`);
                    setIsOpen(false);
                  }}
                  className={twMerge(
                    "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all hover:cursor-pointer",
                    currentNadeType === type.value
                      ? "text-white"
                      : "text-gray-400 hover:text-white",
                  )}
                >
                  {currentNadeType === type.value && (
                    <motion.div
                      layoutId="active-highlight"
                      className="bg-primary absolute inset-0 rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <div
                    className={twMerge(
                      "relative z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-black/20 transition-colors group-hover:bg-white/10",
                      currentNadeType === type.value && "bg-white/20",
                    )}
                    style={{
                      color:
                        currentNadeType === type.value ? "#fff" : type.color,
                    }}
                  >
                    {type.icon}
                  </div>
                  <span className="relative z-10 flex-1">{type.label}</span>
                  {currentNadeType === type.value && (
                    <motion.div layoutId="check" className="relative z-10">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NadeSelector;

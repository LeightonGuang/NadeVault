"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import getNavItems from "@/utils/getNavItems";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = getNavItems();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="h-nav-height fixed top-0 right-0 left-0 z-100 border-b border-white/5 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-section-max-width relative z-100 mx-auto px-4">
        <div className="h-nav-height flex items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/home"
              className="font-[Hoover] text-2xl font-bold tracking-tight uppercase transition-all duration-200"
            >
              <h1>
                <span className="text-primary leading-none">Nade</span>
                <span className="leading-none text-white"> Vault</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) =>
              link.enabled ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:border-primary hover:text-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.label}
                  className="inline-flex cursor-default items-center px-1 pt-1 text-sm font-medium uppercase opacity-50"
                  title="Coming soon!"
                >
                  {link.label}
                </span>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-primary relative p-2 text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="flex h-6 w-6 flex-col items-end justify-center gap-1.5">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 7.5, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-0.5 bg-current"
                />
                <motion.span
                  animate={
                    isOpen
                      ? { opacity: 0, x: 20 }
                      : { opacity: 1, x: 0, width: "70%" }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-0.5 bg-current"
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -7.5, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-0.5 bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-80 bg-black/60 backdrop-blur-sm sm:hidden"
            />

            {/* Content Overflowing from Header Bottom */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="absolute top-full right-0 left-0 z-90 overflow-hidden border-b border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-2xl sm:hidden"
            >
              <div className="flex flex-col space-y-1 p-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.enabled ? link.href : "#"}
                      onClick={() => setIsOpen(false)}
                      className={twMerge(
                        "block rounded-xl px-4 py-4 text-xl font-black tracking-tighter uppercase italic transition-all",
                        link.enabled
                          ? "hover:text-primary text-white hover:bg-white/5 active:scale-95"
                          : "opacity-30",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

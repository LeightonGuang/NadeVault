"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/assets/icons";
import getSocialLinks from "@/utils/getSocialLinks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SocialsClient = () => {
  const socialLinks = getSocialLinks();

  return (
    <>
      {/* Background Decor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-primary/20 absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 blur-[120px]"
      />
      <div className="bg-primary/5 absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[500px]"
      >
        {/* Profile Header */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="border-primary/20 mb-6 flex size-24 items-center justify-center gap-0.25 rounded-full border bg-zinc-900 shadow-2xl transition-transform hover:scale-110">
            <span className="text-primary font-[hoover] text-4xl font-black">
              N
            </span>
            <span className="font-[hoover] text-4xl font-black text-white">
              V
            </span>
          </div>
          <h1 className="mb-2 font-[hoover] text-3xl font-black tracking-tight uppercase">
            <span className="text-primary">Nade </span>Vault
          </h1>
          <p className="max-w-xs text-sm text-zinc-400">
            Master every lineup. Built by a competitive player, for competitive
            players.
          </p>
        </motion.div>

        {/* Links Container */}
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary relative flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-white italic shadow-lg shadow-red-900/40 transition-all [clip-path:var(--button-clip-path)] hover:scale-105 hover:bg-red-700 active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="bg-black/20 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors group-hover:bg-black/30">
                  {link.icon}
                </div>
                <span className="font-bold tracking-wide uppercase not-italic">
                  {link.name}
                </span>
              </div>
              <ArrowRightIcon />
            </motion.a>

          ))}
        </div>

        {/* Footer info/Social Icons at bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={`footer-${link.name}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-white"
              aria-label={link.name}
            >
              <div className="h-6 w-6">{link.icon}</div>
            </a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-20 text-center">
          <Link
            href="/home"
            className="text-primary text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-80"
          >
            nadevault.com
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SocialsClient;

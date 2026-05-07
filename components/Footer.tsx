import Link from "next/link";
import { twMerge } from "tailwind-merge";
import getNavItems from "@/utils/getNavItems";
import getSocialLinks from "@/utils/getSocialLinks";

const Footer = () => {
  const navLinks = getNavItems();
  const socialLinks = getSocialLinks();

  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950">
      <div className="max-w-section-max-width mx-auto px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/home">
              <h2 className="font-[hoover] text-lg font-black uppercase">
                <span className="text-primary">Nade</span>{" "}
                <span className="text-white">Vault</span>
              </h2>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Master every lineup. Built by a competitive player, for
              competitive players.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wider text-zinc-400 uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2 text-sm">
              {navLinks.map((link) =>
                link.enabled ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-zinc-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span
                    key={link.label}
                    className="cursor-default text-zinc-500 opacity-50"
                    title="Coming soon!"
                  >
                    {link.label}
                  </span>
                ),
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wider text-zinc-400 uppercase">
              <Link
                href="/socials"
                className="transition-colors hover:text-white"
              >
                Socials
              </Link>
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-white"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-600">
          ©{" "}
          {2026 === new Date().getFullYear()
            ? new Date().getFullYear()
            : `2026 - ${new Date().getFullYear()}`}{" "}
          Nade Vault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

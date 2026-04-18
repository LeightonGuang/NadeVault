import Link from "next/link";
import getNavItems from "@/utils/getNavItems";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const navLinks = getNavItems();

  return (
    <nav className="h-nav-height fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-section-max-width mx-auto px-4">
        <div className="h-nav-height flex items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/home"
              className="font-[Hoover] text-2xl font-bold tracking-tight uppercase transition-all duration-200 hover:scale-102"
            >
              <h1>
                <span className="text-primary leading-none">Nade</span>
                <span className="leading-none text-white"> Vault</span>
              </h1>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.enabled ? link.href : "#"}
                className={twMerge(
                  "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium uppercase transition-colors",
                  link.enabled
                    ? "hover:border-primary hover:text-primary text-foreground"
                    : "opacity-50 hover:cursor-default",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-primary transform cursor-pointer px-4 py-2 text-sm font-medium text-white italic shadow-lg shadow-red-900/40 transition-all [clip-path:var(--button-clip-path)] hover:scale-105 hover:bg-red-700 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

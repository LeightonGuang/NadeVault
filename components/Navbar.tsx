import Link from "next/link";

const navLinks = [
  {
    href: "/home",
    label: "Home",
    enabled: true,
  },
  {
    href: "/lineups/dust2",
    label: "Lineups",
    enabled: true,
  },
  {
    href: "/cheater-checker",
    label: "Cheater Checker",
    enabled: false,
  },
  {
    href: "/contact",
    label: "Contact",
    enabled: true,
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 h-(--nav-height) border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-(--nav-height) max-w-(--max-width) items-center justify-between">
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
                className={`inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white uppercase transition-colors ${link.enabled ? "text-foreground hover:border-primary hover:text-primary" : "text-foreground/40 hover:cursor-default"} `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-primary transform italic cursor-pointer px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-900/40 transition-all [clip-path:var(--button-clip-path)] hover:scale-105 hover:bg-red-700 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

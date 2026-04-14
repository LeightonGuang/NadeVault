const getNavItems = () => {
  return [
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
      href: "/tips",
      label: "Tips",
      enabled: true,
    },
    {
      href: "/updates",
      label: "Updates",
      enabled: true,
    },
  ];
};

export default getNavItems;

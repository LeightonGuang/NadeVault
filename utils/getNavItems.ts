const getNavItems = () => {
  return [
    {
      href: "/lineups/all",
      label: "Lineups",
      enabled: true,
    },
    {
      href: "/playbook",
      label: "Playbook",
      enabled: false,
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

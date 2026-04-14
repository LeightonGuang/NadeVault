const Pill = ({
  children,
  variant,
  style = "default",
}: {
  children: React.ReactNode;
  variant: "active" | "inactive";
  style?: "default" | "dot";
}) => {
  return style === "default" ? (
    <span
      className={`rounded-full border border-white/5 px-3 py-1 text-[0.625rem] font-black uppercase transition-colors ${
        variant === "active"
          ? "bg-primary text-white"
          : "bg-zinc-800 text-zinc-400"
      }`}
    >
      {children}
    </span>
  ) : (
    <span className=""></span>
  );
};

export default Pill;

import { twMerge } from "tailwind-merge";

const Pill = ({
  children,
  variant,
  style = "default",
}: {
  children: React.ReactNode;
  variant: "active" | "inactive" | "dark-red";
  style?: "default" | "dot";
}) => {
  const pillStyle = {
    active: "bg-primary text-white",
    inactive: "bg-zinc-800 text-zinc-400",
    "dark-red": "border-primary/20 bg-primary/5 text-primary",
  };

  return style === "default" ? (
    <span
      className={twMerge(
        `rounded-full border border-white/5 px-3 py-1 text-xs font-bold tracking-widest uppercase transition-colors`,
        pillStyle[variant],
      )}
    >
      {children}
    </span>
  ) : (
    <span className=""></span>
  );
};

export default Pill;

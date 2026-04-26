import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-sm md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;

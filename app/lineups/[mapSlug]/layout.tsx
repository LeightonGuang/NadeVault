import BackgroundGradient from "@/components/BackgroundGradient";

const LineupLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background h-section relative">
      <BackgroundGradient />

      {children}
    </div>
  );
};

export default LineupLayout;

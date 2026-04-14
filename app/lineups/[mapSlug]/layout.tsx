import BackgroundGradient from "@/components/BackgroundGradient";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-background relative h-[calc(100dvh-var(--nav-height))]">
      <BackgroundGradient />

      <div className="flex h-full flex-col">{children}</div>
    </section>
  );
};

export default layout;

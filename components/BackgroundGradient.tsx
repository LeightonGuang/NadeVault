const BackgroundGradient = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-red-600/15 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full bg-red-600/10 blur-[120px]" />
    </div>
  );
};

export default BackgroundGradient;

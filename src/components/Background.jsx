function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen top-0 left-0">
      <div className="w-full py-10 flex justify-center text-zinc-700 font-semibold text-xl">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
  );
}

export default Background;

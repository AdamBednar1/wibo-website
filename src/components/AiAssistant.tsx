export default function AiAssistant() {
  return (
    <section id="features" className="bg-wibo-dark text-white px-10 py-16">
      <div className="max-w-[1648px] mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm text-white/60">01</span>
          <span className="text-sm text-white">Kompetentný tool</span>
        </div>

        {/* Phone mockups */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-16">
          <div className="relative w-[200px] h-[400px] bg-neutral-800 rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-orange-500/10" />
          </div>
          <div className="relative w-[200px] h-[400px] bg-neutral-800 rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-orange-500/10" />
          </div>
        </div>

        {/* Bold typography block */}
        <div className="flex flex-col gap-2">
          <p className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-tight text-white">
            • 24/7
          </p>
          <p className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-tight text-white">
            •{" "}
            <span className="relative">
              <span className="relative z-10">MODERNÝ</span>
              <span className="absolute inset-0 bg-green-500 px-2 -skew-x-1" />
            </span>
          </p>
          <p className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-tight text-white">
            •{" "}
            <span>
              AKT
              <span className="relative">
                <span className="relative z-10">ÍV</span>
                <span className="absolute inset-0 bg-green-500 px-1 -skew-x-1" />
              </span>
              NY
            </span>
          </p>
          <p className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-tight text-white">
            • DOSTUPNÝ
          </p>
        </div>
      </div>
    </section>
  );
}

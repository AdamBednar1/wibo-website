export default function ContentSection() {
  return (
    <section className="bg-wibo-dark text-white px-10 py-16">
      <div className="max-w-[1648px] mx-auto relative overflow-hidden">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm text-white/60">03</span>
          <span className="text-sm text-white">Obsah</span>
        </div>

        {/* Phone mockups row */}
        <div className="flex flex-wrap gap-4 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[140px] h-[280px] bg-neutral-800 rounded-2xl border border-white/10 shrink-0"
            />
          ))}
        </div>

        {/* Large blue circle */}
        <div className="hidden md:block absolute right-[-50px] top-1/3 w-[300px] h-[300px] rounded-full bg-wibo-primary opacity-80" />

        {/* Culture movies subsection */}
        <div className="relative z-10 max-w-[600px]">
          <h3 className="text-xl font-medium text-white mb-4">
            Culture movies
          </h3>
          <p className="text-base leading-6 text-white/80 mb-6">
            Vytvárajte video obsah, ktorý zachytáva kultúru vašej spoločnosti a
            priťahuje tých správnych kandidátov. Od produkčných videí až po
            firemné akcie — všetko na jednom mieste.
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              Produkčné video
            </span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              PR video
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Reklama
            </span>
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
              Firemná akcia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Dashboards() {
  return (
    <section className="bg-wibo-dark text-white px-10 py-16">
      <div className="max-w-[1648px] mx-auto relative overflow-hidden">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm text-white/60">02</span>
          <span className="text-sm text-white">Dashboxy</span>
        </div>

        {/* Large blue circle */}
        <div className="hidden md:block absolute right-[-50px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-wibo-primary opacity-80" />

        {/* Content blocks */}
        <div className="relative z-10 flex flex-col gap-12">
          {/* Block 1 */}
          <div className="max-w-[500px]">
            <p className="text-base leading-6 text-white/80">
              Získajte prehľad o vašom profile. Sledujte správanie návštevníkov
              vášho profilu a zmerajte dopad vašich kampaní na zásadné KPIs.
              Overte si, či sa Návratnosť Investície (Return on Investment)
              nachádza na správnej úrovni.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-wibo-dark-primary underline text-base"
            >
              Deň profilu / funnelový / dashbord...
            </a>
          </div>

          {/* Block 2 */}
          <div className="max-w-[500px]">
            <p className="text-base leading-6 text-white/80">
              Využite naše nástroje a analytiku a dosiahnete rozhodnutia,
              založené na dátach pre maximalizáciu vašej stratégie a efektívneho
              náboru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

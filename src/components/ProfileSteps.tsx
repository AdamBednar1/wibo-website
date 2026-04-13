const steps = [
  { label: "VOLBA VYTVORENIA PROFILU", active: true },
  { label: "VÝBER BALÍČKA", active: false },
  { label: "VYPLNENIE FORMULÁRA", active: false },
  { label: "ZVEREJNENIE PROFILU", active: false },
];

export default function ProfileSteps() {
  return (
    <section className="bg-wibo-dark text-white px-10 py-20">
      <div className="max-w-[1648px] mx-auto">
        {/* Main heading */}
        <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-tight tracking-tight text-white">
          VYTVORENIE
          <br />
          SÚKROMNÉHO PROFILU
        </h2>

        {/* Steps list */}
        <div className="mt-12 flex flex-col gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`w-2 h-2 rounded-full shrink-0 ${
                  step.active ? "bg-white" : "bg-white/30"
                }`}
              />
              <span
                className={`text-[24px] md:text-[28px] lg:text-[36px] font-bold tracking-tight ${
                  step.active ? "text-white" : "text-white/30"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-12">
          <button className="bg-wibo-primary text-white rounded-full px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity">
            Môžem napovědieť?
          </button>
        </div>
      </div>
    </section>
  );
}

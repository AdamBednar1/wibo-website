export default function WiboStudios() {
  return (
    <section className="bg-wibo-dark text-white px-10 py-16">
      <div className="max-w-[1648px] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-medium text-white mb-10">Wibo Studios</h2>

        {/* Phone mockups */}
        <div className="flex gap-6 mb-10">
          <div className="w-[200px] h-[400px] bg-neutral-800 rounded-2xl border border-white/10" />
          <div className="w-[200px] h-[400px] bg-neutral-800 rounded-2xl border border-white/10" />
        </div>

        {/* Description */}
        <p className="text-base text-white/80 max-w-[500px] mb-4">
          V štábe, ktoré majú na vaše potreby a personalizovanú obsah.
        </p>

        {/* Caption */}
        <p className="text-sm text-white/60 max-w-[600px]">
          <span className="uppercase font-medium">CAPTION:</span> Začnite
          budovania kariérnej značky so štúdiami Wibo a vytvárajte obsah na
          podporu kandidátov Dobre O.
        </p>
      </div>
    </section>
  );
}

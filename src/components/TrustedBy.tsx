import Image from "next/image";

const logos = [
  { src: "/images/logos/armstrong.svg", alt: "Armstrong" },
  { src: "/images/logos/leaf.svg", alt: "Leaf" },
  { src: "/images/logos/kiuub.svg", alt: "Kiuub" },
  { src: "/images/logos/growni.svg", alt: "Growni" },
  { src: "/images/logos/sparring.svg", alt: "Sparring" },
  { src: "/images/logos/dasato.svg", alt: "Dasato" },
  { src: "/images/logos/jas.svg", alt: "JAS" },
  { src: "/images/logos/kickresume.svg", alt: "Kickresume" },
];

export default function TrustedBy() {
  return (
    <section className="px-10 py-8">
      {/* Label */}
      <p className="uppercase text-2xl tracking-[-1.2px] text-wibo-on-surface-variant leading-[0.9] max-w-[1220px] mx-auto">
        (TRUSTED BY)
      </p>

      {/* Logo row */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8 max-w-[1648px] mx-auto">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={32}
            className="h-8 w-auto object-contain opacity-80"
          />
        ))}
      </div>
    </section>
  );
}

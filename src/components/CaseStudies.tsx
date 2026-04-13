import Image from "next/image";

interface CaseStudyCard {
  stat: string;
  testimonial: string;
  avatarSrc: string;
  name: string;
  role: string;
}

const cards: CaseStudyCard[] = [
  {
    stat: "81%",
    testimonial:
      "Spolupráca s touto firmou bola od začiatku výnimočná. Oceňujem profesionálny prístup, rýchlu komunikáciu a ochotu vždy nájsť riešenie. Výsledok predčil moje očakávania a kvalita práce bola na špičkovej úrovni. Celý proces prebehol hladko a bez stresu. Určite odporúčam každému, kto hľadá spoľahlivého partnera.",
    avatarSrc: "/images/avatar.jpg",
    name: "Peter Marek",
    role: "Search developer, UI / Sensoneo",
  },
  {
    stat: "81%",
    testimonial:
      "Spolupráca s touto firmou bola od začiatku výnimočná. Oceňujem profesionálny prístup, rýchlu komunikáciu a ochotu vždy nájsť riešenie. Výsledok predčil moje očakávania a kvalita práce bola na špičkovej úrovni. Celý proces prebehol hladko a bez stresu. Určite odporúčam každému, kto hľadá spoľahlivého partnera.",
    avatarSrc: "/images/avatar.jpg",
    name: "Peter Marek",
    role: "Search developer, UI / Sensoneo",
  },
  {
    stat: "81%",
    testimonial:
      "Spolupráca s touto firmou bola od začiatku výnimočná. Oceňujem profesionálny prístup, rýchlu komunikáciu a ochotu vždy nájsť riešenie. Výsledok predčil moje očakávania a kvalita práce bola na špičkovej úrovni. Celý proces prebehol hladko a bez stresu. Určite odporúčam každému, kto hľadá spoľahlivého partnera.",
    avatarSrc: "/images/avatar.jpg",
    name: "Peter Marek",
    role: "Search developer, UI / Sensoneo",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-wibo-surface-container-low px-10 py-16">
      <h2 className="text-[57px] leading-[0.9] tracking-[-2.85px] text-center text-wibo-on-surface mb-6">
        Case studies
      </h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-[1648px] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 bg-wibo-surface-container-high rounded-3xl p-6 flex flex-col gap-6"
          >
            <p className="text-[78px] leading-[0.9] tracking-[-3.12px] text-wibo-on-surface">
              {card.stat}
            </p>

            <p className="text-base leading-6 text-wibo-on-surface-variant tracking-[0.5px]">
              {card.testimonial}
            </p>

            <div className="flex items-center gap-3">
              <Image
                src={card.avatarSrc}
                alt={card.name}
                width={44}
                height={44}
                className="rounded-xl object-cover"
              />
              <div>
                <p className="text-base font-medium text-wibo-on-surface-variant">
                  {card.name}
                </p>
                <p className="text-base font-normal text-wibo-on-surface-variant">
                  {card.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

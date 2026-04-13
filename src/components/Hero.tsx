export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:px-[254px] md:py-32">
      <div className="flex flex-col items-center gap-6 max-w-[808px] mx-auto">
        {/* Headline */}
        <h1 className="text-[40px] md:text-[80px] leading-[0.9] tracking-[-2px] md:tracking-[-4.8px] text-wibo-on-surface text-center font-normal">
          Budujte svoju značku a nájdite talent rýchlo
        </h1>

        {/* Subtitle */}
        <p className="text-base leading-6 text-wibo-on-surface-variant tracking-[0.5px] text-center">
          Vytvorte si pútavý, mobilne optimalizovaný profil za pár minút,
          prispôsobte si svoju stránku tak, aby prezentovala vašu jedinečnú
          značku a zdôraznila, prečo ste najlepším miestom na prácu, a pridajte
          neobmedzené množstvo video obsahu, výhod, odporúčaní zamestnancov,
          ocenení a mnoho ďalšieho.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-block bg-wibo-primary text-wibo-on-primary rounded-full px-6 py-4 text-base font-medium hover:opacity-90 transition-opacity"
        >
          Bookni si demo
        </a>
      </div>
    </section>
  );
}

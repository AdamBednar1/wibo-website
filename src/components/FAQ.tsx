"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Neviem sa zaregistrovať, čo mám robiť?",
    answer:
      "1. Skontrolujte či je kombinácia mena a hesla správne zadaná.\n2. Zmeňte si heslo (viac tu).\n3. Ak ani jedna z vyššie uvedených možností nepomohla, kontaktujte našu technickú podporu na: tech.support@otion.email",
  },
  {
    question: "Ako môžem zmeniť svoje heslo?",
    answer:
      "Prejdite do nastavení vášho účtu a kliknite na možnosť zmeny hesla. Zadajte aktuálne heslo a potom nové heslo.",
  },
  {
    question: "Aké platobné metódy akceptujete?",
    answer:
      "Akceptujeme platby kartou (Visa, Mastercard), bankovým prevodom a platby cez PayPal.",
  },
  {
    question: "Kde nájdem svoju faktúru?",
    answer:
      "Faktúry nájdete v sekcii Môj účet > Fakturácia. Všetky faktúry sú dostupné na stiahnutie vo formáte PDF.",
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-wibo-surface px-6 py-10 md:px-[254px] md:py-16">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 order-2 md:order-1">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-wibo-outline/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center py-4 w-full text-left cursor-pointer"
              >
                <span className="text-[22px] leading-7 text-wibo-on-surface">
                  {item.question}
                </span>
                <ChevronIcon isOpen={openIndex === index} />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base leading-6 text-wibo-on-surface-variant tracking-[0.5px] pb-4 whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-[57px] leading-[0.9] tracking-[-2.85px] text-wibo-on-surface">
            FAQ
          </h2>
        </div>
      </div>
    </section>
  );
}

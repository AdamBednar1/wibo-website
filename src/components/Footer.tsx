"use client";

import Image from "next/image";
import Link from "next/link";

const communities = [
  "Primary Students",
  "Secondary Students",
  "University Students",
  "Graduates",
  "Working Professionals",
  "Parents",
];

const organizations = [
  "High Schools",
  "Universities",
  "Employers",
  "Educational Institutions",
  "Creators",
  "Regions",
  "Cities",
];

const whoWeAre = [
  "About Us",
  "Career",
  "Manifesto",
  "Contact",
  "FAQs",
];

const socials = [
  { name: "Instagram", src: "/images/social/instagram.svg" },
  { name: "TikTok", src: "/images/social/tiktok.svg" },
  { name: "YouTube", src: "/images/social/youtube.svg" },
  { name: "Facebook", src: "/images/social/facebook.svg" },
  { name: "LinkedIn", src: "/images/social/linkedin.svg" },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-wibo-on-surface-variant opacity-60 tracking-[0.25px] mb-8">
        {title}
      </span>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-sm text-wibo-on-surface-variant leading-5 tracking-[0.25px] hover:opacity-70 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-wibo-surface px-10 pt-16">
      {/* Section 1: Social links */}
      <div className="border-t border-wibo-outline" />
      <div className="flex items-center gap-8 py-8">
        <span className="text-sm text-wibo-on-surface-variant opacity-60">
          Follow us
        </span>
        <div className="flex items-center gap-3.5">
          {socials.map((social) => (
            <Link key={social.name} href="#" aria-label={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={48}
                height={48}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-wibo-outline" />

      {/* Section 2: Footer columns + Newsletter */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 py-16">
        {/* Left: Navigation columns */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6">
          <FooterColumn title="Communities" items={communities} />
          <FooterColumn title="Organizations" items={organizations} />
          <FooterColumn title="Who we are" items={whoWeAre} />
        </div>

        {/* Right: Newsletter */}
        <div className="w-full lg:w-[501px]">
          <h3 className="text-[22px] leading-7 text-wibo-on-surface">
            Prihláste sa do newslettera
          </h3>

          {/* Email input */}
          <div className="relative mt-8">
            <label className="absolute top-2 left-4 text-xs text-wibo-on-surface-variant">
              Email
            </label>
            <input
              type="email"
              placeholder="patrick@wibo.ai"
              className="w-full border border-wibo-outline rounded-xl h-14 px-4 pt-5 pb-2 text-sm text-wibo-on-surface bg-transparent outline-none focus:border-wibo-primary transition-colors"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-wibo-surface-container-high transition-colors"
              aria-label="Send"
            >
              <Image
                src="/images/icons/send.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Privacy text */}
          <p className="mt-6 text-[11px] text-wibo-on-surface-variant opacity-60 leading-4">
            Prihlásením sa súhlasíte so zasielaním marketingových e-mailov od
            Wibo.ai. Kedykoľvek sa môžete odhlásiť.{" "}
            <Link href="#" className="underline">
              (Zásady ochrany osobných údajov)
            </Link>
          </p>

          {/* Subscribe button */}
          <button
            type="button"
            className="mt-6 bg-wibo-secondary-container text-wibo-on-secondary-container rounded-full px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Odoberať
          </button>
        </div>
      </div>

      {/* Section 3: Bottom bar */}
      <div className="border-t border-wibo-outline" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 gap-4">
        {/* Left: Legal links */}
        <div className="flex flex-col">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-wibo-on-surface-variant underline hover:opacity-70 transition-opacity"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-wibo-on-surface-variant underline hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-wibo-on-surface-variant underline hover:opacity-70 transition-opacity"
            >
              Cookies
            </Link>
          </div>
          <span className="text-sm text-wibo-on-surface-variant mt-4">
            &copy;Wibo 2022 - 2026
          </span>
        </div>

        {/* Center: Language switcher */}
        <div className="flex">
          <button
            type="button"
            className="flex items-center gap-2 border border-wibo-outline-variant rounded-l-[20px] px-4 py-2 hover:bg-wibo-surface-container-high transition-colors"
          >
            <Image
              src="/images/icons/globe.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-sm text-wibo-on-surface-variant">
              Slovak
            </span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-12 h-10 border border-wibo-outline-variant rounded-r-[20px] border-l-0 hover:bg-wibo-surface-container-high transition-colors"
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#6E6E6E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right: Scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-wibo-dark-primary rounded-full p-3 hover:opacity-90 transition-opacity"
          aria-label="Scroll to top"
        >
          <Image
            src="/images/icons/arrow-up.svg"
            alt=""
            width={28}
            height={28}
            className="invert"
          />
        </button>
      </div>

      {/* Section 4: Wordmark */}
      <div className="overflow-hidden">
        <Image
          src="/images/wibo-wordmark.svg"
          alt="Wibo"
          width={1920}
          height={392}
          className="w-full h-auto max-h-[392px]"
        />
      </div>
    </footer>
  );
}

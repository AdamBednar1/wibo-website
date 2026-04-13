"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-wibo-surface border-b-[0.5px] border-wibo-outline">
      <div className="flex items-center justify-between px-10 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/images/wibo-logo.svg"
              alt="Wibo"
              width={60}
              height={20}
              priority
            />
          </Link>

          {/* Center-left: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-base text-wibo-on-surface hover:opacity-70 transition-opacity"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-base text-wibo-on-surface hover:opacity-70 transition-opacity"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Right: Actions (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 text-wibo-primary hover:opacity-70 transition-opacity">
            <Image
              src="/images/icons/login.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-base">Log In</span>
          </button>

          <button className="text-base text-wibo-primary hover:opacity-70 transition-opacity">
            Vyskúšaj zdarma
          </button>

          <a
            href="#"
            className="bg-wibo-primary text-wibo-on-primary rounded-full px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Bookni si demo
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-wibo-on-surface transition-transform ${
              mobileMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-wibo-on-surface transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-wibo-on-surface transition-transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-10 pb-6 border-t border-wibo-outline">
          <a
            href="#features"
            className="text-base text-wibo-on-surface pt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-base text-wibo-on-surface"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>

          <button className="flex items-center gap-2 text-wibo-primary">
            <Image
              src="/images/icons/login.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="text-base">Log In</span>
          </button>

          <button className="text-base text-wibo-primary text-left">
            Vyskúšaj zdarma
          </button>

          <a
            href="#"
            className="bg-wibo-primary text-wibo-on-primary rounded-full px-4 py-2.5 text-sm font-medium text-center w-fit"
          >
            Bookni si demo
          </a>
        </div>
      )}
    </nav>
  );
}

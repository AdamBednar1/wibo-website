"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-wibo-surface px-6 py-10 md:px-[254px] md:py-16">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-[57px] leading-[0.9] tracking-[-2.85px] text-wibo-on-surface">
            Potrebujete poradiť?
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Meno a priezvisko"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="text-base text-wibo-on-surface pb-4 border-b border-wibo-on-surface bg-transparent outline-none placeholder:text-wibo-on-surface-variant"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="text-base text-wibo-on-surface pb-4 border-b border-wibo-on-surface bg-transparent outline-none placeholder:text-wibo-on-surface-variant"
          />

          <textarea
            placeholder="Správa"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="text-base text-wibo-on-surface pb-4 border-b border-wibo-on-surface bg-transparent outline-none resize-none min-h-[164px] placeholder:text-wibo-on-surface-variant"
          />

          <button
            type="submit"
            className="bg-wibo-secondary-container text-wibo-on-secondary-container rounded-full px-4 py-2.5 text-sm font-medium self-start cursor-pointer hover:opacity-90 transition-opacity"
          >
            Odoslať
          </button>
        </form>
      </div>
    </section>
  );
}

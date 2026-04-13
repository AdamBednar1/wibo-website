# Wibo Profile Page — Design Document

**Date:** 2026-04-13
**Status:** Approved

## What We're Building

A single-page marketing/profile site for Wibo (joinwibo.com) — a Slovak HR/career platform. The page targets B2B employers and universities, showcasing Wibo's profile builder, AI assistant, dashboards, content tools, and studio features.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Font:** Inter (placeholder for "Modern Gothic" — swap when real font files provided)
- **Responsive:** Desktop (1728px) + Mobile (430px)
- **Deployment:** Vercel-ready

## Design Tokens (from Figma)

```
Primary:                #3344E5
On-primary:             #FAFAFA
Surface:                #FAFAFA
On-surface:             #1D1D1D
On-surface-variant:     #6E6E6E
Secondary-container:    #BCC2FF
On-secondary-container: #484E83
Surface-container-high: #E8E8E8
Surface-container-low:  #F3F3F3
Outline:                #C3C3C3
Outline-variant:        #B0B0B1
Dark primary-container: #5061FF
```

## Page Sections (top to bottom)

### 1. Navbar (sticky)
- Wibo logo (left)
- "Features" and "Pricing" anchor links (center-left)
- "Log In" (text+icon), "Vyskusaj zdarma" (text), "Bookni si demo" (filled primary CTA) — right
- Border-bottom 0.5px outline color
- Background: surface (#FAFAFA)

### 2. Hero
- Large headline: "Budujte svoju znacku a najdite talent rychlo" (80px, tight leading 0.9, -4.8px tracking)
- Subtitle paragraph (16px body, on-surface-variant)
- "Bookni si demo" CTA button (primary filled, fully rounded)
- Centered, max-width 808px, padding 128px top/bottom

### 3. Trusted By
- "(TRUSTED BY)" label in uppercase (24px, on-surface-variant)
- 9 company logos in horizontal row: Armstrong, LEAF, kiuub, Growni, sparring, Dasato, Otion, JAS, Kickresume
- Logos spaced evenly with 102px gap

### 4. Case Studies
- Section heading "Case studies" (57px, centered)
- 3 equal cards in a row, rounded-24px, surface-container-high background
- Each card: large stat "81%", testimonial text, avatar + name/role
- Background: surface-container-low (#F3F3F3)

### 5. AI Assistant ("Ai napovednik")
- Section number "01" + "Kompetentny tool" label
- Phone mockup images showing the AI chat interface
- Bold typography block: "24/7 MODERNY AKTIVNY DOSTUPNY" with green highlight bars
- Dark background (#1D1D1D)

### 6. Dashboards ("Dashboxy")
- Section number "02" + "Dashboxy" label
- Large blue circle graphic element
- Description text about analytics/dashboards
- Phone/tablet mockup images
- Dark background (#1D1D1D)

### 7. Content ("Obsah")
- Section number "03" + "Obsah" label
- Row of phone mockup images showing content features
- "Culture movies" subsection with description
- Colored tag pills (Produkne video, PR video, Reklama, Firemna akcia)
- Dark background (#1D1D1D)

### 8. Wibo Studios
- "Wibo Studios" header with mockup images
- Description text about studio features
- Dark background (#1D1D1D)

### 9. Profile Creation Steps
- "VYTVORENIE SUKROMNEHO PROFILU" large heading
- 5 steps listed vertically:
  1. Volba vytvorenia profilu
  2. Vyber balicka
  3. Vyplnenie formulara
  4. Zverejnenie profilu
- Active step highlighted, others faded
- "Mozem napovediet?" CTA button (primary)
- Dark background (#1D1D1D)

### 10. FAQ
- Two-column layout: questions left, "FAQ" heading right
- Accordion items with chevron expand/collapse icons
- First item expanded with answer text
- Separator lines between items
- Background: surface (#FAFAFA)

### 11. Contact Form ("Potrebujete poradit?")
- Two-column: heading left, form right
- Form fields: "Meno a priezvisko", "E-mail", "Sprava" (textarea)
- "Odoslat" submit button (secondary-container style)
- Underline-style inputs

### 12. Footer
- Horizontal divider
- "Follow us" + 5 social icons (Instagram, TikTok, YouTube, Facebook, LinkedIn)
- Horizontal divider
- 4-column layout:
  - Communities (Primary Students, Secondary Students, etc.)
  - Organizations (High Schools, Universities, etc.)
  - Who we are (About Us, Career, Manifesto, Contact, FAQs)
  - Newsletter signup (email input + "Odoberat" button)
- Bottom bar: Terms & Conditions, Privacy Policy, Cookies links | Language switcher (Slovak) | Scroll-to-top button
- Large Wibo wordmark at very bottom
- Background: surface (#FAFAFA)

## Responsive Behavior

- Desktop: 1728px max, content areas ~1220px centered
- Mobile: 430px, single column, stacked layouts
- Navbar: hamburger menu on mobile
- Logo bar: horizontal scroll or 2-row grid on mobile
- Cards: stack vertically on mobile
- Footer columns: stack vertically on mobile

## Assets

All assets downloaded from Figma MCP and stored in `/public/images/`:
- Company logos (9)
- Social media icons (5)
- Wibo logo + wordmark
- Chevron icons
- Divider lines (replaced with CSS borders)
- Phone/tablet mockup images (from screenshots — to be replaced with real assets)

## Out of Scope

- Contact form backend (UI only)
- Newsletter subscription backend (UI only)
- Authentication/login flow
- Language switching logic (UI shell only)
- Actual page routing for Features/Pricing (anchor links only)

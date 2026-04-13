# Wibo Profile Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a pixel-perfect single-page marketing site for Wibo from Figma designs, with responsive desktop + mobile layouts.

**Architecture:** Next.js 14 App Router with a single page route (`/`). All sections are React components composed in the page. Tailwind CSS for styling with custom design tokens. Static site — no backend, no API routes. Assets self-hosted in `/public/`.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Inter font (Google Fonts)

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `next.config.js`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `.gitignore`

**Step 1: Initialize Next.js project**

Run:
```bash
cd ~/dev/wibo-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```
Expected: Project scaffolded with Next.js 14 + Tailwind + TypeScript

**Step 2: Configure Tailwind with Wibo design tokens**

Edit `tailwind.config.ts` — extend theme with:
```typescript
colors: {
  wibo: {
    primary: '#3344E5',
    'on-primary': '#FAFAFA',
    surface: '#FAFAFA',
    'on-surface': '#1D1D1D',
    'on-surface-variant': '#6E6E6E',
    'secondary-container': '#BCC2FF',
    'on-secondary-container': '#484E83',
    'surface-container-high': '#E8E8E8',
    'surface-container-low': '#F3F3F3',
    outline: '#C3C3C3',
    'outline-variant': '#B0B0B1',
    'dark-primary': '#5061FF',
    dark: '#1D1D1D',
  }
},
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

**Step 3: Set up global styles and Inter font**

Edit `src/app/layout.tsx` — import Inter from `next/font/google`, apply to body.
Edit `src/app/globals.css` — add base styles, smooth scroll (`html { scroll-behavior: smooth }`).

**Step 4: Verify dev server starts**

Run: `npm run dev`
Expected: App loads at localhost:3000 with blank page

**Step 5: Initialize git and commit**

Run:
```bash
cd ~/dev/wibo-website
git init
git add .
git commit -m "feat: scaffold Next.js project with Wibo design tokens"
```

---

### Task 2: Download and Organize Assets

**Files:**
- Create: `public/images/logos/` (9 company logos)
- Create: `public/images/social/` (5 social icons)
- Create: `public/images/` (wibo logo, wordmark, icons)

**Step 1: Create asset directories**

Run:
```bash
mkdir -p ~/dev/wibo-website/public/images/{logos,social,icons,mockups}
```

**Step 2: Download all Figma assets**

Download company logos from Figma MCP URLs to `public/images/logos/`:
- armstrong.svg, leaf.svg, kiuub.svg, growni.svg, sparring.svg, dasato.svg, otion.svg, jas.svg, kickresume.svg

Download social icons to `public/images/social/`:
- instagram.svg, tiktok.svg, youtube.svg, facebook.svg, linkedin.svg

Download Wibo branding to `public/images/`:
- wibo-logo.svg (navbar logo)
- wibo-wordmark.svg (footer wordmark)

Download UI icons to `public/images/icons/`:
- chevron-up.svg, chevron-down.svg, arrow-up.svg, globe.svg, login.svg

Note: Figma MCP asset URLs expire in 7 days. Download immediately. For phone mockup images in sections 5-9, use placeholder boxes until Patrick provides real assets.

**Step 3: Commit assets**

Run:
```bash
git add public/
git commit -m "feat: add brand assets from Figma"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Navbar component**

Sticky top navbar with:
- Wibo logo (left, links to top)
- "Features" and "Pricing" anchor links (smooth scroll to `#features` and `#pricing`)
- Right side: "Log In" (text button with icon), "Vyskusaj zdarma" (text button), "Bookni si demo" (filled primary button, fully rounded)
- `bg-wibo-surface border-b border-wibo-outline/50 sticky top-0 z-50`
- Horizontal padding 40px, vertical 16px
- Mobile: hamburger menu that toggles a dropdown

**Step 2: Add to page.tsx**

Import and render Navbar at top of page.

**Step 3: Verify in browser**

Run: `npm run dev`
Check: Navbar is sticky, links scroll smoothly, responsive on mobile.

**Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/page.tsx
git commit -m "feat: add sticky navbar with anchor links"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Hero component**

- Centered content, max-width 808px
- Headline: "Budujte svoju znacku a najdite talent rychlo" — text-[80px], leading-[0.9], tracking-[-4.8px], text-wibo-on-surface
- Subtitle: long Slovak text — text-base, text-wibo-on-surface-variant, leading-6
- CTA: "Bookni si demo" — bg-wibo-primary, text-wibo-on-primary, rounded-full, px-6 py-4
- Padding: 128px top/bottom, 254px left/right (desktop)
- Mobile: text-[40px], padding reduced

**Step 2: Add to page**

**Step 3: Verify in browser — check font sizes, spacing, CTA button**

**Step 4: Commit**

```bash
git commit -m "feat: add hero section with headline and CTA"
```

---

### Task 5: Trusted By Section

**Files:**
- Create: `src/components/TrustedBy.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build TrustedBy component**

- "(TRUSTED BY)" label — uppercase, text-2xl, tracking-[-1.2px], text-wibo-on-surface-variant
- Logo row: 9 company logos, evenly spaced with gap-[102px] (desktop), wrap on mobile
- Each logo: Image component with proper aspect ratios from Figma
- Padding: 32px vertical, 40px horizontal

**Step 2: Add to page**

**Step 3: Verify logos render, spacing matches Figma**

**Step 4: Commit**

```bash
git commit -m "feat: add trusted-by logo section"
```

---

### Task 6: Case Studies Section

**Files:**
- Create: `src/components/CaseStudies.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build CaseStudies component**

- Background: bg-wibo-surface-container-low
- Heading: "Case studies" — text-[57px], leading-[0.9], tracking-[-2.85px], centered
- 3 equal cards in flex row (gap-6):
  - bg-wibo-surface-container-high, rounded-3xl, p-6
  - Stat: "81%" — text-[78px], tracking-[-3.12px]
  - Testimonial text (body-large, on-surface-variant)
  - Avatar (44px, rounded-xl) + name "Peter Marek" (medium weight) + role "Search developer, UI / Sensoneo"
- Mobile: cards stack vertically

**Step 2: Add to page**

**Step 3: Verify card layout, spacing, typography**

**Step 4: Commit**

```bash
git commit -m "feat: add case studies section with testimonial cards"
```

---

### Task 7: Dark Sections (AI Assistant, Dashboards, Content, Studios)

**Files:**
- Create: `src/components/AiAssistant.tsx`
- Create: `src/components/Dashboards.tsx`
- Create: `src/components/ContentSection.tsx`
- Create: `src/components/WiboStudios.tsx`
- Modify: `src/app/page.tsx`

These 4 sections all share a dark background (#1D1D1D) and flow into each other.

**Step 1: Build AiAssistant component**

- Section number "01" + "Kompetentny tool" label (white text)
- Phone mockup placeholder images (orange-tinted screenshots)
- Bold typography block: "24/7", "MODERNY", "AKTIVNY", "DOSTUPNY" — very large text with green (#4CAF50-ish) highlight bars behind some words
- Bullet points with dot markers
- id="features" for navbar anchor

**Step 2: Build Dashboards component**

- Section number "02" + "Dashboxy" label
- Large blue circle decorative element (bg-wibo-primary, rounded-full, ~200px)
- Two text blocks with descriptions
- Feature text mentioning "Den profilu", "Funnelovy..."

**Step 3: Build ContentSection component**

- Section number "03" + "Obsah" label
- Row of phone mockup images
- "Culture movies" subsection heading
- Description text about video content
- Colored tag pills: "Produkcne video" (green), "PR video" (orange), "Reklama" (blue), "Firemna akcia" (purple)
- Large blue circle decorative element

**Step 4: Build WiboStudios component**

- "Wibo Studios" heading
- Phone mockup images
- Description text
- Caption about cooperation

**Step 5: Add all to page in order**

**Step 6: Verify dark sections flow together, typography matches screenshots**

**Step 7: Commit**

```bash
git commit -m "feat: add dark feature sections (AI, dashboards, content, studios)"
```

---

### Task 8: Profile Creation Steps

**Files:**
- Create: `src/components/ProfileSteps.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build ProfileSteps component**

- Dark background (#1D1D1D), continues from previous sections
- Large heading: "VYTVORENIE SUKROMNEHO PROFILU" — bold, white
- 5 vertical steps:
  1. "VOLBA VYTVORENIA PROFILU" (active — white, full opacity)
  2. "VYBER BALICKA" (faded — 40% opacity)
  3. "VYPLNENIE FORMULARA" (faded)
  4. "ZVEREJNENIE PROFILU" (faded)
- Step numbers with dots/markers
- "Mozem napovediet?" CTA button — bg-wibo-primary, white text, rounded-full
- Mobile: same layout, smaller text

**Step 2: Add to page**

**Step 3: Verify step styling, active vs. faded states**

**Step 4: Commit**

```bash
git commit -m "feat: add profile creation steps section"
```

---

### Task 9: FAQ Section

**Files:**
- Create: `src/components/FAQ.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build FAQ component**

- Two-column layout: accordion left, "FAQ" heading right
- Background: surface (#FAFAFA)
- Padding: 64px vertical, 254px horizontal
- FAQ heading: text-[57px], tracking-[-2.85px]
- Accordion items:
  - Question: "Neviem sa zaregistrovat, co mam robit?" — text-[22px]
  - Chevron icon (up when open, down when closed)
  - Separator lines between items
  - First item expanded with numbered answer steps
  - State management: useState for open/closed accordion items
- 4 FAQ items total (all same question in Figma — placeholder content)

**Step 2: Add to page**

**Step 3: Verify accordion expand/collapse works, animations smooth**

**Step 4: Commit**

```bash
git commit -m "feat: add FAQ accordion section"
```

---

### Task 10: Contact Form Section

**Files:**
- Create: `src/components/ContactForm.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build ContactForm component**

- Two-column: heading left, form right
- Heading: "Potrebujete poradit?" — text-[57px], tracking-[-2.85px]
- Form fields (underline-style, no borders except bottom):
  - "Meno a priezvisko" — text input
  - "E-mail" — email input
  - "Sprava" — textarea (tall, ~164px gap before divider)
- "Odoslat" button — bg-wibo-secondary-container, text-wibo-on-secondary-container, rounded-full
- Padding: 64px vertical, 254px horizontal
- Mobile: stack vertically

**Step 2: Add to page**

**Step 3: Verify form layout, input styling**

**Step 4: Commit**

```bash
git commit -m "feat: add contact form section"
```

---

### Task 11: Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Footer component**

Top section:
- Horizontal divider
- "Follow us" label + 5 social media icons (48px each, gap-[14px])
- Horizontal divider

Middle section (4 columns + newsletter):
- Column 1 "Communities": Primary Students, Secondary Students, University Students, Graduates, Working Professionals, Parents
- Column 2 "Organizations": High Schools, Universities, Employers, Educational Institutions, Creators, Regions, Cities
- Column 3 "Who we are": About Us, Career, Manifesto, Contact, FAQs
- Newsletter: "Prihlaste sa do newslettera" heading, email input field (outlined, 12px rounded, with trailing icon button), privacy text, "Odoberat" button

Bottom bar:
- Terms & Conditions, Privacy Policy, Cookies (underlined links)
- Copyright: "Wibo 2022 - 2026"
- Language switcher: split button "Slovak" with globe icon + chevron
- Scroll-to-top button: bg-[#5061FF], rounded-full, arrow-up icon

Wordmark:
- Large Wibo wordmark SVG spanning full width, clipped at bottom

**Step 2: Add to page**

**Step 3: Verify footer columns, newsletter input, social icons, scroll-to-top works**

**Step 4: Commit**

```bash
git commit -m "feat: add footer with newsletter, social links, and wordmark"
```

---

### Task 12: Mobile Responsive Pass

**Files:**
- Modify: All component files in `src/components/`

**Step 1: Add responsive breakpoints to all sections**

Key changes at mobile (< 768px):
- Navbar: hamburger menu toggle
- Hero: text-[40px], reduce padding
- Trusted By: 2-row grid or horizontal scroll
- Case Studies: stack cards vertically
- Dark sections: single column, smaller mockups
- FAQ: single column (heading above accordion)
- Contact: stack heading above form
- Footer: stack columns, full-width inputs

**Step 2: Test at 430px viewport width in browser**

**Step 3: Fix any overflow, text clipping, or spacing issues**

**Step 4: Commit**

```bash
git commit -m "feat: add mobile responsive layouts for all sections"
```

---

### Task 13: Final Polish and Verification

**Files:**
- Modify: Various component files

**Step 1: Visual comparison against Figma screenshots**

Compare each section side-by-side with Figma:
- [ ] Navbar spacing and button styles
- [ ] Hero headline size and tracking
- [ ] Logo sizes and spacing
- [ ] Card border radius and padding
- [ ] Dark section typography
- [ ] FAQ accordion behavior
- [ ] Footer layout and wordmark
- [ ] Mobile layout

**Step 2: Fix any visual discrepancies**

**Step 3: Run build to check for errors**

Run: `npm run build`
Expected: Successful build with no errors

**Step 4: Final commit**

```bash
git commit -m "feat: final visual polish and build verification"
```

---

## Asset URL Reference (from Figma MCP — expire in 7 days)

### Company Logos
- Armstrong: https://www.figma.com/api/mcp/asset/aec0de8c-baa9-4d89-97dc-209327f3e516
- LEAF: https://www.figma.com/api/mcp/asset/146c7d7f-259f-4853-9d82-6108aaed4ace
- kiuub: https://www.figma.com/api/mcp/asset/6a7976c0-999a-42ed-8584-fd662b1e6c86
- Growni: https://www.figma.com/api/mcp/asset/3e3286a3-8694-4c2a-9fb3-2e17a25b4536
- Dasato: https://www.figma.com/api/mcp/asset/f21aee3a-a828-4b4b-8da3-74300f627656
- JAS: https://www.figma.com/api/mcp/asset/84932695-3ebf-4931-b2aa-8fbbc457c888
- Kickresume: https://www.figma.com/api/mcp/asset/4a38179f-1773-4961-89f9-82fb86398c9b

### Social Icons
- Instagram: https://www.figma.com/api/mcp/asset/e5b88134-23fd-4e4d-915a-8812bc450df7
- TikTok: https://www.figma.com/api/mcp/asset/5b7588c3-be5c-4dbe-9648-f6baa8e254e4
- YouTube: https://www.figma.com/api/mcp/asset/0981eaa8-013a-4673-b107-f9f35c00b90b
- Facebook: https://www.figma.com/api/mcp/asset/a7163d3d-9f5c-4e60-9e81-55a94cbee37b
- LinkedIn: https://www.figma.com/api/mcp/asset/8e4edce4-c0d7-412b-ab0c-6bb2f114dcdf

### Wibo Branding
- Logo: https://www.figma.com/api/mcp/asset/359e264a-6f24-48ca-9d01-0d4e4ec37c8f
- Wordmark: https://www.figma.com/api/mcp/asset/00c71141-88ed-4cfc-8875-c3ad915b00a1

### UI Icons
- Chevron down: https://www.figma.com/api/mcp/asset/e47d57a0-6b85-4cfc-bd18-64e908cbf50d
- Chevron up: https://www.figma.com/api/mcp/asset/eb273fcf-0ac5-4f5f-8cb9-66ebc6dce91b
- Arrow up: https://www.figma.com/api/mcp/asset/9b8714b5-5fe9-49a2-8383-c1d34cc98385
- Globe: https://www.figma.com/api/mcp/asset/48c2afd1-ed68-4a07-95b4-b6393ffec386
- Login icon: https://www.figma.com/api/mcp/asset/2a9e3663-6d2d-4567-be31-9e70f122e4f8
- Send icon: https://www.figma.com/api/mcp/asset/57c0a415-4eea-49b1-bd81-b9271fe19511

### Other
- Avatar (Peter Marek): https://www.figma.com/api/mcp/asset/321c99b1-5ff5-433f-9719-5bd2ae024de5
- Sparring logo: https://www.figma.com/api/mcp/asset/195fe65e-1bcb-4ec0-a456-68e57eeac5d3 (mask), https://www.figma.com/api/mcp/asset/ceab4eb1-f232-4f7c-84f6-b4ca50de36a7 (fill)
- Otion logo vectors: multiple vector parts (use combined SVG export if possible)

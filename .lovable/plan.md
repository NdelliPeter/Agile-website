# AGILE — Bilingual Audit & Advisory Marketing Site

A static, content-driven marketing site built on TanStack Start. Editorial direction inspired by senderoconsulting.com (large display type, generous whitespace, full-bleed photographic hero, hairline-divided sections instead of visible card chrome), adapted to AGILE's teal + espresso + cream identity with full light/dark mode and a polished mobile experience.

## Visual direction

- **Header**: floating pill nav, modestly sized — roughly 56–64px tall on desktop, slightly tighter on mobile. Contains logo (left), nav (center), EN/FR + theme toggle + "Request a Consultation" CTA (right). Collapses to a hamburger drawer on small screens.
- **Cards**: avoided. Sections are built from typography, hairline rules (`--brand-border`), generous spacing, and quiet hover states. Service "cards" become numbered editorial rows; industries are a typographic list with anchor jumps; testimonials are pull-quotes with no surrounding box.
- **Imagery**: woven throughout but never decorative-only. Each photo earns its place:
  - Hero: full-bleed photograph of Douala / CEMAC business district with a soft espresso gradient for headline legibility.
  - About → founder + team grid uses real photographic portraits (empty slots stay quietly hidden).
  - Each Service detail page opens with a single wide editorial image tied to its theme (audit, agro, risk, performance, heritage, human capital).
  - Each Industry section anchors to a small inline image of its sector (banking towers, agro fields, etc.).
  - Insights articles get one cover image each.
  - Contact hero gets a calm exterior/cityscape shot.
  - All generated with the image tool, optimized, lazy-loaded, with descriptive alt text.
- **Process pipelines**: where the content naturally describes a sequence, render a horizontal pipeline graphic (numbered nodes connected by hairline rules + arrow glyphs). Used on:
  - Home → "How we work" 4-step engagement pipeline (Discover → Diagnose → Deliver → Sustain).
  - Each Service detail → small 3–5 step delivery pipeline above the deliverables list.
  - About → milestones timeline rendered as a vertical pipeline.
- **Logos**: three brand marks uploaded — used contextually so the mark always reads cleanly:
  - `wHITEaGILE.png` (full circular mark with wordmark, light background) → header on light mode, footer on dark mode, About founder section.
  - `BLACKaGILE.png` (symbol only, no circle) → small favicon / inline accents.
  - `GREYaGILE.png` (muted symbol) → watermark uses (section dividers, faint backgrounds).
  - Light/dark mode swaps automatically via a small `<BrandMark>` component reading the active theme.
  - All three uploaded via `lovable-assets` so they stay off the repo.

## Theming (design tokens)

In `src/styles.css` using Tailwind v4 `@theme`:
- `--brand-primary` `#50908C`, `--brand-primary-hover` `#3F7370`, `--brand-primary-tint` `#E4EDEC`, `--brand-ink` `#392F25`, `--brand-bg` `#F6F6F6`, `--brand-surface` `#FFFFFF`, `--brand-muted` `#8A8178`, `--brand-border` `#E4E2DD`.
- `.dark` overrides: bg `#1F1A14`, surface `#2A241C`, ink cream, border `#3A3229`, primary lifted to `#6FB0AC`.
- Mapped via `@theme inline` onto shadcn token names so primitives inherit automatically.
- Typography: Space Grotesk (display) + Inter (body), loaded via `<link>` in the root route head.

## Information architecture

```
/                          home
/about                     about
/services                  services overview
/services/$serviceKey      services detail (audit | agro | risk | performance | heritage | humanCapital)
/industries                industries (single page with anchor sections per sector)
/insights                  insights
/contact                   contact
```

Each route's `head()` sets locale-aware title + meta description from `meta.*`. Root layout renders Header, `<Outlet />`, Footer.

## Content & i18n

- `react-i18next` + `i18next`, both JSON bundles imported at `src/i18n/index.ts`. Default `en`, session-only language state (no localStorage).
- All copy comes from `t('…')`; no string literals in JSX.

## Component plan (`src/components/`)

- `Header.tsx` — floating pill nav, restrained sizing, mobile drawer.
- `Footer.tsx` — tagline, nav columns, **social icons** (LinkedIn, X/Twitter, Facebook, Instagram — Lucide icons, hairline-bordered round buttons, configurable URLs sourced from `footer.social.*` keys we'll add to both JSON files), copyright, privacy/terms.
- `BrandMark.tsx` — picks the correct logo asset based on theme + variant.
- `Hero.tsx` — full-bleed image, oversized headline, dual CTA.
- `SectionHeading.tsx` — eyebrow + display heading.
- `ServiceRow.tsx` — numbered editorial row.
- `Pipeline.tsx` — reusable horizontal/vertical numbered pipeline graphic.
- `IndustryAnchorList.tsx` + `IndustrySection.tsx`.
- `StatBlock.tsx`, `Testimonial.tsx` (pull-quote, no box).
- `FAQAccordion.tsx` (`<details>`-based, hairline dividers).
- `ContactForm.tsx` — controlled, no native `<form>`, thank-you state.
- `LanguageToggle.tsx`, `ThemeToggle.tsx`.

## Empty-state handling

Empty arrays/strings in the JSON (testimonials, team, case studies, blank timeline years, missing phone/email, missing social URLs) render a muted "Coming soon" note or are hidden — never invented.

## Out of scope

No CMS, auth, DB, payments, no live blog backend, no Lovable Cloud.

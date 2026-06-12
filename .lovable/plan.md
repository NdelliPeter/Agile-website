
# Forensic Design Review — AGILE

I went through Home, Services index, a Service detail page (Audit), Our Team, and the global chrome (Header / Footer / typography / tokens). The foundation is solid — restrained palette, serif/sans pairing, regional positioning — but the execution sits at "good agency template," not Deloitte / EY / Bain / Brunswick territory. Below is the gap analysis, grouped by severity, followed by a focused fix plan.

---

## A. Critical issues (break the "world-class" perception)

1. **No motion design language.** Pages render flat — no scroll reveals, no easing, no parallax, no cursor states, no hover micro-interactions on links/cards. Enterprise-premium sites (McKinsey, Brunswick, Accenture Song) all use restrained motion as a *signature*. Right now the site feels like static HTML from 2014.
2. **Hero is generic.** A stock skyline + centered serif headline + two pill buttons. No proprietary visual asset (data viz, map, mark animation, kinetic type), no eyebrow rhythm, no scroll affordance. The hero must do 80% of the brand work — currently it does ~20%.
3. **Pipeline component is the worst offender.** Asymmetric leaf-shaped teal cards on a diagonal track look like a 2018 Dribbble shot, not enterprise governance. Clashes with the editorial serif tone everywhere else. This single component undermines credibility on the home page *and* every service page.
4. **Service-detail pages are monotone.** After your centralization pass, every section is now `eyebrow → serif h2 → centered paragraph → hairline`. Six identical rhythms stacked = visual fatigue. Needs at least one asymmetric / full-bleed / data-driven moment per page to breathe.
5. **CTA band is heavy and dated.** Big solid teal block with mismatched corner radii (`1px 35px 1px 35px`) reads as a 2019 trend artifact. Premium brands use quieter CTAs (hairline, inverted card, or full-bleed image with anchored copy).
6. **Team page is a 3-column portrait grid with a lonely 4th card.** Orphan row + uniform crops + no hierarchy between Founder and others. Enterprise team pages stagger (editorial), or use horizontal scroll, or rank by seniority with size.

## B. High-impact polish gaps

7. **Typographic scale is too narrow.** Hero, section H2 and CTA H2 all land near the same `display-lg` size. No "hero moment" — the eye has nowhere to land first. Need a true `display-2xl` (clamp ~3.5 → 6rem) reserved for the homepage hero and one anchor moment per page.
8. **Body copy is grey-on-cream at one weight everywhere.** No lead paragraphs, no pull quotes, no drop caps, no inline accent words. Editorial brands (Stripe, Linear, Pitch, Brunswick) vary weight/size within paragraphs to create rhythm.
9. **Cards/sections lack depth language.** No shadow tokens, no layered surfaces, no subtle grain/noise, no inner hairlines. Everything is flat fills — reads as "Tailwind default" not "designed system."
10. **No data visualization presence.** A CEMAC audit/risk firm with zero charts, maps with interactivity, KPI counters animating, or sector breakdowns is leaving authority on the table. The Africa map is static — should hover-highlight countries, surface stats, and animate on view.
11. **ServiceWheel is the only "wow" element and it's underused.** Lives once on home, never reappears as a motif. Premium brands repeat 1-2 signature shapes across the site as a wordless logo system.
12. **No imagery system.** Stock photos vary in tone/treatment between hero, service detail, team. Need a unified treatment (duotone teal+espresso, consistent grain, consistent crop ratios).
13. **Footer is generic.** Two columns of links + address + 2 social icons. No newsletter, no "Offices" map dots, no annual report / credentials strip, no language/region selector at the bottom (only in header).
14. **No social proof scaffolding.** Testimonials block says "Coming soon." This must either ship with placeholder logos / quotes from public CEMAC institutions, or be removed entirely until ready — empty proof reads as "no clients."

## C. Detail-level craft issues

15. Header pill `bg-card border-b shadow` is fine on light, but on dark it picks up too much elevation — feels disconnected from the page. Should be `backdrop-blur` with translucent surface.
16. Eyebrow color is brand-teal everywhere — overused. Reserve teal eyebrows for primary CTAs; use muted-foreground uppercase for section eyebrows so the teal *means* something when it appears.
17. `Fraunces` is set with `opsz: 144` at all sizes — at body H3 sizes this makes letterforms look stretched. Need opsz tied to actual rendered size (smaller opsz at smaller px).
18. Buttons: only one shape (rounded-full primary). No secondary/tertiary/text-arrow variant in the system. Enterprise sites need at least 3 button registers.
19. Decorative grid lines on service hero are too faint and only appear in one spot — should be a recurring system motif (consistent 8-col overlay rule).
20. No `scroll-margin-top` on anchored sections → smooth scroll lands under the fixed header.
21. Service detail H1 is forced into two lines via `(Securing Information)` — the parenthetical kills the headline. Strip parentheticals or convert into a tagline below.
22. No favicon system check / OG image / Twitter card per route — affects "world-class" share appearance, not just on-page.
23. Map area on home: section feels narrow on desktop; map crops oddly; legend missing.
24. Insights page is presumably a list of cards (not reviewed) — needs editorial layout, not card grid, to feel like a real research practice.

---

## Fix plan (phased, so you can approve in tranches)

### Phase 1 — Foundation (typography, motion, tokens) — ~1 pass
- Add `display-2xl` and `display-3xl` utilities; reserve for hero anchors.
- Add `lead` and `kicker` body utilities (larger lead paragraph, small-caps kicker).
- Add shadow tokens: `--shadow-card`, `--shadow-elevated`, `--shadow-glow-primary`.
- Add a noise/grain SVG overlay token usable on hero sections.
- Install `motion` (Framer Motion) and create a `<Reveal>` primitive (fade+rise on intersection) used site-wide for section entrances.
- Fix Fraunces `opsz` to scale with size (utilities per scale).
- Add `scroll-margin-top` global rule for `[id]` targets.
- Tighten Header on dark: translucent + backdrop-blur; thinner border.
- Eyebrow rule: muted-uppercase default; teal only for "live"/CTA contexts.

### Phase 2 — Hero & signature moments
- Rebuild home hero: full-bleed cinematic image with duotone treatment, animated split serif headline (per-word reveal), kinetic eyebrow ticker (regulatory frameworks scrolling), scroll cue, and a small live "AGILE INDEX" stat panel anchored bottom-right (auditable institutions / frameworks / sectors — already in the stat strip, just promoted).
- Rebuild service-detail hero: editorial half-image / half-type split, large numeric service index (01–06) as a typographic anchor, no parentheticals in H1.

### Phase 3 — Pipeline + CTA rebuild
- Replace `Pipeline` leaf cards with a clean horizontal stepper: numeric markers, thin connecting rule, copy below, hover state reveals an extra line of detail. Same component reused on home and every service page.
- Replace CTA band: full-bleed image with anchored serif copy and a thin underline link (no big rounded teal block), OR a quiet two-column hairline card on cream.

### Phase 4 — Team page redesign
- Editorial roster: large featured Founder row (asymmetric: portrait left, long-form bio + credentials right, signature image), then a 3-up secondary row with smaller portraits, then space for "Advisors" small list. No orphan 4th card.
- Add hover state revealing role detail / LinkedIn.

### Phase 5 — Africa map + data presence
- Make `AfricaMap` interactive: hover country → tooltip with stat; highlight CEMAC bloc on load with subtle pulse; legend + source line.
- Add one animated KPI counter strip with `IntersectionObserver` count-up.

### Phase 6 — Imagery + system motifs
- Apply unified duotone treatment to all photography (teal shadows, cream highlights).
- Re-export team portraits at one consistent crop + treatment.
- Establish the AGILE "wheel" mark as a recurring background motif at 4% opacity on section dividers.

### Phase 7 — Footer + chrome
- Expand footer: 4 columns (Services / Company / Resources / Contact) + newsletter row + offices strip + credentials line ("Member of …").
- Add per-route OG images derived from hero asset.

### Phase 8 — Insights + Industries pass
- Convert Insights from card grid to editorial layout (1 featured + 2 secondary + chronological list).
- Industries: add per-sector mini-stats and a "what we deliver here" link per card.

---

## What I need from you

Tell me which phases to ship and in what order. My recommendation is:

**Tranche 1:** Phase 1 + Phase 3 (foundation + kill the Pipeline + fix CTA). This single tranche removes the biggest credibility drags.

**Tranche 2:** Phase 2 + Phase 4 (hero moments + team).

**Tranche 3:** Phase 5 + 6 + 7 + 8 (depth, polish, scale).

Approve a tranche (or pick specific items) and I'll execute.

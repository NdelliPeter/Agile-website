Reorder `src/routes/about.index.tsx` so the dark "The AGILE mark / A circle for trust" section becomes the first section on the About page.

## Changes

1. In `src/routes/about.index.tsx`, move the entire `<section>` containing the brand signature (animated logo + "A circle for trust. A spark for progress.") above the current opening `SectionHeading` hero section.
2. Keep the section's internal markup, animations, and styles unchanged.
3. Order after change:
   - The AGILE mark (dark, animated) — FIRST
   - About header (eyebrow + title + intro)
   - Our story
   - Vision / Mission
   - Values
   - Timeline
   - Team CTA
   - Social responsibility
4. Adjust top padding of the mark section if needed so it sits flush under the header (no extra page top spacing above it).

No other files affected.
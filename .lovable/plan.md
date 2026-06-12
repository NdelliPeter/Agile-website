Fix the collapsed image column in `src/routes/services.$serviceKey.tsx`:

1. Change the image-column wrapper from `<div className="md:justify-self-end">` to `<div className="w-full max-w-sm md:justify-self-end">` so the slideshow has a width to fill.
2. Remove `max-w-sm` from `ServiceSlideshow`'s root container (keep `w-full`).

No other changes.
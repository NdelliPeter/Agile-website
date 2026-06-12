## Goal
Close the horizontal gap between the slideshow image and the paragraph in the "Why institutions choose us" section so the text sits near the picture.

## Change
File: `src/routes/services.$serviceKey.tsx`

1. In the grid wrapper (currently `grid-cols-1 ... md:grid-cols-2 md:gap-14`), reduce the column gap from `gap-10 md:gap-14` to `gap-6 md:gap-8`.
2. On the right-hand text column, remove the left padding (`md:pl-4 lg:pl-8`) that was pushing the text away from the image.
3. Keep the image column constrained (`max-w-sm`) and aligned to the right (`md:justify-self-end`) so the gap visually closes against the text, while text starts at the left of its column (`max-w-prose` retained for readability).

No image removal, no other layout/design changes.
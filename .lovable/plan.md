I’ll make one targeted layout change in `src/routes/services.$serviceKey.tsx`:

1. Keep the image/slideshow wrapper exactly where it is now.
2. Move only the text column left toward the image on desktop by adding a small negative left margin/offset to the text wrapper.
3. Leave mobile layout unchanged so the stacked image/text flow remains clean.
4. Verify the picture is still visible and in the same position, with the text closer to it.